import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts/6";

interface Post {
  title: string;
  body: string;
}

export default function GetRequest() {
  const [post, setPost] = useState<Post | null>(null); //  tells TypeScript that the state can be either of type Post or null

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  /*
Inside the useEffect hook, we're making an HTTP GET request using Axios, a promise-based HTTP client. 
baseURL is the URL we're sending the request to.
axios.get(baseURL) returns a promise. 
When the promise resolves (i.e., the GET request is successful), 
the .then method is called with the response object as its argument. 

}, []);
This is the dependency array of the useEffect hook. 
An empty array means this effect will run only once, 
after the initial render (similar to componentDidMount in class components).
 */

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
