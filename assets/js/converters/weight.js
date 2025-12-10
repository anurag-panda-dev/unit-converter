// Weight/Mass Converter Module

const weightConverter = {
    name: 'Weight / Mass',
    icon: '⚖️',
    description: 'Convert between metric and imperial weight units including grams, pounds, ounces, and tons.',
    
    units: {
        // Metric
        'mg': { name: 'Milligrams', toBase: 0.000001 },
        'g': { name: 'Grams', toBase: 0.001 },
        'kg': { name: 'Kilograms', toBase: 1 },
        'metric_ton': { name: 'Metric Tons', toBase: 1000 },
        
        // Imperial
        'oz': { name: 'Ounces', toBase: 0.0283495 },
        'lb': { name: 'Pounds', toBase: 0.453592 },
        'stone': { name: 'Stone', toBase: 6.35029 },
        'ton': { name: 'US Tons', toBase: 907.185 },
        'uk_ton': { name: 'UK Tons', toBase: 1016.05 }
    },
    
    convert: function(value, fromUnit, toUnit) {
        if (!this.units[fromUnit] || !this.units[toUnit]) {
            return null;
        }
        
        // Convert to base unit (kilograms)
        const baseValue = value * this.units[fromUnit].toBase;
        
        // Convert from base unit to target unit
        const result = baseValue / this.units[toUnit].toBase;
        
        return result;
    },
    
    getFormula: function(fromUnit, toUnit) {
        const fromToBase = this.units[fromUnit].toBase;
        const toToBase = this.units[toUnit].toBase;
        const conversionFactor = fromToBase / toToBase;
        
        return `${toUnit} = ${fromUnit} × ${conversionFactor.toExponential(4)}`;
    }
};
