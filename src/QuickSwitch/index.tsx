import { Avatar } from '@lobehub/ui';
import { useState } from 'react';

import localAgentList from './data';
import { useStyles } from './style';

const AvatarSize = 64;

export default () => {
  const { styles } = useStyles({ avatarSize: AvatarSize });
  const [activeId, setActiveId] = useState('');

  return (
    <div className={styles.list}>
      {localAgentList.map((item) => {
        const agent = item;
        if (!agent) return undefined;
        const isActive = activeId === agent.agentId;
        return (
          <div key={agent.agentId} style={{ position: 'relative' }}>
            <Avatar
              className={isActive ? styles.active : ''}
              onClick={() => {
                setActiveId(agent.agentId);
              }}
              size={AvatarSize}
              src={agent.meta.avatar}
            />
            {isActive ? (
              <>
                <div className={styles.satellite} />
                <div className={styles.orbit} />
              </>
            ) : undefined}
          </div>
        );
      })}
    </div>
  );
};
