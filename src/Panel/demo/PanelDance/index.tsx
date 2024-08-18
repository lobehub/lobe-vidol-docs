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
    <PanelContainer className={className} panelKey="dance" style={style} title="舞蹈">
      <div className={styles.content}>面板内容</div>
    </PanelContainer>
  );
};

export default ControlPanel;
