import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css }) => ({
  slider: css`
    min-width: 92px;
    margin: 0;
  `,
  volume: css`
    display: flex;
    align-items: center;
  `,
  volumeIcon: css`
    cursor: pointer;
    margin-right: 8px;
  `,
}));

export { useStyles };
