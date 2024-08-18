import { Coordinates } from '@dnd-kit/utilities';

export type BackgroundEffect = 'glow' | 'none';

export interface Panel {
  /**
   * 坐标
   */
  coordinates: Coordinates;
  /**
   * 是否打开
   */
  open: boolean;
}

export interface PanelConfig {
  agent: Panel;
  dance: Panel;
  market: Panel;
  role: Panel;
}

export type PanelKey = keyof PanelConfig;
