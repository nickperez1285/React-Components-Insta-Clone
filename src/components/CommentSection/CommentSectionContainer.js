// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
const CommentSection = props => {
// Add state for the comments

console.log(props.comments)
const [comment, setComment] = useState(props.comments)
return (
<div>
  {comment.map((item, index)=>
  <Comment comment = {item} key = {item.username}   id ={item.postId}/>
  )}
  <CommentInput  set = {setComment}/>

</div>
);
};
export default CommentSection;