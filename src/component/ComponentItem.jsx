import React from 'react'
import { useGetRecipeDetailQuery } from '../services/Apis';
import { ImSpoonKnife } from "react-icons/im";
import { BiTimeFive } from "react-icons/bi";
import {  BsHeartFill} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ComponentItem = (props) => {

   const { strMealThumb, strMeal, idMeal} = props.item;

        const { data, error} = useGetRecipeDetailQuery(idMeal);

        let country, category;

        if(data) {
          data.meals.forEach((item) => {
       country = item.strArea;
           category = item.strCategory;
          })
        }

        if(error) {
          console.log('error');
        }
   
    const navigate = useNavigate();

    const DetailFood = (id) => {
        navigate(`/detailfood/${id}`)
    }

    

  return (
  <> 
   <div className='md:hidden w-100 flex h-40 justify-center mx-auto'> 
            <img src={`${strMealThumb}`} alt="img" className='w-full h-100 rounded-3xl  object-cover' onClick={() => DetailFood(idMeal)}
            />
            </div>
            <div className='p-4'> 
          <h4 className='text-sm leading-snug font-semibold h-14 text-red-600 '>{strMeal}</h4>
          <div className='pt-1 flex flex-row'> 
          <div className='grow'>  
             <div className='flex flex-row items-center text-sm py-1 color-grey'> 
                <ImSpoonKnife /> 
                <div className='px-1'> 
                      { data ? category : 'food'}
                </div> 
              </div>
             <div className='flex flex-row items-center text-xs  color-grey'>  <BiTimeFive />
               <div className='px-1'>
                  { data ? country : 'world'}
              </div> </div>
     </div>

     <div className='mt-3 text-lg text-red-500 mx-2'> 
     <BsHeartFill className='cursor-pointer'/>
     </div>
          </div> 
          </div> 


        
  </>
  )
}

export default ComponentItem