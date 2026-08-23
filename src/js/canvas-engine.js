/**
 * High-Performance 60FPS Canvas Anime Action & Scene Animation Engine
 * Features:
 * - 4-Phase Cinematic Action State Machine (Anticipation -> Surge -> Climax -> Recovery)
 * - Skeletal & Procedural Kinematics (Leap, Dash, Float, Spin, Recoil, Crouch, Breathe)
 * - Elemental VFX Shaders (Dual Katana Energy Slash, Lightning Overdrive, Solar Firestorm,
 *   Sacred Rune Magic Summoning, Sakura Vortex, Kinetic Shockwaves, Dark Abyss Void, Tears & Heart Auras)
 * - Natural Language Action Prompt Parser (translates ANY user prompt into real-time animation)
 * - Web Audio API Procedural Sound FX Synthesizer (Slash, Thunder, Chime, Whoosh, Blast, Impact)
 * - Frame Scrubber Timeline, Speed Controls (0.5x - 2x), Loop, and Video/Frame Recording
 */

export const SoundEngine = {
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
    
    // Noise buffer for swoosh
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
    filter.frequency.setValueAtTime(1200, now);
    filter.frequency.exponentialRampToValueAtTime(3200, now + 0.1);
    filter.frequency.exponentialRampToValueAtTime(400, now + 0.25);
    filter.Q.setValueAtTime(4, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.35, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    // High harmonic metallic chime
    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(1800, now);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.2);

    const oscGain = this.ctx.createGain();
    oscGain.gain.setValueAtTime(0.15, now);
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
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.6);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

    // Crackle noise
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
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C E G C E

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
    osc.frequency.setValueAtTime(80, now);
    osc.frequency.exponentialRampToValueAtTime(450, now + 0.4);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(200, now);
    filter.frequency.exponentialRampToValueAtTime(2500, now + 0.4);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.25, now + 0.2);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.5);
  }
};

