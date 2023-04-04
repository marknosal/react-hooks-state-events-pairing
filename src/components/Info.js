import React, { useState } from "react";

function Info({ info }) {
    // console.log(info)
    const [likes, setLikes] = useState(info.upvotes)
    const [dislikes, setDislikes] = useState(info.downvotes)

    function handleUpvote() {
        setLikes(()=>likes + 1)
    }

    function handleDownvote() {
        setDislikes(()=>dislikes + 1)
    }

    return (
        <div>
            <h1>{info.title}</h1>
            <h4 style={{fontWeight: "normal"}}>{info.views} Views | Uploaded {info.createdAt}</h4>
            <button onClick={handleUpvote}>{likes}👍</button> <button onClick={handleDownvote}>{dislikes}👎</button>
        </div>
    )
}

export default Info