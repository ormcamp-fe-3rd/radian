//피드백 2차 3번//

// 타입 선언
export type CarType = 'sport' | 'utility' | 'compact';

export enum Battery {
  Standard = 'Standard (356 km)',
  LongRange = 'Long Range (468 km)',
}

export enum Drive {
  TwoWD = 'Two-Wheel Drive (2WD)',
  AllWD = 'All-Wheel Drive (AWD)',
}

export enum Sound {
  Analog1 = 'Analog type 1',
  Analog2 = 'Analog type 2',
  Default = 'Default EV Sound',
}

// 차량 타입별 배터리 가격 맵
export const BATTERY_PRICE_MAP: Record<CarType, Record<Battery, number>> = {
  sport: {
    [Battery.Standard]: 42000000,
    [Battery.LongRange]: 44680000,
  },
  utility: {
    [Battery.Standard]: 51140000,
    [Battery.LongRange]: 53740000,
  },
  compact: {
    [Battery.Standard]: 27750000,
    [Battery.LongRange]: 30350000,
  },
};

// 차량 타입별 구동방식 가격 맵
export const DRIVE_PRICE_MAP: Record<CarType, Record<Drive, number>> = {
  sport: { [Drive.TwoWD]: 0, [Drive.AllWD]: 2500000 },
  utility: { [Drive.TwoWD]: 0, [Drive.AllWD]: 2500000 },
  compact: { [Drive.TwoWD]: 0, [Drive.AllWD]: 2500000 },
};

// 사운드 옵션 가격 맵
export const SOUND_PRICE_MAP: Record<Sound, number> = {
  [Sound.Analog1]: 500000,
  [Sound.Analog2]: 500000,
  [Sound.Default]: 0,
};

// 사운드 파일 경로
export const SOUND_LINKS: Record<Sound, string> = {
  [Sound.Analog1]: '/videos/ford-mustang-engine-1985-78386.mp3',
  [Sound.Analog2]: '/videos/lambo-start-up-sound-26364.mp3',
  [Sound.Default]: '/videos/electric-vehicle-car-general-m.m4a',
};
