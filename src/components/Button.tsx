import React from "react";
import { css } from "@emotion/react";
import { GameStatus } from "../constants";
import { theme } from "../themes/theme";
type Props = {
  onStart: () => void;
  onRestart: () => void;
  onStop: () => void;
  status: string;
};
const Button: React.VFC<Props> = ({ status, onStart, onRestart, onStop }) => {
  return (
    <>
      <div css={btnWrapRight}>
        {status === GameStatus.gameover && (
          <button css={[btn, btnA]} onClick={onRestart}>
            A
          </button>
        )}
        {(status === GameStatus.init || status === GameStatus.suspended) && (
          <button css={[btn, btnA]} onClick={onStart}>
            A
          </button>
        )}
        {status === GameStatus.playing && (
          <button css={[btn, btnA]} disabled>
            A
          </button>
        )}
        <div css={btnText}>START</div>
      </div>
      <div css={btnWrapLeft}>
        {(status === GameStatus.init ||
          status === GameStatus.suspended ||
          status === GameStatus.gameover) && (
          <button css={[btn, btnB]} disabled>
            B
          </button>
        )}
        {status === GameStatus.playing && (
          <button css={[btn, btnB]} onClick={onStop}>
            B
          </button>
        )}
        <div css={btnText}>PAUSE</div>
      </div>
    </>
  );
};
const btnWrapRight = css`
  position: absolute;
  top: 80px;
  left: 55%;
`;
const btnWrapLeft = css`
  position: absolute;
  top: 55px;
  left: 75%;
`;
const btn = css`
  border: 0;
  cursor: pointer;
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 18px;
  font-size: 1.8rem;
  text-transform: uppercase;
  transition: all ease 0.2s;
  letter-spacing: 0.06em;
  font-weight: 400;
  &:active {
    transform: translate(3px, 3px);
  }
  ${theme.mq} {
    width: 90px;
    height: 90px;
    font-size: 22px;
    font-size: 2.2rem;
  }
`;
const btnA = css`
  background: ${theme.colors.buttonRightColor};
  box-shadow: 4px 4px 0px 0px ${theme.colors.buttonRightShadow01},
    6px 6px 0px 0px ${theme.colors.buttonRightShadow02};
  &:disabled {
    background: ${theme.colors.buttonRightShadow01};
    box-shadow: 4px 4px 0px 0px ${theme.colors.buttonRightShadow02},
      6px 6px 0px 0px ${theme.colors.buttonRightShadow02};
    color: ${theme.colors.disableFontColor};
  }
  &:active {
    box-shadow: 3px 3px 0px 0px ${theme.colors.buttonRightShadow01};
    background: ${theme.colors.buttonRightColor};
  }
`;
const btnB = css`
  background: ${theme.colors.buttonLeftColor};
  box-shadow: 4px 4px 0px 0px ${theme.colors.buttonLeftShadow01},
    6px 6px 0px 0px ${theme.colors.buttonLeftShadow02};
  &:disabled {
    background: ${theme.colors.buttonLeftShadow01};
    box-shadow: 4px 4px 0px 0px ${theme.colors.buttonLeftShadow02},
      6px 6px 0px 0px ${theme.colors.buttonLeftShadow02};
    color: ${theme.colors.disableFontColor};
  }
  &:active {
    box-shadow: 3px 3px 0px 0px ${theme.colors.buttonLeftShadow01};
  }
`;
const btnText = css`
  margin-top: 13px;
  text-align: center;
  padding-left: 6px;
  font-size: 12px;
  font-size: 1.2rem;
  letter-spacing: 0.08em;
  font-weight: 400;
  ${theme.mq} {
    font-size: 14px;
    font-size: 1.4rem;
    margin-top: 15px;
  }
`;
export default Button;
