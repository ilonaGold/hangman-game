# 🎮 Hangman Game

A modern, interactive Hangman game built with vanilla JavaScript, featuring programming-themed questions and a clean, responsive design.

## 🚀 [Play the Game](https://ilonagold.github.io/hangman-game/)

## ✨ Features

- **Dynamic UI Generation**: Game interface created programmatically with JavaScript
- **Canvas-based Drawing**: Hangman figure drawn progressively using HTML5 Canvas
- **Dual Input Support**: Virtual on-screen keyboard + physical keyboard support
- **Programming Hints**: Questions focused on web development and programming concepts
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Game State Management**: Tracks guesses, prevents duplicates, manages win/loss conditions
- **Modal System**: Elegant win/loss dialogs with play-again functionality
- **Modern Styling**: Custom fonts, animations, and visual effects

## 🛠️ Technical Implementation

### Core Technologies
- **HTML5**: Semantic structure and Canvas API
- **CSS3**: Custom styling, responsive design, animations
- **Vanilla JavaScript**: Game logic, DOM manipulation, event handling

### Key Components
- `script.js` - Dynamic UI generation and DOM creation
- `app.js` - Game logic, state management, and event handling
- `draw.js` - Canvas-based hangman drawing functions
- `modal.js` - Modal dialog system
- `questions.json` - Programming-themed question database
- `styles.css` - Responsive styling and animations

### Features Implemented
- ✅ Word selection from JSON database
- ✅ Letter guessing with validation
- ✅ Progressive hangman drawing (6 stages)
- ✅ Win/loss detection
- ✅ Keyboard event handling
- ✅ Visual feedback and animations
- ✅ Game reset functionality
- ✅ Responsive mobile design
- ✅ Accessibility considerations

## 🎯 Game Rules

1. Guess the programming-related word using the hint provided
2. Click letters on the virtual keyboard or use your physical keyboard
3. Each wrong guess adds a part to the hangman drawing
4. Win by guessing all letters before the drawing is complete
5. You have 6 incorrect guesses before losing

## 🎨 Design Features

- **Custom Typography**: Geo-Regular font for headings
- **Visual Theming**: Rope background with warm color palette
- **Interactive Elements**: Hover effects and button animations
- **Mobile-First**: Responsive design that works on all devices
- **Accessibility**: Proper focus management and keyboard navigation

## 🚀 Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Start playing!

No build process or dependencies required - it's pure vanilla JavaScript!

## 📱 Browser Support

Works on all modern browsers including:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🔧 Local Development

```bash
# Clone the repository
git clone https://github.com/ilonagold/hangman-game.git

# Navigate to the project directory
cd hangman-game

# Start a local server (optional)
npx http-server -p 8000

# Open in browser
open http://localhost:8000
```

## 📄 License

This project is open source and available under the MIT License.
