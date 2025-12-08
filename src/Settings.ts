import { PluginSettingTab, App, Setting } from 'obsidian';
import KenkuFmSoundboardsPlugin from './main';

export default class KenkuFmSettings extends PluginSettingTab {
  plugin: KenkuFmSoundboardsPlugin;

  constructor(app: App, plugin: KenkuFmSoundboardsPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;

    containerEl.empty();

    new Setting(containerEl).setName('Base URL').addText(text =>
      text.setValue(this.plugin.settings.baseUrl).onChange(async value => {
        this.plugin.settings.baseUrl = value;
        await this.plugin.saveSettings();
      })
    );
  }
}
