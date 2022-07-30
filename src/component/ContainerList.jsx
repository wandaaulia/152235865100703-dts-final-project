import React, { useState } from 'react'
import { useGetCategoryFoodQuery } from '../services/Apis';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImSpoonKnife } from "react-icons/im";
import { BiTimeFive } from "react-icons/bi";
import { BsFillBookmarkFill , BsHeartFill} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import ComponentItem from './ComponentItem';
import ResponsiveItem from './ResponsiveItem';

const ContainerList = (props) => {

    const [save, setSave] = useState([]);
    const [recipe, setRecipe] = useState([]);
    
    const navigate = useNavigate();
   

     const { data, error, isLoading } = useGetCategoryFoodQuery(props.query);

    let arrayData;

    const trunc = (words) => words.split(/[.?!]/)[0].split(' ').slice(0, 6).join(' ');

    if(data) {
        arrayData = data.meals.slice(1, 9);
        console.log(arrayData);
        
    }

    const DetailFood = (id) => {
        navigate(`/detailfood/${id}`)
    }


  return (
    <div className='w-11/12 mx-auto my-6 '>
    <h1 className='font-semibold text-xl pb-6 xl:text-2xl text-red-500 pl-4 2xl:text-3xl'> {props.title} </h1>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? 
      <>  
      <div className='md:hidden'>  
      <Swiper
  id="main" slidesPerView={1.3} watchSlidesProgress={true} className="flex w-full flex-row flex-wrap">
      {
      arrayData.map((item) => 
        (
          <div key={item.idMeal}> 
         <SwiperSlide key={item.idMeal} className='item-categories justify-center mx-2 flex w-100 h-7 flex-col'> 
          <ComponentItem item={item}/>
       </SwiperSlide>
        </div>
      )) 
      }
      </Swiper> 
      </div>
<div className='hidden md:flex w-11/12 md:w-full'>
        <Swiper breakpoints={{
    1024: {
      slidesPerView: 4,
    },
    768: {

      slidesPerView: 3,
    },
        1280: {

      slidesPerView: 4,
    },
       1380: {

      slidesPerView: 4,
    },
  }}
  id="main" navigation={true}  modules={[Navigation]} className="mySwiper"> 
   {
      arrayData.map((item) => 
        (
          <div key={item.idMeal}> 
         <SwiperSlide key={item.idMeal} className='item-categories justify-center mr-3 lg:mr-3 xl:mr-4 flex  w-full h-7  flex-col'> 
          <ResponsiveItem item={item}/>
       </SwiperSlide>
        </div>
      )) 
      }
        </Swiper>
      </div>  
      </>
      : 
      
      null
      }
    </div>
  )
}

export default ContainerList