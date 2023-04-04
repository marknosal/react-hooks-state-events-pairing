import React from "react";
import Comment from "./Comment";

function CommentList({ commentInfo }) {
    // console.log(commentInfo)
    return (
        <div>
            <h2>{commentInfo.length} Comments</h2>
            {commentInfo.map((comment) => <Comment comment={comment} />)}
        </div>
    )
}

export default CommentList