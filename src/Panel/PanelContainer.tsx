import React, { PropsWithChildren } from 'react';

import { PanelContext } from './PanelContext';
import Panel from './index';
import { useGlobalStore } from './store';
import { PanelKey } from './type';

interface PanelContainerProps {
  className?: string;
  extra?: React.ReactNode;
  footer?: React.ReactNode;
  panelKey: PanelKey;
  style?: React.CSSProperties;
  title?: React.ReactNode;
  toolbar?: React.ReactNode;
}

const PanelContainer = (props: PropsWithChildren<PanelContainerProps>) => {
  const { style, className, panelKey, title, children, toolbar, extra, footer } = props;
  const [panel, setPanel, focusPanel, closePanel, zIndex] = useGlobalStore((s) => [
    s.panel,
    s.setPanel,
    s.focusPanel,
    s.closePanel,
    s.getPanelZIndex(panelKey),
  ]);

  return (
    <Panel
      className={className}
      coordinates={panel[panelKey].coordinates}
      extra={extra}
      footer={footer}
      onClose={() => closePanel(panelKey)}
      onCoordinatesChange={(coordinates) => setPanel(panelKey, { coordinates })}
      onFocus={() => focusPanel(panelKey)}
      style={style}
      title={title}
      toolbar={toolbar}
      zIndex={zIndex}
    >
      <PanelContext.Provider value={true}>{children}</PanelContext.Provider>
    </Panel>
  );
};

export default PanelContainer;
