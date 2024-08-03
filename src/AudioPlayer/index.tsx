import { Avatar } from '@lobehub/ui';
import { Typography } from 'antd';
import classNames from 'classnames';
import { isEqual } from 'lodash-es';
import React, { memo, useEffect, useRef, useState } from 'react';

import { useDanceStore } from '@/AudioPlayer/store';
import { playListSelectors } from '@/AudioPlayer/store/selectors/playlist';

import Control from './Control';
import Duration from './Duration';
import Volume from './Volume';
import { useStyles } from './style';

interface PlayerProps {
  className?: string;
  style?: React.CSSProperties;
}

function Player(props: PlayerProps) {
  const { style, className } = props;
  const ref = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(0.2);
  const [duration, setDuration] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);

  const { styles } = useStyles();

  const { nextDance, currentPlay, isPlaying } = useDanceStore(
    (s) => ({
      currentPlay: playListSelectors.currentPlay(s),
      isPlaying: s.isPlaying,
      nextDance: s.nextDance,
    }),
    isEqual,
  );

  useEffect(() => {
    if (isPlaying && currentPlay) {
      if (ref.current) ref.current.src = currentPlay.audio;
      if (ref.current) ref.current.play();
    } else {
      ref.current?.pause();
      if (ref.current) ref.current.currentTime = 0;
    }
  }, [isPlaying, currentPlay]);

  return (
    <div className={classNames(styles.container, className)} style={style}>
      <audio
        onCanPlay={(e) => {
          e.currentTarget.volume = volume;
        }}
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
        onEnded={() => {
          nextDance();
        }}
        onTimeUpdate={(e) => {
          setCurrentProgress(e.currentTarget.currentTime);
        }}
        preload="metadata"
        ref={ref}
      />
      <div className={styles.player}>
        <div style={{ position: 'relative' }}>
          <Avatar shape="circle" size={48} src={currentPlay?.cover} />
        </div>
        <div className={styles.content}>
          <Duration currentProgress={currentProgress} duration={duration} />
          <div className={styles.controller}>
            <Typography.Text className={styles.name} ellipsis={{ tooltip: currentPlay?.name }}>
              {currentPlay?.name}
            </Typography.Text>
            <Control />
            <div className={styles.right}>
              <Volume audioRef={ref} setVolume={setVolume} volume={volume} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Player);
