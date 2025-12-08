import { Plugin } from 'obsidian';
import SettingsTab from './Settings';
import Commands from './Commands';
import { getSounds } from './kenku';
import { KenkuFmSettings, Sounds } from './types';

const DEFAULT_SETTINGS: KenkuFmSettings = {
  baseUrl: 'http://127.0.0.1:3333'
};

export default class KenkuFmSoundboardsPlugin extends Plugin {
  settings: KenkuFmSettings;
  sounds: Sounds[];
  commands: Commands;

  async onload() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    this.addSettingTab(new SettingsTab(this.app, this));
    this.commands = new Commands(this);

    this.sounds = await getSounds(this.settings.baseUrl);
    this.commands.registerCommands();

    this.addCommand({
      id: 'kenku-fm-soundboards-reload-sounds',
      name: 'Reload sounds',
      callback: async () => {
        this.sounds = await getSounds(this.settings.baseUrl);
        this.commands.registerCommands();
      }
    });
  }

  async saveSettings() {
    await this.saveData(this.settings);
    await getSounds(this.settings.baseUrl);
    this.commands.registerCommands();
  }
}
