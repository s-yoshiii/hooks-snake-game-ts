import React from "react";
import { css } from "@emotion/react";
import Field from "./components/Field";
import Button from "./components/Button";
import ManipulationPanel from "./components/ManipulationPanel";
import Navigation from "./components/Navigation";
import useSnakeGame from "./hooks/useSnakeGame";

function App() {
  const {
    body,
    difficulty,
    fields,
    status,
    start,
    stop,
    reload,
    updateDirection,
    updateDifficulty,
  } = useSnakeGame();
  return (
    <div css={container}>
      <header>
        <div css={titleContainer}>
          <h1 css={title}>Snake Game</h1>
        </div>
        <Navigation
          length={body.length}
          difficulty={difficulty}
          onChangeDifficulty={updateDifficulty}
        />
      </header>
      <main css={main}>
        <Field fields={fields} />
      </main>
      <footer css={footer}>
        <Button
          status={status}
          onStart={start}
          onStop={stop}
          onRestart={reload}
        />
        <ManipulationPanel onChange={updateDirection} />
      </footer>
    </div>
  );
}
const container = css`
  text-align: center;
  max-width: calc(9px * 35 + 1px * 2);
`;
const titleContainer = css`
  border-radius: 4px 4px 0px 0px;
  box-shadow: 0px 4px 1px 1px #97a5a5, 0px 6px 1px 1px #3c4a4a,
    0px 0px 1px 1px #3c4a4a;
`;
const title = css`
  margin: 0;
  padding: 8px;
  font-size: 1.1rem;
`;
const main = css``;
const footer = css``;
export default App;
