// Digital Storage Converter Module

const digitalConverter = {
    name: 'Digital Storage',
    icon: '💾',
    description: 'Convert between data storage units from bytes to terabytes.',
    
    units: {
        // Base 2 (Binary)
        'B': { name: 'Bytes', toBase: 1 },
        'KB': { name: 'Kilobytes', toBase: 1024 },
        'MB': { name: 'Megabytes', toBase: 1048576 },
        'GB': { name: 'Gigabytes', toBase: 1073741824 },
        'TB': { name: 'Terabytes', toBase: 1099511627776 },
        'PB': { name: 'Petabytes', toBase: 1125899906842624 },
        
        // Base 10 (Decimal)
        'kB': { name: 'Kilobytes (1000)', toBase: 1000 },
        'mB': { name: 'Megabytes (1000²)', toBase: 1000000 },
        'gB': { name: 'Gigabytes (1000³)', toBase: 1000000000 },
        'tB': { name: 'Terabytes (1000⁴)', toBase: 1000000000000 },
        
        // Bits
        'bit': { name: 'Bits', toBase: 0.125 },
        'Kbit': { name: 'Kilobits', toBase: 128 },
        'Mbit': { name: 'Megabits', toBase: 131072 },
        'Gbit': { name: 'Gigabits', toBase: 134217728 }
    },
    
    convert: function(value, fromUnit, toUnit) {
        if (!this.units[fromUnit] || !this.units[toUnit]) {
            return null;
        }
        
        // Convert to base unit (bytes)
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
