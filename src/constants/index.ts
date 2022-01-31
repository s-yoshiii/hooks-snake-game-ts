import { initFields, position } from "../utils";

export const fieldSize: number = 35;
export const initialPosition: position = { x: 17, y: 17 };
export const initialValues: string[][] = initFields(fieldSize, initialPosition);
export const defaultInterval: number = 100;
export const defaultDifficulty: number = 3;
export const Difficulty: number[] = [1000, 500, 100, 50, 10];
type status = {
  [key: string]: string;
};
export const GameStatus: status = Object.freeze({
  init: "init",
  playing: "playing",
  suspended: "suspended",
  gameover: "gameover",
});
type direction = {
  [key: string]: string;
};
export const Direction: direction = Object.freeze({
  up: "up",
  right: "right",
  left: "left",
  down: "down",
});
type keyCode = {
  [key: string]: string;
};

export const DirectionKeyCodeMap: keyCode = Object.freeze({
  ArrowLeft: Direction.left,
  ArrowUp: Direction.up,
  ArrowRight: Direction.right,
  ArrowDown: Direction.down,
});

type oppositeDirection = {
  [key: string]: string;
};
export const OppositeDirection: oppositeDirection = Object.freeze({
  up: "down",
  right: "left",
  left: "right",
  down: "up",
});

type delta = {
  [key: string]: { [key: string]: number };
};
export const Delta: delta = Object.freeze({
  up: { x: 0, y: -1 },
  right: { x: 1, y: 0 },
  left: { x: -1, y: 0 },
  down: { x: 0, y: 1 },
});
