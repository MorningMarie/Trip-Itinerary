# 🎃 Halloween Travel Itinerary

A simple, interactive travel itinerary planner with a spooky Halloween theme! Perfect for planning your autumn New England adventure.

## ✨ Features

- **📱 Responsive Design** - Works on desktop, tablet, and mobile
- **✏️ Easy Editing** - Click to edit any part of your itinerary
- **💾 Auto-Save** - Remembers your changes in the browser
- **🎨 Halloween Theme** - Beautiful autumn colors and spooky decorations
- **📄 Printable** - Clean print layout for taking on your trip
- **🌐 Works Everywhere** - Pure HTML/CSS/JS, no dependencies

## 🚀 Quick Start

### Option 1: Use GitHub Pages (Recommended)
1. **Fork this repository**
2. **Go to Settings → Pages**
3. **Select "Deploy from a branch" → main**
4. **Your site will be live at:** `https://yourusername.github.io/halloween-travel-itinerary`

### Option 2: Download and Use Locally
1. **Download** the `index.html` file
2. **Open** it in any web browser
3. **Start planning** your trip!

### Option 3: Use with Tumblr
1. **Copy** the contents of `index.html`
2. **Paste** into a new Tumblr text post
3. **Switch to HTML mode** and publish

## 📝 How to Use

1. **🎯 Edit Trip Info** - Click the "Edit Trip Info" button to change title and description
2. **📅 Edit Days** - Click "Edit Day" on any day to modify details
3. **🔄 Switch Days** - Click the day tabs to navigate between days
4. **💾 Save Changes** - Right-click → "Save As" to save your custom version

## 🎨 Customization

### Change the Theme
Edit the CSS variables in `styles.css`:
\`\`\`css
:root {
  --primary-color: #ff6b35;    /* Main orange */
  --secondary-color: #d2001f;  /* Deep red */
  --accent-color: #ffaa44;     /* Golden yellow */
}
\`\`\`

### Add More Days
Simply duplicate a day section in `index.html` and update the day number.

### Modify Activities
Each activity has this structure:
\`\`\`html
<div class="activity">
  <div class="activity-time">10:00</div>
  <div class="activity-content">
    <div class="activity-title">Activity Name</div>
    <div class="activity-description">Description here</div>
  </div>
</div>
\`\`\`

## 📁 File Structure

\`\`\`
halloween-travel-itinerary/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── assets/
    └── favicon.ico     # Halloween pumpkin favicon
\`\`\`

## 🌟 Demo

**Live Demo:** [View on GitHub Pages](https://yourusername.github.io/halloween-travel-itinerary)

## 📱 Screenshots

### Desktop View
![Desktop Screenshot](https://via.placeholder.com/800x600/ff6b35/ffffff?text=Desktop+View)

### Mobile View
![Mobile Screenshot](https://via.placeholder.com/400x800/d2001f/ffffff?text=Mobile+View)

## 🛠️ Technical Details

- **Pure HTML/CSS/JavaScript** - No frameworks or dependencies
- **Local Storage** - Saves changes in your browser
- **Responsive Design** - CSS Grid and Flexbox
- **Cross-Browser Compatible** - Works in all modern browsers
- **Lightweight** - Less than 50KB total

## 🎃 Perfect For

- **Halloween trips** to New England
- **Fall foliage tours**
- **Spooky weekend getaways**
- **Any autumn adventure**
- **Template for other trips** (just change the theme!)

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Inspiration:** New England's beautiful autumn foliage
- **Icons:** Unicode emojis (work everywhere!)
- **Colors:** Inspired by autumn leaves and Halloween

## 📞 Support

Having issues? Please [open an issue](https://github.com/yourusername/halloween-travel-itinerary/issues) on GitHub.

---

**Made with 🎃 for spooky travel planning!**
