export interface KenkuFmSettings {
  baseUrl: string;
}

export interface Sounds {
  id: string;
  title: string;
  soundboardName: string;
  isPlaying: boolean;
}

export interface SoundboardApiResponse {
  soundboards: [
    {
      id: string;
      title: string;
      background: string;
      sounds: string[];
    }
  ];
  sounds: [
    {
      id: string;
      title: string;
      url: string;
      loop: boolean;
      volume: number;
      fadeIn: number;
      fadeOut: number;
    }
  ];
}

export interface PlaybackApiResponse {
  sounds: [
    {
      id: string;
      title: string;
      url: string;
      loop: boolean;
      volume: number;
      fadeIn: number;
      fadeOut: number;
    }
  ];
}
