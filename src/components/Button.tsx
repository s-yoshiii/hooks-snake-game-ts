import React from "react";
import { css } from "@emotion/react";
import { GameStatus } from "../constants";
type Props = {
  onStart: () => void;
  onRestart: () => void;
  onStop: () => void;
  status: string;
};
const Button: React.VFC<Props> = ({ status, onStart, onRestart, onStop }) => {
  return (
    <div>
      {status === GameStatus.gameover && (
        <button css={[btn, btnGameover]} onClick={onRestart}>
          gameover
        </button>
      )}
      {status === GameStatus.init && (
        <button css={[btn, btnInit]} onClick={onStart}>
          start
        </button>
      )}
      {status === GameStatus.suspended && (
        <button css={[btn, btnSuspended]} onClick={onStart}>
          start
        </button>
      )}
      {status === GameStatus.playing && (
        <button css={[btn, btnPlaying]} onClick={onStop}>
          stop
        </button>
      )}
    </div>
  );
};
const btn = css`
  border: 0;
  cursor: pointer;
  color: white;
  border-radius: 4px;
  width: 100%;
  font-weight: bold;
  padding: 8px 16px;
  font-size: 1rem;
  text-transform: uppercase;
  transition: all ease 0.2s;
  &:active {
    box-shadow: 0px 0px 0px 0px;
    transform: translateY(6px);
  }
`;
const btnGameover = css`
  box-shadow: 0px 4px 1px 1px #ce3959, 0px 6px 1px 1px #8b1c2c;
  background: #ef476f;
  &:active {
    background: #de4064;
  }
`;
const btnInit = css`
  box-shadow: 0px 4px 1px 1px #199a4b, 0px 6px 1px 1px #0b5420;
  background: #23ce6b;
  &:active {
    background: #20bd60;
  }
`;
const btnSuspended = css`
  ${btnInit}
`;
const btnPlaying = css`
  box-shadow: 0px 4px 1px 1px #d4a752, 0px 6px 1px 1px #956933;
  background: #ffd166;
  &:active {
    background: #eabc5c;
  }
`;
export default Button;