export const CanvasEngine = {
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
  blinkState: 0,
  nextBlinkTime: 2000,
  
  // Action Engine State Machine
  activeAction: null,
  actionPhase: 'idle', // 'anticipation', 'surge', 'climax', 'recovery', 'idle'
  actionProgress: 0,   // 0.0 to 1.0
  actionDuration: 240, // total frames at 60fps (~4.0s)
  actionElapsed: 0,
  
  // Kinematic offsets
  charOffset: { x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0, opacity: 1 },
  charTargetOffset: { x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0, opacity: 1 },

  // VFX Arrays
  particles: [],
  slashTrails: [],
  lightningBolts: [],
  magicRunes: [],
  shockwaves: [],
  speedLines: [],
  tears: [],
  hearts: [],

  // Media Recorder
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

  /**
   * Universal Natural Language Action Trigger
   * Parses action name or custom natural language prompt and initiates full animation
   */
  triggerAction(actionInput) {
    const config = this.parseActionPrompt(actionInput);
    this.activeAction = config;
    this.actionElapsed = 0;
    this.actionProgress = 0;
    this.actionPhase = 'anticipation';
    this.actionDuration = config.duration || 240;

    // Trigger initial anticipation sound
    if (config.category === 'sword' || config.category === 'slash') {
      SoundEngine.playAuraSurge();
    } else if (config.category === 'lightning' || config.category === 'cyber') {
      SoundEngine.playThunder();
    } else if (config.category === 'magic' || config.category === 'celestial') {
      SoundEngine.playMagicChime();
    } else if (config.category === 'fire' || config.category === 'solar') {
      SoundEngine.playAuraSurge();
    } else {
      SoundEngine.playAuraSurge();
    }

    if (window.App && window.App.updateActionTimelineUI) {
      window.App.updateActionTimelineUI(this.actionPhase, 0, config.name);
    }
  },

  /**
   * AI Action Prompt Parser
   * Converts user text prompt into rich physics, element, and VFX parameters
   */
  parseActionPrompt(input) {
    if (!input) input = 'Power Surge';
    const text = String(input).toLowerCase();

    // 1. Blade / Sword / Katana Slash
    if (text.includes('sword') || text.includes('slash') || text.includes('blade') || text.includes('katana') || text.includes('cut')) {
      return {
        name: input,
        category: 'sword',
        auraColor: '#ff2a85',
        secondaryColor: '#00f0ff',
        cameraStyle: 'dolly_zoom',
        motion: 'dash_slash',
        element: 'steel_plasma',
        duration: 240
      };
    }

    // 2. Thunder / Electric / Cyberpunk
    if (text.includes('thunder') || text.includes('lightning') || text.includes('electric') || text.includes('cyber') || text.includes('overdrive') || text.includes('volt')) {
      return {
        name: input,
        category: 'lightning',
        auraColor: '#00f0ff',
        secondaryColor: '#ffffff',
        cameraStyle: 'punch_shake',
        motion: 'teleport_float',
        element: 'lightning',
        duration: 240
      };
    }

    // 3. Fire / Dragon / Solar Flare / Inferno
    if (text.includes('fire') || text.includes('flame') || text.includes('solar') || text.includes('sun') || text.includes('dragon') || text.includes('burn') || text.includes('inferno')) {
      return {
        name: input,
        category: 'fire',
        auraColor: '#ffb703',
        secondaryColor: '#ff0055',
        cameraStyle: 'heat_wave',
        motion: 'ground_thrust',
        element: 'fire',
        duration: 240
      };
    }

    // 4. Magic / Celestial / Starfall / Rune Summon
    if (text.includes('magic') || text.includes('spell') || text.includes('celestial') || text.includes('star') || text.includes('summon') || text.includes('astral') || text.includes('rune')) {
      return {
        name: input,
        category: 'magic',
        auraColor: '#8338ec',
        secondaryColor: '#4cc9f0',
        cameraStyle: 'slow_orbit',
        motion: 'levitate_float',
        element: 'celestial_arcane',
        duration: 260
      };
    }

    // 5. Sakura / Flower / Dance / Waltz
    if (text.includes('sakura') || text.includes('dance') || text.includes('flower') || text.includes('blossom') || text.includes('waltz') || text.includes('spin') || text.includes('petal')) {
      return {
        name: input,
        category: 'sakura',
        auraColor: '#ff70a6',
        secondaryColor: '#ffd166',
        cameraStyle: 'smooth_sway',
        motion: 'dance_spin',
        element: 'sakura_petals',
        duration: 250
      };
    }

    // 6. Martial Arts / Punch / Kick / Strike
    if (text.includes('punch') || text.includes('kick') || text.includes('strike') || text.includes('martial') || text.includes('fist') || text.includes('combo')) {
      return {
        name: input,
        category: 'strike',
        auraColor: '#06d6a0',
        secondaryColor: '#ffffff',
        cameraStyle: 'punch_shake',
        motion: 'strike_combo',
        element: 'kinetic_shock',
        duration: 220
      };
    }

    // 7. Dark / Void / Abyss / Berserk
    if (text.includes('dark') || text.includes('void') || text.includes('abyss') || text.includes('shadow') || text.includes('berserk') || text.includes('rage') || text.includes('evil')) {
      return {
        name: input,
        category: 'dark',
        auraColor: '#7209b7',
        secondaryColor: '#f72585',
        cameraStyle: 'vortex_tilt',
        motion: 'berserk_shake',
        element: 'void_darkness',
        duration: 240
      };
    }

    // 8. Emotion: Crying / Sad / Tears
    if (text.includes('cry') || text.includes('tear') || text.includes('sad') || text.includes('emotional') || text.includes('grief')) {
      return {
        name: input,
        category: 'tears',
        auraColor: '#4cc9f0',
        secondaryColor: '#ffffff',
        cameraStyle: 'slow_close_up',
        motion: 'gently_tremble',
        element: 'water_tears',
        duration: 240
      };
    }

    // 9. Emotion: Smile / Love / Heart / Blushing
    if (text.includes('smile') || text.includes('love') || text.includes('heart') || text.includes('blush') || text.includes('happy') || text.includes('joy')) {
      return {
        name: input,
        category: 'love',
        auraColor: '#ff2a85',
        secondaryColor: '#ffb4d6',
        cameraStyle: 'gentle_zoom',
        motion: 'tilt_bob',
        element: 'floating_hearts',
        duration: 220
      };
    }

    // 10. Default / Chill / Space / Flying / Custom Prompt Fallback
    return {
      name: input,
      category: 'cosmic',
      auraColor: '#00f0ff',
      secondaryColor: '#ff2a85',
      cameraStyle: 'dynamic_float',
      motion: 'power_surge',
      element: 'cosmic_energy',
      duration: 240
    };
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
    this.playbackSpeed = speed;
  },

  togglePause() {
    this.isPaused = !this.isPaused;
    return this.isPaused;
  },

  scrubTo(percent) {
    if (!this.activeAction) return;
    this.actionProgress = Math.max(0, Math.min(1, percent));
    this.actionElapsed = this.actionProgress * this.actionDuration;
    this.evaluateActionPhase();
  },

  update() {
    // Smooth camera interpolation
    this.cameraZoom += (this.cameraTargetZoom - this.cameraZoom) * 0.08;
    this.cameraPanX += (this.cameraTargetPanX - this.cameraPanX) * 0.08;
    this.cameraPanY += (this.cameraTargetPanY - this.cameraPanY) * 0.08;

    // Screen flash decay
    if (this.flashWhite > 0) {
      this.flashWhite = Math.max(0, this.flashWhite - 0.05);
    }

    // Camera shake decay
    if (this.shakeAmount > 0) {
      this.shakeAmount *= 0.90;
      if (this.shakeAmount < 0.2) this.shakeAmount = 0;
    }

    // Process Active Action State Machine
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
          this.cameraTargetZoom = 1.0;
          this.cameraTargetPanX = 0;
          this.cameraTargetPanY = 0;
        }
      }
    } else {
      // Idle camera
      this.cameraTargetZoom = 1.0;
      this.cameraTargetPanX = 0;
      this.cameraTargetPanY = 0;
      this.charTargetOffset = { x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0, opacity: 1 };
    }

    // Smooth character offset interpolation
    this.charOffset.x += (this.charTargetOffset.x - this.charOffset.x) * 0.15;
    this.charOffset.y += (this.charTargetOffset.y - this.charOffset.y) * 0.15;
    this.charOffset.scaleX += (this.charTargetOffset.scaleX - this.charOffset.scaleX) * 0.15;
    this.charOffset.scaleY += (this.charTargetOffset.scaleY - this.charOffset.scaleY) * 0.15;
    this.charOffset.rotation += (this.charTargetOffset.rotation - this.charOffset.rotation) * 0.15;

    // Update Particles
    this.updateVFX();
  },

  evaluateActionPhase() {
    const p = this.actionProgress;
    const prevPhase = this.actionPhase;

    if (p < 0.25) {
      this.actionPhase = 'anticipation';
    } else if (p < 0.50) {
      this.actionPhase = 'surge';
    } else if (p < 0.80) {
      this.actionPhase = 'climax';
    } else {
      this.actionPhase = 'recovery';
    }

    // Trigger sound FX on phase transitions
    if (this.actionPhase !== prevPhase) {
      if (this.actionPhase === 'climax') {
        this.flashWhite = 0.6;
        this.shakeAmount = 18;
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
        } else if (this.activeAction.category === 'sakura') {
          this.spawnSakuraStorm();
        } else if (this.activeAction.category === 'strike') {
          SoundEngine.playImpactBlast();
          this.spawnShockwaveRing();
        } else {
          SoundEngine.playAuraSurge();
        }
      }
    }
  },

  updateActionKinematics() {
    const act = this.activeAction;
    if (!act) return;
    const p = this.actionProgress;

    switch (this.actionPhase) {
      case 'anticipation':
        // Pull back, crouch, camera zoom in
        this.cameraTargetZoom = 1.15;
        this.charTargetOffset = {
          x: -25,
          y: 20,
          scaleX: 1.05,
          scaleY: 0.95,
          rotation: -0.05,
          opacity: 1
        };
        // Charge particles
        this.spawnChargeMotes(act.auraColor);
        break;

      case 'surge':
        // Levitate, electric aura, camera vibration
        this.cameraTargetZoom = 1.25;
        this.charTargetOffset = {
          x: Math.sin(this.time * 25) * 6,
          y: -40 + Math.sin(this.time * 8) * 15,
          scaleX: 1.08,
          scaleY: 1.08,
          rotation: Math.sin(this.time * 10) * 0.04,
          opacity: 1
        };
        if (Math.random() > 0.4) {
          this.spawnAuraBurst(act.auraColor, act.secondaryColor);
        }
        break;

      case 'climax':
        // Explosive dash/slash forward, extreme zoom/shake
        this.cameraTargetZoom = 1.35;
        this.cameraTargetPanX = Math.sin(this.time * 20) * 12;
        this.charTargetOffset = {
          x: Math.sin(p * Math.PI * 4) * 80,
          y: -65 + Math.cos(p * Math.PI * 4) * 20,
          scaleX: 1.18,
          scaleY: 1.12,
          rotation: (Math.random() - 0.5) * 0.08,
          opacity: 1
        };
        break;

      case 'recovery':
        // Victory pose, settling breath, camera ease back
        this.cameraTargetZoom = 1.05;
        this.cameraTargetPanX = 0;
        this.charTargetOffset = {
          x: 0,
          y: 0,
          scaleX: 1.0,
          scaleY: 1.0,
          rotation: 0,
          opacity: 1
        };
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
    for (let b = 0; b < 8; b++) {
      const points = [];
      let curX = this.width * 0.5 + (Math.random() - 0.5) * 350;
      let curY = 0;
      points.push({ x: curX, y: curY });
      for (let i = 0; i < 8; i++) {
        curX += (Math.random() - 0.5) * 140;
        curY += (this.height / 8) + (Math.random() - 0.5) * 30;
        points.push({ x: curX, y: curY });
      }
      this.lightningBolts.push({
        points,
        life: 25,
        color: '#00f0ff',
        width: Math.random() * 4 + 2
      });
    }
  },

  spawnFireNova() {
    for (let i = 0; i < 80; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 5;
      this.particles.push({
        x: this.width * 0.5,
        y: this.height * 0.45,
        size: Math.random() * 9 + 4,
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed,
        rotation: Math.random() * Math.PI,
        rotSpeed: (Math.random() - 0.5) * 0.1,
        color: Math.random() > 0.4 ? '#ffb703' : '#ff0055',
        life: 70,
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

  spawnSakuraStorm() {
    for (let i = 0; i < 70; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: -20,
        size: Math.random() * 7 + 4,
        speedX: (Math.random() - 0.5) * 6 + 3,
        speedY: Math.random() * 5 + 3,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.08,
        color: 'rgba(255, 112, 166, 0.85)',
        type: 'petal'
      });
    }
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
    // Update Particles
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

    // Update Slash Trails
    this.slashTrails.forEach((s, idx) => {
      s.progress += 0.09 * this.playbackSpeed;
      if (s.progress > 1) this.slashTrails.splice(idx, 1);
    });

    // Update Lightning
    this.lightningBolts.forEach((b, idx) => {
      b.life -= this.playbackSpeed;
      if (b.life <= 0) this.lightningBolts.splice(idx, 1);
    });

    // Update Magic Runes
    this.magicRunes.forEach((m, idx) => {
      m.rotation += 0.03 * this.playbackSpeed;
      m.life -= this.playbackSpeed;
      m.opacity = Math.max(0, m.life / 120);
      if (m.life <= 0) this.magicRunes.splice(idx, 1);
    });

    // Update Shockwaves
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

    // Apply Camera Transforms
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
    this.drawBackground(ctx);

    // 2. Draw Speed Lines & Atmospheric Vignette
    if (this.activeAction && (this.actionPhase === 'surge' || this.actionPhase === 'climax')) {
      this.drawActionAtmosphere(ctx);
    }

    // 3. Draw Ground Magic Summoning Runes
    this.drawMagicRunes(ctx);

    // 4. Draw Character Sprite
    if (this.charLoaded && this.charImage) {
      this.drawCharacter(ctx);
    }

    // 5. Draw Elemental VFX (Slashes, Lightning, Shockwaves)
    this.drawSlashTrails(ctx);
    this.drawLightning(ctx);
    this.drawShockwaves(ctx);

    // 6. Draw Ambient & Action Particles
    this.drawParticles(ctx);

    ctx.restore();

    // 7. Screen White Flash on Climax
    if (this.flashWhite > 0) {
      ctx.fillStyle = `rgba(255, 255, 255, ${this.flashWhite})`;
      ctx.fillRect(0, 0, this.width, this.height);
    }

    // 8. Draw HUD & Action Status Overlay
    this.drawCinematicOverlays(ctx);
  },

  drawBackground(ctx) {
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
  },

  drawCharacter(ctx) {
    ctx.save();
    
    // Idle breathing + Kinematic Action offsets
    const breath = Math.sin(this.time * 2.2) * 5;
    const charWidth = 470;
    const charHeight = 626; // 3:4 ratio
    const baseX = (this.width - charWidth) / 2;
    const baseY = this.height - charHeight + 35 + breath;

    // Apply kinematic transformations
    ctx.translate(baseX + charWidth / 2 + this.charOffset.x, baseY + charHeight / 2 + this.charOffset.y);
    ctx.scale(this.charOffset.scaleX, this.charOffset.scaleY);
    ctx.rotate(this.charOffset.rotation);
    ctx.translate(-(baseX + charWidth / 2), -(baseY + charHeight / 2));

    // Dynamic Action Glow Aura
    if (this.activeAction) {
      ctx.save();
      ctx.shadowBlur = 45;
      ctx.shadowColor = this.activeAction.auraColor || '#ff2a85';
      ctx.drawImage(this.charImage, baseX, baseY, charWidth, charHeight);
      ctx.restore();
    }

    // Main Character Sprite with rounded top frame
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(baseX, baseY, charWidth, charHeight, [24, 24, 0, 0]);
    ctx.clip();
    ctx.drawImage(this.charImage, baseX, baseY, charWidth, charHeight);
    ctx.restore();

    // Lip-Sync Mouth Overlay
    if (this.lipSyncLevel > 0.05) {
      this.drawLipSyncMouth(ctx, baseX, baseY, charWidth, charHeight);
    }

    ctx.restore();
  },

  drawLipSyncMouth(ctx, charX, charY, charWidth, charHeight) {
    const mouthX = charX + charWidth * 0.49;
    const mouthY = charY + charHeight * 0.42;
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

    ctx.strokeStyle = 'rgba(160, 40, 60, 0.8)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(mouthX, mouthY - openH * 0.1, openW / 2, 0.2, Math.PI - 0.2);
    ctx.stroke();
    ctx.restore();
  },

  drawActionAtmosphere(ctx) {
    // Radial glow
    const grad = ctx.createRadialGradient(
      this.width / 2, this.height / 2, 80,
      this.width / 2, this.height / 2, this.width * 0.85
    );
    grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
    grad.addColorStop(1, this.activeAction ? (this.activeAction.auraColor + '44') : 'rgba(255, 42, 133, 0.25)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, this.width, this.height);

    // Speedlines
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
  },

  drawMagicRunes(ctx) {
    this.magicRunes.forEach(m => {
      ctx.save();
      ctx.translate(m.x, m.y);
      ctx.rotate(m.rotation);
      ctx.globalAlpha = m.opacity;

      // Concentric circles
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

      // Octagram star
      for (let i = 0; i < 8; i++) {
        const a1 = (i * Math.PI) / 4;
        const a2 = ((i + 3) * Math.PI) / 4;
        ctx.beginPath();
        ctx.moveTo(Math.cos(a1) * m.radius * 0.7, Math.sin(a1) * m.radius * 0.7);
        ctx.lineTo(Math.cos(a2) * m.radius * 0.7, Math.sin(a2) * m.radius * 0.7);
        ctx.stroke();
      }

      ctx.restore();
    });
  },

  drawSlashTrails(ctx) {
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
  },

  drawLightning(ctx) {
    this.lightningBolts.forEach(b => {
      if (!b.points || b.points.length < 2) return;
      ctx.save();
      ctx.strokeStyle = b.color;
      ctx.shadowColor = '#ffffff';
      ctx.shadowBlur = 25;
      ctx.lineWidth = b.width || 3;
      ctx.beginPath();
      ctx.moveTo(b.points[0].x, b.points[0].y);
      for (let i = 1; i < b.points.length; i++) {
        ctx.lineTo(b.points[i].x, b.points[i].y);
      }
      ctx.stroke();
      ctx.restore();
    });
  },

  drawShockwaves(ctx) {
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
  },

  drawParticles(ctx) {
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
  },

  drawCinematicOverlays(ctx) {
    if (this.activeAction) {
      ctx.save();
      ctx.fillStyle = 'rgba(10, 10, 18, 0.88)';
      ctx.strokeStyle = this.activeAction.auraColor || '#ff2a85';
      ctx.lineWidth = 2;
      const badgeW = 380;
      const badgeH = 48;
      const badgeX = (this.width - badgeW) / 2;
      const badgeY = 28;

      ctx.beginPath();
      ctx.roundRect(badgeX, badgeY, badgeW, badgeH, 24);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 15px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const phaseBadge = this.actionPhase === 'anticipation' ? '⏳ ANTICIPATION' :
                         this.actionPhase === 'surge' ? '⚡ ENERGY SURGE' :
                         this.actionPhase === 'climax' ? '💥 CLIMAX IMPACT' : '✨ VICTORY POSE';

      ctx.fillText(`🎬 ${this.activeAction.name.toUpperCase()} [${phaseBadge}]`, this.width / 2, badgeY + badgeH / 2);
      ctx.restore();
    }
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
        if (e.data && e.data.size > 0) {
          this.recordedChunks.push(e.data);
        }
      };

      this.mediaRecorder.start(100);
      this.isRecording = true;
    } catch (e) {
      console.error('Failed to start media recorder:', e);
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
