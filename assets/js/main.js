// Main Application Logic

class UnitConverterApp {
    constructor() {
        this.converters = {
            length: lengthConverter,
            weight: weightConverter,
            temperature: temperatureConverter,
            speed: speedConverter,
            time: timeConverter,
            volume: volumeConverter,
            area: areaConverter,
            digital: digitalConverter,
            energy: energyConverter
        };
        
        this.currentConverter = null;
        this.modal = document.getElementById('converterModal');
        this.modalClose = document.getElementById('modalClose');
        this.recentlyUsed = this.loadRecentlyUsed();
        
        this.initEventListeners();
        this.displayRecentlyUsed();
    }
    
    initEventListeners() {
        // Converter card clicks
        document.querySelectorAll('.converter-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const converterType = e.currentTarget.dataset.converter;
                this.openConverter(converterType);
            });
        });
        
        // Modal close
        this.modalClose.addEventListener('click', () => this.closeModal());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
        
        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
        
        // Input change for conversion
        document.getElementById('fromValue').addEventListener('input', () => this.performConversion());
        document.getElementById('fromUnit').addEventListener('change', () => this.performConversion());
        document.getElementById('toUnit').addEventListener('change', () => this.performConversion());
        
        // Swap button
        document.getElementById('swapButton').addEventListener('click', () => this.swapUnits());
    }
    
    openConverter(type) {
        const converter = this.converters[type];
        if (!converter) return;
        
        this.currentConverter = { type, converter };
        
        // Update modal content
        document.getElementById('modalIcon').textContent = converter.icon;
        document.getElementById('modalTitle').textContent = converter.name;
        document.getElementById('modalDescription').textContent = converter.description;
        
        // Populate unit dropdowns
        this.populateUnitDropdowns(converter.units);
        
        // Clear inputs
        document.getElementById('fromValue').value = '';
        document.getElementById('toValue').value = '';
        
        // Show modal
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus on input
        setTimeout(() => {
            document.getElementById('fromValue').focus();
        }, 100);
        
        // Add to recently used
        this.addToRecentlyUsed(type);
    }
    
    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        document.getElementById('formulaInfo').style.display = 'none';
    }
    
    populateUnitDropdowns(units) {
        const fromUnit = document.getElementById('fromUnit');
        const toUnit = document.getElementById('toUnit');
        
        fromUnit.innerHTML = '';
        toUnit.innerHTML = '';
        
        Object.keys(units).forEach((unitKey, index) => {
            const unit = units[unitKey];
            
            const fromOption = document.createElement('option');
            fromOption.value = unitKey;
            fromOption.textContent = unit.name;
            fromUnit.appendChild(fromOption);
            
            const toOption = document.createElement('option');
            toOption.value = unitKey;
            toOption.textContent = unit.name;
            toUnit.appendChild(toOption);
            
            // Set default selections (first and second unit)
            if (index === 1) {
                toUnit.value = unitKey;
            }
        });
    }
    
    performConversion() {
        const fromValue = parseFloat(document.getElementById('fromValue').value);
        const fromUnit = document.getElementById('fromUnit').value;
        const toUnit = document.getElementById('toUnit').value;
        
        if (isNaN(fromValue) || !this.currentConverter) {
            document.getElementById('toValue').value = '';
            return;
        }
        
        const result = this.currentConverter.converter.convert(fromValue, fromUnit, toUnit);
        
        if (result !== null) {
            // Format result intelligently
            const formattedResult = this.formatResult(result);
            document.getElementById('toValue').value = formattedResult;
            
            // Show formula
            this.displayFormula(fromUnit, toUnit);
            
            // Add pulse animation
            document.getElementById('toValue').classList.add('pulse');
            setTimeout(() => {
                document.getElementById('toValue').classList.remove('pulse');
            }, 300);
        }
    }
    
    formatResult(value) {
        // Handle very small numbers
        if (Math.abs(value) < 0.0001 && value !== 0) {
            return value.toExponential(6);
        }
        
        // Handle very large numbers
        if (Math.abs(value) > 1000000000) {
            return value.toExponential(6);
        }
        
        // Round to appropriate decimal places
        if (Math.abs(value) < 1) {
            return value.toFixed(8).replace(/\.?0+$/, '');
        }
        
        return value.toFixed(6).replace(/\.?0+$/, '');
    }
    
    displayFormula(fromUnit, toUnit) {
        const formulaInfo = document.getElementById('formulaInfo');
        const formulaText = document.getElementById('formulaText');
        
        const formula = this.currentConverter.converter.getFormula(fromUnit, toUnit);
        formulaText.textContent = formula;
        formulaInfo.style.display = 'block';
    }
    
    swapUnits() {
        const fromUnit = document.getElementById('fromUnit');
        const toUnit = document.getElementById('toUnit');
        const fromValue = document.getElementById('fromValue');
        const toValue = document.getElementById('toValue');
        
        // Swap unit selections
        const tempUnit = fromUnit.value;
        fromUnit.value = toUnit.value;
        toUnit.value = tempUnit;
        
        // Swap values
        const tempValue = fromValue.value;
        fromValue.value = toValue.value;
        toValue.value = tempValue;
        
        // Recalculate
        this.performConversion();
    }
    
    addToRecentlyUsed(type) {
        // Remove if already exists
        this.recentlyUsed = this.recentlyUsed.filter(item => item !== type);
        
        // Add to beginning
        this.recentlyUsed.unshift(type);
        
        // Keep only last 3
        this.recentlyUsed = this.recentlyUsed.slice(0, 3);
        
        // Save to localStorage
        localStorage.setItem('unit-converter-recent', JSON.stringify(this.recentlyUsed));
        
        // Update display
        this.displayRecentlyUsed();
    }
    
    loadRecentlyUsed() {
        const saved = localStorage.getItem('unit-converter-recent');
        return saved ? JSON.parse(saved) : [];
    }
    
    displayRecentlyUsed() {
        const recentlyUsedSection = document.getElementById('recentlyUsed');
        const recentGrid = document.getElementById('recentGrid');
        
        if (this.recentlyUsed.length === 0) {
            recentlyUsedSection.style.display = 'none';
            return;
        }
        
        recentlyUsedSection.style.display = 'block';
        recentGrid.innerHTML = '';
        
        this.recentlyUsed.forEach(type => {
            const converter = this.converters[type];
            if (!converter) return;
            
            // Find original card to clone
            const originalCard = document.querySelector(`[data-converter="${type}"]`);
            if (originalCard) {
                const clone = originalCard.cloneNode(true);
                clone.addEventListener('click', () => this.openConverter(type));
                recentGrid.appendChild(clone);
            }
        });
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new UnitConverterApp();
});
