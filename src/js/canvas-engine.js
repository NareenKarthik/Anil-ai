/**
 * High-Performance 60FPS Canvas Animation & Scene Renderer
 * Handles anime backgrounds, character breathing/blinking, lip-sync mouth animation,
 * Action VFX (Lightning, Cherry blossoms, Energy slashes, Solar flares),
 * and WebM/MP4 Video Recording via MediaRecorder API.
 */

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
  cameraZoom: 1.0,
  cameraPanX: 0,
  cameraPanY: 0,
  shakeAmount: 0,
  
  // Character expression & Lip sync
  lipSyncLevel: 0,
  blinkState: 0,
  nextBlinkTime: 2000,
  
  // Active Action VFX
  currentAction: null,
  actionTimer: 0,
  particles: [],
  slashTrails: [],
  lightningBolts: [],
  
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

  triggerAction(actionName) {
    this.currentAction = actionName;
    this.actionTimer = 240; // ~4 seconds at 60fps
    this.shakeAmount = 12; // Camera shake

    if (actionName.includes('Sword') || actionName.includes('Slash')) {
      this.createSlashTrail();
    } else if (actionName.includes('Power') || actionName.includes('Cyber')) {
      this.createLightningBurst();
    } else if (actionName.includes('Solar') || actionName.includes('Sun')) {
      this.createSolarBurst();
    } else if (actionName.includes('Magic') || actionName.includes('Celestial')) {
      this.createMagicBurst();
    }
  },

  initParticles() {
    this.particles = [];
    // Ambient floating petals and dust
    for (let i = 0; i < 45; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 5 + 3,
        speedX: (Math.random() - 0.5) * 1.5 + 0.8,
        speedY: Math.random() * 1.2 + 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.05,
        color: 'rgba(255, 180, 210, 0.65)',
        type: 'petal'
      });
    }
  },

  createSlashTrail() {
    this.slashTrails.push({
      x1: this.width * 0.2,
      y1: this.height * 0.2,
      x2: this.width * 0.85,
      y2: this.height * 0.8,
      progress: 0,
      color: '#ff2a85',
      glow: '#00f0ff'
    });
  },

  createLightningBurst() {
    this.lightningBolts = [];
    for (let b = 0; b < 6; b++) {
      const points = [];
      let curX = this.width * 0.5 + (Math.random() - 0.5) * 200;
      let curY = this.height * 0.3;
      points.push({ x: curX, y: curY });
      for (let i = 0; i < 7; i++) {
        curX += (Math.random() - 0.5) * 120;
        curY += 50 + Math.random() * 40;
        points.push({ x: curX, y: curY });
      }
      this.lightningBolts.push({ points, life: 30, color: '#00f0ff' });
    }
  },

  createSolarBurst() {
    for (let i = 0; i < 60; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 9 + 4;
      this.particles.push({
        x: this.width * 0.5,
        y: this.height * 0.45,
        size: Math.random() * 7 + 4,
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed,
        rotation: 0,
        rotSpeed: 0,
        color: '#ffb703',
        life: 60,
        type: 'spark'
      });
    }
  },

  createMagicBurst() {
    for (let i = 0; i < 70; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 7 + 2;
      this.particles.push({
        x: this.width * 0.5,
        y: this.height * 0.4,
        size: Math.random() * 6 + 2,
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: 0.1,
        color: '#4cc9f0',
        life: 80,
        type: 'star'
      });
    }
  },

  startLoop() {
    const loop = () => {
      this.time += 0.016;
      this.update();
      this.render();
      this.animId = requestAnimationFrame(loop);
    };
    this.animId = requestAnimationFrame(loop);
  },

  update() {
    // Camera shake decay
    if (this.shakeAmount > 0) {
      this.shakeAmount *= 0.92;
      if (this.shakeAmount < 0.2) this.shakeAmount = 0;
    }

    // Action timer
    if (this.actionTimer > 0) {
      this.actionTimer--;
      if (this.actionTimer <= 0) {
        this.currentAction = null;
      }
    }

    // Particle update
    this.particles.forEach((p, idx) => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotSpeed;

      if (p.type === 'spark' || p.type === 'star') {
        p.life = (p.life || 60) - 1;
        if (p.life <= 0) {
          this.particles.splice(idx, 1);
        }
      } else if (p.type === 'petal') {
        if (p.y > this.height + 20) {
          p.y = -20;
          p.x = Math.random() * this.width;
        }
        if (p.x > this.width + 20) {
          p.x = -20;
        }
      }
    });

    // Lightning update
    this.lightningBolts.forEach((b, idx) => {
      b.life--;
      if (b.life <= 0) {
        this.lightningBolts.splice(idx, 1);
      }
    });

    // Slash trails update
    this.slashTrails.forEach((s, idx) => {
      s.progress += 0.08;
      if (s.progress > 1) {
        this.slashTrails.splice(idx, 1);
      }
    });
  },

  render() {
    const ctx = this.ctx;
    if (!ctx) return;

    ctx.save();
    ctx.clearRect(0, 0, this.width, this.height);

    // Apply Camera Shake
    if (this.shakeAmount > 0) {
      const offsetX = (Math.random() - 0.5) * this.shakeAmount * 2;
      const offsetY = (Math.random() - 0.5) * this.shakeAmount * 2;
      ctx.translate(offsetX, offsetY);
    }

    // 1. Draw Background
    if (this.bgLoaded && this.bgImage) {
      // Subtle Ken Burns slow pan/zoom
      const zoom = 1.0 + Math.sin(this.time * 0.2) * 0.03;
      const bgW = this.width * zoom;
      const bgH = this.height * zoom;
      const bgX = (this.width - bgW) / 2 + Math.sin(this.time * 0.3) * 15;
      const bgY = (this.height - bgH) / 2;
      ctx.drawImage(this.bgImage, bgX, bgY, bgW, bgH);
    } else {
      // Futuristic gradient fallback
      const grad = ctx.createLinearGradient(0, 0, this.width, this.height);
      grad.addColorStop(0, '#0d0d1a');
      grad.addColorStop(0.5, '#19132e');
      grad.addColorStop(1, '#0b0b14');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, this.width, this.height);
    }

    // 2. Action Background Vignette & Speedlines
    if (this.currentAction) {
      this.drawActionAtmosphere(ctx);
    }

    // 3. Draw Character
    if (this.charLoaded && this.charImage) {
      this.drawCharacter(ctx);
    }

    // 4. Draw Slash Trails & Lightning
    this.drawSlashTrails(ctx);
    this.drawLightning(ctx);

    // 5. Draw Particles (Petals, Sparks, Magic Runes)
    this.drawParticles(ctx);

    // 6. Draw Cinematic Bars & HUD
    this.drawCinematicOverlays(ctx);

    ctx.restore();
  },

  drawCharacter(ctx) {
    ctx.save();
    
    // Character Idle Breathing & Bobbing
    const breathOffset = Math.sin(this.time * 2.2) * 5;
    const charWidth = 460;
    const charHeight = 613; // 3:4 aspect
    const charX = (this.width - charWidth) / 2;
    const charY = this.height - charHeight + 35 + breathOffset;

    // Glowing Aura for Actions
    if (this.currentAction) {
      ctx.save();
      ctx.shadowBlur = 40;
      ctx.shadowColor = this.currentChar && this.currentChar.lang === 'ta' ? '#ffb703' :
                         this.currentChar && this.currentChar.lang === 'ja' ? '#ff2a85' :
                         this.currentChar && this.currentChar.lang === 'zh' ? '#4cc9f0' : '#00f0ff';
      ctx.drawImage(this.charImage, charX, charY, charWidth, charHeight);
      ctx.restore();
    }

    // Main Character Sprite with rounded smooth clip
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(charX, charY, charWidth, charHeight, [24, 24, 0, 0]);
    ctx.clip();
    ctx.drawImage(this.charImage, charX, charY, charWidth, charHeight);
    ctx.restore();

    // Audio-driven Lip-Sync Mouth Overlay
    if (this.lipSyncLevel > 0.05) {
      this.drawLipSyncMouth(ctx, charX, charY, charWidth, charHeight);
    }

    ctx.restore();
  },

  drawLipSyncMouth(ctx, charX, charY, charWidth, charHeight) {
    // Dynamic mouth position estimated around center-lower face
    const mouthX = charX + charWidth * 0.49;
    const mouthY = charY + charHeight * 0.42;
    const openH = this.lipSyncLevel * 14 + 2;
    const openW = 16 + this.lipSyncLevel * 6;

    ctx.save();
    ctx.fillStyle = '#7a142c'; // mouth interior
    ctx.beginPath();
    ctx.ellipse(mouthX, mouthY, openW / 2, openH / 2, 0, 0, Math.PI * 2);
    ctx.fill();

    // Teeth / highlights
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.ellipse(mouthX, mouthY - openH * 0.25, openW * 0.35, 2, 0, 0, Math.PI * 2);
    ctx.fill();

    // Lip line
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
      this.width / 2, this.height / 2, 100,
      this.width / 2, this.height / 2, this.width * 0.8
    );
    grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
    grad.addColorStop(1, 'rgba(255, 42, 133, 0.25)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, this.width, this.height);

    // Anime Speedlines
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
    ctx.lineWidth = 2;
    const center = { x: this.width / 2, y: this.height / 2 };
    for (let a = 0; a < Math.PI * 2; a += 0.25) {
      const jitter = (Math.random() - 0.5) * 0.08;
      const angle = a + jitter;
      const r1 = 300 + Math.random() * 80;
      const r2 = this.width * 0.9;
      ctx.beginPath();
      ctx.moveTo(center.x + Math.cos(angle) * r1, center.y + Math.sin(angle) * r1);
      ctx.lineTo(center.x + Math.cos(angle) * r2, center.y + Math.sin(angle) * r2);
      ctx.stroke();
    }
    ctx.restore();
  },

  drawSlashTrails(ctx) {
    this.slashTrails.forEach(s => {
      ctx.save();
      ctx.strokeStyle = s.glow;
      ctx.shadowColor = s.color;
      ctx.shadowBlur = 25;
      ctx.lineWidth = 14 * (1 - s.progress);
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
      ctx.shadowBlur = 20;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(b.points[0].x, b.points[0].y);
      for (let i = 1; i < b.points.length; i++) {
        ctx.lineTo(b.points[i].x, b.points[i].y);
      }
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
        // Cherry blossom petal curve
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 1.6, p.size * 0.9, 0, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.type === 'star') {
        // 4-point star sparkle
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
        // Round glowing spark
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    });
  },

  drawCinematicOverlays(ctx) {
    // Action HUD Badge if action is active
    if (this.currentAction) {
      ctx.save();
      ctx.fillStyle = 'rgba(10, 10, 18, 0.85)';
      ctx.strokeStyle = '#ff2a85';
      ctx.lineWidth = 2;
      const badgeW = 320;
      const badgeH = 46;
      const badgeX = (this.width - badgeW) / 2;
      const badgeY = 30;

      ctx.beginPath();
      ctx.roundRect(badgeX, badgeY, badgeW, badgeH, 23);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 16px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`⚡ ACTION: ${this.currentAction.toUpperCase()}`, this.width / 2, badgeY + badgeH / 2);
      ctx.restore();
    }
  },

  /**
   * Start Video Recording of Canvas output
   */
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

  /**
   * Stop Video Recording and download the generated file
   */
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
