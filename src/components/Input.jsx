import { nanoid } from "nanoid";
import { useState } from "react";


const Input = (props) => {
    const {tasks,setTasks}=props
  const [title, setTitle] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const task = {
          title: title,
          completed: false,
          id: nanoid(),
        };
    
        const copyTasks = [...tasks];
        copyTasks.push(task);
        setTasks(copyTasks);
    
        setTitle("");
      };
  return (
    <form
        className="flex items-center justify-between"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          placeholder="enter task here..."
          className="py-2 px-3 rounded w-[240px]"
        />
        <button className="bg-[#3A6D8C] px-4 py-2 rounded text-white font-bold">
          <i className="ri-add-line"></i>Add Task
        </button>
      </form>
  )
}

export default Input