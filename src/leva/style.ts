import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css }) => {
  return {
    container: css`
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-items: center;
      justify-content: center;
    `,
  };
});

export default useStyles;
