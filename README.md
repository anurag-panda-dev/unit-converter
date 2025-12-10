# 🌐 Universal Unit Converter

A fast, modern, and fully responsive web application for converting between various units of measurement. Built with pure HTML, CSS, and JavaScript with no external dependencies.

![Unit Converter Preview](https://img.shields.io/badge/Status-Complete-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🔢 Multiple Converters

- **Length** - Metric and imperial units (m, cm, km, in, ft, yd, mi, etc.)
- **Weight/Mass** - Grams, kilograms, pounds, ounces, tons
- **Temperature** - Celsius, Fahrenheit, Kelvin
- **Speed** - m/s, km/h, mph, knots, mach
- **Time** - Seconds, minutes, hours, days, weeks, months, years
- **Volume** - Liters, milliliters, gallons, cups, cubic meters
- **Area** - Square meters, feet, kilometers, acres, hectares
- **Digital Storage** - Bytes, KB, MB, GB, TB, bits
- **Energy** - Joules, calories, kilowatt-hours, BTU

### 🎯 Key Features

- ⚡ **Instant Conversion** - Real-time results as you type
- 🔍 **Smart Search** - Quickly find any converter with keyword search
- 🌙 **Dark/Light Theme** - Toggle between themes (saves preference)
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 📌 **Recently Used** - Quick access to your most-used converters
- 🔄 **Swap Units** - One-click unit swapping
- 📐 **Formula Display** - See the conversion formulas
- ⌨️ **Keyboard Shortcuts** - Ctrl/Cmd + K to focus search, Escape to close
- 💾 **Local Storage** - Remembers your theme and recent converters
- 🎨 **Smooth Animations** - Polished UI with smooth transitions

## 🚀 Getting Started

### Installation

1. **Clone or download** this repository:
   ```bash
   git clone https://github.com/anurag-panda-dev/unit-converter.git
   ```

2. **Open the project** - No build process required!

3. **Launch** `index.html` in your browser

### No Dependencies Required

This project uses **zero external libraries** - just pure HTML, CSS, and JavaScript!

## 📁 Project Structure

```
unit-converter/
│
├── index.html                      # Main HTML file
│
├── assets/
│   ├── css/
│   │   ├── main.css               # Core styles, layout, header
│   │   └── converters.css         # Modal and converter interface styles
│   │
│   └── js/
│       ├── main.js                # App initialization and logic
│       ├── search.js              # Search functionality
│       ├── theme.js               # Dark/light theme toggle
│       │
│       └── converters/
│           ├── length.js          # Length converter module
│           ├── weight.js          # Weight converter module
│           ├── temperature.js     # Temperature converter module
│           ├── speed.js           # Speed converter module
│           ├── time.js            # Time converter module
│           ├── volume.js          # Volume converter module
│           ├── area.js            # Area converter module
│           ├── digital.js         # Digital storage converter module
│           └── energy.js          # Energy converter module
│
├── README.md                       # This file
└── STEP-DELIVERABLES.md           # Project requirements
```

## 🎨 Usage

### Basic Conversion

1. Click on any converter card (e.g., "Length")
2. Enter a value in the "From" field
3. Select your source unit from the dropdown
4. Select your target unit in the "To" dropdown
5. See the instant result!

### Using Search

- Click the search bar or press **Ctrl+K** (Cmd+K on Mac)
- Type keywords like "meter", "temperature", "speed"
- Click on search results to open that converter
- Press **Escape** to clear search

### Swap Units

- Click the **⇄** button between input fields
- Instantly swaps the from/to units and values

### Theme Toggle

- Click the **🌙/☀️** icon in the header
- Toggle between dark and light themes
- Your preference is automatically saved

## 🔧 Technical Details

### Architecture

- **Modular Design** - Each converter is an independent module
- **Object-Oriented** - Uses ES6 classes for app structure
- **Event-Driven** - Efficient event handling with delegation
- **Base Unit System** - All conversions use a base unit for accuracy

### Conversion Logic

Each converter uses a **base unit approach**:

1. Convert input value to base unit (e.g., meters for length)
2. Convert from base unit to target unit
3. Format result appropriately

Example from `length.js`:
```javascript
convert: function(value, fromUnit, toUnit) {
    const baseValue = value * this.units[fromUnit].toBase;
    const result = baseValue / this.units[toUnit].toBase;
    return result;
}
```

### Performance Optimizations

- **Debounced Search** - 200ms delay to avoid excessive filtering
- **CSS Transitions** - Hardware-accelerated animations
- **Minimal DOM Updates** - Efficient rendering
- **LocalStorage Caching** - Theme and recent converters

### Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Features Roadmap

Implemented:
- ✅ 9 converter types
- ✅ Search functionality
- ✅ Dark/light theme
- ✅ Recently used converters
- ✅ Responsive design
- ✅ Formula display
- ✅ Keyboard shortcuts
- ✅ Unit swapping

Future enhancements:
- ⬜ Currency converter (API integration)
- ⬜ Conversion history
- ⬜ Favorites/bookmarks
- ⬜ Voice input
- ⬜ PWA support (offline mode)
- ⬜ Share results
- ⬜ Print conversion tables

## 🧪 Testing

### Manual Testing Checklist

- [ ] All converters produce accurate results
- [ ] Search finds all relevant converters
- [ ] Theme toggle works and persists
- [ ] Responsive design on mobile/tablet
- [ ] Recently used section updates correctly
- [ ] Swap button works properly
- [ ] Formulas display correctly
- [ ] Keyboard shortcuts work (Ctrl+K, Escape)
- [ ] Modal closes properly
- [ ] All animations are smooth

### Test Conversions

**Length:**
- 1 meter = 100 centimeters ✓
- 1 kilometer = 0.621371 miles ✓
- 1 inch = 2.54 centimeters ✓

**Temperature:**
- 0°C = 32°F = 273.15K ✓
- 100°C = 212°F = 373.15K ✓

**Digital Storage:**
- 1 MB = 1024 KB = 1,048,576 Bytes ✓
- 1 GB = 1024 MB ✓

## 📝 Code Quality

- **Clean Code** - Well-commented and readable
- **DRY Principles** - Reusable converter pattern
- **Separation of Concerns** - Modular file structure
- **No Global Pollution** - Encapsulated in classes/objects
- **Semantic HTML** - Accessible markup
- **CSS Variables** - Maintainable theming

## 🎓 Learning Resources

This project demonstrates:
- DOM manipulation and event handling
- CSS Grid and Flexbox layouts
- CSS custom properties (variables)
- LocalStorage API
- ES6+ JavaScript features (classes, arrow functions, template literals)
- Responsive design principles
- User experience design

## 📄 License

This project is free to use for educational and personal purposes.

## 👨‍💻 Author

Created with ❤️ for Akriti Phase 3 Project

## 🤝 Contributing

Contributions welcome! To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Check existing converters for examples
- Review the code comments

## 🎉 Acknowledgments

- Icons: Unicode emoji (no external dependencies)
- Font: System fonts for optimal performance
- Inspiration: Modern web design best practices

---

**Happy Converting! ⚡**
