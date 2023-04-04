import React, { useState } from "react";
import Info from "./Info";
import CommentList from "./CommentList";

function VideoPage({ videoInfo }) {
    const [displayComments, setDisplayComments] = useState(false)

    function handleCommentClick() {
        setDisplayComments(
            !displayComments
        )
    }

    return (
        <div className="App">
          <iframe
            width="919"
            height="525"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
          />
          <Info info={videoInfo} />
          <br/>
          <button onClick={handleCommentClick}>{displayComments ? 'Hide Comments' : 'Show Commments'}</button>
          <hr/>
          {displayComments ? <CommentList commentInfo={videoInfo.comments} /> : null}
        </div>
      );
}

export default VideoPage