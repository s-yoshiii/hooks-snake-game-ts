import React from "react";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowUp,
  faArrowDown,
  faArrowRight,
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
      <button css={[manipulationBtn, btnLeft]} onClick={onLeft}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div>
        <button css={[manipulationBtn, btnUp]} onClick={onUp}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <button css={[manipulationBtn, btnDown]} onClick={onDown}>
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>
      <button css={[manipulationBtn, btnRight]} onClick={onRight}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};
const manipulationPanel = css`
  margin-top: 2px;
  display: flex;
  justify-content: center;
`;
const manipulationBtn = css`
  border: 0;
  cursor: pointer;
  color: white;
  border-radius: 4px;
  font-weight: bold;
  padding: 8px 16px;
  font-size: 1rem;
  text-transform: uppercase;
  transition: all ease 0.2s;
  min-width: 106px;
  margin: 4px 2px;
  background: #52b4e8;
  box-shadow: 0px 4px 1px 1px #4293c4, 0px 6px 1px 1px #21507b;
  width: 100%;
`;
const btnLeft = css`
  min-width: 106px;
  width: 106px;
  margin-left: 0;
`;
const btnRight = css`
  min-width: 106px;
  width: 106px;
  margin-right: 0;
`;
const btnUp = css`
  margin-left: 0px;
  margin-right: 0px;
`;
const btnDown = css`
  ${btnUp}
`;
export default ManipulationPanel;
