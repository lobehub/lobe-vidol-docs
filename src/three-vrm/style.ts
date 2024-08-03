import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css }) => {
  return {
    container: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      height: 100%;
    `,
  };
});

export default useStyles;
