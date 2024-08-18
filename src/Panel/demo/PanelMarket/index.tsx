import React from 'react';

import PanelContainer from '../../PanelContainer';
import { useStyles } from './style';

interface ControlPanelProps {
  className?: string;
  style?: React.CSSProperties;
}

const ControlPanel = (props: ControlPanelProps) => {
  const { style, className } = props;
  const { styles } = useStyles();

  return (
    <PanelContainer className={className} panelKey="market" style={style} title="市场">
      <div className={styles.content}>面板内容</div>
    </PanelContainer>
  );
};

export default ControlPanel;
