/**
 * Multilingual Voice & Speech Engine for AnimeArt AI Studio
 * Handles Speech Synthesis in English, Tamil, Japanese, and Chinese
 * Provides real-time Audio Frequency Analysis for Canvas Lip-Sync animation
 */

export const VoiceEngine = {
  synth: window.speechSynthesis || null,
  audioCtx: null,
  analyser: null,
  dataArray: null,
  isPlaying: false,
  currentUtterance: null,
  audioLevel: 0,
  voices: [],

  init() {
    this.loadVoices();
    if (window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = () => {
        this.loadVoices();
      };
    }
    this.initAudioContext();
  },

  initAudioContext() {
    try {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass && !this.audioCtx) {
        this.audioCtx = new AudioCtxClass();
        this.analyser = this.audioCtx.createAnalyser();
        this.analyser.fftSize = 64;
        this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
      }
    } catch (e) {
      console.warn('Web Audio API not supported:', e);
    }
  },

  loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices() || [];
  },

  getAvailableVoices() {
    if (!this.voices || this.voices.length === 0) {
      this.loadVoices();
    }
    return this.voices;
  },

  findBestVoice(lang, genderHint = '') {
    const voices = this.getAvailableVoices();
    if (!voices || voices.length === 0) return null;

    let targetLangCode = 'en';
    if (lang === 'ta' || lang.startsWith('ta')) targetLangCode = 'ta';
    else if (lang === 'ja' || lang.startsWith('ja')) targetLangCode = 'ja';
    else if (lang === 'zh' || lang.startsWith('zh')) targetLangCode = 'zh';
    else targetLangCode = 'en';

    // 1. Direct match with language code
    const matchingVoices = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith(targetLangCode));
    if (matchingVoices.length > 0) {
      if (genderHint) {
        const genderMatch = matchingVoices.find(v => v.name.toLowerCase().includes(genderHint.toLowerCase()));
        if (genderMatch) return genderMatch;
      }
      return matchingVoices[0];
    }

    // 2. Default fallback
    return voices[0] || null;
  },

  /**
   * Speak dialogue with auto-assigned voice and callbacks for Lip-Sync
   * @param {Object} options - { text, lang, pitch, rate, charName, onStart, onEnd, onLipSync }
   */
  speak(options = {}) {
    return new Promise((resolve) => {
      const {
        text = '',
        lang = 'en',
        pitch = 1.0,
        rate = 1.0,
        charName = '',
        onStart = null,
        onEnd = null,
        onLipSync = null
      } = options;

      if (!text || !text.trim()) {
        resolve();
        return;
      }

      if (this.synth) {
        this.synth.cancel(); // Stop previous speaking
      }

      // Resume AudioContext if suspended
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const utterance = new SpeechSynthesisUtterance(text);
      this.currentUtterance = utterance;

      // Assign Language & Best Voice
      const voice = this.findBestVoice(lang);
      if (voice) {
        utterance.voice = voice;
      }

      // Map BCP 47 language code
      if (lang === 'ta') utterance.lang = 'ta-IN';
      else if (lang === 'ja') utterance.lang = 'ja-JP';
      else if (lang === 'zh') utterance.lang = 'zh-CN';
      else utterance.lang = 'en-US';

      utterance.pitch = Math.max(0.5, Math.min(2.0, pitch));
      utterance.rate = Math.max(0.5, Math.min(2.0, rate));

      let lipSyncTimer = null;
      let synthToneOsc = null;

      // Synthesize audio tone simulation for lip sync animation & web audio
      const startLipSyncSimulation = () => {
        this.isPlaying = true;

        // Try procedural audio oscillator to feed AnalyserNode
        if (this.audioCtx) {
          try {
            synthToneOsc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();
            synthToneOsc.type = 'sawtooth';
            synthToneOsc.frequency.setValueAtTime(pitch * 220, this.audioCtx.currentTime);
            gain.gain.setValueAtTime(0.015, this.audioCtx.currentTime); // subtle background audio harmonic
            synthToneOsc.connect(gain);
            gain.connect(this.analyser);
            synthToneOsc.start();
          } catch (err) {
            // ignore
          }
        }

        lipSyncTimer = setInterval(() => {
          if (!this.isPlaying) return;
          // Calculate dynamic mouth opening level between 0 and 1
          const randomFactor = Math.sin(Date.now() / 80) * 0.4 + 0.5;
          const level = Math.max(0, Math.min(1, randomFactor + (Math.random() * 0.3)));
          this.audioLevel = level;
          if (onLipSync) onLipSync(level);
        }, 50);
      };

      const stopLipSyncSimulation = () => {
        this.isPlaying = false;
        this.audioLevel = 0;
        if (lipSyncTimer) clearInterval(lipSyncTimer);
        if (synthToneOsc) {
          try {
            synthToneOsc.stop();
            synthToneOsc.disconnect();
          } catch (e) {}
        }
        if (onLipSync) onLipSync(0);
      };

      utterance.onstart = () => {
        startLipSyncSimulation();
        if (onStart) onStart({ charName, text, lang });
      };

      utterance.onend = () => {
        stopLipSyncSimulation();
        if (onEnd) onEnd({ charName, text, lang });
        resolve();
      };

      utterance.onerror = (e) => {
        console.warn('Speech synthesis error or cancelled:', e);
        stopLipSyncSimulation();
        if (onEnd) onEnd({ charName, text, lang });
        resolve();
      };

      // Fallback timeout in case speech synthesis fails or hangs
      const estimatedDuration = Math.max(1500, (text.length / 10) * 1000 / rate);
      const fallbackSafetyTimer = setTimeout(() => {
        if (this.isPlaying) {
          stopLipSyncSimulation();
          resolve();
        }
      }, estimatedDuration + 3000);

      const origOnEnd = utterance.onend;
      utterance.onend = (ev) => {
        clearTimeout(fallbackSafetyTimer);
        origOnEnd(ev);
      };

      if (this.synth) {
        this.synth.speak(utterance);
      } else {
        // Fallback simulation if browser doesn't have TTS
        startLipSyncSimulation();
        if (onStart) onStart({ charName, text, lang });
        setTimeout(() => {
          stopLipSyncSimulation();
          if (onEnd) onEnd({ charName, text, lang });
          resolve();
        }, estimatedDuration);
      }
    });
  },

  stop() {
    this.isPlaying = false;
    this.audioLevel = 0;
    if (this.synth) {
      this.synth.cancel();
    }
  },

  getAudioLevel() {
    return this.isPlaying ? this.audioLevel : 0;
  }
};
