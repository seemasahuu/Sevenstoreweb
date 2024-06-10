// import React  from "react";
// import { Link} from "react-router-dom";
 

// const  Home = () => {
 
//   return (
//     <>
//       <div className="min-h-screen flex justify-center items-center ">

//          <div className="bg-black rounded-md w-[45vh] lg:h-[90vh] lg:w-[55vh]">
//           <div className="h-96 pr-28 text-white rounded-t-md">
//             <img className="h-28 w-52 my-4 mx-24 " src="https://i.pinimg.com/originals/8b/35/72/8b357283fd26e3bb18cc1983c0ebdb9c.gif" alt="" />
//             {/* <h1 className="py-16 pb-3 font-bold text-xl "> WELCOME TO MY FORM </h1> */}
          

//             <img className="px-6 mx-10" src="https://cdni.iconscout.com/illustration/premium/thumb/student-using-phone-while-reading-book-4619258-3821954.png?f=webp" alt="" />
//           </div>
//           <div className="h-64 flex flex-col justify-center items-center gap-8">
//           <Link to="/Signup">
//               <button className='bg-white h-12 w-80 text-lg rounded-2xl hover:bg-sky-300'>Sign Up</button>
//             </Link>
//             <Link to="/Login">
//               <button className='bg-white h-12 w-80 text-lg rounded-2xl mb-6 hover:bg-sky-300'>Log In</button>
//             </Link>
//           </div>
//          </div>
//       </div>
//     </>
//   );
// };

// export default Home;

import React from "react";
import { Header } from "./components/Header";

const Home = () => {
 

 
  return (
    <div className="min-h-screen flex flex-col">
     <Header/>
      <div className="h-screen">
        <div className=""></div>
      </div>
    </div>
  );
};

export default Home;
