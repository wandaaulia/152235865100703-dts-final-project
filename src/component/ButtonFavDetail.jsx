import React, {useState} from 'react'
import {  BsHeartFill} from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux'
import { setFav,  unSetFav } from '../features/recipeSlice';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../config/firebase';
import {  useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";


const ButtonFavDetail = (props) => {
    const [favIcon, setFavIcon] = useState(false);
     const [user] = useAuthState(auth);

    const {idMeal, strMealThumb, strMeal} = props;

    const navigate = useNavigate();

    const fav = useSelector((state) => state.recipe.itemFav); 

   const dispatch = useDispatch();

    const onFav = async () => {
      if(!user) { 
           return navigate('/login');
      }
          setFavIcon(!favIcon);   
          await dispatch(setFav({idMeal, strMealThumb, strMeal}));
            
          Swal.fire({
            title: "Saved to your favorite recipe",
            confirmButtonText: "OK",
             confirmButtonColor: 'rgb(248 113 113)',
            backdrop: false,
            color: '#ffff',
            background: 'rgba(0, 0, 0, .7)',
             timer: 1500
          });
         
    }

    const unFav =  async () => {
        setFavIcon(!favIcon);
         await dispatch(unSetFav(idMeal));
    }

    const iconFav =  fav.find(item => item.idMeal === idMeal);

  return (
    <> {
      
      user ? 
      iconFav ? 
  <div className='text-lg md:text-2xl  2xl:text-2xl mx-2 text-red-500 ' > 
     <BsHeartFill className='cursor-pointer' onClick={unFav}/>
     </div>
     :
      <div className='text-lg md:text-2xl mx-2 2xl:text-2xl text-red-500 '> 
      <AiOutlineHeart className='cursor-pointer ' onClick={onFav}/>
      </div>

      :
 <div className='text-lg  md:text-2xl mx-2 2xl:text-2xl text-red-500 '> 
      <AiOutlineHeart className='cursor-pointer ' onClick={onFav}/>
      </div>

    }


     </>
  )
}

export default ButtonFavDetail
