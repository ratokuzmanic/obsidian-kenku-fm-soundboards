import KenkuFmSoundboardsPlugin from './main';
import { setPlaybackStatus } from './kenku';

export default class Commands {
  private plugin: KenkuFmSoundboardsPlugin;
  private registeredCommands: Set<string>;

  constructor(plugin: KenkuFmSoundboardsPlugin) {
    this.plugin = plugin;
    this.registeredCommands = new Set();
  }

  registerCommands(): void {
    this.unregisterCommands();

    this.plugin.sounds.forEach(sound => {
      const commandId = `kenku-fm-soundboards-toggle-${sound.id}-playback`;
      this.plugin.addCommand({
        id: commandId,
        name: `${sound.isPlaying ? 'Stop playing' : 'Play'} ${sound.title} track from ${sound.soundboardName} soundboard`,
        callback: async () => {
          await setPlaybackStatus(
            this.plugin.settings.baseUrl,
            sound.id,
            !sound.isPlaying
          );
          sound.isPlaying = !sound.isPlaying;
          this.registerCommands();
        }
      });
      this.registeredCommands.add(commandId);
    });
  }

  unregisterCommands(): void {
    this.registeredCommands.forEach(commandId =>
      this.plugin.removeCommand(commandId)
    );
    this.registeredCommands.clear();
  }
}
