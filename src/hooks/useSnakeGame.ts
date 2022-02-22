import { useCallback, useEffect, useState } from "react";
import {
  fieldSize,
  defaultInterval,
  defaultDifficulty,
  Delta,
  Difficulty,
  Direction,
  DirectionKeyCodeMap,
  GameStatus,
  OppositeDirection,
  initialPosition,
  initialValues,
} from "../constants";
import {
  initFields,
  isCollision,
  isEatingMyself,
  getFoodPosition,
  position,
} from "../utils";
let timer: NodeJS.Timer | null = null;
const unsubscribe = (): void => {
  if (!timer) {
    return;
  }
  clearInterval(timer);
};

const useSnakeGame = () => {
  const [fields, setFields] = useState<string[][]>(initialValues);
  const [body, setBody] = useState<position[]>([]);
  const [status, setStatus] = useState<string>(GameStatus.init);
  const [direction, setDirection] = useState<string>(Direction.up);
  const [difficulty, setDifficulty] = useState<number>(defaultDifficulty);
  const [tick, setTick] = useState<number>(0);

  useEffect(() => {
    setBody([initialPosition]);
    const interval = Difficulty[difficulty - 1];
    timer = setInterval(() => {
      setTick((tick) => tick + 1);
    }, interval);
    return unsubscribe;
  }, [difficulty]);
  useEffect(() => {
    if (body.length === 0 || status !== GameStatus.playing) {
      return;
    }
    const canContinue: boolean = handleMoving();
    if (!canContinue) {
      setStatus(GameStatus.gameover);
    }
  }, [tick]);
  const start = (): void => setStatus(GameStatus.playing);
  const stop = (): void => setStatus(GameStatus.suspended);
  const reload = (): void => {
    timer = setInterval(() => {
      setTick((tick) => tick + 1);
    }, defaultInterval);
    setStatus(GameStatus.init);
    setBody([initialPosition]);
    setDirection(Direction.up);
    setFields(initFields(fieldSize, initialPosition));
  };
  const updateDirection = useCallback(
    (newDirection: string) => {
      if (status !== GameStatus.playing) {
        return direction;
      }
      if (OppositeDirection[direction] === newDirection) {
        return;
      }
      setDirection(newDirection);
    },
    [direction, status]
  );
  const updateDifficulty = useCallback(
    (difficulty: number) => {
      if (status !== GameStatus.init) {
        return;
      }
      if (difficulty < 1 || difficulty > Difficulty.length) {
        return;
      }
      setDifficulty(difficulty);
    },
    [status, difficulty]
  );
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      const newDirection: string = DirectionKeyCodeMap[e.key];
      if (!newDirection) {
        return;
      }
      updateDirection(newDirection);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [updateDirection]);
  const handleMoving = (): boolean => {
    const { x, y } = body[0];
    const delta = Delta[direction];
    const newPosition = {
      x: x + delta.x,
      y: y + delta.y,
    };
    if (
      isCollision(fields.length, newPosition) ||
      isEatingMyself(fields, newPosition)
    ) {
      unsubscribe();
      return false;
    }
    const newBody: position[] = [...body];
    if (fields[newPosition.y][newPosition.x] !== "food") {
      const removingTrack: position | undefined = newBody.pop();
      fields[removingTrack!.y][removingTrack!.x] = "";
    } else {
      const food = getFoodPosition(fields.length, [...newBody, newPosition]);
      fields[food.y][food.x] = "food";
    }
    fields[newPosition.y][newPosition.x] = "snake";
    newBody.unshift(newPosition);
    setBody(newBody);
    setFields(fields);
    return true;
  };
  return {
    body,
    difficulty,
    fields,
    status,
    start,
    stop,
    reload,
    direction,
    updateDirection,
    updateDifficulty,
  };
};
export default useSnakeGame;
