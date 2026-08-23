/**
 * Internationalization (i18n) engine for AnimeArt AI Studio
 * Supports English, Tamil (தமிழ்), Japanese (日本語), Chinese (中文)
 */

export const I18N = {
  currentLang: 'en',

  translations: {
    en: {
      appName: 'AnimeArt',
      appSubtitle: 'AI Character & Scene Studio',
      promoBanner: '⚡ Limited-time offer! Unlock 1 year of limitless AI Character Studio creation at UP TO 27% OFF.',
      viewPlan: 'View Plan →',
      startForFree: 'Start for Free',
      pricing: 'Pricing',
      login: 'Login',
      help: 'Help',
      tokens: 'Tokens',
      searchPlaceholder: 'Search characters, voices, backgrounds...',
      
      // Sidebar
      navHome: 'Home',
      secCreate: 'CREATE',
      navStudio: 'Anime Studio',
      navAMV: 'AMV Generator',
      navCharacter: 'Character Design',
      navWorld: 'World Builder',
      navVoice: 'Voice & Audio',
      navIntegrations: 'Integrations',
      
      secAssets: 'ASSETS & DATABASE',
      navFolders: 'All Folders (Database)',
      navCharFolder: '📁 Character Assets',
      navBgFolder: '📁 Background Assets',
      navVoiceFolder: '📁 Voice Profiles',
      navScenesFolder: '📁 Storyboards & AMVs',
      
      secInspire: 'INSPIRE',
      navTemplates: 'Anime Templates',
      navTutorials: 'Tutorials',
      navCommunity: 'Community Showcase',
      
      secPinned: 'PINNED TOOLS',
      toolLipSync: 'Auto Lip-Sync',
      toolKeyframe: 'Keyframe Sync',
      toolUpscale: 'Upscale Anime',
      toolColorize: 'Colorize Manga',
      
      // Studio Main
      heroTitle: 'What would you like to create today? ✨',
      heroTagline: 'Vibe Direct Now — AI Character & Voice Studio',
      tabStudio: 'Anime Studio',
      tabAMV: 'AMV',
      tabImage: 'Image',
      tabCharacter: 'Character',
      tabWorld: 'World',
      tabAudio: 'Audio',
      
      // Modes
      modeShort: 'Anime Short',
      modePromo: 'Character Promo',
      modeAMV: 'Action AMV',
      modeNovel: 'Visual Novel',
      modeMusic: 'Music Video',
      modeTrailer: 'Manga Trailer',
      
      // Script Director
      scriptTitle: 'Director Script & Dialogue Engine',
      scriptSubtitle: 'Type CharacterName: "Dialogue" [action: ActionName] to automatically trigger assigned voice & animations.',
      scriptPlaceholder: 'Kaito: "Welcome to Neo Tokyo, let\'s begin the mission!" [action: Power Surge]\nAnanya: "வணக்கம்! நாங்கள் வெற்றி பெறுவோம்." [action: Smile]\nRen: "覚悟はいいか？行くぞ！" [action: Sword Slash]\nMei: "准备好了，我们开始行动吧！" [action: Magic Cast]',
      runScriptBtn: '▶ Play Scene & Speak Voice',
      stopScriptBtn: '⏹ Stop Playback',
      exportVideoBtn: '🎥 Export Video (AMV)',
      clearScriptBtn: 'Clear Script',
      autoVoiceBadge: 'Auto-Voice Assignment: ACTIVE',
      detectedChar: 'Detected Character',
      assignedVoice: 'Assigned Voice',
      activeAction: 'Active Action VFX',
      
      // Actions
      actionPowerSurge: '⚡ Power Surge',
      actionSwordSlash: '⚔️ Sword Slash',
      actionMagicCast: '✨ Magic Cast',
      actionSmile: '😊 Happy Smile',
      actionBattleStance: '🥋 Battle Stance',
      actionCyberDash: '🚀 Cyberpunk Dash',
      actionSolarFlare: '☀️ Solar Flare',
      
      // Presets
      presetEnglish: '🇬🇧 English Cyberpunk Scene',
      presetTamil: '🇮🇳 Tamil Epic Scene',
      presetJapanese: '🇯🇵 Japanese Samurai Scene',
      presetChinese: '🇨🇳 Chinese Celestial Scene',
      presetDuel: '⚔️ Multilingual 4-Hero Duel',
      
      // Prompt bar
      promptPlaceholder: 'Describe what anime scene or character action you want to create...',
      generateBtn: 'Generate Scene',
      
      // Character Lab
      charLabTitle: 'AI Character Creator & Memory Hub',
      charLabDesc: 'Design custom anime characters with assigned voice profiles, personality traits, and animation triggers.',
      newCharBtn: '+ Create New Character',
      charName: 'Character Name',
      charTitle: 'Title / Role',
      charLang: 'Native Language',
      charVoiceActor: 'Assigned Voice Actor',
      charPitch: 'Voice Pitch',
      charSpeed: 'Speech Speed',
      charStyle: 'Visual Style',
      charBackstory: 'Backstory & Lore',
      testVoiceBtn: '🔊 Test Voice Synthesis',
      saveCharBtn: '💾 Save Character to Database',
      
      // Asset Manager
      assetManagerTitle: 'Database & Asset Folders',
      assetManagerDesc: 'Organize characters, backgrounds, voice recordings, and storyboard scenes in dedicated folders.',
      newFolderBtn: '+ New Folder',
      uploadAssetBtn: '+ Upload Asset',
      exportDbBtn: '📥 Backup Database (JSON)',
      importDbBtn: '📤 Import Database',
      totalAssets: 'Total Assets',
      filterAll: 'All Files',
      filterCharacters: 'Characters',
      filterBackgrounds: 'Backgrounds',
      filterVoices: 'Voice Profiles',
      filterScenes: 'Scenes',
      
      // Notifications
      savedSuccess: 'Saved to Database successfully!',
      scenePlaying: 'Playing scene with voice synthesis...',
      recordingStarted: 'Recording anime scene video...',
      recordingFinished: 'Video recording ready for download!'
    },
    
    ta: {
      appName: 'AnimeArt',
      appSubtitle: 'AI கதாப்பாத்திரம் மற்றும் காட்சி அரங்கம்',
      promoBanner: '⚡ வரையறுக்கப்பட்ட சலுகை! AI Character Studio-வில் 27% வரை தள்ளுபடி பெறுங்கள்.',
      viewPlan: 'திட்டங்களை பார்க்க →',
      startForFree: 'இலவசமாக தொடங்கவும்',
      pricing: 'விலை பட்டியல்',
      login: 'உள்நுழைக',
      help: 'உதவி',
      tokens: 'நாணயங்கள்',
      searchPlaceholder: 'கதாபாத்திரங்கள், குரல்கள், பின்னணிகளைத் தேடுங்கள்...',
      
      // Sidebar
      navHome: 'முகப்பு',
      secCreate: 'உருவாக்கு',
      navStudio: 'அனிமே ஸ்டுடியோ',
      navAMV: 'AMV ஜெனரேட்டர்',
      navCharacter: 'கதாபாத்திர வடிவமைப்பு',
      navWorld: 'உலக உருவாக்கம்',
      navVoice: 'குரல் & ஒலி',
      navIntegrations: 'இணைப்புகள்',
      
      secAssets: 'சொத்துக்கள் & தரவுத்தளம்',
      navFolders: 'அனைத்து கோப்புறைகள்',
      navCharFolder: '📁 கதாப்பாத்திர கோப்புறை',
      navBgFolder: '📁 பின்னணி கோப்புறை',
      navVoiceFolder: '📁 குரல் கோப்புறை',
      navScenesFolder: '📁 காட்சிகள் & AMVகள்',
      
      secInspire: 'உத்வேகம்',
      navTemplates: 'மாதிரிகள்',
      navTutorials: 'பயிற்சிகள்',
      navCommunity: 'சமூக அரங்கம்',
      
      secPinned: 'முக்கிய கருவிகள்',
      toolLipSync: 'தானியங்கி உதட்டு அசைவு',
      toolKeyframe: 'கீஃப்ரேம் ஒத்திசைவு',
      toolUpscale: 'அனிமே தரம் உயர்த்து',
      toolColorize: 'மங்கா வண்ணம் பூசு',
      
      // Studio Main
      heroTitle: 'இன்று நீங்கள் எதை உருவாக்க விரும்புகிறீர்கள்? ✨',
      heroTagline: 'AI கதாப்பாத்திரம் & பலமொழி குரல் இயக்கம்',
      tabStudio: 'அனிமே ஸ்டுடியோ',
      tabAMV: 'AMV',
      tabImage: 'படம்',
      tabCharacter: 'கதாபாத்திரம்',
      tabWorld: 'உலகம்',
      tabAudio: 'ஒலி',
      
      // Modes
      modeShort: 'அனிமே குறும்படம்',
      modePromo: 'கதாபாத்திர ப்ரோமோ',
      modeAMV: 'ஆக்‌ஷன் AMV',
      modeNovel: 'விஷுவல் நாவல்',
      modeMusic: 'இசை வீடியோ',
      modeTrailer: 'மங்கா ட்ரெய்லர்',
      
      // Script Director
      scriptTitle: 'இயக்குனர் ஸ்கிரிப்ட் & வசன என்ஜின்',
      scriptSubtitle: 'பெயர்: "வசனம்" [action: செயல்] என தட்டச்சு செய்தால் அந்த கதாப்பாத்திரத்தின் குரல் மற்றும் இயக்கம் தானாகவே செயல்படும்.',
      scriptPlaceholder: 'Ananya: "வணக்கம்! நாங்கள் நிச்சயம் வெற்றி பெறுவோம்." [action: Smile]\nKaito: "I will protect this city!" [action: Power Surge]\nRen: "覚悟はいいか？行くぞ！" [action: Sword Slash]\nMei: "准备好了，我们开始行动吧！" [action: Magic Cast]',
      runScriptBtn: '▶ காட்சியை இயக்கு & குரல் பேசு',
      stopScriptBtn: '⏹ நிறுத்து',
      exportVideoBtn: '🎥 வீடியோவை பதிவிறக்கு (AMV)',
      clearScriptBtn: 'அழி',
      autoVoiceBadge: 'தானியங்கி குரல் பொருத்தம்: இயக்கத்தில்',
      detectedChar: 'கண்டறியப்பட்ட கதாப்பாத்திரம்',
      assignedVoice: 'ஒதுக்கப்பட்ட குரல்',
      activeAction: 'செயலில் உள்ள விளைவு (VFX)',
      
      // Actions
      actionPowerSurge: '⚡ மின்சக்தி பாய்ச்சல்',
      actionSwordSlash: '⚔️ வாள் வெட்டு',
      actionMagicCast: '✨ மாயாஜால பிரயோகம்',
      actionSmile: '😊 புன்னகை',
      actionBattleStance: '🥋 போர் நிலை',
      actionCyberDash: '🚀 சைபர்பங்க் பாய்ச்சல்',
      actionSolarFlare: '☀️ சூரிய ஒளிக்கற்றை',
      
      // Presets
      presetEnglish: '🇬🇧 ஆங்கில சைபர்பங்க் காட்சி',
      presetTamil: '🇮🇳 தமிழ் காவிய காட்சி',
      presetJapanese: '🇯🇵 ஜப்பானிய சாமுராய் காட்சி',
      presetChinese: '🇨🇳 சீன விண்மீன் மாய காட்சி',
      presetDuel: '⚔️ 4-ஹீரோ பலமொழி யுத்தம்',
      
      // Prompt bar
      promptPlaceholder: 'நீங்கள் உருவாக்க விரும்பும் அனிமே காட்சியை விவரிக்கவும்...',
      generateBtn: 'காட்சியை உருவாக்கு',
      
      // Character Lab
      charLabTitle: 'AI கதாப்பாத்திர ஆய்வகம் & நினைவகம்',
      charLabDesc: 'குரல் சுயவிவரம் மற்றும் அனிமேஷன் விளைவுகளுடன் புதிய கதாப்பாத்திரங்களை வடிவமைக்கவும்.',
      newCharBtn: '+ புதிய கதாப்பாத்திரம் உருவாக்கு',
      charName: 'கதாபாத்திரத்தின் பெயர்',
      charTitle: 'பட்டம் / பதவி',
      charLang: 'தாய்மொழி',
      charVoiceActor: 'ஒதுக்கப்பட்ட குரல் கலைஞர்',
      charPitch: 'குரல் சுருதி (Pitch)',
      charSpeed: 'பேச்சு வேகம்',
      charStyle: 'கலை பாணி',
      charBackstory: 'பின்புல கதை',
      testVoiceBtn: '🔊 குரல் சோதனை',
      saveCharBtn: '💾 தரவுத்தளத்தில் சேமி',
      
      // Asset Manager
      assetManagerTitle: 'தரவுத்தளம் & கோப்புறைகள்',
      assetManagerDesc: 'கதாபாத்திரங்கள், பின்னணிகள், குரல்கள் மற்றும் காட்சிகளை தனித்தனி கோப்புறைகளில் நிர்வகிக்கவும்.',
      newFolderBtn: '+ புதிய கோப்புறை',
      uploadAssetBtn: '+ கோப்பு பதிவேற்று',
      exportDbBtn: '📥 காப்புப்பிரதி (JSON)',
      importDbBtn: '📤 இறக்குமதி செய்',
      totalAssets: 'மொத்த சொத்துக்கள்',
      filterAll: 'அனைத்து கோப்புகள்',
      filterCharacters: 'கதாபாத்திரங்கள்',
      filterBackgrounds: 'பின்னணிகள்',
      filterVoices: 'குரல் சுயவிவரங்கள்',
      filterScenes: 'காட்சிகள்',
      
      // Notifications
      savedSuccess: 'தரவுத்தளத்தில் வெற்றிகரமாக சேமிக்கப்பட்டது!',
      scenePlaying: 'குரல் மற்றும் அசைவுடன் காட்சி இயங்குகிறது...',
      recordingStarted: 'வீடியோ பதிவு தொடங்குகிறது...',
      recordingFinished: 'வீடியோ பதிவிறக்கத்திற்கு தயார்!'
    },
    
    ja: {
      appName: 'AnimeArt',
      appSubtitle: 'AIキャラクター＆アニメスタジオ',
      promoBanner: '⚡ 期間限定特典！年間プランで最大27%オフ！',
      viewPlan: 'プランを見る →',
      startForFree: '無料で始める',
      pricing: '料金',
      login: 'ログイン',
      help: 'ヘルプ',
      tokens: 'トークン',
      searchPlaceholder: 'キャラクター、ボイス、背景を検索...',
      
      // Sidebar
      navHome: 'ホーム',
      secCreate: '作成',
      navStudio: 'アニメスタジオ',
      navAMV: 'AMVジェネレーター',
      navCharacter: 'キャラクターデザイン',
      navWorld: 'ワールドビルダー',
      navVoice: 'ボイス＆オーディオ',
      navIntegrations: '連携ツール',
      
      secAssets: 'アセット＆データベース',
      navFolders: 'すべてのフォルダ (DB)',
      navCharFolder: '📁 キャラクターフォルダ',
      navBgFolder: '📁 背景フォルダ',
      navVoiceFolder: '📁 ボイスフォルダ',
      navScenesFolder: '📁 ストーリーボード＆AMV',
      
      secInspire: 'インスピレーション',
      navTemplates: 'アニメテンプレート',
      navTutorials: 'チュートリアル',
      navCommunity: 'コミュニティ',
      
      secPinned: '注目ツール',
      toolLipSync: '自動リップシンク',
      toolKeyframe: 'キーフレーム同期',
      toolUpscale: '画質向上',
      toolColorize: 'マンガ彩色',
      
      // Studio Main
      heroTitle: '今日は何を作成しますか？ ✨',
      heroTagline: 'Vibe Direct Now — AIキャラクター＆マルチ音声スタジオ',
      tabStudio: 'アニメスタジオ',
      tabAMV: 'AMV',
      tabImage: '画像',
      tabCharacter: 'キャラクター',
      tabWorld: 'ワールド',
      tabAudio: 'オーディオ',
      
      // Modes
      modeShort: 'アニメショート',
      modePromo: 'キャラPV',
      modeAMV: 'バトルAMV',
      modeNovel: 'ノベルゲーム',
      modeMusic: 'ミュージックビデオ',
      modeTrailer: 'マンガ予告編',
      
      // Script Director
      scriptTitle: 'ディレクタースクリプト＆台詞エンジン',
      scriptSubtitle: '「キャラ名: \"台詞\" [action: アクション]」と入力すると、自動でボイスとアクションが起動します。',
      scriptPlaceholder: 'Ren: "覚悟はいいか？行くぞ！" [action: Sword Slash]\nKaito: "I will protect this city!" [action: Power Surge]\nAnanya: "வணக்கம்! நாங்கள் வெற்றி பெறுவோம்." [action: Smile]\nMei: "准备好了，我们开始行动吧！" [action: Magic Cast]',
      runScriptBtn: '▶ シーン再生＆ボイス発声',
      stopScriptBtn: '⏹ 停止',
      exportVideoBtn: '🎥 動画書き出し (AMV)',
      clearScriptBtn: 'クリア',
      autoVoiceBadge: '自動ボイス認識: 有効',
      detectedChar: '認識されたキャラクター',
      assignedVoice: '割り当てボイス',
      activeAction: '発動中アクションVFX',
      
      // Actions
      actionPowerSurge: '⚡ パワーサージ',
      actionSwordSlash: '⚔️ 居合斬り',
      actionMagicCast: '✨ 詠唱魔法',
      actionSmile: '😊 笑顔',
      actionBattleStance: '🥋 戦闘態勢',
      actionCyberDash: '🚀 サイバーダッシュ',
      actionSolarFlare: '☀️ ソーラーフレア',
      
      // Presets
      presetEnglish: '🇬🇧 英語サイバーパンクシーン',
      presetTamil: '🇮🇳 タミル神話バトルシーン',
      presetJapanese: '🇯🇵 日本語サムライ決闘シーン',
      presetChinese: '🇨🇳 中国仙侠スターシーン',
      presetDuel: '⚔️ 4言語 英雄マルチバトル',
      
      // Prompt bar
      promptPlaceholder: '作成したいアニメシーンや台詞を自由に入力...',
      generateBtn: 'シーン生成',
      
      // Character Lab
      charLabTitle: 'AIキャラクター作成＆記憶ハブ',
      charLabDesc: '音声プロファイル、性格設定、アニメーション効果を持つオリジナルキャラクターを作成。',
      newCharBtn: '+ 新規キャラクター作成',
      charName: 'キャラクター名',
      charTitle: '肩書 / 役割',
      charLang: '主要言語',
      charVoiceActor: '声優 / 音声モデル',
      charPitch: '声の高さ (Pitch)',
      charSpeed: '発話速度',
      charStyle: '作画スタイル',
      charBackstory: '背景設定・ストーリー',
      testVoiceBtn: '🔊 音声テスト',
      saveCharBtn: '💾 データベースに保存',
      
      // Asset Manager
      assetManagerTitle: 'データベース＆フォルダ管理',
      assetManagerDesc: 'キャラクター、背景、音声、シーンプロジェクトをフォルダ毎に安全に整理・管理。',
      newFolderBtn: '+ 新規フォルダ',
      uploadAssetBtn: '+ アセット追加',
      exportDbBtn: '📥 DBバックアップ (JSON)',
      importDbBtn: '📤 DBインポート',
      totalAssets: '総アセット数',
      filterAll: 'すべてのファイル',
      filterCharacters: 'キャラクター',
      filterBackgrounds: '背景',
      filterVoices: 'ボイス',
      filterScenes: 'シーン',
      
      // Notifications
      savedSuccess: 'データベースに正常に保存されました！',
      scenePlaying: '音声とリップシンクでシーン再生中...',
      recordingStarted: 'アニメ動画の録画を開始しました...',
      recordingFinished: '動画の書き出しが完了しました！'
    },
    
    zh: {
      appName: 'AnimeArt',
      appSubtitle: 'AI 动漫角色与场景工作室',
      promoBanner: '⚡ 限时特惠！开启 1 年无限次 AI 动漫创作，最高立省 27%。',
      viewPlan: '查看方案 →',
      startForFree: '免费开始',
      pricing: '定价',
      login: '登录',
      help: '帮助',
      tokens: '代币',
      searchPlaceholder: '搜索角色、声音、背景素材...',
      
      // Sidebar
      navHome: '首页',
      secCreate: '创作',
      navStudio: '动漫工作室',
      navAMV: 'AMV 生成器',
      navCharacter: '角色设计',
      navWorld: '世界构建',
      navVoice: '配音与音频',
      navIntegrations: '集成工具',
      
      secAssets: '资产与数据库',
      navFolders: '所有文件夹 (数据库)',
      navCharFolder: '📁 角色资源文件夹',
      navBgFolder: '📁 背景资源文件夹',
      navVoiceFolder: '📁 语音配置文件夹',
      navScenesFolder: '📁 分镜与 AMV 文件夹',
      
      secInspire: '灵感',
      navTemplates: '动漫模板',
      navTutorials: '教程中心',
      navCommunity: '社区展示',
      
      secPinned: '置顶工具',
      toolLipSync: '自动唇形同步',
      toolKeyframe: '关键帧同步',
      toolUpscale: '超清画质增强',
      toolColorize: '漫画智能上色',
      
      // Studio Main
      heroTitle: '今天想创作什么？ ✨',
      heroTagline: 'Vibe Direct Now — AI 多语言角色与语音工作室',
      tabStudio: '动漫工作室',
      tabAMV: 'AMV',
      tabImage: '图像',
      tabCharacter: '角色',
      tabWorld: '世界',
      tabAudio: '音频',
      
      // Modes
      modeShort: '动漫短片',
      modePromo: '角色 PV',
      modeAMV: '热血 AMV',
      modeNovel: '视觉小说',
      modeMusic: '音乐视频',
      modeTrailer: '漫画预告片',
      
      // Script Director
      scriptTitle: '导演脚本与台词引擎',
      scriptSubtitle: '输入「角色名: \"台词\" [action: 动作名称]」，系统将自动匹配角色配音并触发专属动画特效。',
      scriptPlaceholder: 'Mei: "准备好了，我们开始行动吧！" [action: Magic Cast]\nKaito: "Welcome to Neo Tokyo, let\'s begin!" [action: Power Surge]\nRen: "覚悟はいいか？行くぞ！" [action: Sword Slash]\nAnanya: "வணக்கம்! நாங்கள் வெற்றி பெறுவோம்." [action: Smile]',
      runScriptBtn: '▶ 播放场景并配音朗读',
      stopScriptBtn: '⏹ 停止播放',
      exportVideoBtn: '🎥 导出视频 (AMV)',
      clearScriptBtn: '清空脚本',
      autoVoiceBadge: '自动角色配音匹配: 已启用',
      detectedChar: '识别角色',
      assignedVoice: '分配语音',
      activeAction: '激活特效 (VFX)',
      
      // Actions
      actionPowerSurge: '⚡ 能量爆发',
      actionSwordSlash: '⚔️ 拔刀斩击',
      actionMagicCast: '✨ 星宿施法',
      actionSmile: '😊 灿烂微笑',
      actionBattleStance: '🥋 战斗架势',
      actionCyberDash: '🚀 赛博冲刺',
      actionSolarFlare: '☀️ 炽阳耀斑',
      
      // Presets
      presetEnglish: '🇬🇧 英语赛博朋克场景',
      presetTamil: '🇮🇳 泰米尔神话史诗场景',
      presetJapanese: '🇯🇵 日语武士对决场景',
      presetChinese: '🇨🇳 中文仙侠星河场景',
      presetDuel: '⚔️ 四语言 英雄联动对决',
      
      // Prompt bar
      promptPlaceholder: '描述你想生成的动漫场景、台词或角色动作...',
      generateBtn: '生成场景',
      
      // Character Lab
      charLabTitle: 'AI 角色工坊与记忆库',
      charLabDesc: '创建专属动漫角色，设定独立语音音色、性格设定与动作特效。',
      newCharBtn: '+ 新建角色',
      charName: '角色名称',
      charTitle: '称号 / 角色定位',
      charLang: '主要语言',
      charVoiceActor: '指定配音演员 / 模型',
      charPitch: '音高 (Pitch)',
      charSpeed: '语速',
      charStyle: '美术画风',
      charBackstory: '背景故事与设定',
      testVoiceBtn: '🔊 试听配音',
      saveCharBtn: '💾 保存角色至数据库',
      
      // Asset Manager
      assetManagerTitle: '数据库与文件夹管理',
      assetManagerDesc: '按文件夹清晰管理角色、场景背景、语音音频及导出视频工程。',
      newFolderBtn: '+ 新建文件夹',
      uploadAssetBtn: '+ 上传资产',
      exportDbBtn: '📥 备份数据库 (JSON)',
      importDbBtn: '📤 导入数据库',
      totalAssets: '资产总数',
      filterAll: '全部文件',
      filterCharacters: '角色',
      filterBackgrounds: '背景',
      filterVoices: '语音文件',
      filterScenes: '分镜场景',
      
      // Notifications
      savedSuccess: '已成功保存至数据库！',
      scenePlaying: '正在通过语音合成与唇形动画播放场景...',
      recordingStarted: '开始录制动漫场景视频...',
      recordingFinished: '视频录制完毕，可直接下载！'
    }
  },

  t(key) {
    const lang = this.currentLang;
    if (this.translations[lang] && this.translations[lang][key]) {
      return this.translations[lang][key];
    }
    return this.translations.en[key] || key;
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
