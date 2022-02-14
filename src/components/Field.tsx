import React from "react";
import { css } from "@emotion/react";
type Props = {
  fields: string[][];
};
const Field: React.VFC<Props> = ({ fields }) => {
  let isSnake: boolean = false;
  let isFood: boolean = false;
  return (
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
  );
};

const field = css`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2px;
  color: white;
  background: #0f1d1d;
  border-radius: 0 0 4px 4px;
  border: 1px solid #ffffff;
  box-shadow: 0px 1px 1px 1px #020604, 0px 2px 1px 1px #010403;
`;
const dots = css`
  width: calc(100% / 35);
  height: calc((100vw - 82px) / 35);
  background: #0f1d1d;
  @media (min-width: 540px) {
    height: calc((100vw - 210px) / 35);
    max-height: calc(558px / 35);
    max-width: calc(560px / 35);
  }
`;
const snake = css`
  background: #fff;
`;
const food = css`
  background: pink;
`;
export default Field;
