export interface position {
  x: number;
  y: number;
  [key: string]: number;
}
export const getFoodPosition = (
  fieldSize: number,
  excludes: position[]
): position => {
  while (true) {
    const x = Math.floor(Math.random() * (fieldSize - 1 - 1)) + 1;
    const y = Math.floor(Math.random() * (fieldSize - 1 - 1)) + 1;
    const conflict: boolean = excludes.some(
      (item: position) => item.x === x && item.y === y
    );
    if (!conflict) {
      return { x, y };
    }
  }
};
export const initFields = (fieldSize: number, snake: position) => {
  const fields = [];
  for (let i = 0; i < fieldSize; i++) {
    const cols = new Array(fieldSize).fill("");
    fields.push(cols);
  }
  fields[snake.y][snake.x] = "snake";
  const food = getFoodPosition(fieldSize, [snake]);
  fields[food.y][food.x] = "food";
  return fields;
};

export const isCollision = (fieldSize: number, position: position): boolean => {
  if (position.y < 0 || position.x < 0) {
    return true;
  }
  if (position.y > fieldSize - 1 || position.x > fieldSize - 1) {
    return true;
  }
  return false;
};
export const isEatingMyself = (
  fields: string[][],
  position: position
): boolean => {
  return fields[position.y][position.x] === "snake";
};
