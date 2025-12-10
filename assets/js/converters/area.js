// Area Converter Module

const areaConverter = {
    name: 'Area',
    icon: '📐',
    description: 'Convert between different area measurements for land and surfaces.',
    
    units: {
        // Metric
        'mm2': { name: 'Square Millimeters', toBase: 0.000001 },
        'cm2': { name: 'Square Centimeters', toBase: 0.0001 },
        'm2': { name: 'Square Meters', toBase: 1 },
        'km2': { name: 'Square Kilometers', toBase: 1000000 },
        'ha': { name: 'Hectares', toBase: 10000 },
        
        // Imperial
        'in2': { name: 'Square Inches', toBase: 0.00064516 },
        'ft2': { name: 'Square Feet', toBase: 0.092903 },
        'yd2': { name: 'Square Yards', toBase: 0.836127 },
        'acre': { name: 'Acres', toBase: 4046.86 },
        'mi2': { name: 'Square Miles', toBase: 2589988 }
    },
    
    convert: function(value, fromUnit, toUnit) {
        if (!this.units[fromUnit] || !this.units[toUnit]) {
            return null;
        }
        
        // Convert to base unit (square meters)
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
