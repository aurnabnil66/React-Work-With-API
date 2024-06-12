import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

interface Post {
  title: string;
  body: string;
}

export default function PutRequest() {
  const [post, setPost] = useState<Post | null>(null); //  tells TypeScript that the state can be either of type Post or null

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function UpdatePost() {
    axios
      .put(`${baseURL}/1`, {
        title: "Hello World",
        body: "This is an updated post",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return <p>No Post!</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button className="btn-primary" onClick={UpdatePost}>
        Update Post
      </button>
    </div>
  );
}
