import React, { Dispatch, SetStateAction, createContext } from "react";
import { Global, css, ThemeProvider, Theme } from "@emotion/react";
import emotionReset from "emotion-reset";
import { theme } from "./themes/theme";
import Field from "./components/Field";
import Button from "./components/Button";
import ManipulationPanel from "./components/ManipulationPanel";
import Navigation from "./components/Navigation";
import useSnakeGame from "./hooks/useSnakeGame";
export const CustomThemeContext = createContext<{
  setTheme: Dispatch<SetStateAction<Theme>>;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
}>({ setTheme: () => {} });
function App() {
  const {
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
  } = useSnakeGame();
  // const [theme, setTheme] = useState<Theme>(advance);
  return (
    <>
      <Global styles={[global]} />
      <ThemeProvider theme={theme}>
        <div css={container}>
          <div css={panelDisplay}>
            <h1 css={title}>
              <span>DOT MATRIX WITH SNAKEGAME</span>
            </h1>
            <header>
              <Navigation
                length={body.length}
                difficulty={difficulty}
                onChangeDifficulty={updateDifficulty}
              />
            </header>
            <main css={main}>
              <Field fields={fields} status={status} />
            </main>
          </div>
          <footer css={footer}>
            <Button
              status={status}
              onStart={start}
              onStop={stop}
              onRestart={reload}
            />
            <ManipulationPanel
              status={status}
              onChange={updateDirection}
              direction={direction}
            />
          </footer>
        </div>
        {/* <CustomThemeContext.Provider value={{ setTheme }}>
          <div>aaa</div>
        </CustomThemeContext.Provider> */}
      </ThemeProvider>
    </>
  );
}
const global = css`
  ${emotionReset}
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
  #root {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
  }
`;
const container = css`
  text-align: center;
  width: 100%;
  min-width: 320px;
  max-width: 760px;
  padding: 40px 20px;
  background: ${theme.colors.boardColor};
  min-height: 100vh;
  @media (min-width: 540px) {
    padding: 40px 60px;
    min-height: inherit;
  }
`;
const panelDisplay = css`
  background: ${theme.colors.panelDisplayColor};
  margin: 0 auto;
  padding: 10px 20px 20px;
  border-radius: 30px 10px;
  @media (min-width: 540px) {
    padding: 20px 40px 40px;
    max-width: 640px;
  }
`;
const title = css`
  margin-bottom: 10px;
  text-align: left;
  font-size: 11px;
  font-size: 1.1rem;
  color: #fff;
  letter-spacing: 0.05em;
  font-weight: 500;
  position: relative;
  min-height: 2em;
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background: #c26496;
    position: absolute;
    top: calc(50% - 3px);
    left: 0;
    z-index: 0;
  }
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background: #545598;
    position: absolute;
    bottom: calc(50% - 3px);
    left: 0;
    z-index: 1;
  }
  span {
    display: inline-block;
    padding: 0.5em 1em;
    background: #8b8890;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    white-space: nowrap;
  }
  @media (min-width: 540px) {
    font-size: 18px;
    font-size: 1.8rem;
    &::before {
      top: calc(50% - 4px);
    }
    &::after {
      bottom: calc(50% - 4px);
    }
    span {
      left: 10%;
      transform: none;
    }
  }
`;
const main = css``;

const footer = css`
  position: relative;
  @media (min-width: 540px) {
    height: 300px;
    max-width: 640px;
    margin: 0 auto;
  }
`;
export default App;
