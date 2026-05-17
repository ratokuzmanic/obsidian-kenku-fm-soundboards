# Kenku FM Soundboards Plugin

![Made for Obsidian](https://img.shields.io/badge/Made%20for-Obsidian-483699?logo=obsidian)
![Code Style: Prettier](https://img.shields.io/badge/Code%20Style-Prettier-F7B93E?logo=prettier)

Control playback of sounds from [Kenku FM](https://www.kenku.fm/) soundboards directly from Obsidian.

## Features

🔗 Configure Kenku FM's remote play URL   
▶️ Play sounds from any soundboard in your Kenku FM library using Obsidian commands   
⏹️ Stop playback for any active sound track   
🔄 Force-reload soundboard data from Kenku FM if the plugin becomes out of sync   

## How to use

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

> **Note:** Reloading sounds is optional but useful if the plugin state becomes out of sync with Kenku FM. For example, if you play or stop sounds directly in the Kenku FM app instead of through the plugin.

_Crafted entirely by a human without the use of generative AI._
