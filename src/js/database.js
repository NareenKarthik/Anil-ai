/**
 * Database and Asset Management for AnimeArt AI Studio
 * Handles Character Memory, Background Assets, Voice Profiles, Storyboards, and Folder hierarchy
 */

export const Database = {
  STORAGE_KEY: 'animeart_studio_db_v1',

  data: {
    characters: [
      {
        id: 'char_kaito',
        name: 'Kaito',
        title: 'Cyberpunk Blade Runner',
        lang: 'en',
        voiceName: 'English (Male Heroic)',
        pitch: 1.05,
        speed: 1.0,
        avatar: 'assets/characters/kaito.jpg',
        style: 'Neo-Tokyo Cyberpunk',
        gender: 'Male',
        personality: 'Confident, daring, high-tech rebel',
        backstory: 'A cybernetically enhanced blade wielder navigating the rainy alleys of Neo Tokyo in 2142.',
        actions: ['Power Surge', 'Cyberpunk Dash', 'Combat Stance'],
        folder: 'characters/kaito',
        createdAt: '2026-08-21'
      },
      {
        id: 'char_ananya',
        name: 'Ananya',
        title: 'Sun Priestess & Royal Warrior',
        lang: 'ta',
        voiceName: 'Tamil (Heroine / Queen)',
        pitch: 1.15,
        speed: 0.95,
        avatar: 'assets/characters/ananya.jpg',
        style: 'Ancient Solar Fantasy',
        gender: 'Female',
        personality: 'Regal, wise, fierce guardian of the sacred flame',
        backstory: 'The chosen champion of the Sun Temple, wielding ancient golden runes to protect the eternal kingdom.',
        actions: ['Solar Flare', 'Smile', 'Magic Cast'],
        folder: 'characters/ananya',
        createdAt: '2026-08-21'
      },
      {
        id: 'char_ren',
        name: 'Ren',
        title: 'Shadow Ronin & Katana Master',
        lang: 'ja',
        voiceName: 'Japanese (Samurai Master)',
        pitch: 0.85,
        speed: 1.0,
        avatar: 'assets/characters/ren.jpg',
        style: 'Feudal Samurai Noir',
        gender: 'Male',
        personality: 'Calm, lethal, observant, honorable',
        backstory: 'A lone swordsman who wanders cherry blossom shrines, mastering the shadow blade technique.',
        actions: ['Sword Slash', 'Battle Stance', 'Focus'],
        folder: 'characters/ren',
        createdAt: '2026-08-21'
      },
      {
        id: 'char_mei',
        name: 'Mei',
        title: 'Celestial Starlight Mage',
        lang: 'zh',
        voiceName: 'Chinese (Celestial Mystic)',
        pitch: 1.25,
        speed: 1.05,
        avatar: 'assets/characters/mei.jpg',
        style: 'Xianxia Star Fantasy',
        gender: 'Female',
        personality: 'Ethereal, bright, curious, celestial harmony',
        backstory: 'A celestial enchantress weaving constellations and starlight lotus charms to illuminate the mortal realm.',
        actions: ['Magic Cast', 'Smile', 'Celestial Lotus'],
        folder: 'characters/mei',
        createdAt: '2026-08-21'
      }
    ],

    backgrounds: [
      {
        id: 'bg_cyberpunk',
        title: 'Neo Tokyo Cyberpunk Alley',
        url: 'assets/backgrounds/cyberpunk_city.jpg',
        theme: 'Cyberpunk',
        lighting: 'Neon Rain Night',
        folder: 'backgrounds'
      },
      {
        id: 'bg_shrine',
        title: 'Cherry Blossom Shrine & Torii Gate',
        url: 'assets/backgrounds/cherry_shrine.jpg',
        theme: 'Traditional Japanese',
        lighting: 'Golden Hour Sunset',
        folder: 'backgrounds'
      },
      {
        id: 'bg_temple',
        title: 'Ancient Gopuram Temple of Light',
        url: 'assets/backgrounds/fantasy_temple.jpg',
        theme: 'South Asian Fantasy',
        lighting: 'Starlit Twilight',
        folder: 'backgrounds'
      },
      {
        id: 'bg_classroom',
        title: 'Sunset High School Classroom',
        url: 'assets/backgrounds/anime_classroom.jpg',
        theme: 'Anime Slice of Life',
        lighting: 'Warm Evening Sun',
        folder: 'backgrounds'
      }
    ],

    voices: [
      {
        id: 'voice_en_hero',
        name: 'Kaito Heroic Voice',
        lang: 'en-US',
        pitch: 1.05,
        rate: 1.0,
        characterId: 'char_kaito',
        type: 'Male Protagonist'
      },
      {
        id: 'voice_ta_queen',
        name: 'Ananya Tamil Grace Voice',
        lang: 'ta-IN',
        pitch: 1.15,
        rate: 0.95,
        characterId: 'char_ananya',
        type: 'Female Regal'
      },
      {
        id: 'voice_ja_ronin',
        name: 'Ren Samurai Japanese Voice',
        lang: 'ja-JP',
        pitch: 0.85,
        rate: 1.0,
        characterId: 'char_ren',
        type: 'Male Master'
      },
      {
        id: 'voice_zh_mage',
        name: 'Mei Celestial Chinese Voice',
        lang: 'zh-CN',
        pitch: 1.25,
        rate: 1.05,
        characterId: 'char_mei',
        type: 'Female Mystic'
      }
    ],

    scenes: [
      {
        id: 'scene_duel_epic',
        title: 'Multilingual 4-Hero Epic Duel',
        bgId: 'bg_cyberpunk',
        script: `Kaito: "Welcome to Neo Tokyo! Systems are primed and ready." [action: Power Surge]
Ananya: "வணக்கம்! எங்கள் சூரிய சக்தி எப்போதும் உங்களை காக்கும்." [action: Solar Flare]
Ren: "覚悟はいいか？我が刃が道を切り開く！" [action: Sword Slash]
Mei: "漫天星辰，听我号令，星光绽放！" [action: Magic Cast]
Kaito: "Let's finish this together — Maximum Overdrive!" [action: Cyberpunk Dash]`,
        characters: ['Kaito', 'Ananya', 'Ren', 'Mei'],
        folder: 'scenes'
      },
      {
        id: 'scene_tamil_legend',
        title: 'Ananya Sun Temple Blessing',
        bgId: 'bg_temple',
        script: `Ananya: "இந்த புனித பூமியில் தீமைக்கு இடமில்லை! சூரிய சுடரே எழுந்திடுக!" [action: Solar Flare]
Ananya: "எங்கள் நம்பிக்கை தான் எங்களின் மிகப்பெரிய ஆயுதம்." [action: Smile]`,
        characters: ['Ananya'],
        folder: 'scenes'
      },
      {
        id: 'scene_jp_ronin',
        title: 'Ren Cherry Blossom Showdown',
        bgId: 'bg_shrine',
        script: `Ren: "桜の散る音を聞け。一撃で終わらせる！" [action: Sword Slash]
Ren: "風が止む時、勝負は決している。" [action: Combat Stance]`,
        characters: ['Ren'],
        folder: 'scenes'
      },
      {
        id: 'scene_zh_celestial',
        title: 'Mei Starlight Magic Realm',
        bgId: 'bg_temple',
        script: `Mei: "九霄星河，为我引路，光华流转！" [action: Magic Cast]
Mei: "只要心怀光明，黑夜便不再漫长。" [action: Smile]`,
        characters: ['Mei'],
        folder: 'scenes'
      }
    ],

    folders: [
      { id: 'f_root', name: 'Root Database', path: '/' },
      { id: 'f_char', name: 'Characters', path: '/characters' },
      { id: 'f_char_kaito', name: 'Kaito Assets', path: '/characters/kaito' },
      { id: 'f_char_ananya', name: 'Ananya Assets', path: '/characters/ananya' },
      { id: 'f_char_ren', name: 'Ren Assets', path: '/characters/ren' },
      { id: 'f_char_mei', name: 'Mei Assets', path: '/characters/mei' },
      { id: 'f_bg', name: 'Backgrounds', path: '/backgrounds' },
      { id: 'f_voices', name: 'Voice Profiles', path: '/voices' },
      { id: 'f_scenes', name: 'Scenes & AMVs', path: '/scenes' }
    ]
  },

  init() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.characters && parsed.characters.length > 0) {
          this.data = parsed;
        }
      } else {
        this.save();
      }
    } catch (e) {
      console.warn('Could not load saved database, using defaults:', e);
    }
  },

  save() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  },

  // Character operations
  getCharacters() {
    return this.data.characters;
  },

  getCharacterByName(name) {
    if (!name) return null;
    const cleanName = name.trim().toLowerCase();
    return this.data.characters.find(c => c.name.toLowerCase() === cleanName) || null;
  },

  getCharacterById(id) {
    return this.data.characters.find(c => c.id === id) || null;
  },

  addCharacter(charObj) {
    const newChar = {
      id: 'char_' + Date.now(),
      name: charObj.name || 'New Hero',
      title: charObj.title || 'Anime Character',
      lang: charObj.lang || 'en',
      voiceName: charObj.voiceName || 'Default Voice',
      pitch: parseFloat(charObj.pitch) || 1.0,
      speed: parseFloat(charObj.speed) || 1.0,
      avatar: charObj.avatar || 'assets/characters/kaito.jpg',
      style: charObj.style || 'Anime Modern',
      gender: charObj.gender || 'Unknown',
      personality: charObj.personality || '',
      backstory: charObj.backstory || '',
      actions: charObj.actions && charObj.actions.length ? charObj.actions : ['Power Surge', 'Smile', 'Battle Stance'],
      folder: `characters/${charObj.name.toLowerCase().replace(/\s+/g, '_')}`,
      createdAt: new Date().toISOString().split('T')[0]
    };

    // Also add to folders
    this.data.folders.push({
      id: 'f_char_' + Date.now(),
      name: `${newChar.name} Assets`,
      path: `/${newChar.folder}`
    });

    this.data.characters.push(newChar);
    this.save();
    return newChar;
  },

  updateCharacter(id, updates) {
    const idx = this.data.characters.findIndex(c => c.id === id);
    if (idx !== -1) {
      this.data.characters[idx] = { ...this.data.characters[idx], ...updates };
      this.save();
      return this.data.characters[idx];
    }
    return null;
  },

  deleteCharacter(id) {
    this.data.characters = this.data.characters.filter(c => c.id !== id);
    this.save();
  },

  // Background operations
  getBackgrounds() {
    return this.data.backgrounds;
  },

  getBackgroundById(id) {
    return this.data.backgrounds.find(b => b.id === id) || this.data.backgrounds[0];
  },

  addBackground(bgObj) {
    const newBg = {
      id: 'bg_' + Date.now(),
      title: bgObj.title || 'Custom Background',
      url: bgObj.url || 'assets/backgrounds/cyberpunk_city.jpg',
      theme: bgObj.theme || 'Anime',
      lighting: bgObj.lighting || 'Default',
      folder: 'backgrounds'
    };
    this.data.backgrounds.push(newBg);
    this.save();
    return newBg;
  },

  // Voice operations
  getVoices() {
    return this.data.voices;
  },

  // Scene operations
  getScenes() {
    return this.data.scenes;
  },

  getSceneById(id) {
    return this.data.scenes.find(s => s.id === id) || null;
  },

  addScene(sceneObj) {
    const newScene = {
      id: 'scene_' + Date.now(),
      title: sceneObj.title || 'New Storyboard Scene',
      bgId: sceneObj.bgId || 'bg_cyberpunk',
      script: sceneObj.script || '',
      characters: sceneObj.characters || [],
      folder: 'scenes',
      createdAt: new Date().toISOString()
    };
    this.data.scenes.push(newScene);
    this.save();
    return newScene;
  },

  // Folders
  getFolders() {
    return this.data.folders;
  },

  // Import / Export
  exportJSON() {
    return JSON.stringify(this.data, null, 2);
  },

  importJSON(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.characters && parsed.backgrounds) {
        this.data = parsed;
        this.save();
        return true;
      }
    } catch (e) {
      console.error('Invalid JSON structure:', e);
    }
    return false;
  }
};
