import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => ({
  active: css`
    transform-style: preserve-3d;
  `,

  header: css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 16px;

    border-bottom: 1px solid ${token.colorBorder};
  `,

  list: css`
    overflow: auto;
    display: grid;
    grid-auto-flow: row;
    grid-gap: 24px;
    grid-template-columns: repeat(auto-fill, 64px);
    grid-template-rows: repeat(auto-fill, 64px);
    justify-items: center;

    padding: 32px;
  `,

  orbit: css`
    position: absolute;
    top: 50%;
    left: 50%;

    width: 72px; /* 轨道直径 */
    height: 72px; /* 轨道直径 */
    margin-top: -36px; /* 轨道直径的一半，用于居中 */
    margin-left: -36px; /* 轨道直径的一半，用于居中 */

    border: 3px solid ${token.colorPrimary}; /* 轨道颜色和透明度 */
    border-radius: 50%;
  `,
  satellite: css`
    @keyframes orbit {
      0% {
        transform: rotateZ(0deg);
      }

      100% {
        transform: rotateZ(360deg);
      }
    }

    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: 0 calc(36px + 2px); /* 小球绕头像中心旋转的轨道半径 */

    width: 6px;
    height: 6px;
    margin-top: calc(-36px - 3px); /* 轨道直径的一半，用于居中 */

    background-color: ${token.colorPrimary}; /* 小球颜色 */
    border-radius: 50%;

    animation: orbit 3s linear infinite; /* 应用动画 */
  `,
}));
