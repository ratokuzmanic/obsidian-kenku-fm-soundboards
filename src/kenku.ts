import { requestUrl, Notice } from 'obsidian';
import { Sounds, SoundboardApiResponse, PlaybackApiResponse } from './types';

export const getSounds = async (baseUrl: string): Promise<Sounds[]> => {
  try {
    const [{ json: soundboards }, { json: playback }]: [
      { json: SoundboardApiResponse },
      { json: PlaybackApiResponse }
    ] = await Promise.all([
      requestUrl({
        url: new URL('/v1/soundboard', baseUrl).href,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }),
      requestUrl({
        url: new URL('/v1/soundboard/playback', baseUrl).href,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    ]);

    return soundboards.sounds.map(sound => ({
      id: sound.id,
      title: sound.title,
      soundboardName: soundboards.soundboards.find(soundboard =>
        soundboard.sounds.includes(sound.id)
      )!.title,
      isPlaying: playback.sounds.some(playing => playing.id === sound.id)
    }));
  } catch {
    new Notice('Something went wrong');
    return [];
  }
};
