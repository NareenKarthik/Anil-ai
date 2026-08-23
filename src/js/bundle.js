/**
 * AnimeArt AI Character Studio — Master Unified Engine Bundle
 * Includes:
 * - Web Audio API Procedural Sound FX Synthesizer (Slash, Thunder, Chime, Blast, Aura Surge)
 * - 60FPS Multi-Phase Action Animation Engine (Anticipation -> Surge -> Climax -> Recovery)
 * - Natural Language Action Prompt Parser (translates ANY user prompt into real-time animation)
 * - Web Speech API Multilingual Voice Engine (English, Tamil, Japanese, Chinese) + Auto Lip-Sync
 * - Script Director & Visual Novel Timeline Sequencer
 * - Local Database & Assets Management (Characters, Backgrounds, Voices, World Items)
 * - Interactive Creations Gallery with Clickable Reactions & 1-Click Stage Loading
 * - Live Sale Promo Countdown Timer & In-RAM Video / PNG Exporter
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
        appSubtitle: 'AI Character, Action & Motion Studio',
        promoBanner: '🎉 New Year Sale: Lifetime access to Starter Plan $119/mn → Just $99 (no subscriptions)',
        claimDeal: 'Claim Deal →',
        startForFree: 'Start for Free',
        pricing: 'Pricing',
        login: 'Login',
        heroTitle: 'What would you like to animate today?',
        heroTagline: 'Vibe Direct Now — AI Action, Animation & Motion Studio',
        tabStudio: 'Anime Studio',
        tabAMV: 'AMV',
        tabCharacter: 'Character',
        tabWorld: 'World & Planets',
        tabAudio: 'Audio',
        runScriptBtn: 'Play Scene & Speak Voice',
        stopScriptBtn: '⏹ Stop',
        exportVideoBtn: '🎥 Export AMV',
        clearScriptBtn: 'Clear',
        autoVoiceBadge: 'Auto-Voice Synthesis: ACTIVE',
        presetEnglish: '🇬🇧 Cyberpunk',
        presetTamil: '🇮🇳 Tamil Heritage',
        presetJapanese: '🇯🇵 Samurai Duel',
        presetChinese: '🇨🇳 Celestial Magic',
        presetDuel: '⚔️ 4-Hero Duel',
        presetMars: '🪐 Mars Colony'
      },
      ta: {
        appName: 'AnimeArt',
        appSubtitle: 'AI கதாப்பாத்திரம் மற்றும் அனிமேஷன் ஸ்டுடியோ',
        promoBanner: '🎉 புத்தாண்டு சிறப்பு தள்ளுபடி! $99 மட்டுமே!',
        claimDeal: 'சலுகையைப் பெறுங்கள் →',
        startForFree: 'இலவசமாக தொடங்கவும்',
        pricing: 'கட்டணம்',
        login: 'உள்நுழைக',
        heroTitle: 'இன்று நீங்கள் என்ன அனிமேஷன் உருவாக்க விரும்புகிறீர்கள்?',
        heroTagline: 'AI கதாப்பாத்திரம் மற்றும் அனிமேஷன் இயங்குதளம்',
        tabStudio: 'அனிமே ஸ்டுடியோ',
        tabAMV: 'AMV',
        tabCharacter: 'கதாப்பாத்திரம்',
        tabWorld: 'உலகம் & கோள்கள்',
        tabAudio: 'குரல்',
        runScriptBtn: 'காட்சியை இயக்கு & குரல் பேசு',
        stopScriptBtn: '⏹ நிறுத்து',
        exportVideoBtn: '🎥 வீடியோ ஏற்றுமதி',
        clearScriptBtn: 'அழி',
        autoVoiceBadge: 'குரல் ஒத்திசைவு: இயங்குகிறது',
        presetEnglish: '🇬🇧 சைபர்பங்க் காட்சி',
        presetTamil: '🇮🇳 தமிழ் பாரம்பரிய காட்சி',
        presetJapanese: '🇯🇵 ஜப்பானிய சமுராய் போர்',
        presetChinese: '🇨🇳 சீன விண்மீன் மாயாஜாலம்',
        presetDuel: '⚔️ 4-வீரர்கள் போர்',
        presetMars: '🪐 செவ்வாய் ஆய்வு'
      },
      ja: {
        appName: 'AnimeArt',
        appSubtitle: 'AIキャラクター＆アクションアニメーションスタジオ',
        promoBanner: '🎉 新年セール！年間プランが今だけ$99（サブスクなし）',
        claimDeal: '今すぐ入手 →',
        startForFree: '無料で始める',
        pricing: '料金',
        login: 'ログイン',
        heroTitle: '今日はどんなアクションをアニメーションしますか？',
        heroTagline: 'AIキャラクター＆アクションモーションスタジオ',
        tabStudio: 'アニメスタジオ',
        tabAMV: 'AMV',
        tabCharacter: 'キャラクター',
        tabWorld: '世界遺産＆惑星',
        tabAudio: '音声',
        runScriptBtn: 'シーン再生＆ボイス発声',
        stopScriptBtn: '⏹ 停止',
        exportVideoBtn: '🎥 動画書き出し',
        clearScriptBtn: 'クリア',
        autoVoiceBadge: '自動ボイス合成: 有効',
        presetEnglish: '🇬🇧 英語サイバーパンク',
        presetTamil: '🇮🇳 タミル神話遺産',
        presetJapanese: '🇯🇵 日本語サムライ決闘',
        presetChinese: '🇨🇳 中国仙侠スター',
        presetDuel: '⚔️ 4英雄マルチバトル',
        presetMars: '🪐 火星探査'
      },
      zh: {
        appName: 'AnimeArt',
        appSubtitle: 'AI 动漫角色与动作动画工坊',
        promoBanner: '🎉 新年特惠！终身入门方案仅需 $99（无订阅）',
        claimDeal: '立即获取 →',
        startForFree: '免费开始',
        pricing: '定价',
        login: '登录',
        heroTitle: '今天想要制作什么动作动画？',
        heroTagline: 'AI 动漫角色与动作生成引擎',
        tabStudio: '动漫工坊',
        tabAMV: 'AMV',
        tabCharacter: '角色设计',
        tabWorld: '世界遗产与行星',
        tabAudio: '音频',
        runScriptBtn: '播放场景并合成语音',
        stopScriptBtn: '⏹ 停止',
        exportVideoBtn: '🎥 导出视频',
        clearScriptBtn: '清空',
        autoVoiceBadge: '自动语音合成: 开启',
        presetEnglish: '🇬🇧 赛博朋克场景',
        presetTamil: '🇮🇳 泰米尔古遗迹',
        presetJapanese: '🇯🇵 武士决斗',
        presetChinese: '🇨🇳 仙侠星斗',
        presetDuel: '⚔️ 四英雄决斗',
        presetMars: '🪐 火星探索'
      }
    },

    t(key) {
      const dict = this.translations[this.currentLang] || this.translations.en;
      return dict[key] || this.translations.en[key] || key;
    },

    setLanguage(lang) {
      if (this.translations[lang]) {
        this.currentLang = lang;
        this.updateDOM();
      }
    },

    updateDOM() {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = this.t(key);
      });
    }
  };

  /* ==========================================================================
     2. PROCEDURAL SOUND FX SYNTHESIZER (WEB AUDIO API)
     ========================================================================== */
  const SoundEngine = {
    ctx: null,

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    },

    playSlash() {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      
      const bufferSize = this.ctx.sampleRate * 0.25;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, now);
      filter.frequency.exponentialRampToValueAtTime(3600, now + 0.1);
      filter.frequency.exponentialRampToValueAtTime(400, now + 0.25);
      filter.Q.setValueAtTime(4, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.35, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      const osc = this.ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(2000, now);
      osc.frequency.exponentialRampToValueAtTime(500, now + 0.2);

      const oscGain = this.ctx.createGain();
      oscGain.gain.setValueAtTime(0.18, now);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.connect(oscGain);
      oscGain.connect(this.ctx.destination);

      noise.start(now);
      noise.stop(now + 0.25);
      osc.start(now);
      osc.stop(now + 0.2);
    },

    playThunder() {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.6);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

      const bufferSize = this.ctx.sampleRate * 0.4;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * (Math.random() > 0.85 ? 1 : 0.2);
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = 'highpass';
      noiseFilter.frequency.setValueAtTime(800, now);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.3, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.6);
      noise.start(now);
      noise.stop(now + 0.4);
    },

    playMagicChime() {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];

      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.01, now + idx * 0.06);
        gain.gain.linearRampToValueAtTime(0.18, now + idx * 0.06 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.5);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.5);
      });
    },

    playImpactBlast() {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(120, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.5);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.45, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.5);
    },

    playAuraSurge() {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(90, now);
      osc.frequency.exponentialRampToValueAtTime(450, now + 0.35);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(200, now);
      filter.frequency.exponentialRampToValueAtTime(2500, now + 0.35);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.25, now + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.45);
    }
  };

  /* ==========================================================================
     3. HIGH-PERFORMANCE 60FPS CANVAS & ACTION ANIMATION ENGINE
     ========================================================================== */
  const CanvasEngine = {
    canvas: null,
    ctx: null,
    width: 1280,
    height: 720,
    
    // State
    bgImage: null,
    bgLoaded: false,
    currentChar: null,
    charImage: null,
    charLoaded: false,
    
    // Animation state
    time: 0,
    animId: null,
    playbackSpeed: 1.0,
    isPaused: false,
    isLooping: true,
    
    // Camera
    cameraZoom: 1.0,
    cameraPanX: 0,
    cameraPanY: 0,
    cameraTargetZoom: 1.0,
    cameraTargetPanX: 0,
    cameraTargetPanY: 0,
    shakeAmount: 0,
    flashWhite: 0,
    
    // Lip Sync & Expressions
    lipSyncLevel: 0,
    
    // Action State Machine
    activeAction: null,
    actionPhase: 'idle', // 'anticipation', 'surge', 'climax', 'recovery', 'idle'
    actionProgress: 0,
    actionDuration: 240,
    actionElapsed: 0,
    
    // Kinematic offsets
    charOffset: { x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0, opacity: 1 },
    charTargetOffset: { x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0, opacity: 1 },

    // VFX
    particles: [],
    slashTrails: [],
    lightningBolts: [],
    magicRunes: [],
    shockwaves: [],

    // Recorder
    mediaRecorder: null,
    recordedChunks: [],
    isRecording: false,

    init(canvasElement) {
      this.canvas = canvasElement;
      this.ctx = this.canvas.getContext('2d');
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      
      this.initParticles();
      this.startLoop();
    },

    setBackground(imageSrc) {
      this.bgLoaded = false;
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = imageSrc;
      img.onload = () => {
        this.bgImage = img;
        this.bgLoaded = true;
      };
    },

    setCharacter(charObj) {
      this.currentChar = charObj;
      this.charLoaded = false;
      if (!charObj || !charObj.avatar) return;

      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = charObj.avatar;
      img.onload = () => {
        this.charImage = img;
        this.charLoaded = true;
      };
    },

    setLipSync(level) {
      this.lipSyncLevel = Math.max(0, Math.min(1, level));
    },

    triggerAction(actionInput) {
      const config = this.parseActionPrompt(actionInput);
      this.activeAction = config;
      this.actionElapsed = 0;
      this.actionProgress = 0;
      this.actionPhase = 'anticipation';
      this.actionDuration = config.duration || 240;

      if (config.category === 'sword') SoundEngine.playAuraSurge();
      else if (config.category === 'lightning') SoundEngine.playThunder();
      else if (config.category === 'magic') SoundEngine.playMagicChime();
      else SoundEngine.playAuraSurge();

      if (window.App && window.App.updateActionTimelineUI) {
        window.App.updateActionTimelineUI(this.actionPhase, 0, config.name);
      }
    },

    parseActionPrompt(input) {
      if (!input) input = 'Blade Storm Slash';
      const text = String(input).toLowerCase();

      if (text.includes('sword') || text.includes('slash') || text.includes('blade') || text.includes('katana') || text.includes('cut')) {
        return { name: input, category: 'sword', auraColor: '#ff2a85', secondaryColor: '#00f0ff', duration: 240 };
      }
      if (text.includes('thunder') || text.includes('lightning') || text.includes('electric') || text.includes('cyber') || text.includes('overdrive')) {
        return { name: input, category: 'lightning', auraColor: '#00f0ff', secondaryColor: '#ffffff', duration: 240 };
      }
      if (text.includes('fire') || text.includes('flame') || text.includes('solar') || text.includes('sun') || text.includes('dragon') || text.includes('burst')) {
        return { name: input, category: 'fire', auraColor: '#ffb703', secondaryColor: '#ff0055', duration: 240 };
      }
      if (text.includes('magic') || text.includes('spell') || text.includes('celestial') || text.includes('star') || text.includes('summon') || text.includes('astral')) {
        return { name: input, category: 'magic', auraColor: '#8338ec', secondaryColor: '#4cc9f0', duration: 260 };
      }
      if (text.includes('sakura') || text.includes('dance') || text.includes('flower') || text.includes('waltz') || text.includes('spin')) {
        return { name: input, category: 'sakura', auraColor: '#ff70a6', secondaryColor: '#ffd166', duration: 250 };
      }
      if (text.includes('punch') || text.includes('kick') || text.includes('strike') || text.includes('kinetic') || text.includes('martial')) {
        return { name: input, category: 'strike', auraColor: '#06d6a0', secondaryColor: '#ffffff', duration: 220 };
      }
      if (text.includes('dark') || text.includes('void') || text.includes('abyss') || text.includes('shadow') || text.includes('berserk')) {
        return { name: input, category: 'dark', auraColor: '#7209b7', secondaryColor: '#f72585', duration: 240 };
      }
      if (text.includes('cry') || text.includes('tear') || text.includes('sad') || text.includes('speech')) {
        return { name: input, category: 'tears', auraColor: '#4cc9f0', secondaryColor: '#ffffff', duration: 240 };
      }
      if (text.includes('smile') || text.includes('love') || text.includes('heart') || text.includes('blush')) {
        return { name: input, category: 'love', auraColor: '#ff2a85', secondaryColor: '#ffb4d6', duration: 220 };
      }

      return { name: input, category: 'cosmic', auraColor: '#00f0ff', secondaryColor: '#ff2a85', duration: 240 };
    },

    initParticles() {
      this.particles = [];
      for (let i = 0; i < 40; i++) {
        this.particles.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          size: Math.random() * 5 + 3,
          speedX: (Math.random() - 0.5) * 1.2 + 0.5,
          speedY: Math.random() * 1.0 + 0.4,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.04,
          color: 'rgba(255, 180, 210, 0.6)',
          type: 'petal'
        });
      }
    },

    startLoop() {
      const loop = () => {
        if (!this.isPaused) {
          this.time += 0.016 * this.playbackSpeed;
          this.update();
        }
        this.render();
        this.animId = requestAnimationFrame(loop);
      };
      this.animId = requestAnimationFrame(loop);
    },

    setPlaybackSpeed(speed) {
      this.playbackSpeed = Number(speed) || 1.0;
    },

    togglePause() {
      this.isPaused = !this.isPaused;
      return this.isPaused;
    },

    scrubTo(percent) {
      if (!this.activeAction) {
        this.triggerAction('Blade Storm Slash');
      }
      this.actionProgress = Math.max(0, Math.min(1, percent));
      this.actionElapsed = this.actionProgress * this.actionDuration;
      this.evaluateActionPhase();
    },

    update() {
      this.cameraZoom += (this.cameraTargetZoom - this.cameraZoom) * 0.08;
      this.cameraPanX += (this.cameraTargetPanX - this.cameraPanX) * 0.08;
      this.cameraPanY += (this.cameraTargetPanY - this.cameraPanY) * 0.08;

      if (this.flashWhite > 0) {
        this.flashWhite = Math.max(0, this.flashWhite - 0.05);
      }
      if (this.shakeAmount > 0) {
        this.shakeAmount *= 0.90;
        if (this.shakeAmount < 0.2) this.shakeAmount = 0;
      }

      if (this.activeAction) {
        this.actionElapsed += this.playbackSpeed;
        this.actionProgress = Math.min(1.0, this.actionElapsed / this.actionDuration);
        this.evaluateActionPhase();
        this.updateActionKinematics();

        if (window.App && window.App.updateActionTimelineUI) {
          window.App.updateActionTimelineUI(this.actionPhase, this.actionProgress, this.activeAction.name);
        }

        if (this.actionProgress >= 1.0) {
          if (this.isLooping) {
            this.actionElapsed = 0;
            this.actionProgress = 0;
            this.actionPhase = 'anticipation';
          } else {
            this.activeAction = null;
            this.actionPhase = 'idle';
          }
        }
      }

      this.charOffset.x += (this.charTargetOffset.x - this.charOffset.x) * 0.15;
      this.charOffset.y += (this.charTargetOffset.y - this.charOffset.y) * 0.15;
      this.charOffset.scaleX += (this.charTargetOffset.scaleX - this.charOffset.scaleX) * 0.15;
      this.charOffset.scaleY += (this.charTargetOffset.scaleY - this.charOffset.scaleY) * 0.15;
      this.charOffset.rotation += (this.charTargetOffset.rotation - this.charOffset.rotation) * 0.15;

      this.updateVFX();
    },

    evaluateActionPhase() {
      const p = this.actionProgress;
      const prevPhase = this.actionPhase;

      if (p < 0.25) this.actionPhase = 'anticipation';
      else if (p < 0.50) this.actionPhase = 'surge';
      else if (p < 0.80) this.actionPhase = 'climax';
      else this.actionPhase = 'recovery';

      if (this.actionPhase !== prevPhase && this.actionPhase === 'climax') {
        this.flashWhite = 0.5;
        this.shakeAmount = 16;
        if (this.activeAction.category === 'sword') {
          SoundEngine.playSlash();
          this.spawnSlashArcs();
        } else if (this.activeAction.category === 'lightning') {
          SoundEngine.playThunder();
          this.spawnLightningBursts();
        } else if (this.activeAction.category === 'fire') {
          SoundEngine.playImpactBlast();
          this.spawnFireNova();
        } else if (this.activeAction.category === 'magic') {
          SoundEngine.playMagicChime();
          this.spawnMagicCircle();
        } else if (this.activeAction.category === 'strike') {
          SoundEngine.playImpactBlast();
          this.spawnShockwaveRing();
        } else {
          SoundEngine.playAuraSurge();
        }
      }
    },

    updateActionKinematics() {
      const act = this.activeAction;
      if (!act) return;
      const p = this.actionProgress;

      switch (this.actionPhase) {
        case 'anticipation':
          this.cameraTargetZoom = 1.15;
          this.charTargetOffset = { x: -25, y: 20, scaleX: 1.05, scaleY: 0.95, rotation: -0.05, opacity: 1 };
          this.spawnChargeMotes(act.auraColor);
          break;
        case 'surge':
          this.cameraTargetZoom = 1.25;
          this.charTargetOffset = { x: Math.sin(this.time * 25) * 6, y: -40 + Math.sin(this.time * 8) * 15, scaleX: 1.08, scaleY: 1.08, rotation: Math.sin(this.time * 10) * 0.04, opacity: 1 };
          if (Math.random() > 0.4) this.spawnAuraBurst(act.auraColor, act.secondaryColor);
          break;
        case 'climax':
          this.cameraTargetZoom = 1.35;
          this.cameraTargetPanX = Math.sin(this.time * 20) * 12;
          this.charTargetOffset = { x: Math.sin(p * Math.PI * 4) * 80, y: -65 + Math.cos(p * Math.PI * 4) * 20, scaleX: 1.18, scaleY: 1.12, rotation: (Math.random() - 0.5) * 0.08, opacity: 1 };
          break;
        case 'recovery':
          this.cameraTargetZoom = 1.05;
          this.cameraTargetPanX = 0;
          this.charTargetOffset = { x: 0, y: 0, scaleX: 1.0, scaleY: 1.0, rotation: 0, opacity: 1 };
          break;
      }
    },

    spawnSlashArcs() {
      for (let i = 0; i < 3; i++) {
        this.slashTrails.push({
          x1: this.width * (0.15 + i * 0.1),
          y1: this.height * (0.15 + i * 0.15),
          x2: this.width * (0.85 - i * 0.05),
          y2: this.height * (0.85 - i * 0.1),
          progress: 0,
          color: this.activeAction.auraColor || '#ff2a85',
          glow: this.activeAction.secondaryColor || '#00f0ff'
        });
      }
    },

    spawnLightningBursts() {
      this.lightningBolts = [];
      for (let b = 0; b < 7; b++) {
        const points = [];
        let curX = this.width * 0.5 + (Math.random() - 0.5) * 320;
        let curY = 0;
        points.push({ x: curX, y: curY });
        for (let i = 0; i < 8; i++) {
          curX += (Math.random() - 0.5) * 130;
          curY += (this.height / 8) + (Math.random() - 0.5) * 30;
          points.push({ x: curX, y: curY });
        }
        this.lightningBolts.push({ points, life: 25, color: '#00f0ff', width: Math.random() * 4 + 2 });
      }
    },

    spawnFireNova() {
      for (let i = 0; i < 70; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 12 + 4;
        this.particles.push({
          x: this.width * 0.5,
          y: this.height * 0.45,
          size: Math.random() * 8 + 4,
          speedX: Math.cos(angle) * speed,
          speedY: Math.sin(angle) * speed,
          rotation: Math.random() * Math.PI,
          rotSpeed: (Math.random() - 0.5) * 0.1,
          color: Math.random() > 0.4 ? '#ffb703' : '#ff0055',
          life: 65,
          type: 'spark'
        });
      }
    },

    spawnMagicCircle() {
      this.magicRunes.push({
        x: this.width * 0.5,
        y: this.height * 0.55,
        radius: 220,
        rotation: 0,
        opacity: 1,
        life: 120,
        color: '#8338ec',
        accent: '#4cc9f0'
      });
    },

    spawnShockwaveRing() {
      this.shockwaves.push({
        x: this.width * 0.5,
        y: this.height * 0.5,
        radius: 10,
        maxRadius: 360,
        opacity: 1,
        color: '#06d6a0'
      });
    },

    spawnChargeMotes(color) {
      for (let i = 0; i < 3; i++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * 220 + 80;
        this.particles.push({
          x: this.width * 0.5 + Math.cos(angle) * dist,
          y: this.height * 0.5 + Math.sin(angle) * dist,
          size: Math.random() * 4 + 2,
          speedX: -Math.cos(angle) * 5,
          speedY: -Math.sin(angle) * 5,
          rotation: 0,
          rotSpeed: 0,
          color: color || '#ff2a85',
          life: 30,
          type: 'spark'
        });
      }
    },

    spawnAuraBurst(c1, c2) {
      for (let i = 0; i < 4; i++) {
        this.particles.push({
          x: this.width * 0.5 + (Math.random() - 0.5) * 160,
          y: this.height * 0.55 + (Math.random() - 0.5) * 200,
          size: Math.random() * 6 + 3,
          speedX: (Math.random() - 0.5) * 3,
          speedY: -Math.random() * 4 - 2,
          rotation: 0,
          rotSpeed: 0,
          color: Math.random() > 0.5 ? c1 : c2,
          life: 45,
          type: 'star'
        });
      }
    },

    updateVFX() {
      this.particles.forEach((p, idx) => {
        p.x += p.speedX * this.playbackSpeed;
        p.y += p.speedY * this.playbackSpeed;
        p.rotation += p.rotSpeed * this.playbackSpeed;

        if (p.type === 'spark' || p.type === 'star') {
          p.life = (p.life || 60) - this.playbackSpeed;
          if (p.life <= 0) this.particles.splice(idx, 1);
        } else if (p.type === 'petal') {
          if (p.y > this.height + 20) {
            p.y = -20;
            p.x = Math.random() * this.width;
          }
          if (p.x > this.width + 20) p.x = -20;
        }
      });

      this.slashTrails.forEach((s, idx) => {
        s.progress += 0.09 * this.playbackSpeed;
        if (s.progress > 1) this.slashTrails.splice(idx, 1);
      });

      this.lightningBolts.forEach((b, idx) => {
        b.life -= this.playbackSpeed;
        if (b.life <= 0) this.lightningBolts.splice(idx, 1);
      });

      this.magicRunes.forEach((m, idx) => {
        m.rotation += 0.03 * this.playbackSpeed;
        m.life -= this.playbackSpeed;
        m.opacity = Math.max(0, m.life / 120);
        if (m.life <= 0) this.magicRunes.splice(idx, 1);
      });

      this.shockwaves.forEach((w, idx) => {
        w.radius += 12 * this.playbackSpeed;
        w.opacity = Math.max(0, 1 - w.radius / w.maxRadius);
        if (w.radius >= w.maxRadius) this.shockwaves.splice(idx, 1);
      });
    },

    render() {
      const ctx = this.ctx;
      if (!ctx) return;

      ctx.save();
      ctx.clearRect(0, 0, this.width, this.height);

      const cx = this.width / 2;
      const cy = this.height / 2;

      let shakeX = 0;
      let shakeY = 0;
      if (this.shakeAmount > 0) {
        shakeX = (Math.random() - 0.5) * this.shakeAmount * 2;
        shakeY = (Math.random() - 0.5) * this.shakeAmount * 2;
      }

      ctx.translate(cx + this.cameraPanX + shakeX, cy + this.cameraPanY + shakeY);
      ctx.scale(this.cameraZoom, this.cameraZoom);
      ctx.translate(-cx, -cy);

      // 1. Draw Background
      if (this.bgLoaded && this.bgImage) {
        const zoom = 1.0 + Math.sin(this.time * 0.25) * 0.03;
        const bgW = this.width * zoom;
        const bgH = this.height * zoom;
        const bgX = (this.width - bgW) / 2 + Math.sin(this.time * 0.35) * 14;
        const bgY = (this.height - bgH) / 2;
        ctx.drawImage(this.bgImage, bgX, bgY, bgW, bgH);
      } else {
        const grad = ctx.createLinearGradient(0, 0, this.width, this.height);
        grad.addColorStop(0, '#0a0a14');
        grad.addColorStop(0.5, '#161426');
        grad.addColorStop(1, '#08080f');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, this.width, this.height);
      }

      // 2. Atmosphere Speedlines
      if (this.activeAction && (this.actionPhase === 'surge' || this.actionPhase === 'climax')) {
        ctx.save();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
        ctx.lineWidth = 2.5;
        const center = { x: this.width / 2, y: this.height / 2 };
        for (let a = 0; a < Math.PI * 2; a += 0.28) {
          const jitter = (Math.random() - 0.5) * 0.08;
          const angle = a + jitter;
          const r1 = 280 + Math.random() * 90;
          const r2 = this.width * 0.95;
          ctx.beginPath();
          ctx.moveTo(center.x + Math.cos(angle) * r1, center.y + Math.sin(angle) * r1);
          ctx.lineTo(center.x + Math.cos(angle) * r2, center.y + Math.sin(angle) * r2);
          ctx.stroke();
        }
        ctx.restore();
      }

      // 3. Ground Magic Runes
      this.magicRunes.forEach(m => {
        ctx.save();
        ctx.translate(m.x, m.y);
        ctx.rotate(m.rotation);
        ctx.globalAlpha = m.opacity;
        ctx.strokeStyle = m.accent;
        ctx.shadowColor = m.color;
        ctx.shadowBlur = 25;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, m.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, m.radius * 0.7, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      });

      // 4. Character Sprite
      if (this.charLoaded && this.charImage) {
        ctx.save();
        const breath = Math.sin(this.time * 2.2) * 5;
        const charWidth = 470;
        const charHeight = 626;
        const baseX = (this.width - charWidth) / 2;
        const baseY = this.height - charHeight + 35 + breath;

        ctx.translate(baseX + charWidth / 2 + this.charOffset.x, baseY + charHeight / 2 + this.charOffset.y);
        ctx.scale(this.charOffset.scaleX, this.charOffset.scaleY);
        ctx.rotate(this.charOffset.rotation);
        ctx.translate(-(baseX + charWidth / 2), -(baseY + charHeight / 2));

        if (this.activeAction) {
          ctx.save();
          ctx.shadowBlur = 45;
          ctx.shadowColor = this.activeAction.auraColor || '#ff2a85';
          ctx.drawImage(this.charImage, baseX, baseY, charWidth, charHeight);
          ctx.restore();
        }

        ctx.save();
        ctx.beginPath();
        ctx.roundRect(baseX, baseY, charWidth, charHeight, [24, 24, 0, 0]);
        ctx.clip();
        ctx.drawImage(this.charImage, baseX, baseY, charWidth, charHeight);
        ctx.restore();

        // Lip-Sync Mouth
        if (this.lipSyncLevel > 0.05) {
          const mouthX = baseX + charWidth * 0.49;
          const mouthY = baseY + charHeight * 0.42;
          const openH = this.lipSyncLevel * 14 + 2;
          const openW = 16 + this.lipSyncLevel * 6;

          ctx.save();
          ctx.fillStyle = '#7a142c';
          ctx.beginPath();
          ctx.ellipse(mouthX, mouthY, openW / 2, openH / 2, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.ellipse(mouthX, mouthY - openH * 0.25, openW * 0.35, 2, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        ctx.restore();
      }

      // 5. Slash Trails & Lightning
      this.slashTrails.forEach(s => {
        ctx.save();
        ctx.strokeStyle = s.glow;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 30;
        ctx.lineWidth = 18 * (1 - s.progress);
        ctx.beginPath();
        ctx.moveTo(s.x1, s.y1);
        ctx.lineTo(s.x1 + (s.x2 - s.x1) * s.progress, s.y1 + (s.y2 - s.y1) * s.progress);
        ctx.stroke();
        ctx.restore();
      });

      this.lightningBolts.forEach(b => {
        if (!b.points || b.points.length < 2) return;
        ctx.save();
        ctx.strokeStyle = b.color;
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 25;
        ctx.lineWidth = b.width || 3;
        ctx.beginPath();
        ctx.moveTo(b.points[0].x, b.points[0].y);
        for (let i = 1; i < b.points.length; i++) ctx.lineTo(b.points[i].x, b.points[i].y);
        ctx.stroke();
        ctx.restore();
      });

      this.shockwaves.forEach(w => {
        ctx.save();
        ctx.strokeStyle = w.color;
        ctx.shadowColor = w.color;
        ctx.shadowBlur = 20;
        ctx.globalAlpha = w.opacity;
        ctx.lineWidth = 4 * w.opacity;
        ctx.beginPath();
        ctx.arc(w.x, w.y, w.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      });

      // 6. Particles
      this.particles.forEach(p => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        if (p.type === 'petal') {
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 1.6, p.size * 0.9, 0, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'star') {
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 2);
          ctx.lineTo(p.size * 0.5, -p.size * 0.5);
          ctx.lineTo(p.size * 2, 0);
          ctx.lineTo(p.size * 0.5, p.size * 0.5);
          ctx.lineTo(0, p.size * 2);
          ctx.lineTo(-p.size * 0.5, p.size * 0.5);
          ctx.lineTo(-p.size * 2, 0);
          ctx.lineTo(-p.size * 0.5, -p.size * 0.5);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });

      ctx.restore();

      // Flash
      if (this.flashWhite > 0) {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.flashWhite})`;
        ctx.fillRect(0, 0, this.width, this.height);
      }
    },

    captureFrame() {
      if (!this.canvas) return null;
      return this.canvas.toDataURL('image/png');
    },

    startRecording() {
      if (this.isRecording) return;
      this.recordedChunks = [];
      try {
        const stream = this.canvas.captureStream(60);
        const mimeTypes = ['video/webm;codecs=vp9', 'video/webm', 'video/mp4'];
        let selectedMime = 'video/webm';
        for (const m of mimeTypes) {
          if (MediaRecorder.isTypeSupported(m)) {
            selectedMime = m;
            break;
          }
        }
        this.mediaRecorder = new MediaRecorder(stream, { mimeType: selectedMime });
        this.mediaRecorder.ondataavailable = (e) => {
          if (e.data && e.data.size > 0) this.recordedChunks.push(e.data);
        };
        this.mediaRecorder.start(100);
        this.isRecording = true;
      } catch (e) {
        console.error('Recording error:', e);
      }
    },

    stopRecording() {
      return new Promise((resolve) => {
        if (!this.isRecording || !this.mediaRecorder) {
          resolve(null);
          return;
        }
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
     4. DATABASE & PRESET ENTITIES
     ========================================================================== */
  const Database = {
    characters: [
      {
        id: 'char_kaito',
        name: 'Kaito',
        role: 'Neo-Tokyo Ronin',
        gender: 'Male',
        lang: 'en',
        avatar: 'assets/characters/kaito.jpg',
        style: 'Neo-Tokyo Cyberpunk',
        pitch: 1.0,
        speed: 1.0,
        backstory: 'A cybernetic swordsman walking rainy Neo Tokyo neon alleys.',
        superpower: { name: 'Blade Storm Slash', element: 'plasma' }
      },
      {
        id: 'char_ananya',
        name: 'Ananya',
        role: 'Solar Priestess',
        gender: 'Female',
        lang: 'ta',
        avatar: 'assets/characters/ananya.jpg',
        style: 'Ancient Solar Fantasy',
        pitch: 1.1,
        speed: 0.95,
        backstory: 'Guardian of the thousand-pillar golden sun temple.',
        superpower: { name: 'Solar Dragon Burst', element: 'solar' }
      },
      {
        id: 'char_ren',
        name: 'Ren',
        role: 'Blood Moon Paladin',
        gender: 'Male',
        lang: 'ja',
        avatar: 'assets/characters/ren.jpg',
        style: 'Feudal Samurai Noir',
        pitch: 0.9,
        speed: 1.05,
        backstory: 'Honor-bound warrior wielding shadow lightning under the blood moon.',
        superpower: { name: 'Thunder Overdrive', element: 'lightning' }
      },
      {
        id: 'char_mei',
        name: 'Mei',
        role: 'Celestial Archon',
        gender: 'Female',
        lang: 'zh',
        avatar: 'assets/characters/mei.jpg',
        style: 'Xianxia Celestial Magic',
        pitch: 1.15,
        speed: 1.0,
        backstory: 'Master of starry constellations and ancient lotus arts.',
        superpower: { name: 'Celestial Starfall', element: 'magic' }
      }
    ],

    backgrounds: [
      { id: 'bg_shrine', title: 'Cherry Blossom Shrine & Torii', url: 'assets/backgrounds/cherry_shrine.jpg', genre: 'romance', theme: 'Traditional Japanese' },
      { id: 'bg_cyberpunk', title: 'Neo Tokyo Cyberpunk Alley', url: 'assets/backgrounds/cyberpunk_city.jpg', genre: 'scifi', theme: 'Cyberpunk' },
      { id: 'bg_temple', title: 'Ancient Gopuram Sun Temple', url: 'assets/backgrounds/fantasy_temple.jpg', genre: 'magic', theme: 'South Asian Fantasy' },
      { id: 'bg_classroom', title: 'Sunset Academy Classroom', url: 'assets/backgrounds/anime_classroom.jpg', genre: 'family', theme: 'Slice of Life' },
      { id: 'bg_horror', title: 'Blood Moon Gothic Fortress', url: 'assets/backgrounds/horror_castle.jpg', genre: 'horror', theme: 'Dark Horror' }
    ],

    voices: [
      { id: 'v_en_kaito', name: 'Kaito (Cyberpunk Pro)', lang: 'en-US', pitch: 1.0, rate: 1.0, type: 'Heroic' },
      { id: 'v_ta_ananya', name: 'Ananya (Solar Royal)', lang: 'ta-IN', pitch: 1.1, rate: 0.95, type: 'Melodic' },
      { id: 'v_ja_ren', name: 'Ren (Samurai Noir)', lang: 'ja-JP', pitch: 0.9, rate: 1.05, type: 'Intense' },
      { id: 'v_zh_mei', name: 'Mei (Celestial Mystic)', lang: 'zh-CN', pitch: 1.15, rate: 1.0, type: 'Ethereal' }
    ],

    worldItems: [
      { id: 'w_brihadisvara', title: 'Brihadisvara Temple (Thanjavur)', category: 'heritage', country: 'India', img: 'assets/backgrounds/fantasy_temple.jpg', desc: '1,000-year-old Granite architectural marvel.' },
      { id: 'w_fushimi', title: 'Fushimi Inari Shrine (Kyoto)', category: 'heritage', country: 'Japan', img: 'assets/backgrounds/cherry_shrine.jpg', desc: 'Sacred mountain covered in thousands of vermilion Torii gates.' },
      { id: 'w_greatwall', title: 'Great Wall Celestial Pass', category: 'heritage', country: 'China', img: 'assets/characters/mei.jpg', desc: 'Ancient stone dragon stretching over misty mountain ridges.' },
      { id: 'w_mars', title: 'Mars Olympus Base Colony', category: 'planets', country: 'Solar System', img: 'assets/backgrounds/horror_castle.jpg', desc: 'Red planet terraforming citadel under towering canyons.' },
      { id: 'w_europa', title: 'Europa Subsurface Ice Ocean', category: 'planets', country: 'Jupiter Moon', img: 'assets/backgrounds/cyberpunk_city.jpg', desc: 'Bioluminescent deep-sea world beneath 20km ice crust.' },
      { id: 'w_classroom', title: 'Sunset Academy of Tokyo', category: 'creatures', country: 'Japan', img: 'assets/backgrounds/anime_classroom.jpg', desc: 'High school rooftop where student anime legends unfold.' }
    ],

    getCharacters() { return this.characters; },
    getCharacterByName(name) { return this.characters.find(c => c.name.toLowerCase() === name.toLowerCase()) || this.characters[0]; },
    getBackgrounds() { return this.backgrounds; },
    getBackgroundById(id) { return this.backgrounds.find(b => b.id === id) || this.backgrounds[0]; },
    getWorldItems(cat = 'all') {
      if (cat === 'all') return this.worldItems;
      return this.worldItems.filter(w => w.category === cat);
    }
  };

  /* ==========================================================================
     5. WEB SPEECH API MULTILINGUAL VOICE ENGINE
     ========================================================================== */
  const VoiceEngine = {
    synth: window.speechSynthesis,
    isSpeaking: false,
    lipSyncInterval: null,

    speak({ text, lang = 'en', pitch = 1.0, rate = 1.0, onEnd }) {
      if (!this.synth) {
        if (onEnd) onEnd();
        return;
      }
      this.synth.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      const voices = this.synth.getVoices();
      
      const langPrefix = lang.slice(0, 2);
      const voice = voices.find(v => v.lang.startsWith(langPrefix)) || voices[0];
      if (voice) utterance.voice = voice;

      utterance.pitch = pitch;
      utterance.rate = rate;

      this.isSpeaking = true;
      this.startSimulatedLipSync();

      utterance.onend = () => {
        this.isSpeaking = false;
        this.stopLipSync();
        if (onEnd) onEnd();
      };

      utterance.onerror = () => {
        this.isSpeaking = false;
        this.stopLipSync();
        if (onEnd) onEnd();
      };

      this.synth.speak(utterance);
    },

    stop() {
      if (this.synth) this.synth.cancel();
      this.isSpeaking = false;
      this.stopLipSync();
    },

    startSimulatedLipSync() {
      this.stopLipSync();
      this.lipSyncInterval = setInterval(() => {
        if (this.isSpeaking) {
          const level = Math.random() > 0.3 ? (Math.random() * 0.7 + 0.3) : 0;
          CanvasEngine.setLipSync(level);
        } else {
          CanvasEngine.setLipSync(0);
        }
      }, 90);
    },

    stopLipSync() {
      if (this.lipSyncInterval) clearInterval(this.lipSyncInterval);
      CanvasEngine.setLipSync(0);
    }
  };

  /* ==========================================================================
     6. SCRIPT DIRECTOR & DIALOGUE SEQUENCER
     ========================================================================== */
  const ScriptDirector = {
    isPlaying: false,
    lines: [],
    currentLineIdx: 0,
    timeoutId: null,

    parseScript(scriptText) {
      const rawLines = scriptText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      const result = [];

      for (const line of rawLines) {
        const colonIdx = line.indexOf(':');
        if (colonIdx === -1) continue;

        const speaker = line.slice(0, colonIdx).trim();
        const remainder = line.slice(colonIdx + 1).trim();

        let dialogue = remainder;
        let action = null;

        const actionMatch = remainder.match(/\[action:\s*([^\]]+)\]/i);
        if (actionMatch) {
          action = actionMatch[1].trim();
          dialogue = remainder.replace(actionMatch[0], '').trim();
        }
        dialogue = dialogue.replace(/^["']|["']$/g, '').trim();

        const charObj = Database.getCharacterByName(speaker);
        result.push({ speaker, dialogue, action, charObj });
      }

      return result;
    },

    play(scriptText, onLineChange, onComplete) {
      this.stop();
      this.lines = this.parseScript(scriptText);
      if (this.lines.length === 0) return;

      this.isPlaying = true;
      this.currentLineIdx = 0;
      this.executeNextLine(onLineChange, onComplete);
    },

    executeNextLine(onLineChange, onComplete) {
      if (!this.isPlaying || this.currentLineIdx >= this.lines.length) {
        this.isPlaying = false;
        if (onComplete) onComplete();
        return;
      }

      const item = this.lines[this.currentLineIdx];
      if (onLineChange) onLineChange(item, this.currentLineIdx);

      CanvasEngine.setCharacter(item.charObj);
      if (item.action) {
        CanvasEngine.triggerAction(item.action);
      }

      VoiceEngine.speak({
        text: item.dialogue,
        lang: item.charObj.lang,
        pitch: item.charObj.pitch,
        rate: item.charObj.speed,
        onEnd: () => {
          this.timeoutId = setTimeout(() => {
            this.currentLineIdx++;
            this.executeNextLine(onLineChange, onComplete);
          }, 800);
        }
      });
    },

    stop() {
      this.isPlaying = false;
      if (this.timeoutId) clearTimeout(this.timeoutId);
      VoiceEngine.stop();
    }
  };

  /* ==========================================================================
     7. MASTER APP CONTROLLER
     ========================================================================== */
  const App = {
    currentView: 'studio',
    selectedFolder: 'characters',
    wizardState: { role: 'Protagonist', genre: 'magic', lang: 'en', power: 'Solar Light', intensity: 85 },

    init() {
      const canvasEl = document.getElementById('animeCanvas');
      if (canvasEl) {
        CanvasEngine.init(canvasEl);
        const firstChar = Database.getCharacters()[0];
        CanvasEngine.setCharacter(firstChar);
        CanvasEngine.setBackground(Database.getBackgrounds()[0].url);
        CanvasEngine.triggerAction('Blade Storm Slash');
      }

      this.setupEventListeners();
      this.renderBackgroundSelector();
      this.renderWorldItems('all');
      this.renderCharacterLabList();
      this.renderFolderDatabase();
      this.startCountdownTimer();
    },

    setupEventListeners() {
      // Navigation View Switchers
      document.querySelectorAll('[data-view-target]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const target = btn.getAttribute('data-view-target');
          this.switchView(target);
        });
      });

      // Language Switcher
      const langSel = document.getElementById('globalLangSelect');
      if (langSel) {
        langSel.addEventListener('change', (e) => I18N.setLanguage(e.target.value));
      }

      // Background Selector
      const bgSel = document.getElementById('cinemaBgSelect');
      if (bgSel) {
        bgSel.addEventListener('change', (e) => {
          const bg = Database.getBackgroundById(e.target.value);
          if (bg) CanvasEngine.setBackground(bg.url);
        });
      }

      // Custom Action Prompt Input & Trigger
      const promptInput = document.getElementById('customActionPromptInput');
      const btnAnimateAction = document.getElementById('btnExecuteCustomAction');
      if (btnAnimateAction && promptInput) {
        const handleActionTrigger = () => {
          const val = promptInput.value.trim();
          if (val) {
            this.triggerCustomAction(val);
          } else {
            this.triggerCustomAction('Blade Storm Slash');
          }
        };
        btnAnimateAction.addEventListener('click', handleActionTrigger);
        promptInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') handleActionTrigger();
        });
      }

      // Action Preset Chips
      document.querySelectorAll('.action-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          document.querySelectorAll('.action-chip').forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          const act = chip.getAttribute('data-action');
          if (promptInput) promptInput.value = act;
          this.triggerCustomAction(act);
        });
      });

      // Action Timeline Play / Pause Toggle
      const btnPlayPause = document.getElementById('btnTimelinePlayPause');
      if (btnPlayPause) {
        btnPlayPause.addEventListener('click', () => {
          const isPaused = CanvasEngine.togglePause();
          btnPlayPause.textContent = isPaused ? '▶' : '⏸';
        });
      }

      // Timeline Scrubber Slider
      const timelineSlider = document.getElementById('timelineProgressSlider');
      if (timelineSlider) {
        timelineSlider.addEventListener('input', (e) => {
          const pct = e.target.value / 100;
          CanvasEngine.scrubTo(pct);
        });
      }

      // Timeline Speed Select
      const speedSelect = document.getElementById('timelineSpeedSelect');
      if (speedSelect) {
        speedSelect.addEventListener('change', (e) => {
          CanvasEngine.setPlaybackSpeed(e.target.value);
        });
      }

      // Script Director Buttons
      const btnPlay = document.getElementById('btnPlayScript');
      const btnStop = document.getElementById('btnStopScript');
      const btnClear = document.getElementById('btnClearScript');
      const txtScript = document.getElementById('scriptEditorTextarea');

      if (btnPlay && txtScript) {
        btnPlay.addEventListener('click', () => {
          ScriptDirector.play(
            txtScript.value,
            (item) => this.updateDialogueOverlay(item),
            () => this.showToast('Scene Playback Complete! 🎉')
          );
        });
      }

      if (btnStop) {
        btnStop.addEventListener('click', () => {
          ScriptDirector.stop();
          this.showToast('Scene Playback Stopped');
        });
      }

      if (btnClear && txtScript) {
        btnClear.addEventListener('click', () => {
          txtScript.value = '';
        });
      }

      // Script Preset Chips
      document.querySelectorAll('[data-preset-script]').forEach(btn => {
        btn.addEventListener('click', () => {
          const preset = btn.getAttribute('data-preset-script');
          this.loadPresetScript(preset);
        });
      });

      // World Category Filter Buttons
      document.querySelectorAll('[data-world-cat]').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('[data-world-cat]').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const cat = btn.getAttribute('data-world-cat');
          this.renderWorldItems(cat);
        });
      });

      // Wizard Step Navigation Tabs
      document.querySelectorAll('.wizard-step-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          document.querySelectorAll('.wizard-step-tab').forEach(t => t.classList.remove('active'));
          document.querySelectorAll('.wizard-step-section').forEach(s => s.style.display = 'none');
          tab.classList.add('active');
          const targetId = tab.getAttribute('data-step-target');
          const targetSection = document.getElementById(targetId);
          if (targetSection) targetSection.style.display = 'block';
        });
      });

      // Modal Controls
      const btnNewChar = document.getElementById('btnOpenNewCharModal');
      if (btnNewChar) {
        btnNewChar.addEventListener('click', () => this.openModal('newCharacterModal'));
      }
      document.querySelectorAll('[data-close-modal]').forEach(btn => {
        btn.addEventListener('click', () => this.closeAllModals());
      });

      // Create Character Form Submit
      const charForm = document.getElementById('createCharacterForm');
      if (charForm) {
        charForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const name = document.getElementById('modalCharName').value.trim();
          const title = document.getElementById('modalCharTitle').value.trim();
          const lang = document.getElementById('modalCharLang').value;
          const style = document.getElementById('modalCharStyle').value;
          const pitch = parseFloat(document.getElementById('modalCharPitch').value) || 1.0;
          const speed = parseFloat(document.getElementById('modalCharSpeed').value) || 1.0;
          const backstory = document.getElementById('modalCharBackstory').value.trim();

          const newChar = {
            id: 'char_' + Date.now(),
            name,
            role: title,
            gender: 'Custom',
            lang,
            avatar: 'assets/characters/mei.jpg',
            style,
            pitch,
            speed,
            backstory,
            superpower: { name: 'Cosmic Singularity', element: 'magic' }
          };

          Database.characters.push(newChar);
          this.renderCharacterLabList();
          this.renderFolderDatabase();
          this.closeAllModals();
          CanvasEngine.setCharacter(newChar);
          this.switchView('studio');
          this.showToast(`Character "${name}" saved and loaded on Stage! 🌟`);
        });
      }
    },

    triggerCustomAction(promptText) {
      CanvasEngine.triggerAction(promptText);
      const activeChar = CanvasEngine.currentChar || Database.getCharacters()[0];
      let speech = `Executing ${promptText}!`;
      if (activeChar.lang === 'ta') speech = `${promptText} ஆற்றல் தொடங்குகிறது!`;
      else if (activeChar.lang === 'ja') speech = `${promptText}！行くぞ！`;
      else if (activeChar.lang === 'zh') speech = `施展 ${promptText}！`;

      this.updateDialogueOverlay({
        speaker: activeChar.name,
        dialogue: speech,
        action: promptText,
        charObj: activeChar
      });

      VoiceEngine.speak({
        text: speech,
        lang: activeChar.lang,
        pitch: activeChar.pitch,
        rate: activeChar.speed
      });

      this.showToast(`⚡ Animating: "${promptText}"`);
    },

    updateActionTimelineUI(phase, progress, actionName) {
      const textEl = document.getElementById('timelinePhaseText');
      const sliderEl = document.getElementById('timelineProgressSlider');
      if (textEl) {
        textEl.textContent = `⚡ [${phase.toUpperCase()}]: ${actionName.toUpperCase()}`;
      }
      if (sliderEl) {
        sliderEl.value = Math.round(progress * 100);
      }
    },

    loadShowcaseCharacter(charName, actionName, bgId, dialogue, lang) {
      const char = Database.getCharacterByName(charName);
      const bg = Database.getBackgroundById(bgId);

      if (char) CanvasEngine.setCharacter(char);
      if (bg) CanvasEngine.setBackground(bg.url);

      const promptInput = document.getElementById('customActionPromptInput');
      if (promptInput) promptInput.value = actionName;

      this.updateDialogueOverlay({
        speaker: char.name,
        dialogue,
        action: actionName,
        charObj: char
      });

      this.switchView('studio');
      CanvasEngine.triggerAction(actionName);

      VoiceEngine.speak({
        text: dialogue,
        lang: lang || char.lang,
        pitch: char.pitch,
        rate: char.speed
      });

      this.showToast(`Loaded "${char.name}" with action "${actionName}"! ✨`);
    },

    incrementReaction(btn) {
      const countSpan = btn.querySelector('.count');
      if (countSpan) {
        let val = parseInt(countSpan.textContent, 10) || 0;
        val += 1;
        countSpan.textContent = val;
        btn.classList.add('reacted');
        SoundEngine.playMagicChime();
      }
    },

    startCountdownTimer() {
      const badge = document.getElementById('promoCountdownBadge');
      if (!badge) return;

      let totalSeconds = 7 * 86400 + 12 * 3600 + 4 * 60 + 21;
      setInterval(() => {
        totalSeconds = Math.max(0, totalSeconds - 1);
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;
        badge.textContent = `⏳ Expires in: ${days}d ${String(hours).padStart(2, '0')}h ${String(mins).padStart(2, '0')}m ${String(secs).padStart(2, '0')}s`;
      }, 1000);
    },

    captureCanvasSnapshot() {
      const dataUrl = CanvasEngine.captureFrame();
      if (!dataUrl) return;
      const link = document.createElement('a');
      link.download = `animeart_frame_${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
      this.showToast('High-Res PNG Frame Captured & Downloaded! 📸');
    },

    async handleExportVideo() {
      const btn = document.getElementById('cinemaRecordBtn');
      if (btn) btn.textContent = '🔴 Recording...';
      this.showToast('Recording 60FPS Video Clip in RAM (3s)...');

      CanvasEngine.startRecording();
      setTimeout(async () => {
        const result = await CanvasEngine.stopRecording();
        if (btn) btn.textContent = '🎥';
        if (result && result.url) {
          const a = document.createElement('a');
          a.href = result.url;
          a.download = `anime_action_clip_${Date.now()}.webm`;
          a.click();
          this.showToast('60FPS Video Exported & Downloaded! 🎉');
        }
      }, 3500);
    },

    updateDialogueOverlay(item) {
      const avatarEl = document.getElementById('cinemaSpeakerAvatar');
      const nameEl = document.getElementById('cinemaSpeakerName');
      const langEl = document.getElementById('cinemaSpeakerLang');
      const textEl = document.getElementById('cinemaDialogueText');

      if (avatarEl && item.charObj) avatarEl.src = item.charObj.avatar;
      if (nameEl) nameEl.textContent = item.speaker;
      if (langEl && item.charObj) langEl.textContent = item.charObj.lang.toUpperCase();
      if (textEl) textEl.textContent = `"${item.dialogue}"`;
    },

    switchView(viewName) {
      this.currentView = viewName;
      document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
      const targetPanel = document.getElementById(`view-${viewName}`);
      if (targetPanel) targetPanel.classList.add('active');

      document.querySelectorAll('.sidebar-nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-view-target') === viewName);
      });

      const breadcrumb = document.getElementById('currentBreadcrumb');
      if (breadcrumb) {
        const map = { studio: 'Anime Studio', 'world-hub': 'World Heritage & Planets', 'creation-wizard': 'Creation Studio', 'character-lab': 'Character Lab', database: 'Database Folders' };
        breadcrumb.textContent = map[viewName] || 'Anime Studio';
      }
    },

    loadPresetScript(key) {
      const txt = document.getElementById('scriptEditorTextarea');
      if (!txt) return;

      const presets = {
        english: `Kaito: "Welcome to Neo Tokyo, let's begin the mission!" [action: Blade Storm Slash]\nRen: "Target locked, moving in fast!" [action: Thunder Overdrive]\nKaito: "Maximum Overdrive — Strike now!" [action: Kinetic Strike]`,
        tamil: `Ananya: "வணக்கம்! சூரியனின் பேரொளி எங்களை வழிநடத்துகிறது." [action: Solar Dragon Burst]\nAnanya: "இந்த தளம் ஆயிரம் ஆண்டுகள் பாரம்பரியம் கொண்டது." [action: Astral Transcendence]`,
        japanese: `Ren: "覚悟はいいか？行くぞ！" [action: Blade Storm Slash]\nRen: "この刀で闇を切り裂く！" [action: Thunder Overdrive]`,
        chinese: `Mei: "漫天星辰，为我们引路，光华流转！" [action: Celestial Starfall]\nMei: "万物归一，天地同心！" [action: Astral Transcendence]`,
        duel: `Kaito: "Cyber blade activated!" [action: Blade Storm Slash]\nAnanya: "சூரிய சக்தி வெளிப்படுகிறது!" [action: Solar Dragon Burst]\nRen: "覚悟！雷光一閃！" [action: Thunder Overdrive]\nMei: "九天星辰，为我所用！" [action: Celestial Starfall]`,
        mars: `Kaito: "Mars Colony terraforming shields online." [action: Void Singularity]\nRen: "Dust storm approaching Olympus Mons base!" [action: Thunder Overdrive]`
      };

      txt.value = presets[key] || presets.english;
      this.showToast(`Loaded Script: ${key.toUpperCase()}`);
    },

    renderWorldItems(cat) {
      const container = document.getElementById('worldItemsGrid');
      if (!container) return;
      const items = Database.getWorldItems(cat);

      container.innerHTML = items.map(item => `
        <div class="world-card" onclick="window.App.loadWorldItemToStage('${item.id}')">
          <div class="world-preview-box">
            <img src="${item.img}" class="world-preview-img" alt="${item.title}">
          </div>
          <div class="world-card-body">
            <div style="font-size: 15px; font-weight: 700; color: #ffffff;">${item.title}</div>
            <div style="font-size: 12px; color: var(--accent-cyan);">${item.country}</div>
            <p style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">${item.desc}</p>
          </div>
        </div>
      `).join('');
    },

    loadWorldItemToStage(id) {
      const item = Database.worldItems.find(w => w.id === id);
      if (item) {
        CanvasEngine.setBackground(item.img);
        this.switchView('studio');
        this.showToast(`Loaded "${item.title}" to Stage! 🪐`);
      }
    },

    renderCharacterLabList() {
      const el = document.getElementById('characterLabCardsList');
      if (!el) return;
      const chars = Database.getCharacters();
      el.innerHTML = chars.map(c => `
        <div class="creation-card" style="border-left: 3px solid var(--accent-pink);">
          <div class="creation-media-box">
            <img src="${c.avatar}" class="creation-card-img" alt="${c.name}">
          </div>
          <div class="creation-card-body">
            <div class="creation-card-title">${c.name} (${c.role})</div>
            <div class="creation-card-meta">
              <span>Voice: ${c.lang.toUpperCase()}</span>
              <span class="badge-tag new">⚡ ${c.superpower.name}</span>
            </div>
            <p style="font-size: 11.5px; color: var(--text-secondary); line-height: 1.4;">${c.backstory}</p>
            <div style="display: flex; gap: 6px; margin-top: 8px;">
              <button class="btn-primary-gradient" style="font-size: 11px; padding: 5px 10px;" onclick="window.App.loadShowcaseCharacter('${c.name}', '${c.superpower.name}', 'bg_shrine', '${c.backstory}', '${c.lang}')">▶ Animate on Stage</button>
            </div>
          </div>
        </div>
      `).join('');
    },

    renderFolderDatabase() {
      const listEl = document.getElementById('databaseFoldersList');
      const gridEl = document.getElementById('databaseAssetsGrid');
      if (!listEl || !gridEl) return;

      listEl.innerHTML = `
        <li><button class="folder-btn ${this.selectedFolder === 'characters' ? 'active' : ''}" onclick="window.App.selectFolder('characters')">👤 Characters (${Database.characters.length})</button></li>
        <li><button class="folder-btn ${this.selectedFolder === 'backgrounds' ? 'active' : ''}" onclick="window.App.selectFolder('backgrounds')">🖼️ Backgrounds (${Database.backgrounds.length})</button></li>
        <li><button class="folder-btn ${this.selectedFolder === 'voices' ? 'active' : ''}" onclick="window.App.selectFolder('voices')">🎙️ Voices (${Database.voices.length})</button></li>
      `;

      if (this.selectedFolder === 'characters') {
        gridEl.innerHTML = Database.characters.map(c => `
          <div class="creation-card">
            <div class="creation-media-box"><img src="${c.avatar}" class="creation-card-img"></div>
            <div class="creation-card-body">
              <div class="creation-card-title">${c.name}</div>
              <button class="btn-primary-gradient" style="font-size: 11px; padding: 4px 8px; margin-top: 4px;" onclick="window.App.loadShowcaseCharacter('${c.name}', '${c.superpower.name}', 'bg_shrine', '${c.backstory}', '${c.lang}')">Select for Stage</button>
            </div>
          </div>
        `).join('');
      } else if (this.selectedFolder === 'backgrounds') {
        gridEl.innerHTML = Database.backgrounds.map(b => `
          <div class="creation-card">
            <div class="creation-media-box"><img src="${b.url}" class="creation-card-img"></div>
            <div class="creation-card-body">
              <div class="creation-card-title">${b.title}</div>
              <button class="btn-secondary" style="font-size: 11px; padding: 4px 8px; margin-top: 4px;" onclick="CanvasEngine.setBackground('${b.url}'); window.App.switchView('studio');">Apply Background</button>
            </div>
          </div>
        `).join('');
      } else if (this.selectedFolder === 'voices') {
        gridEl.innerHTML = Database.voices.map(v => `
          <div class="creation-card" style="padding: 14px;">
            <div class="creation-card-title">🎙️ ${v.name}</div>
            <div style="font-size: 12px; color: var(--accent-cyan); margin: 6px 0;">Lang: ${v.lang} | Pitch: ${v.pitch}x</div>
            <button class="btn-secondary" style="font-size: 11px; padding: 4px 8px;" onclick="VoiceEngine.speak({ text: 'Auditioning voice for ${v.name}', lang: '${v.lang}' })">🔊 Test Voice</button>
          </div>
        `).join('');
      }
    },

    selectFolder(f) {
      this.selectedFolder = f;
      this.renderFolderDatabase();
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
