import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

interface Post {
  title: string;
  body: string;
  message: string;
}

export default function HandleErrors() {
  const [post, setPost] = useState<Post | null>(null); //  tells TypeScript that the state can be either of type Post or null
  const [error, setError] = useState<Post | null>(null); //  tells TypeScript that the state can be either of type error or null

  useEffect(() => {
    // invalid url will trigger a 404 error
    axios
      .get(`${baseURL}/asdfg`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return <p>Error: {error.message}</p>;

  if (!post) return <p>No Post!</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
