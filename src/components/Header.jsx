import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate()
    const carthandle =()=>{
        navigate("/Cart")
      }
  return (
    <div>
         <div className=" flex h-16 w-[47vh] lg:w-full fixed top-0 left-0 right-0">
        <div className="  h-10 w-10 my-3 mx-6 hidden lg:block"></div>

        <div className="h-8 w-96 lg:w-28 my-5">
          <h1 className="font-mono font-bold text-md">SEVAN STORE</h1>
        </div>

        <div className="w-56 mr-2 hidden lg:block"></div>

        <div className="w-2/5 mr-2 hidden lg:block"></div>
        <input
          type="search"
          className="lg:h-10 h-9 w-28 lg:w-44 bg-black my-3 rounded-l-full px-6 text-white   border-none outline-none"
        />

        <div className=" lg:h-10 h-9 lg:w-16 w-12 bg-zinc-800  rounded-r-full my-3 lg:py-2 py-1.5 lg:px-5 px-3 text-white">
          <IoSearchOutline className="w-[23px] h-[23px]"/>
        </div>

        <div className="py-2 px-2 h-10 w-10 my-3 mx-4 rounded-full   hover:bg-zinc-300"  onClick={carthandle}>
          <AiOutlineShoppingCart className="w-[25px] h-[25px]"/>
        </div>

        <div className="py-2 px-2 h-10 w-10 my-3 mr-4 rounded-full   hover:bg-zinc-300">
          <FaRegHeart className="w-[23px] h-[23px]"/>
        </div>

        <div className=" bg-zinc-800  py-0.5 px-0.5 h-9 w-9 my-3 rounded-full text-white hidden lg:block">
          <img
            src="https://static.independent.co.uk/2022/09/01/09/Sad%20Autumn%20Girl.jpg"
            alt=""
            className="rounded-full w-[35px] h-[35px]"
            
          />
        </div>
      </div>
    </div>
  )
}
