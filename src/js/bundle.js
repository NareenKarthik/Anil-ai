/**
 * AnimeArt AI Character Studio — Master Universe Bundle
 * Includes:
 * - Multilingual Voice Synthesis (English, Tamil, Japanese, Chinese)
 * - World Heritage Sites (India, Japan, China, Egypt, Rome, Peru, Europe)
 * - Cosmic Planets & Moons (Mars, Moon, Saturn, Titan, Europa, Kepler-452b, Nebula X)
 * - Mythological Creatures & Alien Living Beings (Yali, Kitsune, Sphinx, Qilin, Xeno-Archon, Leviathan)
 * - Story Genres (Magic, Horror, Mystery, Romance, Family, Sci-Fi)
 * - Custom Superpower Engine & In-RAM 60FPS Video Renderer
 */

(function() {
  'use strict';

  /* ==========================================================================
     1. INTERNATIONALIZATION (i18n)
     ========================================================================== */
  const I18N = {
    currentLang: 'en',

    translations: {
      en: {
        appName: 'AnimeArt',
        appSubtitle: 'AI Character & Scene Studio',
        promoBanner: '⚡ Limited-time offer! Unlock 1 year of limitless AI Character Studio creation at',
        viewPlan: 'View Plan →',
        startForFree: 'Start for Free',
        pricing: 'Pricing',
        login: 'Login',
        help: 'Help',
        tokens: 'Tokens',
        searchPlaceholder: 'Search characters, planets, heritage, voices...',
        navHome: 'Home',
        secCreate: 'CREATE',
        navStudio: 'Anime Studio',
        navCreationWizard: '⚡ Creation Studio',
        navAMV: 'AMV Generator',
        navCharacter: 'Character Design',
        navWorld: 'World & Planets',
        navVoice: 'Voice & Audio',
        secAssets: 'ASSETS & DATABASE',
        navFolders: 'All Folders (DB)',
        navCharFolder: '📁 Character Assets',
        navBgFolder: '📁 Background Assets',
        navVoiceFolder: '📁 Voice Profiles',
        navScenesFolder: '📁 Storyboards & AMVs',
        secPinned: 'PINNED TOOLS',
        toolLipSync: 'Auto Lip-Sync',
        toolKeyframe: 'Keyframe Sync',
        toolUpscale: 'Upscale Anime',
        heroTitle: 'What would you like to create today?',
        heroTagline: 'Vibe Direct Now — AI Character, World & Voice Studio',
        tabStudio: 'Anime Studio',
        tabAMV: 'AMV',
        tabCharacter: 'Character',
        tabWorld: 'World & Planets',
        tabAudio: 'Audio',
        modeShort: 'Anime Short',
        modePromo: 'Character Promo',
        modeAMV: 'Action AMV',
        modeNovel: 'Visual Novel',
        modeMusic: 'Music Video',
        modeTrailer: 'Manga Trailer',
        scriptTitle: 'Director Script & Dialogue Engine',
        runScriptBtn: 'Play Scene & Speak Voice',
        stopScriptBtn: '⏹ Stop',
        exportVideoBtn: '🎥 Export AMV',
        clearScriptBtn: 'Clear',
        autoVoiceBadge: 'Auto-Voice Assignment: ACTIVE',
        presetEnglish: '🇬🇧 English Cyberpunk',
        presetTamil: '🇮🇳 Tamil Heritage Epic',
        presetJapanese: '🇯🇵 Japanese Samurai',
        presetChinese: '🇨🇳 Chinese Celestial',
        presetDuel: '⚔️ 4-Hero Duel',
        presetMars: '🪐 Mars Expedition',
        presetEuropa: '🌌 Europa Ocean',
        promptPlaceholder: 'Describe what anime scene, planet, heritage place or action you want to create...',
        charLabTitle: 'AI Character Creator & Memory Hub',
        charLabDesc: 'Design custom anime characters with assigned voice profiles, personality traits, and animation triggers.',
        newCharBtn: '+ Create New Character',
        charName: 'Character Name',
        charTitle: 'Title / Role',
        charLang: 'Native Language & Voice',
        charStyle: 'Visual Art Style',
        charPitch: 'Voice Pitch (0.5x - 2.0x)',
        charSpeed: 'Speech Speed (0.5x - 2.0x)',
        charBackstory: 'Backstory & Lore',
        testVoiceBtn: '🔊 Test Voice Synthesis',
        saveCharBtn: '💾 Save Character to Database',
        assetManagerTitle: 'Database & Asset Folders',
        assetManagerDesc: 'Organize characters, backgrounds, voice recordings, and storyboard scenes in dedicated folders.',
        exportDbBtn: '📥 Backup Database (JSON)',
        importDbBtn: '📤 Import DB'
      },
      ta: {
        appName: 'AnimeArt',
        appSubtitle: 'AI கதாப்பாத்திரம், உலக மரபு & விண்வெளி அரங்கம்',
        promoBanner: '⚡ வரையறுக்கப்பட்ட சலுகை! AI Character Studio-வில் 27% வரை தள்ளுபடி பெறுங்கள்.',
        viewPlan: 'திட்டங்களை பார்க்க →',
        startForFree: 'இலவசமாக தொடங்கவும்',
        pricing: 'விலை பட்டியல்',
        login: 'உள்நுழைக',
        help: 'உதவி',
        tokens: 'நாணயங்கள்',
        searchPlaceholder: 'கதாபாத்திரங்கள், கோள்கள், வரலாற்று தலங்களை தேடுங்கள்...',
        navHome: 'முகப்பு',
        secCreate: 'உருவாக்கு',
        navStudio: 'அனிமே ஸ்டுடியோ',
        navCreationWizard: '⚡ உருவாக்க அரங்கம்',
        navAMV: 'AMV ஜெனரேட்டர்',
        navCharacter: 'கதாபாத்திர வடிவமைப்பு',
        navWorld: 'உலகம் & கோள்கள்',
        navVoice: 'குரல் & ஒலி',
        secAssets: 'சொத்துக்கள் & தரவுத்தளம்',
        navFolders: 'அனைத்து கோப்புறைகள்',
        navCharFolder: '📁 கதாப்பாத்திர கோப்புறை',
        navBgFolder: '📁 பின்னணி கோப்புறை',
        navVoiceFolder: '📁 குரல் கோப்புறை',
        navScenesFolder: '📁 காட்சிகள் & AMVகள்',
        secPinned: 'முக்கிய கருவிகள்',
        toolLipSync: 'தானியங்கி உதட்டு அசைவு',
        toolKeyframe: 'கீஃப்ரேம் ஒத்திசைவு',
        toolUpscale: 'அனிமே தரம் உயர்த்து',
        heroTitle: 'இன்று நீங்கள் எதை உருவாக்க விரும்புகிறீர்கள்?',
        heroTagline: 'AI கதாப்பாத்திரம், உலக மரபு & பலமொழி குரல் அரங்கம்',
        tabStudio: 'அனிமே ஸ்டுடியோ',
        tabAMV: 'AMV',
        tabCharacter: 'கதாபாத்திரம்',
        tabWorld: 'உலகம் & கோள்கள்',
        tabAudio: 'ஒலி',
        modeShort: 'அனிமே குறும்படம்',
        modePromo: 'கதாபாத்திர ப்ரோமோ',
        modeAMV: 'ஆக்‌ஷன் AMV',
        modeNovel: 'விஷுவல் நாவல்',
        modeMusic: 'இசை வீடியோ',
        modeTrailer: 'மங்கா ட்ரெய்லர்',
        scriptTitle: 'இயக்குனர் ஸ்கிரிப்ட் & வசன என்ஜின்',
        runScriptBtn: 'காட்சியை இயக்கு & குரல் பேசு',
        stopScriptBtn: '⏹ நிறுத்து',
        exportVideoBtn: '🎥 வீடியோவை பதிவிறக்கு',
        clearScriptBtn: 'அழி',
        autoVoiceBadge: 'தானியங்கி குரல் பொருத்தம்: இயக்கத்தில்',
        presetEnglish: '🇬🇧 ஆங்கில சைபர்பங்க் காட்சி',
        presetTamil: '🇮🇳 தமிழ் காவிய பாரம்பரிய காட்சி',
        presetJapanese: '🇯🇵 ஜப்பானிய சாமுராய் காட்சி',
        presetChinese: '🇨🇳 சீன விண்மீன் மாய காட்சி',
        presetDuel: '⚔️ 4-ஹீரோ பலமொழி யுத்தம்',
        presetMars: '🪐 செவ்வாய் கோள் பயணம்',
        presetEuropa: '🌌 யூரோபா பனி கடல்',
        promptPlaceholder: 'நீங்கள் உருவாக்க விரும்பும் காட்சி, கோள் அல்லது பாரம்பரிய தலத்தை விவரிக்கவும்...',
        charLabTitle: 'AI கதாப்பாத்திர ஆய்வகம் & நினைவகம்',
        charLabDesc: 'குரல் சுயவிவரம் மற்றும் அனிமேஷன் விளைவுகளுடன் புதிய கதாப்பாத்திரங்களை வடிவமைக்கவும்.',
        newCharBtn: '+ புதிய கதாப்பாத்திரம் உருவாக்கு',
        charName: 'கதாபாத்திரத்தின் பெயர்',
        charTitle: 'பட்டம் / பதவி',
        charLang: 'தாய்மொழி',
        charStyle: 'கலை பாணி',
        charPitch: 'குரல் சுருதி (Pitch)',
        charSpeed: 'பேச்சு வேகம்',
        charBackstory: 'பின்புல கதை',
        testVoiceBtn: '🔊 குரல் சோதனை',
        saveCharBtn: '💾 தரவுத்தளத்தில் சேமி',
        assetManagerTitle: 'தரவுத்தளம் & கோப்புறைகள்',
        assetManagerDesc: 'கதாபாத்திரங்கள், பின்னணிகள், குரல்கள் மற்றும் காட்சிகளை தனித்தனி கோப்புறைகளில் நிர்வகிக்கவும்.',
        exportDbBtn: '📥 காப்புப்பிரதி (JSON)',
        importDbBtn: '📤 இறக்குமதி செய்'
      },
      ja: {
        appName: 'AnimeArt',
        appSubtitle: 'AIキャラクター＆世界遺産・惑星スタジオ',
        promoBanner: '⚡ 期間限定特典！年間プランで最大27%オフ！',
        viewPlan: 'プランを見る →',
        startForFree: '無料で始める',
        pricing: '料金',
        login: 'ログイン',
        help: 'ヘルプ',
        tokens: 'トークン',
        searchPlaceholder: 'キャラクター、惑星、世界遺産を検索...',
        navHome: 'ホーム',
        secCreate: '作成',
        navStudio: 'アニメスタジオ',
        navCreationWizard: '⚡ クリエイションスタジオ',
        navAMV: 'AMVジェネレーター',
        navCharacter: 'キャラクターデザイン',
        navWorld: '世界遺産＆宇宙惑星',
        navVoice: 'ボイス＆オーディオ',
        secAssets: 'アセット＆データベース',
        navFolders: 'すべてのフォルダ (DB)',
        navCharFolder: '📁 キャラクターフォルダ',
        navBgFolder: '📁 背景フォルダ',
        navVoiceFolder: '📁 ボイスフォルダ',
        navScenesFolder: '📁 ストーリーボード＆AMV',
        secPinned: '注目ツール',
        toolLipSync: '自動リップシンク',
        toolKeyframe: 'キーフレーム同期',
        toolUpscale: '画質向上',
        heroTitle: '今日は何を作成しますか？',
        heroTagline: 'Vibe Direct Now — AIキャラクター＆マルチ音声スタジオ',
        tabStudio: 'アニメスタジオ',
        tabAMV: 'AMV',
        tabCharacter: 'キャラクター',
        tabWorld: '世界＆惑星',
        tabAudio: 'オーディオ',
        modeShort: 'アニメショート',
        modePromo: 'キャラPV',
        modeAMV: 'バトルAMV',
        modeNovel: 'ノベルゲーム',
        modeMusic: 'ミュージックビデオ',
        modeTrailer: 'マンガ予告編',
        scriptTitle: 'ディレクタースクリプト＆台詞エンジン',
        runScriptBtn: 'シーン再生＆ボイス発声',
        stopScriptBtn: '⏹ 停止',
        exportVideoBtn: '🎥 動画書き出し',
        clearScriptBtn: 'クリア',
        autoVoiceBadge: '自動ボイス認識: 有効',
        presetEnglish: '🇬🇧 英語サイバーパンクシーン',
        presetTamil: '🇮🇳 タミル神話遺産シーン',
        presetJapanese: '🇯🇵 日本語サムライ決闘シーン',
        presetChinese: '🇨🇳 中国仙侠スターシーン',
        presetDuel: '⚔️ 4言語 英雄マルチバトル',
        presetMars: '🪐 火星コロニー探査',
        presetEuropa: '🌌 エウロパ氷底海',
        promptPlaceholder: '作成したいアニメシーン、惑星、遺産を入力...',
        charLabTitle: 'AIキャラクター作成＆記憶ハブ',
        charLabDesc: '音声プロファイル、性格設定、アニメーション効果を持つオリジナルキャラクターを作成。',
        newCharBtn: '+ 新規キャラクター作成',
        charName: 'キャラクター名',
        charTitle: '肩書 / 役割',
        charLang: '主要言語',
        charStyle: '作画スタイル',
        charPitch: '声の高さ (Pitch)',
        charSpeed: '発話速度',
        charBackstory: '背景設定・ストーリー',
        testVoiceBtn: '🔊 音声テスト',
        saveCharBtn: '💾 データベースに保存',
        assetManagerTitle: 'データベース＆フォルダ管理',
        assetManagerDesc: 'キャラクター、背景、音声、シーンプロジェクトをフォルダ毎に安全に整理・管理。',
        exportDbBtn: '📥 DBバックアップ (JSON)',
        importDbBtn: '📤 DBインポート'
      },
      zh: {
        appName: 'AnimeArt',
        appSubtitle: 'AI 动漫角色与世界遗产星际工坊',
        promoBanner: '⚡ 限时特惠！开启 1 年无限次 AI 动漫创作，最高立省 27%。',
        viewPlan: '查看方案 →',
        startForFree: '免费开始',
        pricing: '定价',
        login: '登录',
        help: '帮助',
        tokens: '代币',
        searchPlaceholder: '搜索角色、星球、世界遗产、声音...',
        navHome: '首页',
        secCreate: '创作',
        navStudio: '动漫工作室',
        navCreationWizard: '⚡ 智能创作者工坊',
        navAMV: 'AMV 生成器',
        navCharacter: '角色设计',
        navWorld: '世界遗产与宇宙星球',
        navVoice: '配音与音频',
        secAssets: '资产与数据库',
        navFolders: '所有文件夹 (数据库)',
        navCharFolder: '📁 角色资源文件夹',
        navBgFolder: '📁 背景资源文件夹',
        navVoiceFolder: '📁 语音配置文件夹',
        navScenesFolder: '📁 分镜与 AMV 文件夹',
        secPinned: '置顶工具',
        toolLipSync: '自动唇形同步',
        toolKeyframe: '关键帧同步',
        toolUpscale: '超清画质增强',
        heroTitle: '今天想创作什么？',
        heroTagline: 'Vibe Direct Now — AI 多语言角色与语音工作室',
        tabStudio: '动漫工作室',
        tabAMV: 'AMV',
        tabCharacter: '角色',
        tabWorld: '世界与星球',
        tabAudio: '音频',
        modeShort: '动漫短片',
        modePromo: '角色 PV',
        modeAMV: '热血 AMV',
        modeNovel: '视觉小说',
        modeMusic: '音乐视频',
        modeTrailer: '漫画预告片',
        scriptTitle: '导演脚本与台词引擎',
        runScriptBtn: '播放场景并配音朗读',
        stopScriptBtn: '⏹ 停止播放',
        exportVideoBtn: '🎥 导出 AMV',
        clearScriptBtn: '清空脚本',
        autoVoiceBadge: '自动角色配音匹配: 已启用',
        presetEnglish: '🇬🇧 英语赛博朋克场景',
        presetTamil: '🇮🇳 泰米尔古遗址史诗场景',
        presetJapanese: '🇯🇵 日语武士对决场景',
        presetChinese: '🇨🇳 中文仙侠星河场景',
        presetDuel: '⚔️ 四语言 英雄联动对决',
        presetMars: '🪐 火星基地探险',
        presetEuropa: '🌌 木卫二冰下海',
        promptPlaceholder: '描述你想生成的动漫场景、星球、古遗址或动作...',
        charLabTitle: 'AI 角色工坊与记忆库',
        charLabDesc: '创建专属动漫角色，设定独立语音音色、性格设定与动作特效。',
        newCharBtn: '+ 新建角色',
        charName: '角色名称',
        charTitle: '称号 / 角色定位',
        charLang: '主要语言',
        charStyle: '美术画风',
        charPitch: '音高 (Pitch)',
        charSpeed: '语速',
        charBackstory: '背景故事与设定',
        testVoiceBtn: '🔊 试听配音',
        saveCharBtn: '💾 保存角色至数据库',
        assetManagerTitle: '数据库与文件夹管理',
        assetManagerDesc: '按文件夹清晰管理角色、场景背景、语音音频及导出视频工程。',
        exportDbBtn: '📥 备份数据库 (JSON)',
        importDbBtn: '📤 导入数据库'
      }
    },

    t(key) {
      const lang = this.currentLang;
      if (this.translations[lang] && this.translations[lang][key]) {
        return this.translations[lang][key];
      }
      return (this.translations.en && this.translations.en[key]) || key;
    },

    setLanguage(lang) {
      if (this.translations[lang]) {
        this.currentLang = lang;
        document.documentElement.lang = lang;
        this.updateDOM();
        return true;
      }
      return false;
    },

    updateDOM() {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = this.t(key);
      });
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = this.t(key);
      });
      document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        el.title = this.t(key);
      });
    }
  };

  /* ==========================================================================
     2. MASTER DATABASE: CHARACTERS, HERITAGE, PLANETS & CREATURES
     ========================================================================== */
  const Database = {
    STORAGE_KEY: 'animeart_studio_universe_v3',

    data: {
      characters: [
        {
          id: 'char_kaito',
          name: 'Kaito',
          role: 'Cyberpunk Blade Runner',
          genre: 'scifi',
          lang: 'en',
          pitch: 1.05,
          speed: 1.0,
          avatar: 'assets/characters/kaito.jpg',
          style: 'Neo-Tokyo Cyberpunk',
          gender: 'Male',
          backstory: 'A cybernetically enhanced blade wielder navigating the rainy alleys of Neo Tokyo in 2142.',
          superpower: { name: 'Volt Overdrive Surge', element: 'electric', intensity: 9, shout: 'Maximum Overdrive — Voltage Surge!' },
          actions: ['Power Surge', 'Cyberpunk Dash', 'Combat Stance'],
          folder: 'characters/kaito'
        },
        {
          id: 'char_ananya',
          name: 'Ananya',
          role: 'Sun Priestess & Royal Warrior',
          genre: 'magic',
          lang: 'ta',
          pitch: 1.15,
          speed: 0.95,
          avatar: 'assets/characters/ananya.jpg',
          style: 'Ancient Solar Fantasy',
          gender: 'Female',
          backstory: 'The chosen champion of the Sun Temple, wielding ancient golden runes of the Chola empire.',
          superpower: { name: 'Solar Flare Judgement', element: 'solar', intensity: 10, shout: 'சூரிய சுடரே எழுந்திடுக! புனித ஒளி பாய்க!' },
          actions: ['Solar Flare', 'Smile', 'Magic Cast'],
          folder: 'characters/ananya'
        },
        {
          id: 'char_ren',
          name: 'Ren',
          role: 'Shadow Ronin & Katana Master',
          genre: 'mystery',
          lang: 'ja',
          pitch: 0.85,
          speed: 1.0,
          avatar: 'assets/characters/ren.jpg',
          style: 'Feudal Samurai Noir',
          gender: 'Male',
          backstory: 'A lone swordsman who wanders Kyoto shrines and moonlit mountains.',
          superpower: { name: 'Shadow Blade Singularity', element: 'shadow', intensity: 8, shout: '我が刃に宿る影よ、全てを断ち切れ！' },
          actions: ['Sword Slash', 'Battle Stance', 'Focus'],
          folder: 'characters/ren'
        },
        {
          id: 'char_mei',
          name: 'Mei',
          role: 'Celestial Starlight Mage',
          genre: 'magic',
          lang: 'zh',
          pitch: 1.25,
          speed: 1.05,
          avatar: 'assets/characters/mei.jpg',
          style: 'Xianxia Star Fantasy',
          gender: 'Female',
          backstory: 'A celestial enchantress weaving constellations and Great Wall starlight charms.',
          superpower: { name: 'Starlight Lotus Cascade', element: 'celestial', intensity: 9, shout: '九霄星河，为我号令，星华绽放！' },
          actions: ['Magic Cast', 'Smile', 'Celestial Lotus'],
          folder: 'characters/mei'
        }
      ],

      // World Heritage Sites (Global Ancient Civilizations & Wonders)
      heritageSites: [
        {
          id: 'h_brihadeeswarar',
          name: 'Brihadeeswarar & Madurai Temple',
          country: 'India 🇮🇳 (Tamil Nadu)',
          period: 'Chola Dynasty / 1010 CE',
          category: 'heritage',
          bgUrl: 'assets/backgrounds/fantasy_temple.jpg',
          desc: 'Magnificent monolithic granitic Gopuram temple with sacred golden lamps and eternal cosmic pillars.',
          vfxShader: 'golden_solar'
        },
        {
          id: 'h_fushimi_inari',
          name: 'Fushimi Inari Torii Shrine',
          country: 'Japan 🇯🇵 (Kyoto)',
          period: 'Heian Period / 711 CE',
          category: 'heritage',
          bgUrl: 'assets/backgrounds/cherry_shrine.jpg',
          desc: 'Thousands of vermilion Torii gates stretching through serene mountain paths with falling sakura petals.',
          vfxShader: 'sakura_petals'
        },
        {
          id: 'h_great_wall',
          name: 'The Great Wall & Imperial Palace',
          country: 'China 🇨🇳 (Beijing)',
          period: 'Ming Dynasty / 7th Century BCE',
          category: 'heritage',
          bgUrl: 'assets/backgrounds/fantasy_temple.jpg',
          desc: 'Endless majestic stone fortification weaving across misty mountain peaks with celestial lanterns.',
          vfxShader: 'celestial_runes'
        },
        {
          id: 'h_pyramids',
          name: 'Great Pyramids of Giza & Sphinx',
          country: 'Egypt 🇪🇬 (Cairo)',
          period: 'Old Kingdom / 2560 BCE',
          category: 'heritage',
          bgUrl: 'assets/backgrounds/fantasy_temple.jpg',
          desc: 'Monumental golden limestone pyramids aligned with Orion under desert starfields.',
          vfxShader: 'solar_amber'
        },
        {
          id: 'h_colosseum',
          name: 'Roman Colosseum & Forum',
          country: 'Italy 🇮🇹 (Rome)',
          period: 'Flavian Dynasty / 80 CE',
          category: 'heritage',
          bgUrl: 'assets/backgrounds/horror_castle.jpg',
          desc: 'The greatest amphitheater of antiquity standing proud under twilight torchlights.',
          vfxShader: 'twilight_embers'
        },
        {
          id: 'h_machu_picchu',
          name: 'Machu Picchu Cloud Citadel',
          country: 'Peru 🇵🇪 (Andes)',
          period: 'Inca Empire / 1450 CE',
          category: 'heritage',
          bgUrl: 'assets/backgrounds/cherry_shrine.jpg',
          desc: 'Ancient stone sanctuary nestled atop emerald Andean peaks among mist and floating condors.',
          vfxShader: 'mountain_mist'
        }
      ],

      // Cosmic Planets, Moons & Deep Space Realities
      planets: [
        {
          id: 'p_mars',
          name: 'Planet Mars (Ares Red Dunes)',
          type: 'Terrestrial Planet / Solar System',
          category: 'planets',
          bgUrl: 'assets/backgrounds/horror_castle.jpg',
          desc: 'Crimson rust plains, deep Valles Marineris canyons, and advanced terraforming geodesic domes.',
          atmosphere: 'Red Dust Vortex',
          vfxShader: 'mars_dust'
        },
        {
          id: 'p_moon',
          name: 'The Moon (Lunar Tycho Outpost)',
          type: 'Natural Satellite / Earth Orbit',
          category: 'planets',
          bgUrl: 'assets/backgrounds/cyberpunk_city.jpg',
          desc: 'Zero-gravity crater colonies with breathtaking panoramic views of radiant blue Earthrise.',
          atmosphere: 'Zero-G Starfield',
          vfxShader: 'lunar_stars'
        },
        {
          id: 'p_saturn_titan',
          name: 'Saturn Rings & Titan Moon',
          type: 'Gas Giant & Cryo-Methane Ocean',
          category: 'planets',
          bgUrl: 'assets/backgrounds/cyberpunk_city.jpg',
          desc: 'Colossal glowing golden icy rings spanning hundreds of thousands of kilometers over Titan methane seas.',
          atmosphere: 'Golden Ice Shards',
          vfxShader: 'golden_ice'
        },
        {
          id: 'p_europa',
          name: 'Jupiter Moon Europa',
          type: 'Ice World / Subsurface Ocean',
          category: 'planets',
          bgUrl: 'assets/backgrounds/fantasy_temple.jpg',
          desc: 'Vast subterranean alien oceans sealed beneath cracked blue ice sheets with geothermal vents.',
          atmosphere: 'Bioluminescent Cryo-Glow',
          vfxShader: 'europa_blue'
        },
        {
          id: 'p_kepler452b',
          name: 'Kepler-452b Super-Earth',
          type: 'Exoplanet / Cygnus Constellation',
          category: 'planets',
          bgUrl: 'assets/backgrounds/cherry_shrine.jpg',
          desc: 'Lush alien world orbiting a twin sun with towering bioluminescent crystal forests.',
          atmosphere: 'Crystal Aurora',
          vfxShader: 'crystal_aurora'
        },
        {
          id: 'p_nebula_x',
          name: 'Nebula X-99 Cosmic Void',
          type: 'Deep Space Stargate',
          category: 'planets',
          bgUrl: 'assets/backgrounds/cyberpunk_city.jpg',
          desc: 'Vibrant swirling purple-cyan interstellar cloud housing ancient stargate portals.',
          atmosphere: 'Cosmic Warp Drive',
          vfxShader: 'warp_speed'
        }
      ],

      // Living Beings, Alien Entities & Mythological Guardians
      creatures: [
        {
          id: 'cr_yali',
          name: 'Golden Yali Guardian',
          category: 'creatures',
          origin: 'Tamil Heritage / Ancient Temple',
          avatar: 'assets/characters/ananya.jpg',
          role: 'Divine Mythical Guardian',
          power: 'Solar Roar of Righteousness',
          desc: 'Sacred mythical chimera with the body of a lion, tusks of an elephant, and golden sun aura.',
          dialogue: 'Yali: "இந்த புனித கோயிலை அசுர சக்திகளிடமிருந்து காப்போம்!" [action: Solar Flare]'
        },
        {
          id: 'cr_kitsune',
          name: 'Nine-Tailed Celestial Kitsune',
          category: 'creatures',
          origin: 'Japanese Shinto Mythology',
          avatar: 'assets/characters/ren.jpg',
          role: 'Fox Spirit of Foxfire',
          power: 'Foxfire Illusion Dance',
          desc: 'Wise spirit possessing nine mystical tails glowing with blue spiritual flames.',
          dialogue: 'Kitsune: "狐火の導きに従え。迷いし者に光を。" [action: Magic Cast]'
        },
        {
          id: 'cr_xeno_archon',
          name: 'Martian Xeno-Archon',
          category: 'creatures',
          origin: 'Planet Mars Ancient Core',
          avatar: 'assets/characters/kaito.jpg',
          role: 'Psionic Alien Entity',
          power: 'Ares Gravitational Singularity',
          desc: 'Transcendent psionic being of Mars capable of manipulating electromagnetic dust storms.',
          dialogue: 'Archon: "Human explorers, welcome to the red domain of Ares." [action: Power Surge]'
        },
        {
          id: 'cr_qilin',
          name: 'Celestial Jade Qilin',
          category: 'creatures',
          origin: 'Chinese Celestial Realm',
          avatar: 'assets/characters/mei.jpg',
          role: 'Auspicious Cosmic Beast',
          power: 'Starlight Blessing of Peace',
          desc: 'Ethereal dragon-stag with shimmering jade scales that walks upon clouds without touching grass.',
          dialogue: 'Qilin: "瑞兽降世，万物皆安，星辉引路！" [action: Magic Cast]'
        },
        {
          id: 'cr_leviathan',
          name: 'Europa Luminite Leviathan',
          category: 'creatures',
          origin: 'Jupiter Moon Europa Oceans',
          avatar: 'assets/characters/mei.jpg',
          role: 'Abyssal Cryo-Entity',
          power: 'Sub-Zero Cryo Resonance',
          desc: 'Immense bioluminescent sea entity drifting through Europa deep sub-glacial waters.',
          dialogue: 'Leviathan: "Echoes from the deep ice... The oceans awaken." [action: Magic Cast]'
        }
      ],

      backgrounds: [
        { id: 'bg_cyberpunk', title: 'Neo Tokyo Cyberpunk Alley', url: 'assets/backgrounds/cyberpunk_city.jpg', genre: 'scifi', theme: 'Cyberpunk', lighting: 'Neon Rain Night' },
        { id: 'bg_shrine', title: 'Cherry Blossom Shrine & Torii Gate', url: 'assets/backgrounds/cherry_shrine.jpg', genre: 'romance', theme: 'Traditional Romance', lighting: 'Golden Hour Sunset' },
        { id: 'bg_temple', title: 'Ancient Gopuram Temple of Light', url: 'assets/backgrounds/fantasy_temple.jpg', genre: 'magic', theme: 'South Asian Fantasy', lighting: 'Starlit Twilight' },
        { id: 'bg_classroom', title: 'Sunset High School Classroom', url: 'assets/backgrounds/anime_classroom.jpg', genre: 'family', theme: 'Slice of Life & Family', lighting: 'Warm Evening Sun' },
        { id: 'bg_horror', title: 'Blood Moon Gothic Fortress', url: 'assets/backgrounds/horror_castle.jpg', genre: 'horror', theme: 'Dark Horror Mystery', lighting: 'Crimson Blood Moon' }
      ],

      voices: [
        { id: 'v1', name: 'Kaito Voice (English)', lang: 'en-US', pitch: 1.05, rate: 1.0, type: 'Male Heroic' },
        { id: 'v2', name: 'Ananya Voice (Tamil)', lang: 'ta-IN', pitch: 1.15, rate: 0.95, type: 'Female Queen' },
        { id: 'v3', name: 'Ren Voice (Japanese)', lang: 'ja-JP', pitch: 0.85, rate: 1.0, type: 'Male Samurai' },
        { id: 'v4', name: 'Mei Voice (Chinese)', lang: 'zh-CN', pitch: 1.25, rate: 1.05, type: 'Female Mystic' }
      ],

      scenes: [
        {
          id: 'scene_1',
          title: 'Multilingual 4-Hero Epic Duel',
          bgId: 'bg_cyberpunk',
          script: `Kaito: "Welcome to Neo Tokyo, let's begin the mission!" [action: Power Surge]\nAnanya: "வணக்கம்! நாங்கள் நிச்சயம் வெற்றி பெறுவோம்." [action: Solar Flare]\nRen: "覚悟はいいか？行くぞ！" [action: Sword Slash]\nMei: "漫天星辰，为我们引路，光华流转！" [action: Magic Cast]\nKaito: "Let's finish this together — Maximum Overdrive!" [action: Cyberpunk Dash]`,
          characters: ['Kaito', 'Ananya', 'Ren', 'Mei']
        }
      ]
    },

    init() {
      try {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed && parsed.characters && parsed.characters.length > 0) {
            this.data = parsed;
          }
        }
      } catch (e) {}
    },

    save() {
      try {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
      } catch (e) {}
    },

    getCharacters() { return this.data.characters; },
    getCharacterByName(name) {
      if (!name) return null;
      const clean = name.trim().toLowerCase();
      return this.data.characters.find(c => c.name.toLowerCase() === clean) || null;
    },
    getCharacterById(id) {
      return this.data.characters.find(c => c.id === id) || null;
    },
    getHeritageSites() { return this.data.heritageSites || []; },
    getPlanets() { return this.data.planets || []; },
    getCreatures() { return this.data.creatures || []; },
    getBackgrounds() { return this.data.backgrounds; },
    getBackgroundById(id) {
      return this.data.backgrounds.find(b => b.id === id) || this.data.backgrounds[0];
    },
    getBackgroundsByGenre(genre) {
      return this.data.backgrounds.filter(b => b.genre === genre);
    },
    getVoices() { return this.data.voices; },
    getScenes() { return this.data.scenes; },
    getSceneById(id) { return this.data.scenes.find(s => s.id === id) || null; },

    addCharacter(charObj) {
      const newChar = {
        id: 'char_' + Date.now(),
        name: charObj.name || 'Hero',
        role: charObj.role || 'Protagonist',
        genre: charObj.genre || 'scifi',
        lang: charObj.lang || 'en',
        pitch: parseFloat(charObj.pitch) || 1.0,
        speed: parseFloat(charObj.speed) || 1.0,
        avatar: charObj.avatar || 'assets/characters/kaito.jpg',
        style: charObj.style || 'Anime',
        gender: charObj.gender || 'Unknown',
        backstory: charObj.backstory || '',
        superpower: charObj.superpower || { name: 'Energy Awakening', element: 'electric', intensity: 8, shout: 'Power Unleashed!' },
        actions: ['Power Surge', 'Smile', 'Battle Stance'],
        folder: `characters/${charObj.name.toLowerCase().replace(/\s+/g, '_')}`
      };
      this.data.characters.push(newChar);
      this.save();
      return newChar;
    },

    addBackground(bgObj) {
      const newBg = {
        id: 'bg_' + Date.now(),
        title: bgObj.title || 'Custom Background',
        url: bgObj.url,
        genre: bgObj.genre || 'magic',
        theme: bgObj.theme || 'Custom Art',
        lighting: 'Dynamic'
      };
      this.data.backgrounds.push(newBg);
      this.save();
      return newBg;
    },

    exportJSON() { return JSON.stringify(this.data, null, 2); },
    importJSON(str) {
      try {
        const parsed = JSON.parse(str);
        if (parsed.characters && parsed.backgrounds) {
          this.data = parsed;
          this.save();
          return true;
        }
      } catch (e) {}
      return false;
    }
  };

  /* ==========================================================================
     3. MULTILINGUAL VOICE & SPEECH SYNTHESIS ENGINE
     ========================================================================== */
  const VoiceEngine = {
    synth: window.speechSynthesis || null,
    audioCtx: null,
    isPlaying: false,
    audioLevel: 0,
    voices: [],

    init() {
      this.loadVoices();
      if (this.synth) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
      try {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (AC) this.audioCtx = new AC();
      } catch (e) {}
    },

    loadVoices() {
      if (this.synth) this.voices = this.synth.getVoices() || [];
    },

    findBestVoice(lang) {
      if (!this.voices || this.voices.length === 0) this.loadVoices();
      const code = lang.toLowerCase();
      const matched = this.voices.filter(v => v.lang && v.lang.toLowerCase().startsWith(code));
      return matched.length > 0 ? matched[0] : (this.voices[0] || null);
    },

    playSuperpowerTone(element = 'electric') {
      if (!this.audioCtx) return;
      try {
        if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        
        let freq = 440;
        if (element === 'fire') { osc.type = 'sawtooth'; freq = 220; }
        else if (element === 'electric') { osc.type = 'square'; freq = 580; }
        else if (element === 'ice') { osc.type = 'sine'; freq = 880; }
        else if (element === 'solar') { osc.type = 'triangle'; freq = 520; }
        else if (element === 'shadow') { osc.type = 'sawtooth'; freq = 130; }
        
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
        gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 1.2);
        
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start();
        osc.stop(this.audioCtx.currentTime + 1.2);
      } catch (e) {}
    },

    speak(options = {}) {
      return new Promise((resolve) => {
        const { text = '', lang = 'en', pitch = 1.0, rate = 1.0, onStart = null, onEnd = null, onLipSync = null } = options;
        if (!text || !text.trim()) { resolve(); return; }

        if (this.synth) this.synth.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        const voice = this.findBestVoice(lang);
        if (voice) utterance.voice = voice;

        if (lang === 'ta') utterance.lang = 'ta-IN';
        else if (lang === 'ja') utterance.lang = 'ja-JP';
        else if (lang === 'zh') utterance.lang = 'zh-CN';
        else utterance.lang = 'en-US';

        utterance.pitch = Math.max(0.5, Math.min(2.0, pitch));
        utterance.rate = Math.max(0.5, Math.min(2.0, rate));

        let lipSyncTimer = null;
        this.isPlaying = true;

        const startLipSync = () => {
          lipSyncTimer = setInterval(() => {
            if (!this.isPlaying) return;
            const level = Math.sin(Date.now() / 90) * 0.4 + 0.5 + Math.random() * 0.2;
            this.audioLevel = Math.max(0, Math.min(1, level));
            if (onLipSync) onLipSync(this.audioLevel);
          }, 50);
        };

        const stopLipSync = () => {
          this.isPlaying = false;
          this.audioLevel = 0;
          if (lipSyncTimer) clearInterval(lipSyncTimer);
          if (onLipSync) onLipSync(0);
        };

        utterance.onstart = () => {
          startLipSync();
          if (onStart) onStart();
        };

        utterance.onend = () => {
          stopLipSync();
          if (onEnd) onEnd();
          resolve();
        };

        utterance.onerror = () => {
          stopLipSync();
          if (onEnd) onEnd();
          resolve();
        };

        const dur = Math.max(1600, (text.length / 8) * 1000 / rate);
        const safetyTimer = setTimeout(() => {
          if (this.isPlaying) {
            stopLipSync();
            resolve();
          }
        }, dur + 2500);

        const oldEnd = utterance.onend;
        utterance.onend = (e) => {
          clearTimeout(safetyTimer);
          oldEnd(e);
        };

        if (this.synth) {
          this.synth.speak(utterance);
        } else {
          startLipSync();
          setTimeout(() => {
            stopLipSync();
            resolve();
          }, dur);
        }
      });
    },

    stop() {
      this.isPlaying = false;
      this.audioLevel = 0;
      if (this.synth) this.synth.cancel();
    }
  };

  /* ==========================================================================
     4. 60FPS CANVAS SCENE & INTERPLANETARY / HERITAGE SHADER ENGINE
     ========================================================================== */
  const CanvasEngine = {
    canvas: null,
    ctx: null,
    width: 1280,
    height: 720,
    bgImage: null,
    bgLoaded: false,
    currentChar: null,
    charImage: null,
    charLoaded: false,
    activeGenre: 'scifi',
    activeShader: 'default',
    activeSuperpower: null,
    time: 0,
    shakeAmount: 0,
    lipSyncLevel: 0,
    currentAction: null,
    actionTimer: 0,
    particles: [],
    slashTrails: [],
    lightningBolts: [],
    arcaneCircles: [],
    mediaRecorder: null,
    recordedChunks: [],
    isRecording: false,

    init(canvasEl) {
      this.canvas = canvasEl;
      this.ctx = canvasEl.getContext('2d');
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.initParticles();
      this.startLoop();
    },

    setBackground(url) {
      this.bgLoaded = false;
      const img = new Image();
      img.src = url;
      img.onload = () => {
        this.bgImage = img;
        this.bgLoaded = true;
      };
    },

    setCharacter(charObj) {
      this.currentChar = charObj;
      this.charLoaded = false;
      if (charObj && charObj.superpower) {
        this.activeSuperpower = charObj.superpower;
      }
      if (!charObj || !charObj.avatar) return;
      const img = new Image();
      img.src = charObj.avatar;
      img.onload = () => {
        this.charImage = img;
        this.charLoaded = true;
      };
    },

    setGenre(genreKey) {
      this.activeGenre = genreKey;
      this.initParticles();
    },

    setShader(shaderName) {
      this.activeShader = shaderName || 'default';
      this.initParticles();
    },

    setLipSync(val) {
      this.lipSyncLevel = val || 0;
    },

    triggerSuperpower(powerObj) {
      const p = powerObj || this.activeSuperpower;
      if (!p) return;
      this.currentAction = `SUPERPOWER: ${p.name.toUpperCase()}`;
      this.actionTimer = 240;
      this.shakeAmount = 14;
      VoiceEngine.playSuperpowerTone(p.element);

      if (p.element === 'electric') this.createLightning();
      else if (p.element === 'fire') this.createSparks('#ff4500', 60);
      else if (p.element === 'ice') this.createSparks('#00ffff', 50);
      else if (p.element === 'solar') this.createSparks('#ffb703', 70);
      else if (p.element === 'shadow') this.createSparks('#7209b7', 50);
      else if (p.element === 'celestial') this.createArcaneRunes();
      else this.createSparks('#ff2a85', 50);
    },

    triggerAction(name) {
      this.currentAction = name;
      this.actionTimer = 200;
      this.shakeAmount = 10;

      if (name.includes('Sword') || name.includes('Slash')) {
        this.slashTrails.push({ x1: 200, y1: 150, x2: 1080, y2: 600, progress: 0 });
      } else if (name.includes('Power') || name.includes('Cyber')) {
        this.createLightning();
      } else if (name.includes('Solar') || name.includes('Sun')) {
        this.createSparks('#ffb703', 45);
      } else if (name.includes('Magic') || name.includes('Star')) {
        this.createArcaneRunes();
      } else {
        this.createSparks('#ff2a85', 30);
      }
    },

    createLightning() {
      this.lightningBolts = [];
      for (let b = 0; b < 6; b++) {
        const pts = [];
        let curX = 640 + (Math.random() - 0.5) * 250;
        let curY = 180;
        pts.push({ x: curX, y: curY });
        for (let i = 0; i < 7; i++) {
          curX += (Math.random() - 0.5) * 120;
          curY += 50 + Math.random() * 35;
          pts.push({ x: curX, y: curY });
        }
        this.lightningBolts.push({ pts, life: 30 });
      }
    },

    createArcaneRunes() {
      this.arcaneCircles.push({ x: 640, y: 420, radius: 120, rotation: 0, life: 180 });
      this.createSparks('#4cc9f0', 50);
    },

    createSparks(color, count = 40) {
      for (let i = 0; i < count; i++) {
        const a = Math.random() * Math.PI * 2;
        const s = Math.random() * 9 + 3;
        this.particles.push({
          x: 640,
          y: 380,
          size: Math.random() * 6 + 2,
          speedX: Math.cos(a) * s,
          speedY: Math.sin(a) * s,
          color,
          life: 55,
          type: 'spark'
        });
      }
    },

    initParticles() {
      this.particles = [];
      const shader = this.activeShader;
      const count = shader.includes('mars') || shader.includes('stars') ? 55 : 35;

      for (let i = 0; i < count; i++) {
        let pType = 'petal';
        let pColor = 'rgba(255, 180, 220, 0.6)';
        let speedX = (Math.random() - 0.5) * 1.5 + 0.6;
        let speedY = Math.random() * 1.2 + 0.5;

        if (shader === 'mars_dust') {
          pType = 'dust';
          pColor = 'rgba(230, 70, 40, 0.65)';
          speedX = Math.random() * 4 + 2;
          speedY = (Math.random() - 0.5) * 1.2;
        } else if (shader === 'lunar_stars' || shader === 'warp_speed') {
          pType = 'star';
          pColor = 'rgba(180, 240, 255, 0.85)';
          speedX = (Math.random() - 0.5) * 0.4;
          speedY = (Math.random() - 0.5) * 0.4;
        } else if (shader === 'europa_blue') {
          pType = 'bubble';
          pColor = 'rgba(0, 240, 255, 0.6)';
          speedY = -Math.random() * 1.5 - 0.5;
        } else if (shader === 'golden_ice' || shader === 'golden_solar') {
          pType = 'spark';
          pColor = 'rgba(255, 183, 3, 0.7)';
        }

        this.particles.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          size: Math.random() * 5 + 2,
          speedX,
          speedY,
          color: pColor,
          type: pType
        });
      }
    },

    startLoop() {
      const loop = () => {
        this.time += 0.016;
        this.update();
        this.render();
        requestAnimationFrame(loop);
      };
      requestAnimationFrame(loop);
    },

    update() {
      if (this.shakeAmount > 0) {
        this.shakeAmount *= 0.9;
        if (this.shakeAmount < 0.2) this.shakeAmount = 0;
      }
      if (this.actionTimer > 0) {
        this.actionTimer--;
        if (this.actionTimer <= 0) this.currentAction = null;
      }

      this.particles.forEach((p, idx) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.life !== undefined) {
          p.life--;
          if (p.life <= 0) this.particles.splice(idx, 1);
        } else {
          if (p.y > this.height + 15) { p.y = -15; p.x = Math.random() * this.width; }
          if (p.y < -15) { p.y = this.height + 15; p.x = Math.random() * this.width; }
          if (p.x > this.width + 15) { p.x = -15; }
        }
      });

      this.arcaneCircles.forEach((c, idx) => {
        c.rotation += 0.02;
        c.life--;
        if (c.life <= 0) this.arcaneCircles.splice(idx, 1);
      });

      this.slashTrails.forEach((s, idx) => {
        s.progress += 0.1;
        if (s.progress > 1) this.slashTrails.splice(idx, 1);
      });

      this.lightningBolts.forEach((b, idx) => {
        b.life--;
        if (b.life <= 0) this.lightningBolts.splice(idx, 1);
      });
    },

    render() {
      const ctx = this.ctx;
      if (!ctx) return;

      ctx.save();
      ctx.clearRect(0, 0, this.width, this.height);

      if (this.shakeAmount > 0) {
        ctx.translate((Math.random() - 0.5) * this.shakeAmount * 2, (Math.random() - 0.5) * this.shakeAmount * 2);
      }

      // Background Rendering with Ken Burns pan
      if (this.bgLoaded && this.bgImage) {
        const zoom = 1.0 + Math.sin(this.time * 0.2) * 0.02;
        const w = this.width * zoom;
        const h = this.height * zoom;
        ctx.drawImage(this.bgImage, (this.width - w) / 2, (this.height - h) / 2, w, h);
      } else {
        ctx.fillStyle = '#0f0f18';
        ctx.fillRect(0, 0, this.width, this.height);
      }

      // Planetary & Atmosphere Shader Tint
      this.drawAtmosphereTint(ctx);

      // Arcane Summon Circles (Magic/Superpower)
      this.drawArcaneCircles(ctx);

      // Character / Creature Rendering
      if (this.charLoaded && this.charImage) {
        const breath = Math.sin(this.time * 2.5) * 5;
        const charW = 460;
        const charH = 613;
        const charX = (this.width - charW) / 2;
        const charY = this.height - charH + 30 + breath;

        // Dynamic Glow Aura
        if (this.currentAction || this.activeSuperpower) {
          ctx.save();
          ctx.shadowBlur = this.currentAction ? 45 : 20;
          ctx.shadowColor = this.activeSuperpower && this.activeSuperpower.element === 'solar' ? '#ffb703' :
                             this.activeSuperpower && this.activeSuperpower.element === 'electric' ? '#00f0ff' :
                             this.activeSuperpower && this.activeSuperpower.element === 'shadow' ? '#9d4edd' : '#ff2a85';
          ctx.drawImage(this.charImage, charX, charY, charW, charH);
          ctx.restore();
        }

        ctx.save();
        ctx.beginPath();
        ctx.roundRect(charX, charY, charW, charH, [20, 20, 0, 0]);
        ctx.clip();
        ctx.drawImage(this.charImage, charX, charY, charW, charH);
        ctx.restore();

        // Lip sync mouth
        if (this.lipSyncLevel > 0.05) {
          const mouthX = charX + charW * 0.49;
          const mouthY = charY + charH * 0.42;
          const openH = this.lipSyncLevel * 14 + 2;
          const openW = 16 + this.lipSyncLevel * 6;

          ctx.fillStyle = '#7a142c';
          ctx.beginPath();
          ctx.ellipse(mouthX, mouthY, openW / 2, openH / 2, 0, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.ellipse(mouthX, mouthY - openH * 0.2, openW * 0.3, 2, 0, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Slashes & Lightning
      this.slashTrails.forEach(s => {
        ctx.save();
        ctx.strokeStyle = '#ff2a85';
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 20;
        ctx.lineWidth = 10 * (1 - s.progress);
        ctx.beginPath();
        ctx.moveTo(s.x1, s.y1);
        ctx.lineTo(s.x1 + (s.x2 - s.x1) * s.progress, s.y1 + (s.y2 - s.y1) * s.progress);
        ctx.stroke();
        ctx.restore();
      });

      this.lightningBolts.forEach(b => {
        if (!b.pts || b.pts.length < 2) return;
        ctx.save();
        ctx.strokeStyle = '#00f0ff';
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 15;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(b.pts[0].x, b.pts[0].y);
        for (let i = 1; i < b.pts.length; i++) ctx.lineTo(b.pts[i].x, b.pts[i].y);
        ctx.stroke();
        ctx.restore();
      });

      // Atmosphere Particles
      this.particles.forEach(p => {
        ctx.save();
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Action Title HUD Badge
      if (this.currentAction) {
        ctx.fillStyle = 'rgba(10, 10, 18, 0.88)';
        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(460, 24, 360, 44, 22);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14.5px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`⚡ ${this.currentAction.toUpperCase()}`, 640, 51);
      }

      ctx.restore();
    },

    drawAtmosphereTint(ctx) {
      if (this.activeShader === 'mars_dust') {
        ctx.fillStyle = 'rgba(217, 40, 20, 0.18)';
        ctx.fillRect(0, 0, this.width, this.height);
      } else if (this.activeShader === 'europa_blue') {
        ctx.fillStyle = 'rgba(0, 180, 255, 0.15)';
        ctx.fillRect(0, 0, this.width, this.height);
      } else if (this.activeShader === 'golden_solar') {
        ctx.fillStyle = 'rgba(255, 183, 3, 0.12)';
        ctx.fillRect(0, 0, this.width, this.height);
      }
    },

    drawArcaneCircles(ctx) {
      this.arcaneCircles.forEach(c => {
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate(c.rotation);
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.6)';
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 18;
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(0, 0, c.radius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, c.radius * 0.7, 0, Math.PI * 2);
        ctx.stroke();

        for (let i = 0; i < 6; i++) {
          const a = (i * Math.PI) / 3;
          ctx.beginPath();
          ctx.moveTo(Math.cos(a) * c.radius * 0.7, Math.sin(a) * c.radius * 0.7);
          ctx.lineTo(Math.cos(a + 2) * c.radius * 0.7, Math.sin(a + 2) * c.radius * 0.7);
          ctx.stroke();
        }
        ctx.restore();
      });
    },

    startRecording() {
      if (this.isRecording) return;
      this.recordedChunks = [];
      try {
        const stream = this.canvas.captureStream(60);
        this.mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
        this.mediaRecorder.ondataavailable = (e) => {
          if (e.data && e.data.size > 0) this.recordedChunks.push(e.data);
        };
        this.mediaRecorder.start(100);
        this.isRecording = true;
      } catch (e) {}
    },

    stopRecording() {
      return new Promise((resolve) => {
        if (!this.isRecording || !this.mediaRecorder) { resolve(null); return; }
        this.mediaRecorder.onstop = () => {
          this.isRecording = false;
          const blob = new Blob(this.recordedChunks, { type: 'video/webm' });
          const url = URL.createObjectURL(blob);
          resolve({ blob, url });
        };
        this.mediaRecorder.stop();
      });
    }
  };

  /* ==========================================================================
     5. SCRIPT DIRECTOR & DIALOGUE PARSER
     ========================================================================== */
  const ScriptDirector = {
    isPlaying: false,

    parseScript(scriptText) {
      if (!scriptText) return [];
      const lines = scriptText.split('\n');
      const parsed = [];

      lines.forEach((rawLine, idx) => {
        const line = rawLine.trim();
        if (!line || line.startsWith('//') || line.startsWith('#')) return;

        let charName = '';
        let dialogue = '';
        let action = '';

        const actionMatch = line.match(/\[action:\s*([^\]]+)\]/i) || line.match(/\[([^\]]+)\]/);
        let clean = line;
        if (actionMatch) {
          action = actionMatch[1].trim();
          clean = line.replace(actionMatch[0], '').trim();
        }

        const colonIdx = clean.indexOf(':');
        if (colonIdx !== -1) {
          charName = clean.substring(0, colonIdx).trim();
          let dialogPart = clean.substring(colonIdx + 1).trim();
          if ((dialogPart.startsWith('"') && dialogPart.endsWith('"')) || (dialogPart.startsWith('“') && dialogPart.endsWith('”'))) {
            dialogPart = dialogPart.substring(1, dialogPart.length - 1);
          }
          dialogue = dialogPart;
        } else {
          charName = 'Kaito';
          dialogue = clean;
        }

        // Check if character or creature
        let character = Database.getCharacterByName(charName);
        if (!character) {
          const creature = Database.getCreatures().find(c => c.name.toLowerCase().includes(charName.toLowerCase()) || c.id.toLowerCase().includes(charName.toLowerCase()) || charName.toLowerCase().includes('yali') || charName.toLowerCase().includes('kitsune') || charName.toLowerCase().includes('qilin') || charName.toLowerCase().includes('archon') || charName.toLowerCase().includes('leviathan'));
          if (creature) {
            const cLang = creature.origin && creature.origin.includes('Tamil') ? 'ta' :
                          creature.origin && creature.origin.includes('Japan') ? 'ja' :
                          creature.origin && creature.origin.includes('Chinese') ? 'zh' : 'en';
            character = {
              name: creature.name,
              lang: cLang,
              pitch: 0.95,
              speed: 1.0,
              avatar: creature.avatar
            };
          } else {
            character = {
              id: 'char_custom',
              name: charName,
              lang: 'en',
              pitch: 1.0,
              speed: 1.0,
              avatar: 'assets/characters/kaito.jpg'
            };
          }
        }

        parsed.push({
          id: 'line_' + idx,
          charName: character.name,
          character,
          dialogue,
          action,
          lang: character.lang || 'en',
          pitch: character.pitch || 1.0,
          speed: character.speed || 1.0
        });
      });

      return parsed;
    },

    async play(scriptText, options = {}) {
      this.stop();
      const lines = this.parseScript(scriptText);
      if (lines.length === 0) return;

      this.isPlaying = true;
      const { onStep = null, onFinish = null } = options;

      for (let i = 0; i < lines.length; i++) {
        if (!this.isPlaying) break;
        const cur = lines[i];

        CanvasEngine.setCharacter(cur.character);
        if (cur.action) {
          if (cur.action.toLowerCase().includes('power') || cur.action.toLowerCase().includes('surge') || cur.action.toLowerCase().includes('flare')) {
            CanvasEngine.triggerSuperpower(cur.character.superpower);
          } else {
            CanvasEngine.triggerAction(cur.action);
          }
        }

        if (onStep) onStep(cur, i, lines.length);

        await VoiceEngine.speak({
          text: cur.dialogue,
          lang: cur.lang,
          pitch: cur.pitch,
          rate: cur.speed,
          onLipSync: (lvl) => CanvasEngine.setLipSync(lvl)
        });

        if (this.isPlaying && i < lines.length - 1) {
          await new Promise(r => setTimeout(r, 600));
        }
      }

      this.isPlaying = false;
      CanvasEngine.setLipSync(0);
      if (onFinish) onFinish();
    },

    stop() {
      this.isPlaying = false;
      VoiceEngine.stop();
      CanvasEngine.setLipSync(0);
    }
  };

  /* ==========================================================================
     6. MAIN APPLICATION CONTROLLER WITH WORLD & PLANETS HUB
     ========================================================================== */
  const App = {
    activeView: 'studio',
    selectedFolder: 'characters',
    selectedWorldCategory: 'all',
    
    wizardState: {
      role: 'Protagonist',
      genre: 'magic',
      lang: 'en',
      charName: 'Solaris',
      charTitle: 'Celestial Sun Hero',
      avatarUrl: 'assets/characters/ananya.jpg',
      superpower: {
        name: 'Infernal Sunbeam Nova',
        element: 'solar',
        intensity: 9,
        shout: 'By the eternal sun, illuminate!'
      }
    },

    init() {
      Database.init();
      VoiceEngine.init();

      const canvas = document.getElementById('animeCanvas');
      if (canvas) {
        CanvasEngine.init(canvas);
        const initBg = Database.getBackgroundById('bg_cyberpunk');
        if (initBg) CanvasEngine.setBackground(initBg.url);
        const initChar = Database.getCharacterByName('Kaito');
        if (initChar) CanvasEngine.setCharacter(initChar);
      }

      this.bindEvents();
      I18N.setLanguage('en');
      this.renderFolderDatabase();
      this.renderCharacterLabList();
      this.renderBackgroundSelector();
      this.renderWorldExplorer();
    },

    bindEvents() {
      const langSelect = document.getElementById('globalLangSelect');
      if (langSelect) {
        langSelect.addEventListener('change', (e) => {
          const l = e.target.value;
          I18N.setLanguage(l);
          this.showToast(`Language set to ${l.toUpperCase()}`);
        });
      }

      document.querySelectorAll('[data-view-target]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const target = btn.getAttribute('data-view-target');
          this.switchView(target);
        });
      });

      // World Explorer Category Filter
      document.querySelectorAll('.world-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.world-cat-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const cat = btn.getAttribute('data-world-cat');
          this.selectedWorldCategory = cat;
          this.renderWorldExplorer();
        });
      });

      // Wizard Step Tabs
      document.querySelectorAll('.wizard-step-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          document.querySelectorAll('.wizard-step-tab').forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          const stepId = tab.getAttribute('data-step-target');
          this.showWizardStep(stepId);
        });
      });

      document.querySelectorAll('.role-select-card').forEach(card => {
        card.addEventListener('click', () => {
          document.querySelectorAll('.role-select-card').forEach(c => c.classList.remove('active'));
          card.classList.add('active');
          this.wizardState.role = card.getAttribute('data-role');
          this.updateWizardScriptPreview();
        });
      });

      document.querySelectorAll('.genre-select-card').forEach(card => {
        card.addEventListener('click', () => {
          document.querySelectorAll('.genre-select-card').forEach(c => c.classList.remove('active'));
          card.classList.add('active');
          const genre = card.getAttribute('data-genre');
          this.wizardState.genre = genre;
          CanvasEngine.setGenre(genre);
          const bgs = Database.getBackgroundsByGenre(genre);
          if (bgs && bgs.length > 0) CanvasEngine.setBackground(bgs[0].url);
          this.updateWizardScriptPreview();
        });
      });

      document.querySelectorAll('.power-element-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.power-element-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const elem = btn.getAttribute('data-element');
          this.wizardState.superpower.element = elem;
          document.getElementById('powerPreviewElement').textContent = elem.toUpperCase();
          VoiceEngine.playSuperpowerTone(elem);
        });
      });

      const powerNameInput = document.getElementById('wizPowerName');
      if (powerNameInput) {
        powerNameInput.addEventListener('input', (e) => {
          this.wizardState.superpower.name = e.target.value;
          document.getElementById('powerPreviewName').textContent = e.target.value || 'Custom Power';
        });
      }
      const powerShoutInput = document.getElementById('wizPowerShout');
      if (powerShoutInput) {
        powerShoutInput.addEventListener('input', (e) => {
          this.wizardState.superpower.shout = e.target.value;
          document.getElementById('powerPreviewShout').textContent = `"${e.target.value}"`;
        });
      }

      const testPowerBtn = document.getElementById('btnTestSuperpower');
      if (testPowerBtn) {
        testPowerBtn.addEventListener('click', () => {
          CanvasEngine.triggerSuperpower(this.wizardState.superpower);
          VoiceEngine.speak({
            text: this.wizardState.superpower.shout || 'Power unleashed!',
            lang: this.wizardState.lang
          });
        });
      }

      const wizSaveBtn = document.getElementById('btnWizardSaveAndRun');
      if (wizSaveBtn) {
        wizSaveBtn.addEventListener('click', () => {
          const name = document.getElementById('wizCharName').value || 'Hero';
          const title = `${this.wizardState.role} (${this.wizardState.genre.toUpperCase()})`;
          const lang = document.getElementById('wizCharLang').value || 'en';
          const pitch = parseFloat(document.getElementById('wizCharPitch').value) || 1.0;
          const speed = parseFloat(document.getElementById('wizCharSpeed').value) || 1.0;

          const savedChar = Database.addCharacter({
            name,
            role: this.wizardState.role,
            genre: this.wizardState.genre,
            title,
            lang,
            pitch,
            speed,
            avatar: this.wizardState.avatarUrl,
            superpower: this.wizardState.superpower
          });

          CanvasEngine.setCharacter(savedChar);
          this.renderFolderDatabase();
          this.renderCharacterLabList();

          const area = document.getElementById('scriptEditorTextarea');
          const wizScript = document.getElementById('wizScriptArea').value;
          if (area && wizScript) area.value = wizScript;

          this.switchView('studio');
          this.showToast(`✨ Character "${savedChar.name}" created with custom superpower & stored in Personal Memory!`);
          this.runCurrentScript();
        });
      }

      document.querySelectorAll('[data-preset-script]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.loadPresetScript(btn.getAttribute('data-preset-script'));
        });
      });

      document.querySelectorAll('.action-tag-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          const tag = chip.getAttribute('data-action-tag');
          const area = document.getElementById('scriptEditorTextarea');
          if (area) {
            area.value += ` [action: ${tag}]`;
            area.focus();
          }
        });
      });

      const playBtn = document.getElementById('btnPlayScript');
      if (playBtn) playBtn.addEventListener('click', () => this.runCurrentScript());

      const stopBtn = document.getElementById('btnStopScript');
      if (stopBtn) stopBtn.addEventListener('click', () => {
        ScriptDirector.stop();
        this.showToast('Playback stopped.');
      });

      const clearBtn = document.getElementById('btnClearScript');
      if (clearBtn) clearBtn.addEventListener('click', () => {
        const area = document.getElementById('scriptEditorTextarea');
        if (area) area.value = '';
      });

      const exportBtn = document.getElementById('btnExportVideo');
      if (exportBtn) exportBtn.addEventListener('click', () => this.handleExportVideo());

      const bgSelect = document.getElementById('cinemaBgSelect');
      if (bgSelect) {
        bgSelect.addEventListener('change', (e) => {
          const bg = Database.getBackgroundById(e.target.value);
          if (bg) {
            CanvasEngine.setBackground(bg.url);
            this.showToast(`Stage background: ${bg.title}`);
          }
        });
      }

      const promptForm = document.getElementById('floatingPromptForm');
      if (promptForm) {
        promptForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handlePromptBarSubmit();
        });
      }

      const charForm = document.getElementById('createCharacterForm');
      if (charForm) {
        charForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handleSaveCharacterModal();
        });
      }

      document.querySelectorAll('[data-close-modal]').forEach(btn => {
        btn.addEventListener('click', () => this.closeAllModals());
      });

      const openCharModalBtn = document.getElementById('btnOpenNewCharModal');
      if (openCharModalBtn) {
        openCharModalBtn.addEventListener('click', () => this.openModal('modalCreateCharacter'));
      }

      const exportDbBtn = document.getElementById('btnExportDb');
      if (exportDbBtn) {
        exportDbBtn.addEventListener('click', () => {
          const json = Database.exportJSON();
          const blob = new Blob([json], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `animeart_studio_universe_${Date.now()}.json`;
          a.click();
          this.showToast('Full Universe Database exported as JSON!');
        });
      }
    },

    showWizardStep(stepId) {
      document.querySelectorAll('.wizard-step-section').forEach(s => s.style.display = 'none');
      const target = document.getElementById(stepId);
      if (target) target.style.display = 'flex';
    },

    updateWizardScriptPreview() {
      const name = (document.getElementById('wizCharName') && document.getElementById('wizCharName').value) || 'Hero';
      const lang = (document.getElementById('wizCharLang') && document.getElementById('wizCharLang').value) || 'en';
      const area = document.getElementById('wizScriptArea');
      if (!area) return;

      const role = this.wizardState.role;
      const power = this.wizardState.superpower.name;

      if (lang === 'ta') {
        area.value = `${name}: "வணக்கம்! நான் ${role}. ${power} கொண்டு இந்த உலகை காப்பேன்!" [action: Solar Flare]\n${name}: "தீமை எதுவாயினும் அதை சுட்டெரிப்போம்!" [action: Power Surge]`;
      } else if (lang === 'ja') {
        area.value = `${name}: "我が名は${name}、${role}だ！秘技・${power}を見よ！" [action: Sword Slash]\n${name}: "運命の刃が今、道を切り開く！" [action: Power Surge]`;
      } else if (lang === 'zh') {
        area.value = `${name}: "吾乃${name}，身为${role}，觉醒神技——${power}！" [action: Magic Cast]\n${name}: "星河浩瀚，破尽幽冥！" [action: Power Surge]`;
      } else {
        area.value = `${name}: "I am ${name}, the ${role}. Witness my ${power}!" [action: Power Surge]\n${name}: "No darkness can withstand this force!" [action: Cyberpunk Dash]`;
      }
    },

    switchView(viewId) {
      this.activeView = viewId;
      document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.sidebar-nav-link').forEach(l => l.classList.remove('active'));

      const target = document.getElementById(`view-${viewId}`);
      if (target) target.classList.add('active');

      const navBtn = document.querySelector(`[data-view-target="${viewId}"]`);
      if (navBtn) navBtn.classList.add('active');

      const breadcrumb = document.getElementById('currentBreadcrumb');
      if (breadcrumb) {
        if (viewId === 'studio') breadcrumb.textContent = I18N.t('navStudio');
        else if (viewId === 'creation-wizard') breadcrumb.textContent = '⚡ Creation Studio Wizard';
        else if (viewId === 'world-hub') breadcrumb.textContent = '🌍 World Heritage & Cosmic Planets';
        else if (viewId === 'database') breadcrumb.textContent = I18N.t('secAssets');
        else if (viewId === 'character-lab') breadcrumb.textContent = I18N.t('navCharacter');
      }
    },

    renderWorldExplorer() {
      const grid = document.getElementById('worldItemsGrid');
      if (!grid) return;

      const cat = this.selectedWorldCategory;
      let items = [];

      if (cat === 'heritage' || cat === 'all') {
        items = items.concat(Database.getHeritageSites());
      }
      if (cat === 'planets' || cat === 'all') {
        items = items.concat(Database.getPlanets());
      }
      if (cat === 'creatures' || cat === 'all') {
        items = items.concat(Database.getCreatures());
      }

      grid.innerHTML = items.map(item => {
        if (item.category === 'creatures') {
          return `
            <div class="world-item-card" style="border-left: 3px solid var(--accent-cyan);">
              <div style="padding: 16px; display: flex; align-items: center; gap: 14px;">
                <div class="creature-avatar-box">
                  <img src="${item.avatar}" class="creature-avatar-img" alt="${item.name}" />
                </div>
                <div>
                  <div class="world-item-title">${item.name}</div>
                  <div style="font-size: 11.5px; color: var(--accent-pink); font-weight: 600;">${item.origin}</div>
                </div>
              </div>
              <div class="world-item-body" style="padding-top: 0;">
                <div style="font-size: 11px; color: var(--accent-gold);">⚡ Superpower: ${item.power}</div>
                <p class="world-item-desc">${item.desc}</p>
                <div class="world-item-footer">
                  <button class="btn-card-action" onclick="window.App.summonCreature('${item.id}')">🐉 Summon to Stage</button>
                </div>
              </div>
            </div>
          `;
        }

        return `
          <div class="world-item-card">
            <div class="world-item-preview">
              <img src="${item.bgUrl}" class="world-item-img" alt="${item.name}" />
              <span class="world-item-badge">${item.country || item.type}</span>
            </div>
            <div class="world-item-body">
              <div class="world-item-title">${item.name}</div>
              <p class="world-item-desc">${item.desc}</p>
              <div class="world-item-footer">
                <span style="font-size: 11px; color: var(--accent-cyan);">${item.atmosphere || item.period || 'Universal'}</span>
                <button class="btn-card-action" onclick="window.App.applyWorldToStage('${item.id}')">Apply to Stage</button>
              </div>
            </div>
          </div>
        `;
      }).join('');
    },

    applyWorldToStage(id) {
      const heritage = Database.getHeritageSites().find(h => h.id === id);
      const planet = Database.getPlanets().find(p => p.id === id);
      const target = heritage || planet;

      if (target) {
        CanvasEngine.setBackground(target.bgUrl);
        if (target.vfxShader) CanvasEngine.setShader(target.vfxShader);
        this.switchView('studio');
        this.showToast(`🌍 Stage transformed into ${target.name}!`);
      }
    },

    summonCreature(id) {
      const creature = Database.getCreatures().find(c => c.id === id);
      if (creature) {
        const area = document.getElementById('scriptEditorTextarea');
        if (area && creature.dialogue) {
          area.value = creature.dialogue;
        }
        CanvasEngine.setCharacter({
          name: creature.name,
          avatar: creature.avatar,
          lang: creature.origin.includes('Tamil') ? 'ta' : creature.origin.includes('Japan') ? 'ja' : creature.origin.includes('China') ? 'zh' : 'en'
        });
        this.switchView('studio');
        this.showToast(`🐉 ${creature.name} summoned to the Stage!`);
        this.runCurrentScript();
      }
    },

    loadPresetScript(key) {
      const area = document.getElementById('scriptEditorTextarea');
      if (!area) return;

      if (key === 'english') {
        area.value = `Kaito: "Welcome to Neo Tokyo, let's begin the mission!" [action: Power Surge]\nKaito: "Tracking rogue AI signals across the neon skyline." [action: Cyberpunk Dash]`;
        const bg = Database.getBackgroundById('bg_cyberpunk');
        if (bg) CanvasEngine.setBackground(bg.url);
        const char = Database.getCharacterByName('Kaito');
        if (char) CanvasEngine.setCharacter(char);
      } else if (key === 'tamil') {
        area.value = `Ananya: "வணக்கம்! தஞ்சை பெரிய கோயில் மற்றும் மதுரை மண்ணில் புனித சக்தி எப்போதும் ஒளிரும்!" [action: Solar Flare]
Yali: "கோயில் மணி ஓசையில் புனித சக்தி எழுந்தது!" [action: Solar Flare]
Ananya: "எங்கள் நம்பிக்கை தான் எங்களின் மிகப்பெரிய ஆயுதம்." [action: Smile]`;
        const bg = Database.getBackgroundById('bg_temple');
        if (bg) CanvasEngine.setBackground(bg.url);
        const char = Database.getCharacterByName('Ananya');
        if (char) CanvasEngine.setCharacter(char);
      } else if (key === 'japanese') {
        area.value = `Ren: "伏見稲荷の千本鳥居にて、我が刃が道を切り開く！" [action: Sword Slash]
Kitsune: "狐火の導きに従え。迷いし者に光を。" [action: Magic Cast]
Ren: "風が止む時、勝負は決している。" [action: Battle Stance]`;
        const bg = Database.getBackgroundById('bg_shrine');
        if (bg) CanvasEngine.setBackground(bg.url);
        const char = Database.getCharacterByName('Ren');
        if (char) CanvasEngine.setCharacter(char);
      } else if (key === 'chinese') {
        area.value = `Mei: "万里长城之上，漫天星辰听我号令，星光绽放！" [action: Magic Cast]
Qilin: "瑞兽降世，万物皆安，星辉引路！" [action: Magic Cast]
Mei: "只要心怀光明，黑夜便不再漫长。" [action: Smile]`;
        const bg = Database.getBackgroundById('bg_temple');
        if (bg) CanvasEngine.setBackground(bg.url);
        const char = Database.getCharacterByName('Mei');
        if (char) CanvasEngine.setCharacter(char);
      } else if (key === 'mars') {
        area.value = `Kaito: "Ares Base Mars Expedition online. Atmospheric stabilizers active!" [action: Power Surge]
Archon: "Human explorers, welcome to the red sands of Mars." [action: Power Surge]
Kaito: "Initiating terraforming protocol!" [action: Cyberpunk Dash]`;
        const bg = Database.getBackgroundById('bg_horror');
        if (bg) CanvasEngine.setBackground(bg.url);
        CanvasEngine.setShader('mars_dust');
      } else if (key === 'europa') {
        area.value = `Mei: "Sub-surface cryo-ocean of Europa detected." [action: Magic Cast]
Leviathan: "Echoes from the deep ice... The oceans awaken." [action: Magic Cast]
Mei: "Starlight crystal resonance engaged!" [action: Smile]`;
        const bg = Database.getBackgroundById('bg_temple');
        if (bg) CanvasEngine.setBackground(bg.url);
        CanvasEngine.setShader('europa_blue');
      } else if (key === 'duel') {
        area.value = `Kaito: "Welcome to Neo Tokyo, let's begin the mission!" [action: Power Surge]
Ananya: "வணக்கம்! எங்கள் சூரிய சக்தி எப்போதும் உங்களை காக்கும்." [action: Solar Flare]
Ren: "覚悟はいいか？行くぞ！" [action: Sword Slash]
Mei: "漫天星辰，为我们引路，光华流转！" [action: Magic Cast]
Kaito: "Let's finish this together — Maximum Overdrive!" [action: Cyberpunk Dash]`;
        const bg = Database.getBackgroundById('bg_cyberpunk');
        if (bg) CanvasEngine.setBackground(bg.url);
      }

      this.showToast(`Loaded ${key.toUpperCase()} Scene!`);
    },

    runCurrentScript() {
      const area = document.getElementById('scriptEditorTextarea');
      if (!area || !area.value.trim()) {
        this.showToast('Please enter dialogue script lines!');
        return;
      }

      const textEl = document.getElementById('cinemaDialogueText');
      const nameEl = document.getElementById('cinemaSpeakerName');
      const avatarEl = document.getElementById('cinemaSpeakerAvatar');
      const langEl = document.getElementById('cinemaSpeakerLang');

      this.showToast('▶ Playing Scene with Auto-Voice Assignment...');

      ScriptDirector.play(area.value, {
        onStep: (item) => {
          if (textEl) textEl.textContent = item.dialogue;
          if (nameEl) nameEl.textContent = item.charName;
          if (avatarEl && item.character && item.character.avatar) avatarEl.src = item.character.avatar;
          if (langEl) {
            const map = { en: 'ENGLISH 🇬🇧', ta: 'TAMIL 🇮🇳 (தமிழ்)', ja: 'JAPANESE 🇯🇵 (日本語)', zh: 'CHINESE 🇨🇳 (中文)' };
            langEl.textContent = map[item.lang] || item.lang.toUpperCase();
          }
          this.animateEqualizer(true);
        },
        onFinish: () => {
          this.animateEqualizer(false);
          this.showToast('Scene playback finished!');
        }
      });
    },

    animateEqualizer(active) {
      const bars = document.querySelectorAll('.equalizer-bar');
      bars.forEach(b => {
        b.style.height = active ? `${Math.random() * 18 + 4}px` : '4px';
      });
    },

    async handleExportVideo() {
      this.showToast('🎥 Buffering in RAM & Recording anime scene...');
      CanvasEngine.startRecording();

      const area = document.getElementById('scriptEditorTextarea');
      const script = area && area.value.trim() ? area.value : 'Kaito: "AnimeArt Studio Universe is ready!" [action: Power Surge]';

      await new Promise(res => {
        ScriptDirector.play(script, {
          onStep: (item) => {
            const textEl = document.getElementById('cinemaDialogueText');
            if (textEl) textEl.textContent = item.dialogue;
          },
          onFinish: () => res()
        });
      });

      const res = await CanvasEngine.stopRecording();
      if (res && res.url) {
        const a = document.createElement('a');
        a.href = res.url;
        a.download = `AnimeArt_Universe_${Date.now()}.webm`;
        a.click();
        this.showToast('✅ AMV Video generated from RAM & Saved to Personal Storage!');
      }
    },

    handlePromptBarSubmit() {
      const input = document.getElementById('floatingPromptInput');
      if (!input || !input.value.trim()) return;
      const text = input.value.trim();
      input.value = '';

      const area = document.getElementById('scriptEditorTextarea');
      if (text.includes(':')) {
        if (area) area.value = text;
      } else {
        const l = text.toLowerCase();
        let line = `Kaito: "${text}" [action: Power Surge]`;
        if (l.includes('tamil') || l.includes('temple')) line = `Ananya: "${text}" [action: Solar Flare]`;
        else if (l.includes('japan') || l.includes('samurai') || l.includes('shrine')) line = `Ren: "${text}" [action: Sword Slash]`;
        else if (l.includes('china') || l.includes('great wall')) line = `Mei: "${text}" [action: Magic Cast]`;
        else if (l.includes('mars')) line = `Kaito: "${text}" [action: Power Surge]`;
        if (area) area.value = line;
      }
      this.runCurrentScript();
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

      const chars = Database.getCharacters();
      const bgs = Database.getBackgrounds();
      const voices = Database.getVoices();
      const scenes = Database.getScenes();

      folderListEl.innerHTML = `
        <li>
          <button class="folder-item-btn ${this.selectedFolder === 'characters' ? 'active' : ''}" onclick="window.App.selectFolder('characters')">
            <span class="folder-item-left">📁 Characters</span>
            <span class="folder-count-pill">${chars.length}</span>
          </button>
        </li>
        <li>
          <button class="folder-item-btn ${this.selectedFolder === 'backgrounds' ? 'active' : ''}" onclick="window.App.selectFolder('backgrounds')">
            <span class="folder-item-left">📁 Backgrounds</span>
            <span class="folder-count-pill">${bgs.length}</span>
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

      if (this.selectedFolder === 'characters') {
        assetGridEl.innerHTML = chars.map(c => `
          <div class="asset-card">
            <div class="asset-preview-box">
              <img src="${c.avatar}" class="asset-preview-img" alt="${c.name}" />
            </div>
            <div class="asset-card-details">
              <div class="asset-card-title">${c.name}</div>
              <div class="asset-card-meta">
                <span>${c.role || c.title}</span>
                <span class="voice-lang-badge ${c.lang}">${c.lang.toUpperCase()}</span>
              </div>
              <div class="asset-card-actions">
                <button class="btn-card-action" onclick="window.App.loadCharacterToStudio('${c.name}')">Select for Stage</button>
                <button class="btn-card-action" onclick="window.App.testCharacterVoice('${c.id}')">🔊 Voice</button>
              </div>
            </div>
          </div>
        `).join('');
      } else if (this.selectedFolder === 'backgrounds') {
        assetGridEl.innerHTML = bgs.map(b => `
          <div class="asset-card">
            <div class="asset-preview-box">
              <img src="${b.url}" class="asset-preview-img" alt="${b.title}" />
            </div>
            <div class="asset-card-details">
              <div class="asset-card-title">${b.title}</div>
              <div class="asset-card-meta">
                <span>${b.theme}</span>
                <span class="badge-tag new">${(b.genre || 'all').toUpperCase()}</span>
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
              <div class="asset-card-actions">
                <button class="btn-card-action" onclick="window.App.loadSceneToStudio('${s.id}')">Load to Director</button>
              </div>
            </div>
          </div>
        `).join('');
      }
    },

    selectFolder(f) {
      this.selectedFolder = f;
      this.renderFolderDatabase();
    },

    loadCharacterToStudio(name) {
      const c = Database.getCharacterByName(name);
      if (c) {
        CanvasEngine.setCharacter(c);
        this.switchView('studio');
        this.showToast(`Character "${c.name}" on Stage!`);
      }
    },

    loadBackgroundToStudio(id) {
      const b = Database.getBackgroundById(id);
      if (b) {
        CanvasEngine.setBackground(b.url);
        if (b.genre) CanvasEngine.setGenre(b.genre);
        const sel = document.getElementById('cinemaBgSelect');
        if (sel) sel.value = b.id;
        this.switchView('studio');
        this.showToast(`Background: "${b.title}"!`);
      }
    },

    testCharacterVoice(id) {
      const c = Database.getCharacterById(id);
      if (c) {
        let msg = `I am ${c.name}. Ready for the scene!`;
        if (c.lang === 'ta') msg = `வணக்கம்! நான் ${c.name}. நாங்கள் தயார்!`;
        else if (c.lang === 'ja') msg = `私は${c.name}。準備完了！`;
        else if (c.lang === 'zh') msg = `我是${c.name}，一切准备就绪！`;

        VoiceEngine.speak({ text: msg, lang: c.lang, pitch: c.pitch, rate: c.speed });
      }
    },

    testVoiceProfile(id) {
      const v = Database.getVoices().find(x => x.id === id);
      if (v) {
        VoiceEngine.speak({
          text: `Auditioning assigned voice profile for ${v.name}.`,
          lang: v.lang.slice(0, 2),
          pitch: v.pitch,
          rate: v.rate
        });
      }
    },

    renderCharacterLabList() {
      const el = document.getElementById('characterLabCardsList');
      if (!el) return;
      const chars = Database.getCharacters();
      el.innerHTML = chars.map(c => `
        <div class="asset-card" style="border-left: 3px solid var(--accent-pink);">
          <div class="asset-preview-box" style="aspect-ratio: 1/1;">
            <img src="${c.avatar}" class="asset-preview-img" alt="${c.name}" />
          </div>
          <div class="asset-card-details">
            <div class="asset-card-title">${c.name} <span style="font-size: 11px; color: var(--text-muted);">(${c.gender})</span></div>
            <div style="font-size: 12px; color: var(--accent-cyan);">${c.role || c.title}</div>
            <div class="asset-card-meta" style="margin-top: 4px;">
              <span>Voice: ${c.lang.toUpperCase()}</span>
              <span class="power-preview-badge" style="font-size: 9.5px; padding: 2px 6px;">⚡ ${c.superpower ? c.superpower.name : 'Power'}</span>
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
      const sel = document.getElementById('cinemaBgSelect');
      if (!sel) return;
      sel.innerHTML = Database.getBackgrounds().map(b => `<option value="${b.id}">${b.title}</option>`).join('');
    },

    openModal(id) {
      const m = document.getElementById(id);
      if (m) m.classList.add('active');
    },

    closeAllModals() {
      document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
    },

    showToast(msg) {
      const container = document.getElementById('toastContainer');
      if (!container) return;
      const t = document.createElement('div');
      t.className = 'toast-item';
      t.innerHTML = `<span>✨</span><span>${msg}</span>`;
      container.appendChild(t);
      setTimeout(() => {
        t.style.opacity = '0';
        t.style.transform = 'translateX(100%)';
        t.style.transition = 'all 0.3s ease';
        setTimeout(() => t.remove(), 300);
      }, 3200);
    }
  };

  window.App = App;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => App.init());
  } else {
    App.init();
  }
})();
