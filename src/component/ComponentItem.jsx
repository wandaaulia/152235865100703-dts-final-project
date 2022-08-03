import React from 'react'
import { useGetRecipeDetailQuery } from '../services/Apis';
import { useNavigate } from "react-router-dom";
import ButtonFav from './ButtonFav';
import { GiBowlOfRice } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";

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
   <div className=' w-11/12 flex h-40 justify-center mx-auto'> 
            <img src={`${strMealThumb}`} alt="img" className='w-full h-100 rounded-3xl  object-cover' onClick={() => DetailFood(idMeal)}
            />
            </div>
            <div className='py-2 px-4 md:py-4'> 
          <h4 className='text-sm leading-snug font-semibold h-14 text-red-600 md:h-10'>{strMeal}</h4>
          <div className='flex flex-row'> 
          <div className='grow'>  
             <div className='flex flex-row items-center text-sm py-1 color-grey'> 
                <GiBowlOfRice /> 
                <div className='px-1'> 
                      { data ? category : 'food'}
                </div> 
              </div>
             <div className='flex flex-row items-center text-xs  color-grey'>  <BiWorld />
               <div className='px-1'>
                  { data ? country : 'world'}
              </div> </div>
     </div>

    <ButtonFav idMeal={idMeal} strMealThumb={strMealThumb} strMeal={strMeal}/>
          </div> 
          </div> 


        
  </>
  )
}

export default ComponentItem