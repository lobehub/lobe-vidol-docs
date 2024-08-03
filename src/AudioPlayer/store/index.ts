import { StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import { DanceListStore, createDanceStore } from './slices/dancelist';
import { PlayListStore, createPlayListStore } from './slices/playlist';

export type DanceStore = DanceListStore & PlayListStore;

const createStore: StateCreator<DanceStore, [['zustand/devtools', never]]> = (...parameters) => ({
  ...createDanceStore(...parameters),
  ...createPlayListStore(...parameters),
});

export const useDanceStore = createWithEqualityFn<DanceStore>()(
  devtools(createStore, {
    name: 'LOBE_VIDOL_PLAYGROUND_DANCE',
  }),
  shallow,
);

export { danceListSelectors } from './selectors/dancelist';
