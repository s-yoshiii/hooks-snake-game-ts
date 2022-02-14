import React from "react";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faCaretLeft,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { Direction } from "../constants";
type Props = {
  onChange: (newDirection: string) => void;
};
const ManipulationPanel: React.VFC<Props> = ({ onChange }) => {
  const onUp = (): void => onChange(Direction.up);
  const onRight = (): void => onChange(Direction.right);
  const onLeft = (): void => onChange(Direction.left);
  const onDown = (): void => onChange(Direction.down);
  return (
    <div css={manipulationPanel}>
      <button css={[manipulationBtn, btnUp]} onClick={onUp}>
        <FontAwesomeIcon icon={faCaretUp} />
      </button>
      <button css={[manipulationBtn, btnLeft]} onClick={onLeft}>
        <FontAwesomeIcon icon={faCaretLeft} />
      </button>
      <div css={[manipulationBtn, btnSpace]}></div>
      <button css={[manipulationBtn, btnRight]} onClick={onRight}>
        <FontAwesomeIcon icon={faCaretRight} />
      </button>
      <button css={[manipulationBtn, btnDown]} onClick={onDown}>
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
  top: 60px;
  left: 20px;
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
  background: #52b4e8;
  width: 8.125vw;
  height: 7.725vw;
  box-shadow: 4px 4px 0px 0px #4293c4, 6px 6px 0px 0px #21507b;
  @media (min-width: 540px) {
    width: 60px;
    height: 55px;
    font-size: 20px;
    font-size: 2rem;
  }
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
