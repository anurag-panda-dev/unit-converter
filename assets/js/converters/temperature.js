// Temperature Converter Module

const temperatureConverter = {
    name: 'Temperature',
    icon: '🌡️',
    description: 'Convert between Celsius, Fahrenheit, and Kelvin temperature scales.',
    
    units: {
        'C': { name: 'Celsius (°C)' },
        'F': { name: 'Fahrenheit (°F)' },
        'K': { name: 'Kelvin (K)' }
    },
    
    convert: function(value, fromUnit, toUnit) {
        if (!this.units[fromUnit] || !this.units[toUnit]) {
            return null;
        }
        
        if (fromUnit === toUnit) {
            return value;
        }
        
        let celsius;
        
        // Convert to Celsius first
        switch(fromUnit) {
            case 'C':
                celsius = value;
                break;
            case 'F':
                celsius = (value - 32) * 5/9;
                break;
            case 'K':
                celsius = value - 273.15;
                break;
        }
        
        // Convert from Celsius to target unit
        switch(toUnit) {
            case 'C':
                return celsius;
            case 'F':
                return (celsius * 9/5) + 32;
            case 'K':
                return celsius + 273.15;
        }
    },
    
    getFormula: function(fromUnit, toUnit) {
        const formulas = {
            'C_F': '°F = (°C × 9/5) + 32',
            'C_K': 'K = °C + 273.15',
            'F_C': '°C = (°F - 32) × 5/9',
            'F_K': 'K = (°F - 32) × 5/9 + 273.15',
            'K_C': '°C = K - 273.15',
            'K_F': '°F = (K - 273.15) × 9/5 + 32'
        };
        
        return formulas[`${fromUnit}_${toUnit}`] || `${toUnit} = ${fromUnit}`;
    }
};
