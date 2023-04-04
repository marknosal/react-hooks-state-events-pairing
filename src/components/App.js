import video from "../data/video.js";
import React from "react";
import VideoPage from "./VideoPage.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div>
      <VideoPage videoInfo={video} />
    </div>
  )
  
}

export default App;
