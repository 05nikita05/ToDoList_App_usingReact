
const ShowTasks = (props) => {
    const {tasks,setTasks}=props;

    const toggleHandler = (index) => {
        const copytasks = [...tasks];
        copytasks[index].completed = !copytasks[index].completed;
        setTasks(copytasks);
      };
    
      const DeleteHandler = (index) => {
        if (tasks[index].completed || confirm("Are you sure ?")) {
          const copytasks = [...tasks];
          copytasks.splice(index, 1);
          setTasks(copytasks);
          alert("task deleted successfully");
        } else {
          alert("task not deleted!");
          return;
        }
      };
    const rendering = tasks.length>0 ? (tasks.map((task, index) => {
        return (
          <li
            key={index}
            className="p-3 px-4 w-full bg-gray-950 mt-2 rounded text-white font-bold flex items-center justify-between"
          >
            <h1
              className={`${task.completed ? "line-through " : ""
                } text-xl font-bold text-yellow-100 flex items-center gap-2`}
            >
              <div onClick={() => {toggleHandler(index);}} className={` ${task.completed
                    ? "ri-check-double-fill line-through text-green-500": "border border-[#f9e199] rounded-full w-[20px] h-[20px]"} `}></div>
              {task.title}
            </h1>
            <div onClick={() => {DeleteHandler(index);}}className="delete ">
              <i className="ri-delete-bin-5-line text-xl font-light"></i>
            </div>
          </li>
        );
      })):<div className="notask w-full h-2/3 mt-5 px-3 ">
      <h1 className="text-xl text-center text-[#001F3F]">
        You have 0 tasks...
      </h1>
    </div>

  return (
    <div className="tasks w-full h-2/3 mt-5 relative ">
    <ul>
      {rendering}
    </ul>
  </div>
  )
}

export default ShowTasks