import React from "react";
import { css } from "@emotion/react";
import { defaultDifficulty, Difficulty } from "../constants";
type Props = {
  length: number;
  difficulty: number;
  onChangeDifficulty: (difficulty: number) => void;
};
const Navigation: React.VFC<Props> = ({
  length,
  difficulty = defaultDifficulty,
  onChangeDifficulty,
}) => {
  const upVisibility = difficulty < Difficulty.length;
  const downVisibility = difficulty > 1;
  const onUpDifficulty = () => onChangeDifficulty(difficulty + 1);
  const onDownDifficulty = () => onChangeDifficulty(difficulty - 1);
  return (
    <div css={navigation}>
      <div css={navigationItem}>
        <span css={navigationLabel}>Length:</span>
        <div css={navigationCardWrap}>
          <div css={navigationBoard}>{length}</div>
        </div>
      </div>
      <div css={navigationItem}>
        <span css={navigationLabel}>Difficulty:</span>
        <div css={navigationCardWrap}>
          <div css={navigationBoard}>{difficulty}</div>
          <div css={navigationSwitch}>
            <div
              css={[difficultyButton, difficultyUp, !upVisibility && isHidden]}
              onClick={onUpDifficulty}
            ></div>
            <div
              css={[
                difficultyButton,
                difficultyDown,
                !downVisibility && isHidden,
              ]}
              onClick={onDownDifficulty}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
const navigation = css`
  display: flex;
  margin-top: 4px;
  justify-content: space-evenly;
  color: white;
  font-weight: bold;
  background: #020705;
  box-shadow: 0px 4px 1px 1px #020604, 0px 6px 1px 1px #010403;
  border: 1px solid #ffffff;
`;
const navigationItem = css`
  padding: 16px;
  display: flex;
  align-items: center;
`;
const navigationLabel = css``;
const navigationSwitch = css``;
const navigationCardWrap = css`
  display: flex;
  padding: 0 8px;
  align-items: center;
  margin-left: 8px;
`;
const navigationBoard = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0f1d1d;
  height: 48px;
  width: 24px;
`;
const difficultyButton = css`
  cursor: pointer;
  width: 8px;
  height: 8px;
  border: 8px solid #0f1d1d;
  margin: 8px;
`;
const difficultyUp = css`
  margin-top: 4px;
  border-bottom: 8px solid #f0f0f050;
  transition: all ease 0.5s;
  &:hover {
    transform: scale(1.1);
    border-bottom: 8px solid white;
  }
  &:active {
    transform: scale(0.8);
    opacity: 0.8;
  }
`;
const difficultyDown = css`
  margin-bottom: 4px;
  border-top: 8px solid #f0f0f050;
  transition: all ease 0.5s;
  &:hover {
    transform: scale(1.1);
    border-top: 8px solid white;
  }
  &:active {
    transform: scale(0.8);
    opacity: 0.8;
  }
`;
const isHidden = css`
  visibility: hidden !important;
`;
export default Navigation;
