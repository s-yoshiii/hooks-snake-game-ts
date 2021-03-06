import "@emotion/react";
declare module "@emotion/react" {
  interface Theme {
    colors: Colors;
    mq: string;
  }
}
interface Colors {
  boardColor: string;
  panelDisplayColor: string;
  buttonRightColor: string;
  buttonRightShadow01: string;
  buttonRightShadow02: string;
  buttonLeftColor: string;
  buttonLeftShadow01: string;
  buttonLeftShadow02: string;
  disableFontColor: string;
  manipulationColor: string;
  manipulationShadow01: string;
  manipulationShadow02: string;
  navigationColor: string;
  navigationShadow01: string;
  navigationShadow02: string;
  fieldColor: string;
  stateDisplayFontColor: string;
}
