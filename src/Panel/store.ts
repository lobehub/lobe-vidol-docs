import { produce } from 'immer';
import { isEqual, merge } from 'lodash-es';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import { INITIAL_COORDINATES, INITIAL_Z_INDEX } from './constant';
import { Panel, PanelConfig, PanelKey } from './type';

export interface GlobalStore {
  closePanel: (key: PanelKey) => void;
  focusList: PanelKey[];
  focusPanel: (key: PanelKey) => void;
  getPanelZIndex: (key: PanelKey) => number;
  openPanel: (key: PanelKey) => void;
  panel: PanelConfig;
  setPanel: (panel: PanelKey, config: Partial<Panel>) => void;
}

const initialState = {
  focusList: [],

  panel: {
    agent: {
      coordinates: INITIAL_COORDINATES,
      open: false,
    },
    dance: {
      coordinates: INITIAL_COORDINATES,
      open: false,
    },
    market: {
      coordinates: INITIAL_COORDINATES,
      open: false,
    },
    role: {
      coordinates: INITIAL_COORDINATES,
      open: false,
    },
  },
};

export const useGlobalStore = createWithEqualityFn<GlobalStore>()(
  (set, get) => ({
    ...initialState,
    closePanel: (key: PanelKey) => {
      const { setPanel, focusList } = get();
      setPanel(key, { open: false });
      const nextSetting = focusList.filter((item) => item !== key);
      set({ focusList: nextSetting });
    },
    focusPanel: (key: PanelKey) => {
      const { focusList } = get();
      const nextSetting: PanelKey[] = focusList.filter((item) => item !== key).concat(key);
      set({ focusList: nextSetting });
    },
    getPanelZIndex: (panelKey: PanelKey) => {
      const { focusList } = get();
      const index = focusList.indexOf(panelKey);
      return index === -1 ? INITIAL_Z_INDEX : INITIAL_Z_INDEX + index;
    },

    openPanel: (key: PanelKey) => {
      const { setPanel, focusPanel } = get();
      setPanel(key, { open: true });
      focusPanel(key);
    },

    setPanel: (panel, config) => {
      const prevSetting = get().panel[panel];
      const nextSetting = produce(prevSetting, (draftState) => {
        merge(draftState, config);
      });

      if (isEqual(prevSetting, nextSetting)) return;
      set((state) => ({
        panel: {
          ...state.panel,
          [panel]: nextSetting,
        },
      }));
    },
  }),
  shallow,
);
