import React from 'react';
const list = (document.getElementsByClassName("comment-text"))
const CommentInput = props => {
  return (

    <form className="comment-form" onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />

<input type = "submit" onClick={()=> {props.set(props.comment) }} />
    </form>

  );
};

export default CommentInput;

    // 
     // <input type = "submit" onClick={()=> {list.append(comment) }} />
