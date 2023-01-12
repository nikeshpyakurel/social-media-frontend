import React from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(process.env.FETCH_URI);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
