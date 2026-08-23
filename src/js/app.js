/**
 * Main Application Controller for AnimeArt AI Studio
 * Coordinates Canvas Engine, Script Director, Voice Engine, Database, and i18n
 */

import { I18N } from './i18n.js';
import { Database } from './database.js';
import { VoiceEngine } from './voice-engine.js';
import { CanvasEngine } from './canvas-engine.js';
import { ScriptDirector } from './script-director.js';

export const App = {
  activeView: 'studio',
  selectedFolder: 'characters',

  init() {
    // 1. Initialize Database
    Database.init();

    // 2. Initialize Voice Engine
    VoiceEngine.init();

    // 3. Initialize Canvas Engine
    const canvasEl = document.getElementById('animeCanvas');
    if (canvasEl) {
      CanvasEngine.init(canvasEl);
      
      // Load initial character and background
      const initialBg = Database.getBackgroundById('bg_cyberpunk');
      if (initialBg) CanvasEngine.setBackground(initialBg.url);

      const initialChar = Database.getCharacterByName('Kaito');
      if (initialChar) CanvasEngine.setCharacter(initialChar);
    }

    // 4. Setup Event Listeners
    this.bindEvents();

    // 5. Initialize i18n
    I18N.setLanguage('en');

    // 6. Render Initial Data
    this.renderFolderDatabase();
    this.renderCharacterLabList();
    this.renderBackgroundSelector();

    console.log('✨ AnimeArt AI Character Studio Initialized Successfully!');
  },

  bindEvents() {
    // Navigation / View Switching
    document.querySelectorAll('[data-view-target]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetView = btn.getAttribute('data-view-target');
        this.switchView(targetView);
      });
    });

    // Language Selector
    const langSelect = document.getElementById('globalLangSelect');
    if (langSelect) {
      langSelect.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        I18N.setLanguage(selectedLang);
        this.showToast(`Language switched to ${selectedLang.toUpperCase()}`);
      });
    }

    // Mode Switcher Tabs
    document.querySelectorAll('.mode-tab-btn').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.mode-tab-btn').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const mode = tab.getAttribute('data-mode');
        this.handleModeSwitch(mode);
      });
    });

    // Preset Script Buttons
    document.querySelectorAll('[data-preset-script]').forEach(chip => {
      chip.addEventListener('click', () => {
        const presetKey = chip.getAttribute('data-preset-script');
        this.loadPresetScript(presetKey);
      });
    });

    // Quick Action VFX Palette Tags
    document.querySelectorAll('.action-tag-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const actionTag = chip.getAttribute('data-action-tag');
        this.insertActionTagToScript(actionTag);
      });
    });

    // Play Script Button
    const playBtn = document.getElementById('btnPlayScript');
    if (playBtn) {
      playBtn.addEventListener('click', () => {
        this.runCurrentScript();
      });
    }

    // Stop Script Button
    const stopBtn = document.getElementById('btnStopScript');
    if (stopBtn) {
      stopBtn.addEventListener('click', () => {
        ScriptDirector.stop();
        this.showToast('Playback stopped.');
      });
    }

    // Clear Script Button
    const clearBtn = document.getElementById('btnClearScript');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        const textarea = document.getElementById('scriptEditorTextarea');
        if (textarea) textarea.value = '';
      });
    }

    // Export Video (AMV) Button
    const exportBtn = document.getElementById('btnExportVideo');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        this.handleExportVideo();
      });
    }

    // Background Dropdown Selector in Cinema Player
    const bgSelect = document.getElementById('cinemaBgSelect');
    if (bgSelect) {
      bgSelect.addEventListener('change', (e) => {
        const bg = Database.getBackgroundById(e.target.value);
        if (bg) {
          CanvasEngine.setBackground(bg.url);
          this.showToast(`Background set to ${bg.title}`);
        }
      });
    }

    // Floating AI Prompt Bar Submit
    const promptForm = document.getElementById('floatingPromptForm');
    if (promptForm) {
      promptForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handlePromptBarSubmit();
      });
    }

    // Character Modal Form Submit
    const charForm = document.getElementById('createCharacterForm');
    if (charForm) {
      charForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSaveCharacterModal();
      });
    }

    // Modal Close Buttons
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.closeAllModals();
      });
    });

    // New Character Modal Trigger
    const newCharBtn = document.getElementById('btnOpenNewCharModal');
    if (newCharBtn) {
      newCharBtn.addEventListener('click', () => {
        this.openModal('modalCreateCharacter');
      });
    }

    // Test Voice Synthesis in Modal
    const modalTestVoiceBtn = document.getElementById('btnModalTestVoice');
    if (modalTestVoiceBtn) {
      modalTestVoiceBtn.addEventListener('click', () => {
        const name = document.getElementById('modalCharName').value || 'Character';
        const lang = document.getElementById('modalCharLang').value || 'en';
        const pitch = parseFloat(document.getElementById('modalCharPitch').value) || 1.0;
        const rate = parseFloat(document.getElementById('modalCharSpeed').value) || 1.0;
        
        let sampleText = "Hello! I am ready to join your anime scene.";
        if (lang === 'ta') sampleText = "வணக்கம்! நான் உங்கள் அனிமே காட்சியில் நடிக்க தயாராக இருக்கிறேன்.";
        else if (lang === 'ja') sampleText = "こんにちは！アニメシーンの準備はできています！";
        else if (lang === 'zh') sampleText = "你好！我已经准备好加入你的动漫世界了！";

        VoiceEngine.speak({
          text: sampleText,
          lang,
          pitch,
          rate,
          charName: name
        });
      });
    }

    // Backup / Export Database JSON
    const exportDbBtn = document.getElementById('btnExportDb');
    if (exportDbBtn) {
      exportDbBtn.addEventListener('click', () => {
        const json = Database.exportJSON();
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `animeart_studio_database_${Date.now()}.json`;
        a.click();
        this.showToast('Database exported successfully!');
      });
    }

    // Import Database JSON
    const importInput = document.getElementById('importDbFileInput');
    if (importInput) {
      importInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const success = Database.importJSON(event.target.result);
            if (success) {
              this.renderFolderDatabase();
              this.renderCharacterLabList();
              this.showToast('Database imported successfully!');
            } else {
              this.showToast('Failed to import database JSON.');
            }
          };
          reader.readAsText(file);
        }
      });
    }
  },

  switchView(viewId) {
    this.activeView = viewId;
    document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.sidebar-nav-link').forEach(l => l.classList.remove('active'));

    const targetEl = document.getElementById(`view-${viewId}`);
    if (targetEl) targetEl.classList.add('active');

    const activeNav = document.querySelector(`[data-view-target="${viewId}"]`);
    if (activeNav) activeNav.classList.add('active');

    // Update breadcrumb
    const breadcrumbEl = document.getElementById('currentBreadcrumb');
    if (breadcrumbEl) {
      if (viewId === 'studio') breadcrumbEl.textContent = 'Anime Studio';
      else if (viewId === 'database') breadcrumbEl.textContent = 'Assets & Database';
      else if (viewId === 'character-lab') breadcrumbEl.textContent = 'Character Design Lab';
      else if (viewId === 'voice-lab') breadcrumbEl.textContent = 'Voice & Audio Lab';
    }
  },

  handleModeSwitch(mode) {
    if (mode === 'amv') {
      this.loadPresetScript('duel');
      this.showToast('Switched to Action AMV Mode');
    } else if (mode === 'character') {
      this.switchView('character-lab');
    } else if (mode === 'audio') {
      this.switchView('voice-lab');
    } else if (mode === 'world') {
      this.switchView('database');
    } else {
      this.switchView('studio');
    }
  },

  loadPresetScript(key) {
    const textarea = document.getElementById('scriptEditorTextarea');
    if (!textarea) return;

    if (key === 'english') {
      textarea.value = `Kaito: "Welcome to Neo Tokyo. All cybernetic systems operational!" [action: Power Surge]\nKaito: "Let's track down the rogue AI before sunrise." [action: Cyberpunk Dash]`;
      const bg = Database.getBackgroundById('bg_cyberpunk');
      if (bg) CanvasEngine.setBackground(bg.url);
      const char = Database.getCharacterByName('Kaito');
      if (char) CanvasEngine.setCharacter(char);
    } else if (key === 'tamil') {
      textarea.value = `Ananya: "வணக்கம்! இந்த புனித பூமியில் தீமைக்கு இடமில்லை!" [action: Solar Flare]\nAnanya: "எங்கள் நம்பிக்கை தான் எங்களின் மிகப்பெரிய ஆயுதம்." [action: Smile]`;
      const bg = Database.getBackgroundById('bg_temple');
      if (bg) CanvasEngine.setBackground(bg.url);
      const char = Database.getCharacterByName('Ananya');
      if (char) CanvasEngine.setCharacter(char);
    } else if (key === 'japanese') {
      textarea.value = `Ren: "桜の散る音を聞け。我が刃が道を切り開く！" [action: Sword Slash]\nRen: "風が止む時、勝負は決している。" [action: Combat Stance]`;
      const bg = Database.getBackgroundById('bg_shrine');
      if (bg) CanvasEngine.setBackground(bg.url);
      const char = Database.getCharacterByName('Ren');
      if (char) CanvasEngine.setCharacter(char);
    } else if (key === 'chinese') {
      textarea.value = `Mei: "漫天星辰，听我号令，星光绽放！" [action: Magic Cast]\nMei: "只要心怀光明，黑夜便不再漫长。" [action: Smile]`;
      const bg = Database.getBackgroundById('bg_temple');
      if (bg) CanvasEngine.setBackground(bg.url);
      const char = Database.getCharacterByName('Mei');
      if (char) CanvasEngine.setCharacter(char);
    } else if (key === 'duel') {
      textarea.value = `Kaito: "Welcome to Neo Tokyo! Systems are primed and ready." [action: Power Surge]
Ananya: "வணக்கம்! எங்கள் சூரிய சக்தி எப்போதும் உங்களை காக்கும்." [action: Solar Flare]
Ren: "覚悟はいいか？行くぞ！" [action: Sword Slash]
Mei: "漫天星辰，为我们引路，光华流转！" [action: Magic Cast]
Kaito: "Let's finish this together — Maximum Overdrive!" [action: Cyberpunk Dash]`;
      const bg = Database.getBackgroundById('bg_cyberpunk');
      if (bg) CanvasEngine.setBackground(bg.url);
    }

    this.showToast(`Loaded ${key.toUpperCase()} Scene Preset!`);
  },

  insertActionTagToScript(tag) {
    const textarea = document.getElementById('scriptEditorTextarea');
    if (!textarea) return;
    textarea.value += ` [action: ${tag}]`;
    textarea.focus();
  },

  runCurrentScript() {
    const textarea = document.getElementById('scriptEditorTextarea');
    if (!textarea || !textarea.value.trim()) {
      this.showToast('Please enter dialogue script lines first!');
      return;
    }

    const subtitleTextEl = document.getElementById('cinemaDialogueText');
    const speakerNameEl = document.getElementById('cinemaSpeakerName');
    const speakerAvatarEl = document.getElementById('cinemaSpeakerAvatar');
    const speakerLangEl = document.getElementById('cinemaSpeakerLang');

    this.showToast('▶ Playing Scene with Auto-Voice Assignment...');

    ScriptDirector.play(textarea.value, {
      onStep: (item, index, total) => {
        // Update Cinema Subtitle box
        if (subtitleTextEl) subtitleTextEl.textContent = item.dialogue;
        if (speakerNameEl) speakerNameEl.textContent = item.charName;
        if (speakerAvatarEl && item.character && item.character.avatar) {
          speakerAvatarEl.src = item.character.avatar;
        }
        if (speakerLangEl) {
          const langNames = { en: 'ENGLISH 🇬🇧', ta: 'TAMIL 🇮🇳 (தமிழ்)', ja: 'JAPANESE 🇯🇵 (日本語)', zh: 'CHINESE 🇨🇳 (中文)' };
          speakerLangEl.textContent = langNames[item.lang] || item.lang.toUpperCase();
        }

        // Animate Equalizer bars
        this.animateEqualizer(true);
      },
      onFinish: () => {
        this.animateEqualizer(false);
        this.showToast('Scene completed!');
      }
    });
  },

  animateEqualizer(active) {
    const bars = document.querySelectorAll('.equalizer-bar');
    bars.forEach((b, i) => {
      if (active) {
        b.style.height = `${Math.random() * 18 + 4}px`;
      } else {
        b.style.height = '4px';
      }
    });
  },

  async handleExportVideo() {
    this.showToast('🎥 Recording anime scene & voice track...');
    const recordBtn = document.getElementById('cinemaRecordBtn');
    if (recordBtn) recordBtn.classList.add('recording');

    CanvasEngine.startRecording();

    // Run current script while recording
    const textarea = document.getElementById('scriptEditorTextarea');
    const script = textarea && textarea.value.trim() ? textarea.value : 'Kaito: "AnimeArt AI Studio is ready!" [action: Power Surge]';

    await new Promise((resolve) => {
      ScriptDirector.play(script, {
        onStep: (item) => {
          const subtitleTextEl = document.getElementById('cinemaDialogueText');
          if (subtitleTextEl) subtitleTextEl.textContent = item.dialogue;
        },
        onFinish: () => {
          resolve();
        }
      });
    });

    const result = await CanvasEngine.stopRecording();
    if (recordBtn) recordBtn.classList.remove('recording');

    if (result && result.url) {
      const a = document.createElement('a');
      a.href = result.url;
      a.download = `AnimeArt_Scene_${Date.now()}.webm`;
      a.click();
      this.showToast('✅ Video AMV downloaded successfully!');
    }
  },

  handlePromptBarSubmit() {
    const input = document.getElementById('floatingPromptInput');
    if (!input || !input.value.trim()) return;

    const userPrompt = input.value.trim();
    input.value = '';

    // Check if user typed Character: "Dialogue" or a description
    if (userPrompt.includes(':')) {
      const textarea = document.getElementById('scriptEditorTextarea');
      if (textarea) {
        textarea.value = userPrompt;
        this.runCurrentScript();
      }
    } else {
      // Auto generate a script line based on prompt
      const lower = userPrompt.toLowerCase();
      let generatedLine = '';
      if (lower.includes('tamil') || lower.includes('temple')) {
        generatedLine = `Ananya: "${userPrompt}" [action: Solar Flare]`;
        const bg = Database.getBackgroundById('bg_temple');
        if (bg) CanvasEngine.setBackground(bg.url);
      } else if (lower.includes('japan') || lower.includes('samurai')) {
        generatedLine = `Ren: "${userPrompt}" [action: Sword Slash]`;
        const bg = Database.getBackgroundById('bg_shrine');
        if (bg) CanvasEngine.setBackground(bg.url);
      } else if (lower.includes('china') || lower.includes('magic') || lower.includes('star')) {
        generatedLine = `Mei: "${userPrompt}" [action: Magic Cast]`;
        const bg = Database.getBackgroundById('bg_temple');
        if (bg) CanvasEngine.setBackground(bg.url);
      } else {
        generatedLine = `Kaito: "${userPrompt}" [action: Power Surge]`;
        const bg = Database.getBackgroundById('bg_cyberpunk');
        if (bg) CanvasEngine.setBackground(bg.url);
      }

      const textarea = document.getElementById('scriptEditorTextarea');
      if (textarea) {
        textarea.value = generatedLine;
        this.runCurrentScript();
      }
    }
  },

  handleSaveCharacterModal() {
    const name = document.getElementById('modalCharName').value;
    const title = document.getElementById('modalCharTitle').value;
    const lang = document.getElementById('modalCharLang').value;
    const pitch = document.getElementById('modalCharPitch').value;
    const speed = document.getElementById('modalCharSpeed').value;
    const style = document.getElementById('modalCharStyle').value;
    const backstory = document.getElementById('modalCharBackstory').value;

    const newChar = Database.addCharacter({
      name,
      title,
      lang,
      pitch,
      speed,
      style,
      backstory,
      avatar: 'assets/characters/kaito.jpg'
    });

    this.closeAllModals();
    this.renderCharacterLabList();
    this.renderFolderDatabase();
    this.showToast(`Character "${newChar.name}" created with assigned ${lang.toUpperCase()} voice!`);
  },

  renderFolderDatabase() {
    const folderListEl = document.getElementById('folderTreeList');
    const assetGridEl = document.getElementById('assetItemsGrid');
    if (!folderListEl || !assetGridEl) return;

    // Render Folders
    const characters = Database.getCharacters();
    const backgrounds = Database.getBackgrounds();
    const voices = Database.getVoices();
    const scenes = Database.getScenes();

    folderListEl.innerHTML = `
      <li>
        <button class="folder-item-btn ${this.selectedFolder === 'characters' ? 'active' : ''}" onclick="window.App.selectFolder('characters')">
          <span class="folder-item-left">📁 Characters</span>
          <span class="folder-count-pill">${characters.length}</span>
        </button>
      </li>
      <li>
        <button class="folder-item-btn ${this.selectedFolder === 'backgrounds' ? 'active' : ''}" onclick="window.App.selectFolder('backgrounds')">
          <span class="folder-item-left">📁 Backgrounds</span>
          <span class="folder-count-pill">${backgrounds.length}</span>
        </button>
      </li>
      <li>
        <button class="folder-item-btn ${this.selectedFolder === 'voices' ? 'active' : ''}" onclick="window.App.selectFolder('voices')">
          <span class="folder-item-left">📁 Voice Profiles</span>
          <span class="folder-count-pill">${voices.length}</span>
        </button>
      </li>
      <li>
        <button class="folder-item-btn ${this.selectedFolder === 'scenes' ? 'active' : ''}" onclick="window.App.selectFolder('scenes')">
          <span class="folder-item-left">📁 Storyboards & AMVs</span>
          <span class="folder-count-pill">${scenes.length}</span>
        </button>
      </li>
    `;

    // Render Grid Items according to selected folder
    if (this.selectedFolder === 'characters') {
      assetGridEl.innerHTML = characters.map(c => `
        <div class="asset-card">
          <div class="asset-preview-box">
            <img src="${c.avatar}" class="asset-preview-img" alt="${c.name}" />
          </div>
          <div class="asset-card-details">
            <div class="asset-card-title">${c.name}</div>
            <div class="asset-card-meta">
              <span>${c.title}</span>
              <span class="voice-lang-badge ${c.lang}">${c.lang.toUpperCase()}</span>
            </div>
            <div class="asset-card-actions">
              <button class="btn-card-action" onclick="window.App.loadCharacterToStudio('${c.name}')">Select for Scene</button>
              <button class="btn-card-action" onclick="window.App.testCharacterVoice('${c.id}')">🔊 Voice</button>
            </div>
          </div>
        </div>
      `).join('');
    } else if (this.selectedFolder === 'backgrounds') {
      assetGridEl.innerHTML = backgrounds.map(b => `
        <div class="asset-card">
          <div class="asset-preview-box">
            <img src="${b.url}" class="asset-preview-img" alt="${b.title}" />
          </div>
          <div class="asset-card-details">
            <div class="asset-card-title">${b.title}</div>
            <div class="asset-card-meta">
              <span>${b.theme}</span>
              <span>${b.lighting}</span>
            </div>
            <div class="asset-card-actions">
              <button class="btn-card-action" onclick="window.App.loadBackgroundToStudio('${b.id}')">Apply to Stage</button>
            </div>
          </div>
        </div>
      `).join('');
    } else if (this.selectedFolder === 'voices') {
      assetGridEl.innerHTML = voices.map(v => `
        <div class="voice-profile-card">
          <div class="voice-card-header">
            <div class="asset-card-title">${v.name}</div>
            <span class="voice-lang-badge ${v.lang.slice(0, 2)}">${v.lang}</span>
          </div>
          <div class="asset-card-meta">
            <span>Pitch: ${v.pitch}x | Rate: ${v.rate}x</span>
            <span>${v.type}</span>
          </div>
          <div class="voice-waveform-preview">
            <div class="waveform-bar" style="height: 12px"></div>
            <div class="waveform-bar" style="height: 22px"></div>
            <div class="waveform-bar" style="height: 16px"></div>
            <div class="waveform-bar" style="height: 8px"></div>
            <div class="waveform-bar" style="height: 20px"></div>
          </div>
          <button class="btn-card-action" onclick="window.App.testVoiceProfile('${v.id}')">🔊 Audition Voice</button>
        </div>
      `).join('');
    } else if (this.selectedFolder === 'scenes') {
      assetGridEl.innerHTML = scenes.map(s => `
        <div class="asset-card">
          <div class="asset-card-details" style="padding: 16px;">
            <div class="asset-card-title">${s.title}</div>
            <div class="asset-card-meta" style="margin: 8px 0;">
              <span>Cast: ${s.characters.join(', ')}</span>
            </div>
            <div class="script-editor-container" style="min-height: 80px; margin-bottom: 8px;">
              <textarea class="script-textarea" readonly style="height: 90px; font-size: 11.5px;">${s.script}</textarea>
            </div>
            <div class="asset-card-actions">
              <button class="btn-card-action" onclick="window.App.loadSceneToStudio('${s.id}')">Load to Director</button>
            </div>
          </div>
        </div>
      `).join('');
    }
  },

  selectFolder(folderKey) {
    this.selectedFolder = folderKey;
    this.renderFolderDatabase();
  },

  loadCharacterToStudio(charName) {
    const char = Database.getCharacterByName(charName);
    if (char) {
      CanvasEngine.setCharacter(char);
      this.switchView('studio');
      this.showToast(`Character "${char.name}" placed on Stage!`);
    }
  },

  loadBackgroundToStudio(bgId) {
    const bg = Database.getBackgroundById(bgId);
    if (bg) {
      CanvasEngine.setBackground(bg.url);
      const bgSelect = document.getElementById('cinemaBgSelect');
      if (bgSelect) bgSelect.value = bg.id;
      this.switchView('studio');
      this.showToast(`Background set to "${bg.title}"!`);
    }
  },

  loadSceneToStudio(sceneId) {
    const scene = Database.getSceneById(sceneId);
    if (scene) {
      const textarea = document.getElementById('scriptEditorTextarea');
      if (textarea) textarea.value = scene.script;
      const bg = Database.getBackgroundById(scene.bgId);
      if (bg) CanvasEngine.setBackground(bg.url);
      this.switchView('studio');
      this.showToast(`Storyboard "${scene.title}" loaded!`);
    }
  },

  testCharacterVoice(charId) {
    const char = Database.getCharacterById(charId);
    if (char) {
      let sampleText = `I am ${char.name}. Ready for action!`;
      if (char.lang === 'ta') sampleText = `வணக்கம், நான் ${char.name}. வெற்றி நமது கையில்!`;
      else if (char.lang === 'ja') sampleText = `私は${char.name}。準備は完了している。`;
      else if (char.lang === 'zh') sampleText = `我是${char.name}，一切准备就绪！`;

      VoiceEngine.speak({
        text: sampleText,
        lang: char.lang,
        pitch: char.pitch,
        rate: char.speed,
        charName: char.name
      });
    }
  },

  testVoiceProfile(voiceId) {
    const voice = Database.getVoices().find(v => v.id === voiceId);
    if (voice) {
      VoiceEngine.speak({
        text: `Auditioning assigned voice profile for ${voice.name}.`,
        lang: voice.lang.slice(0, 2),
        pitch: voice.pitch,
        rate: voice.rate
      });
    }
  },

  renderCharacterLabList() {
    const listEl = document.getElementById('characterLabCardsList');
    if (!listEl) return;
    const characters = Database.getCharacters();
    listEl.innerHTML = characters.map(c => `
      <div class="asset-card" style="border-left: 3px solid var(--accent-pink);">
        <div class="asset-preview-box" style="aspect-ratio: 1/1;">
          <img src="${c.avatar}" class="asset-preview-img" alt="${c.name}" />
        </div>
        <div class="asset-card-details">
          <div class="asset-card-title">${c.name} <span style="font-size: 11px; color: var(--text-muted);">(${c.gender})</span></div>
          <div style="font-size: 12px; color: var(--accent-cyan);">${c.title}</div>
          <div class="asset-card-meta" style="margin-top: 4px;">
            <span>Voice: ${c.lang.toUpperCase()}</span>
            <span>Pitch: ${c.pitch}x</span>
          </div>
          <p style="font-size: 11.5px; color: var(--text-secondary); margin-top: 6px; line-height: 1.4;">${c.backstory}</p>
          <div class="asset-card-actions" style="margin-top: 10px;">
            <button class="btn-card-action" onclick="window.App.testCharacterVoice('${c.id}')">🔊 Test Voice</button>
            <button class="btn-card-action" onclick="window.App.loadCharacterToStudio('${c.name}')">▶ Use in Studio</button>
          </div>
        </div>
      </div>
    `).join('');
  },

  renderBackgroundSelector() {
    const select = document.getElementById('cinemaBgSelect');
    if (!select) return;
    const backgrounds = Database.getBackgrounds();
    select.innerHTML = backgrounds.map(b => `
      <option value="${b.id}">${b.title}</option>
    `).join('');
  },

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
  },

  closeAllModals() {
    document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
  },

  showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.innerHTML = `<span>✨</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
};

// Mount to window for direct inline HTML event calls
window.App = App;
window.addEventListener('DOMContentLoaded', () => App.init());
