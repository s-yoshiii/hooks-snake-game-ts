import React from "react";
import { css, useTheme } from "@emotion/react";
import { GameStatus } from "../constants";
type Props = {
  onStart: () => void;
  onRestart: () => void;
  onStop: () => void;
  status: string;
};
const Button: React.VFC<Props> = ({ status, onStart, onRestart, onStop }) => {
  const theme = useTheme();
  return (
    <div css={btnWrap}>
      {status === GameStatus.gameover && (
        <button
          css={[
            btn,
            btnGameover,
            {
              background: theme.colors.buttonGameOverColor,
              "&:hover": {
                background: theme.colors.buttonGameOverColor,
              },
            },
          ]}
          onClick={onRestart}
        >
          gameover
        </button>
      )}
      {status === GameStatus.init && (
        <button
          css={[btn, btnInit, { background: theme.colors.buttonInitColor }]}
          onClick={onStart}
        >
          start
        </button>
      )}
      {status === GameStatus.suspended && (
        <button
          css={[
            btn,
            btnSuspended,
            { background: theme.colors.buttonInitColor },
          ]}
          onClick={onStart}
        >
          start
        </button>
      )}
      {status === GameStatus.playing && (
        <button
          css={[
            btn,
            btnPlaying,
            { background: theme.colors.buttonPlayingColor },
          ]}
          onClick={onStop}
        >
          stop
        </button>
      )}
    </div>
  );
};
const btnWrap = css`
  position: absolute;
  top: 70px;
  left: 55%;
`;
const btn = css`
  border: 0;
  cursor: pointer;
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 12px;
  font-size: 1.2rem;
  text-transform: uppercase;
  transition: all ease 0.2s;
  letter-spacing: 0.06em;
  &:active {
    transform: translate(3px, 3px);
  }
  @media (min-width: 540px) {
    width: 90px;
    height: 90px;
    font-size: 18px;
    font-size: 1.8rem;
  }
`;
const btnGameover = css`
  box-shadow: 4px 4px 0px 0px #ce3959, 6px 6px 0px 0px #8b1c2c;
  &:active {
    box-shadow: 3px 3px 0px 0px #ce3959;
    background: #de4064;
  }
`;
const btnInit = css`
  box-shadow: 4px 4px 0px 0px #199a4b, 6px 6px 0px 0px #0b5420;
  &:active {
    box-shadow: 3px 3px 0px 0px #199a4b;
    background: #20bd60;
  }
`;
const btnSuspended = css`
  ${btnInit}
`;
const btnPlaying = css`
  box-shadow: 4px 4px 0px 0px #d4a752, 6px 6px 0px 0px #956933;
  background: #ffd166;
  &:active {
    box-shadow: 3px 3px 0px 0px #d4a752;
    background: #eabc5c;
  }
`;

export default Button;
