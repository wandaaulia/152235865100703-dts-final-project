import React, {useState} from 'react'
import {  AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

const AppBar = () => {
    const [user] = useAuthState(auth);

   const navigate = useNavigate();



   const navigateTo = (link) => {

      navigate(link);
    }

   const [navbar, setNavbar] = useState(false);

    const navbarClick = () => {
  
    setNavbar(!navbar);
  };

  const Logout = async ()  => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }

  return (

    <> 
    <div className='flex flex-row justify-between width-90 py-5'>
     <div className='text-xl md:hidden' onClick={navbarClick}> <AiOutlineMenu /> </div> 
      <div className='brand text-center bg-red-100'> WeRecipe </div>
    <div className='list-appbar flex flex-row'> 
           <div className='hidden md:flex mx-5 cursor-pointer' onClick={() => navigateTo('/')}>  Home </div> 
            <div className='hidden md:flex mx-5 cursor-pointer'>  Favorite </div> 
          <div className='text-xl'> <AiOutlineSearch /> </div> 
           { user ? 
                       <div className='hidden md:flex mx-5 cursor-pointer' onClick={Logout}>  Logout </div>  :
            <div className='hidden md:flex mx-5 cursor-pointer' onClick={() => navigateTo('/login')}>  Login </div> 
           }
     </div>
    </div>
       { navbar ? 
    
      <ul className='md:hidden menubar h-40 z-50 top-14 absolute bg-white w-full flex flex-col justify-center items-center'> 
      <li className='mb-3 cursor-pointer' onClick={() => navigateTo('/')}>  Home </li>
<li className='mb-3 cursor-pointer' onClick={() => navigateTo('/login')}>  Favorite </li>
{ user ? 
<li className='mb-3 cursor-pointer' onClick={Logout}>  Logout </li> :
  <li className='mb-3 cursor-pointer' onClick={() => navigateTo('/login')}>  Login </li> 
           }
      </ul>

      : <div className='menubar-close'> </div> }

     </>
  )
}

export default AppBar