import React from "react";
import { css } from "@emotion/react";
import { theme } from "../themes/theme";
import { GameStatus } from "../constants";
type Props = {
  fields: string[][];
  status: string;
};
const Field: React.VFC<Props> = ({ fields, status }) => {
  let isSnake: boolean = false;
  let isFood: boolean = false;
  return (
    <div css={fieldWrap}>
      <div css={field}>
        {fields.map((row) => {
          return row.map((column: string, i) => {
            isSnake = column === "snake";
            isFood = column === "food";
            return (
              <div key={i} css={[dots, isSnake && snake, isFood && food]}></div>
            );
          });
        })}
      </div>
      {status === GameStatus.gameover && (
        <div css={stateDisplay}>GAME OVER</div>
      )}
      {status === GameStatus.init && (
        <div css={stateDisplay}>
          PRESS <span>A</span> START
        </div>
      )}
      {status === GameStatus.suspended && (
        <div css={stateDisplay}>
          PRESS <span>A</span> RESTART
        </div>
      )}
    </div>
  );
};

const fieldWrap = css`
  position: relative;
`;
const field = css`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2px;
  color: white;
  background: ${theme.colors.fieldColor};
  border-radius: 0 0 4px 4px;
  border: 1px solid #ffffff;
  box-shadow: 0px 1px 1px 1px #020604, 0px 2px 1px 1px #010403;
`;
const dots = css`
  width: calc(100% / 35);
  height: calc((100vw - 82px) / 35);
  background: ${theme.colors.fieldColor};
  ${theme.mq} {
    height: calc((100vw - 210px) / 35);
    max-height: calc(558px / 35);
    max-width: calc(560px / 35);
  }
`;
const stateDisplay = css`
  position: absolute;
  bottom: 10%;
  left: 0;
  background: rgba(255, 255, 255, 0.4);
  width: 100%;
  padding: 10px;
  font-size: 14px;
  font-size: 1.4rem;
  color: ${theme.colors.stateDisplayFontColor};
  font-weight: 600;
  letter-spacing: 0.4em;
  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.buttonRightColor};
    width: 2em;
    height: 2em;
    padding: 0.25em;
    color: #fff;
    border-radius: 50%;
    letter-spacing: 0.1em;
  }
`;

const snake = css`
  background: #fff;
`;
const food = css`
  background: pink;
`;
export default Field;
