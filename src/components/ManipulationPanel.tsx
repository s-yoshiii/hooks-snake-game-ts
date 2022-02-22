import React from "react";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faCaretLeft,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { Direction, OppositeDirection, GameStatus } from "../constants";
import { theme, mq } from "../themes/theme";
type Props = {
  onChange: (newDirection: string) => void;
  direction: string;
  status: string;
};
const ManipulationPanel: React.VFC<Props> = ({
  onChange,
  direction,
  status,
}) => {
  const onUp = (): void => onChange(Direction.up);
  const onRight = (): void => onChange(Direction.right);
  const onLeft = (): void => onChange(Direction.left);
  const onDown = (): void => onChange(Direction.down);
  return (
    <div css={manipulationPanel}>
      <button
        css={[
          manipulationBtn,
          btnUp,
          (direction === Direction.up ||
            direction === OppositeDirection[Direction.up] ||
            status !== GameStatus.playing) &&
            isDisabled,
        ]}
        onClick={onUp}
      >
        <FontAwesomeIcon icon={faCaretUp} />
      </button>
      <button
        css={[
          manipulationBtn,
          btnLeft,
          (direction === Direction.left ||
            direction === OppositeDirection[Direction.left] ||
            status !== GameStatus.playing) &&
            isDisabled,
        ]}
        onClick={onLeft}
      >
        <FontAwesomeIcon icon={faCaretLeft} />
      </button>
      <div css={[manipulationBtn, btnSpace]}></div>
      <button
        css={[
          manipulationBtn,
          btnRight,
          (direction === Direction.right ||
            direction === OppositeDirection[Direction.right] ||
            status !== GameStatus.playing) &&
            isDisabled,
        ]}
        onClick={onRight}
      >
        <FontAwesomeIcon icon={faCaretRight} />
      </button>
      <button
        css={[
          manipulationBtn,
          btnDown,
          (direction === Direction.down ||
            direction === OppositeDirection[Direction.down] ||
            status !== GameStatus.playing) &&
            isDisabled,
        ]}
        onClick={onDown}
      >
        <FontAwesomeIcon icon={faCaretDown} />
      </button>
    </div>
  );
};
const manipulationPanel = css`
  display: grid;
  justify-content: center;
  grid-template-areas:
    ". up ."
    "left space right"
    ". down .";
  position: absolute;
  top: 55px;
  left: 6%;
`;
const manipulationBtn = css`
  border: 0;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  font-size: 1.4rem;
  text-transform: uppercase;
  transition: all ease 0.2s;
  background: ${theme.colors.manipulationColor};
  width: 8.125vw;
  height: 7.725vw;
  outline: 0;
  box-shadow: 4px 4px 0px 0px ${theme.colors.manipulationShadow01},
    6px 6px 0px 0px ${theme.colors.manipulationShadow02};
  ${mq} {
    width: 60px;
    height: 55px;
    font-size: 20px;
    font-size: 2rem;
  }
`;
const isDisabled = css`
  color: ${theme.colors.disableFontColor};
`;
const btnUp = css`
  grid-area: up;
  border-radius: 4px 4px 0 0;
`;
const btnDown = css`
  grid-area: down;
  border-radius: 0 0 4px 4px;
`;
const btnSpace = `
  grid-area: space;
  border-radius:0px;
`;
const btnLeft = css`
  grid-area: left;
  border-radius: 4px 0 0 4px;
`;
const btnRight = css`
  grid-area: right;
  border-radius: 0 4px 4px 0;
`;
export default ManipulationPanel;
