import { useDraggable } from '@dnd-kit/core';
import { ActionIcon, Logo } from '@lobehub/ui';
import { Tooltip } from 'antd';
import classNames from 'classnames';
import { XIcon } from 'lucide-react';
import React, { PropsWithChildren, memo } from 'react';

import { INITIAL_COORDINATES, INITIAL_Z_INDEX } from './constant';
import { useStyles } from './style';

interface ContainerProps {
  className?: string;
  extra?: React.ReactNode;
  footer?: React.ReactNode;
  onBlur?: React.FocusEventHandler;
  onClose: () => void;
  onFocus?: React.FocusEventHandler;
  style?: React.CSSProperties;
  title?: React.ReactNode;
  toolbar?: React.ReactNode;
  x: number;
  y: number;
  zIndex?: number;
}

const Container = (props: PropsWithChildren<ContainerProps>) => {
  const {
    style,
    className,
    children,
    onClose,
    x = INITIAL_COORDINATES.x,
    y = INITIAL_COORDINATES.y,
    title,
    toolbar,
    extra,
    zIndex = INITIAL_Z_INDEX,
    onBlur,
    onFocus,
    footer,
  } = props;
  const { styles } = useStyles();

  const { attributes, listeners, transform, setNodeRef, setActivatorNodeRef } = useDraggable({
    id: 'draggable',
  });

  const transformer = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  const handleClose = () => {
    if (onClose) onClose();
  };

  return (
    <div onBlur={onBlur} onFocus={onFocus} ref={setNodeRef}>
      <div
        className={classNames(styles.box, className)}
        style={{
          ...style,
          left: x,
          top: y,
          zIndex,
          ...transformer,
        }}
        {...attributes}
      >
        <div className={classNames(styles.header)} ref={setActivatorNodeRef} {...listeners}>
          <div className={styles.left}>
            <Logo size={24} />
            <div className={styles.title}>{title ? title : null}</div>
          </div>
          <div className={styles.center}>{extra ? extra : null}</div>
          <div className={styles.right}>
            {toolbar ? toolbar : null}
            <Tooltip key="close" title={'关闭'}>
              <ActionIcon icon={XIcon} onClick={handleClose} />
            </Tooltip>
          </div>
        </div>
        <div className={styles.container}>{children}</div>
        {footer ? <div className={styles.footer}>{footer}</div> : null}
      </div>
    </div>
  );
};

export default memo(Container);
