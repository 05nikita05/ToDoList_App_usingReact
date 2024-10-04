import { useState } from "react";
import Header from './components/Header.jsx'
import Input from "./components/Input.jsx";
import ShowTasks from "./components/ShowTasks.jsx";
const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div className='h-screen w-screen flex items-center justify-center bg-[#EAD8B1]'>

    <div className="todoContainer w-[360px] h-[600px] bg-[#EAD8B1]  relative flex flex-col gap-3">
    <Header tasks={tasks}/>
    <Input tasks={tasks} setTasks={setTasks}/>
    <ShowTasks tasks={tasks} setTasks={setTasks}/>
     
    </div></div>
  );
};

export default App;
