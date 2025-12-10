// Energy Converter Module

const energyConverter = {
    name: 'Energy',
    icon: '⚡',
    description: 'Convert between different energy units used in physics and nutrition.',
    
    units: {
        // SI Units
        'J': { name: 'Joules', toBase: 1 },
        'kJ': { name: 'Kilojoules', toBase: 1000 },
        'MJ': { name: 'Megajoules', toBase: 1000000 },
        'GJ': { name: 'Gigajoules', toBase: 1000000000 },
        
        // Calories
        'cal': { name: 'Calories', toBase: 4.184 },
        'kcal': { name: 'Kilocalories', toBase: 4184 },
        
        // Electrical
        'Wh': { name: 'Watt-hours', toBase: 3600 },
        'kWh': { name: 'Kilowatt-hours', toBase: 3600000 },
        'MWh': { name: 'Megawatt-hours', toBase: 3600000000 },
        
        // Imperial
        'BTU': { name: 'British Thermal Units', toBase: 1055.06 },
        'therm': { name: 'Therms', toBase: 105506000 },
        
        // Other
        'eV': { name: 'Electron Volts', toBase: 1.60218e-19 },
        'ft_lb': { name: 'Foot-pounds', toBase: 1.35582 }
    },
    
    convert: function(value, fromUnit, toUnit) {
        if (!this.units[fromUnit] || !this.units[toUnit]) {
            return null;
        }
        
        // Convert to base unit (joules)
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
