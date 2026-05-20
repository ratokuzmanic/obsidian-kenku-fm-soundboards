import { requestUrl, Notice } from 'obsidian';
import { Sound, SoundboardApiResponse, PlaybackApiResponse } from './types';

const withTimeout = <T>(promise: Promise<T>, ms: number): Promise<T> =>
  Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error('Request timeout')), ms)
    )
  ]);

export const getSounds = async (baseUrl: string): Promise<Sound[]> => {
  try {
    const [soundboardsResponse, playbackResponse] = await Promise.all([
      withTimeout(
        requestUrl({
          url: new URL('/v1/soundboard', baseUrl).href,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }),
        3000
      ),
      withTimeout(
        requestUrl({
          url: new URL('/v1/soundboard/playback', baseUrl).href,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }),
        3000
      )
    ]);
    const [soundboards, playback] = await Promise.all([
      soundboardsResponse.json as Promise<SoundboardApiResponse>,
      playbackResponse.json as Promise<PlaybackApiResponse>
    ]);

    return soundboards.sounds.map(sound => ({
      id: sound.id,
      title: sound.title,
      soundboardName: soundboards.soundboards.find(soundboard =>
        soundboard.sounds.includes(sound.id)
      )!.title,
      isPlaying: playback.sounds.some(playing => playing.id === sound.id)
    }));
  } catch (e) {
    console.error(e);
    new Notice('Could not load soundboards');
    return [];
  }
};

export const setPlaybackStatus = async (
  baseUrl: string,
  id: string,
  shouldPlay: boolean
): Promise<void> => {
  try {
    const path = shouldPlay ? '/v1/soundboard/play' : '/v1/soundboard/stop';
    await requestUrl({
      url: new URL(path, baseUrl).href,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    });
  } catch (e) {
    console.error(e);
    new Notice("Could not set sound's playback status");
  }
};
