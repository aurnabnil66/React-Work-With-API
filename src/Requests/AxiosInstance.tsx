import axios from "axios";
import { useEffect, useState } from "react";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

interface Post {
  title: string;
  body: string;
}

export default function DeleteRequest() {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    async function getPost() {
      const response = await client.get("/1");
      setPost(response.data);
    }
    getPost();
  }, []);

  async function DeletePost() {
    await client.delete("/1");
    alert("Post deleted!");
    setPost(null);
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
