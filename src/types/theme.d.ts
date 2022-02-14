import "@emotion/react";
declare module "@emotion/react" {
  interface Theme {
    colors: Colors;
  }
}
interface Colors {
  boardColor: string;
  buttonInitColor: string;
  buttonPlayingColor: string;
  buttonGameOverColor: string;
  manipulationColor: string;
  navigationColor: string;
}
