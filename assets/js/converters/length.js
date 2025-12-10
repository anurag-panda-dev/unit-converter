// Length Converter Module

const lengthConverter = {
    name: 'Length',
    icon: '📏',
    description: 'Convert between metric and imperial length units including meters, feet, miles, and more.',
    
    units: {
        // Metric
        'mm': { name: 'Millimeters', toBase: 0.001 },
        'cm': { name: 'Centimeters', toBase: 0.01 },
        'm': { name: 'Meters', toBase: 1 },
        'km': { name: 'Kilometers', toBase: 1000 },
        
        // Imperial
        'in': { name: 'Inches', toBase: 0.0254 },
        'ft': { name: 'Feet', toBase: 0.3048 },
        'yd': { name: 'Yards', toBase: 0.9144 },
        'mi': { name: 'Miles', toBase: 1609.344 },
        
        // Nautical
        'nmi': { name: 'Nautical Miles', toBase: 1852 }
    },
    
    convert: function(value, fromUnit, toUnit) {
        if (!this.units[fromUnit] || !this.units[toUnit]) {
            return null;
        }
        
        // Convert to base unit (meters)
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
