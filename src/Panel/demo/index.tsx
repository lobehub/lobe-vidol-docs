import { GradientButton } from '@lobehub/ui';
import { Space } from 'antd';

import { useGlobalStore } from '../store';
import { PanelKey } from '../type';
import PanelDance from './PanelDance';
import PanelMarket from './PanelMarket';

export const apps = [
  {
    component: <PanelDance />,
    key: 'dance',
  },
  {
    component: <PanelMarket />,
    key: 'market',
  },
];

export default () => {
  const [panel, openPanel] = useGlobalStore((s) => [s.panel, s.openPanel]);

  return (
    <>
      {apps.map((app) => {
        const open = panel[app.key as PanelKey].open;
        const component = app.component;
        return (
          <div key={app.key} style={{ display: open ? 'flex' : 'none' }}>
            {component}
          </div>
        );
      })}
      <Space>
        <GradientButton
          glow
          onClick={() => {
            openPanel('dance');
          }}
          size="middle"
        >
          舞蹈
        </GradientButton>
        <GradientButton
          glow
          onClick={() => {
            openPanel('market');
          }}
          size="middle"
        >
          市场
        </GradientButton>
      </Space>
    </>
  );
};
