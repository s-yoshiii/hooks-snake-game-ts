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
  box-shadow: 0px 4px 1px 1px #0c1818, 0px 6px 1px 1px #060f0d;
`;
const dots = css`
  height: 9px;
  width: 9px;
  background: #0f1d1d;
`;
const snake = css`
  background: #fff;
`;
const food = css`
  background: pink;
`;
export default Field;
