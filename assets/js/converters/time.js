// Time Converter Module

const timeConverter = {
    name: 'Time',
    icon: '⏱️',
    description: 'Convert between different time units from milliseconds to years.',
    
    units: {
        'ms': { name: 'Milliseconds', toBase: 0.001 },
        's': { name: 'Seconds', toBase: 1 },
        'min': { name: 'Minutes', toBase: 60 },
        'hr': { name: 'Hours', toBase: 3600 },
        'day': { name: 'Days', toBase: 86400 },
        'week': { name: 'Weeks', toBase: 604800 },
        'month': { name: 'Months (avg 30.44 days)', toBase: 2629800 },
        'year': { name: 'Years (365.25 days)', toBase: 31557600 },
        'decade': { name: 'Decades', toBase: 315576000 }
    },
    
    convert: function(value, fromUnit, toUnit) {
        if (!this.units[fromUnit] || !this.units[toUnit]) {
            return null;
        }
        
        // Convert to base unit (seconds)
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
