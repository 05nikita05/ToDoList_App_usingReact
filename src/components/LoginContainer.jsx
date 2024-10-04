import React from 'react'


const LoginContainer = () => {
  return (
<div className="todo-container bg-slate-200 h-[360px] w-[360px] relative flex flex-col items-center justify-center rounded-lg overflow-hidden" >
      <div className="todo-header h-2/3  w-full bg-yellow-50 flex flex-col gap-4  items-center justify-center">
        <h1 className='text-5xl text-[#001F3F]'>TO DO</h1>
        <p className='text-xl text-slate-500'>Reminds Everything</p>
      </div>
      <div className="todo-buttons bg-[#001F3F] h-1/2 w-full flex items-center justify-center">
        <button className="google-btn p-2 px-4 bg-[#3A6D8C] rounded-3xl text-white">
          Sign in with Google
        </button>
        
      </div>
    </div>
    
  )
}

export default LoginContainer