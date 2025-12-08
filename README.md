# Kenku FM Soundboards Plugin

![Made for Obsidian](https://img.shields.io/badge/Made%20for-Obsidian-483699?logo=obsidian)
![Code Style: Prettier](https://img.shields.io/badge/Code%20Style-Prettier-F7B93E?logo=prettier)

Control playback of sounds from [Kenku FM](https://www.kenku.fm/) soundboards directly from Obsidian.

## ✨ Features

- 🔗 Configure Kenku FM's remote play URL  
- ▶️ Play sounds from any soundboard in your Kenku FM library using Obsidian commands  
- ⏹️ Stop playback for any active sound track     
- 🔄 Force-reload soundboard data from Kenku FM if the plugin becomes out of sync  

## 📦 Installation

1. Copy `main.js` and `manifest.json` from the [latest release](https://github.com/ratokuzmanic/obsidian-kenku-fm-soundboards/releases/latest) into:  
   `[VaultFolder]/.obsidian/plugins/obsidian-kenku-fm-soundboards/`
2. Enable the plugin in the **Community plugins** tab under Obsidian's settings.

## 🚀 Usage

### Changing Kenku FM's remote play URL

1. Open the plugin settings.
2. In the **Base URL** field, enter the new address and port.
   - By default, the plugin uses Kenku FM's default `http://127.0.0.1:3333`

### Play a sound

1. Open the **Command Palette**.
2. Choose **Kenku FM Soundboards: Play [Sound name] track from [Soundboard name] soundboard**.

### Stop a sound

1. Open the **Command Palette**.
2. Choose **Kenku FM Soundboards: Stop playing [Sound name] track from [Soundboard name] soundboard**.

### Reload soundboard data

1. Open the **Command Palette**.
2. Choose **Kenku FM Soundboards: Reload sounds**.

> **Note:** Reloading sounds is optional but useful if the plugin state becomes out of sync with Kenku FM—for example, if you play or stop sounds directly in the Kenku FM app instead of through the plugin.

## 🧭 Project Scope

This plugin was originally created for my D&D group while I'm DMing a _Curse of Strahd_ campaign, so it focuses on a small set of features we actually use at the virtual table. I plan to keep it maintained (especially for future Obsidian updates) and fix bugs as they come up, but I don't expect to add new features unless they're something I personally need for the campaign.

PRs and forks are welcome; just keep in mind that the project is intentionally lightweight and narrowly scoped.