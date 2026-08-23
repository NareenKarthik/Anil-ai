# 🌸 Anime AI Character Studio ✨

An interactive, browser-based Anime Character Creator, Scene Composer, Voice Synthesizer, and Visual Script Director.

![Anime AI Character Studio Preview](assets/backgrounds/cherry_shrine.jpg)

---

## 🌟 Key Features

- **🎨 Multi-layer Canvas Studio**: Real-time layer blending, character positioning, scale, rotation, and dynamic visual filters (cyberpunk, retro anime, noir, neon glow).
- **🎭 Character Customization & Posing**: Pre-loaded anime characters (Mei, Ren, Kaito, Ananya) with emotion presets, outfit variations, and customizable dialogue bubbles.
- **🎙️ AI Voice Engine**: Web Speech synthesis with customizable pitch, speed, emotional tone modulation, and character-specific voice profiles.
- **🎬 Script Director & Scene Timeline**: Build multi-character dialogue sequences, camera angles, transitions, and audio cues into a playable visual novel cutscene.
- **💾 Local Database & Project Export**: IndexedDB / LocalStorage state persistence, project export/import as JSON, and high-res canvas image rendering.
- **🌐 Multilingual Localization**: Built-in support for multiple languages including English, Japanese, and more.

---

## 🚀 Live Demo & GitHub Pages Deployment

This project is built with vanilla web technologies and runs directly in any modern web browser with zero build steps or server setup needed!

### Hosting on GitHub Pages:
1. Go to your repository on GitHub: `https://github.com/<your-username>/<repo-name>`
2. Click on **Settings** (tab at the top).
3. In the left sidebar, click on **Pages**.
4. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
5. Click **Save**.
6. Within a minute, your studio will be live at `https://<your-username>.github.io/<repo-name>/`! 🎉

---

## 💻 Running Locally

### Option 1: Direct File Opening
Simply double-click [`index.html`](index.html) in your file explorer to open it in your browser.

### Option 2: Local HTTP Server (Recommended)
Using Python:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

Or using Node.js / npx:
```bash
npx serve .
```

---

## 🛠️ Built With

- **HTML5 & Vanilla JavaScript (ES6+)**
- **HTML5 Canvas 2D Rendering Engine**
- **Vanilla CSS3 Glassmorphism UI & Keyframe Animations**
- **Web Speech API & Web Audio API**
- **Font Awesome & Google Fonts (Inter / Outfit)**

---

## 📜 License

MIT License — feel free to use, modify, and build upon this project!
