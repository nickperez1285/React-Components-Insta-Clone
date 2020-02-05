//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
// postData is passed from App.js
const PostsPage = (props) => {
  return (
    <div className="posts-container-wrapper">

      {props.postData.map( (post, index) =>
      	<Post  key={index} post={post}  />
     )}
</div>
  );
};

export default PostsPage;

