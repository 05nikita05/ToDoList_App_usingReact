import tick from '../assets/tick.png'

const Header = (props) => {
  const tasks = props.tasks
  return (
    <div className="container w-full h-1/4 border-[#001F3F] border-2 rounded flex items-center relative">
    <img src={tick} alt="image" className="w-2/3" />
    <div className="circle w-[100px] h-[100px] bg-[#001F3F] rounded-t-lg rounded-bl-full right-5 top-5 absolute"></div>
    <div className="circle w-[100px] h-[100px] bg-[#001F3F] rounded-t-md rounded-bl-full right-10 top-10 absolute"></div>
    <div className="circle-task w-[100px] h-[100px] bg-[#001F3F] rounded-t-md rounded-full right-8 top-10 absolute flex items-center justify-center ">
      <h1 className="text-white font-bold text-3xl ">
        {tasks.filter((task) => task.completed).length}/{tasks.length}
      </h1>
    </div>
  </div>
  )
}

export default Header