import axios from "axios";
import { json } from "stream/consumers";

async function getBlogs() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
}

export default async function Home() {
  const blogs = await getBlogs();

  return <div>
    {blogs.map((blog : iTodo) => <Todo title={blog.title} completed={blog.completed} />)}
  </div>;
}

interface iTodo{
    title: string,
    completed : boolean
}

function Todo({title, completed} : iTodo){

    return <div>
        {title} {completed ? "done" : "not done!"}
    </div>
}