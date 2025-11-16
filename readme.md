# 🐍 Snake Game

A classic Snake game built with vanilla HTML, CSS, and JavaScript. Control the snake, eat food, and avoid collisions in this nostalgic arcade-style game!

## 📱 Live Demo

Check out the live demo here: [Snake Game Live Demo](https://skmdjeesan.github.io/Snake-Game/)

## 📁 Repository

View the source code on GitHub: [Snake Game Repository](https://github.com/skmdJeesan/Snake-Game)

---

## 🎮 Features

- **Classic Gameplay**: Control the snake using arrow keys to eat food and grow longer
- **Pause/Resume**: Press `Space bar` key to pause and resume the game anytime
- **Score Tracking**: Keep track of your score as you eat food
- **Collision Detection**: Game ends when the snake hits walls or itself
- **Smooth Movement**: Responsive controls with consistent game speed
- **Responsive Design**: Playable on different screen sizes

---

## 🛠️ Built With

### **HTML**
- Semantic structure for the game container
- Game board/canvas area for rendering the snake and food
- Score display and game status indicators
- Start, Pause, and Reset buttons for game controls
- Clean and accessible markup

### **CSS**
- Responsive grid-based layout for the game board
- Styling for snake segments and food items
- Game interface styling (buttons, score display, info panel)
- Smooth animations and transitions for game elements
- Dark theme for better visual appeal
- Media queries for mobile responsiveness

### **JavaScript**
- **Game Logic**: Snake movement, direction handling, and growth mechanics
- **Collision Detection**: Detects wall collisions and self-collision
- **Food Generation**: Randomly spawns food on the game board
- **Event Listeners**: Keyboard controls (arrow keys for movement, space bar for pause)
- **Game State Management**: Tracks score, game status (running/paused/over)
- **Game Loop**: Uses `setInterval()` or `requestAnimationFrame()` for smooth updates
- **Pause/Resume Functionality**: Toggle game state with keyboard input

---

## 🎯 How to Play

1. **Start the Game**: Click the "Start Game" button or press the play button
2. **Control the Snake**: Use arrow keys (`↑` `↓` `←` `→`) to move the snake
3. **Eat Food**: Move the snake over the food to eat it and grow longer
4. **Pause the Game**: Press `space bar` key to pause, press again to resume
5. **Avoid Collisions**: Don't hit the walls or collide with your own body
6. **Game Over**: The game ends when you hit a wall or yourself
7. **Restart**: Click "Restart" to start a new game

---

## 📊 Code Structure

```
snake-game/
├── index.html          # HTML structure
├── style.css           # Styling and layout
├── script.js           # Game logic and mechanics
└── README.md           # Documentation
```

## ⌨️ Controls

| Key | Action |
|-----|--------|
| `↑` Arrow Up | Move snake up |
| `↓` Arrow Down | Move snake down |
| `←` Arrow Left | Move snake left |
| `→` Arrow Right | Move snake right |
| `space bar` | Pause/Resume game |

---

## 🎨 Customization

You can easily customize the game by modifying:

- **Board Size**: Change grid dimensions in CSS and JavaScript
- **Snake Speed**: Adjust the `setTimeout()` or `setInterval()` delay
- **Colors**: Modify snake, food, and background colors in CSS
- **Grid Size**: Update the cell/pixel dimensions in the CSS grid

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/snake-game.git
   ```

2. Navigate to the project folder:
   ```bash
   cd snake-game
   ```

3. Open `index.html` in your web browser to play!

---

## 🚀 Future Enhancements

- [ ] Add different difficulty levels
- [ ] Implement leaderboard/high scores
- [ ] Add sound effects and background music
- [ ] Mobile touch controls
- [ ] Power-ups and special items
- [ ] Different game modes (time attack, endless, etc.)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

Created with ❤️ by [Jeesan](https://github.com/skmdJeesan)

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this project and submit pull requests.

---

**Happy gaming! 🎮** Don't forget to press `space bar` to pause when you need a break!