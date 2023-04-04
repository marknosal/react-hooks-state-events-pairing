import React, { useState } from "react";

function Comment ({ comment }) {
    const [comLikes, setComLikes] = useState(0)
    const [comDislikes, setComDislikes] = useState(0)

    function handleComUpvote() {
        setComLikes(()=>comLikes + 1)
    }

    function handleComDownvote() {
        setComDislikes(()=>comDislikes + 1)
    }

    return (
        <>
            <h3>{comment.user}</h3>
            <h4 style={{fontWeight: "normal"}}>{comment.comment}</h4>
            <button onClick={handleComUpvote}>{comLikes}👍</button> <button onClick={handleComDownvote}>{comDislikes}👎</button>
            <br/>
        </>
    )
}

export default Comment