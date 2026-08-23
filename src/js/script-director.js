/**
 * Script Director and Dialogue Parser Engine for AnimeArt AI Studio
 * Automatically matches Character Name -> Assigned Voice, Language, Avatar & Action VFX
 */

import { Database } from './database.js';
import { VoiceEngine } from './voice-engine.js';
import { CanvasEngine } from './canvas-engine.js';

export const ScriptDirector = {
  isPlaying: false,
  isPaused: false,
  currentLineIndex: 0,
  scriptLines: [],
  onStepCallback: null,
  onFinishCallback: null,

  /**
   * Parse multi-line script text into structured dialogue items
   * Line format: CharacterName: "Dialogue text" [action: ActionName]
   */
  parseScript(scriptText) {
    if (!scriptText) return [];
    const lines = scriptText.split('\n');
    const parsed = [];

    lines.forEach((rawLine, index) => {
      const line = rawLine.trim();
      if (!line || line.startsWith('//') || line.startsWith('#')) return;

      let charName = '';
      let dialogue = '';
      let action = '';

      // Check for action tag [action: ...] or [action]
      const actionMatch = line.match(/\[action:\s*([^\]]+)\]/i) || line.match(/\[([^\]]+)\]/);
      let cleanLine = line;
      if (actionMatch) {
        action = actionMatch[1].trim();
        cleanLine = line.replace(actionMatch[0], '').trim();
      }

      // Check for Character: "Dialogue" or Character: Dialogue
      const colonIdx = cleanLine.indexOf(':');
      if (colonIdx !== -1) {
        charName = cleanLine.substring(0, colonIdx).trim();
        let dialogPart = cleanLine.substring(colonIdx + 1).trim();
        // Remove surrounding quotes if present
        if (dialogPart.startsWith('"') && dialogPart.endsWith('"')) {
          dialogPart = dialogPart.substring(1, dialogPart.length - 1);
        } else if (dialogPart.startsWith('“') && dialogPart.endsWith('”')) {
          dialogPart = dialogPart.substring(1, dialogPart.length - 1);
        } else if (dialogPart.startsWith('「') && dialogPart.endsWith('」')) {
          dialogPart = dialogPart.substring(1, dialogPart.length - 1);
        }
        dialogue = dialogPart;
      } else {
        // Fallback: entire line is dialogue by default character (Kaito)
        charName = 'Kaito';
        dialogue = cleanLine;
      }

      // Look up character in database
      const character = Database.getCharacterByName(charName) || {
        id: 'char_custom',
        name: charName,
        lang: 'en',
        pitch: 1.0,
        speed: 1.0,
        avatar: 'assets/characters/kaito.jpg'
      };

      parsed.push({
        id: 'line_' + index,
        raw: line,
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

  /**
   * Play the full parsed script line-by-line
   */
  async play(scriptText, options = {}) {
    this.stop();
    this.scriptLines = this.parseScript(scriptText);
    if (this.scriptLines.length === 0) return;

    this.isPlaying = true;
    this.isPaused = false;
    this.currentLineIndex = 0;
    this.onStepCallback = options.onStep || null;
    this.onFinishCallback = options.onFinish || null;

    for (let i = 0; i < this.scriptLines.length; i++) {
      if (!this.isPlaying) break;
      this.currentLineIndex = i;
      const currentItem = this.scriptLines[i];

      // Update Canvas Character
      CanvasEngine.setCharacter(currentItem.character);

      // Trigger Action if present
      if (currentItem.action) {
        CanvasEngine.triggerAction(currentItem.action);
      }

      // Notify UI of current step (updates subtitle box, avatar badge, timeline)
      if (this.onStepCallback) {
        this.onStepCallback(currentItem, i, this.scriptLines.length);
      }

      // Speak Dialogue with Auto-Assigned Voice
      await VoiceEngine.speak({
        text: currentItem.dialogue,
        lang: currentItem.lang,
        pitch: currentItem.pitch,
        rate: currentItem.speed,
        charName: currentItem.charName,
        onLipSync: (level) => {
          CanvasEngine.setLipSync(level);
        }
      });

      // Brief pause between dialogue turns
      if (this.isPlaying && i < this.scriptLines.length - 1) {
        await new Promise(r => setTimeout(r, 600));
      }
    }

    this.isPlaying = false;
    CanvasEngine.setLipSync(0);
    if (this.onFinishCallback) {
      this.onFinishCallback();
    }
  },

  stop() {
    this.isPlaying = false;
    this.isPaused = false;
    VoiceEngine.stop();
    CanvasEngine.setLipSync(0);
    if (this.onFinishCallback) {
      this.onFinishCallback();
    }
  }
};
