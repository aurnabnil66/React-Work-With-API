import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

interface Post {
  title: string;
  body: string;
}

export default function DeleteRequest() {
  const [post, setPost] = useState<Post | null>(null); //  tells TypeScript that the state can be either of type Post or null

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function DeletePost() {
    axios.delete(`${baseURL}/1`).then((response) => {
      alert("Post deleted!");
      setPost(null);
    });
  }

  if (!post) return <p>No Post!</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button className="btn-primary" onClick={DeletePost}>
        Delete Post
      </button>
    </div>
  );
}
