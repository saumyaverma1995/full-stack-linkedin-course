import React from "react";

function CommentsList({ comments }) {
  return (
    <>
      <h3>Comments</h3>
      {comments.map((comment, idx) => (
        <div className="comment" key={idx}>
          <h4>{comment.postedBy}</h4>
          <p>{comment.text}</p>
        </div>
      ))}
    </>
  );
}

export default CommentsList;
