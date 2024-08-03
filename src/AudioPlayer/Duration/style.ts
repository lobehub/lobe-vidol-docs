import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css }) => ({
  counter: css`
    font-size: 12px;
    text-wrap: nowrap;
  `,
  duration: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
}));

export { useStyles };
