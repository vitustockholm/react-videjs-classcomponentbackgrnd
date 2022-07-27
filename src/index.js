import React from "react";
import { render } from "react-dom";
import Videojs from "./video.js";

const videoJsOptions = {
  autoplay: true,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],

  controls: false,
  sources: [
    {
      src: "//vjs.zencdn.net/v/oceans.mp4",
      type: "video/mp4"
    }
  ]
};

const App = () => (
  <div>
    <Videojs {...videoJsOptions} />
  </div>
);

render(<App />, document.getElementById("root"));
