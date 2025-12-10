// Speed Converter Module

const speedConverter = {
    name: 'Speed',
    icon: '🚀',
    description: 'Convert between different speed units for velocity measurements.',
    
    units: {
        'mps': { name: 'Meters/Second (m/s)', toBase: 1 },
        'kph': { name: 'Kilometers/Hour (km/h)', toBase: 0.277778 },
        'mph': { name: 'Miles/Hour (mph)', toBase: 0.44704 },
        'fps': { name: 'Feet/Second (ft/s)', toBase: 0.3048 },
        'knot': { name: 'Knots', toBase: 0.514444 },
        'mach': { name: 'Mach (at sea level)', toBase: 343 }
    },
    
    convert: function(value, fromUnit, toUnit) {
        if (!this.units[fromUnit] || !this.units[toUnit]) {
            return null;
        }
        
        // Convert to base unit (meters per second)
        const baseValue = value * this.units[fromUnit].toBase;
        
        // Convert from base unit to target unit
        const result = baseValue / this.units[toUnit].toBase;
        
        return result;
    },
    
    getFormula: function(fromUnit, toUnit) {
        const fromToBase = this.units[fromUnit].toBase;
        const toToBase = this.units[toUnit].toBase;
        const conversionFactor = fromToBase / toToBase;
        
        return `${toUnit} = ${fromUnit} × ${conversionFactor.toFixed(6)}`;
    }
};
