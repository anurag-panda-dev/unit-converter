// Volume Converter Module

const volumeConverter = {
    name: 'Volume',
    icon: '🧪',
    description: 'Convert between liquid and dry volume measurements.',
    
    units: {
        // Metric
        'ml': { name: 'Milliliters', toBase: 0.001 },
        'l': { name: 'Liters', toBase: 1 },
        'cm3': { name: 'Cubic Centimeters', toBase: 0.001 },
        'm3': { name: 'Cubic Meters', toBase: 1000 },
        
        // Imperial - Liquid
        'tsp': { name: 'Teaspoons (US)', toBase: 0.00492892 },
        'tbsp': { name: 'Tablespoons (US)', toBase: 0.0147868 },
        'fl_oz': { name: 'Fluid Ounces (US)', toBase: 0.0295735 },
        'cup': { name: 'Cups (US)', toBase: 0.236588 },
        'pint': { name: 'Pints (US)', toBase: 0.473176 },
        'quart': { name: 'Quarts (US)', toBase: 0.946353 },
        'gal': { name: 'Gallons (US)', toBase: 3.78541 },
        
        // Imperial - UK
        'uk_fl_oz': { name: 'Fluid Ounces (UK)', toBase: 0.0284131 },
        'uk_pint': { name: 'Pints (UK)', toBase: 0.568261 },
        'uk_gal': { name: 'Gallons (UK)', toBase: 4.54609 },
        
        // Other
        'in3': { name: 'Cubic Inches', toBase: 0.0163871 },
        'ft3': { name: 'Cubic Feet', toBase: 28.3168 }
    },
    
    convert: function(value, fromUnit, toUnit) {
        if (!this.units[fromUnit] || !this.units[toUnit]) {
            return null;
        }
        
        // Convert to base unit (liters)
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
