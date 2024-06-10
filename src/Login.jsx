import React from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()

  const handlelogin = () =>{
    navigate("/Producthome")
  }

  const handlesignup=()=>{
    navigate("/Signup")
  }
  return (
    <>
  <div className="min-h-screen flex justify-center items-center ">
         <div className="bg-black rounded-md w-[45vh] lg:h-[90vh] lg:w-[55vh]">
            <div className='bg-white my-16'  style={{borderTopLeftRadius:"140px", borderBottomRightRadius:"140px", height:"71vh"}}>
                  <h1 className='font-bold  text-2xl py-16 pb-0'>WELCOME BACK</h1>
                  <p>Please signin to Your Account</p>
<input className='bg-white h-12 w-80 text-md rounded-2xl my-12 mb-0 px-3 outline' type="text" placeholder='Email'/>
 
<input className='bg-white h-12 w-80 text-md rounded-2xl my-6 mb-0 px-3 outline' type="text" placeholder='Password'/>

<div className='flex flex-row  px-16 pr-0 py-3'>
<input type="Radio" className='text-sky-300 cursor-pointer'/>
<p className='text-sm px-1'>Remember me</p>
<p className='text-blue-500 text-sm cursor-pointer px-16 pr-0 '>Forgot password?</p>
</div>


<button className='bg-black text-white h-12 w-44 text-lg rounded-2xl my-14 mb-0 hover:bg-sky-300' onClick={handlelogin}>Log In</button>
<div className='flex flex-row px-28 py-1 pr-0'>
  <p className='text-xs'>Don't have an account?</p>
  <button className='text-sky-300 text-xs' onClick={handlesignup} >Signup</button>
</div>

            </div>
         </div>
      </div>
    </>
  )
}

export default Login