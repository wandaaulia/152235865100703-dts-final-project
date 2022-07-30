import React, {useState} from 'react'
import AppBar from '../component/AppBar'
import { Navigate, useParams } from "react-router-dom";
import { useGetRecipeDetailQuery } from '../services/Apis';
import { ImSpoonKnife } from "react-icons/im";
import { BsFillBarChartFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import ContainerList from '../component/ContainerList';
import Footer from '../component/Footer';

const DetailFood = () => {
    const { id } = useParams();
    const [indexStart, setIndexStart] = useState(0);
    const [indexEnd, setIndexEnd] = useState(80);

    let dataArray;
    let desc;
     
    const { data, error, isLoading } = useGetRecipeDetailQuery(id);

    if(data) {
      dataArray = data.meals;
    }

  
  return (
    <>
      <AppBar />
      <div> 
            {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? 
      
        
        dataArray.map((item) => {

          desc = item.strInstructions.split("STEP");
 console.log('ini dec');
          console.log(desc);

          return (

  <div key={item.idMeal}>
            <div> 
            <div className=" w-100 flex h-40 md:h-52 md:w-2/4 mt-8 lg:h-64 justify-center mx-auto"> 
              <img src={item.strMealThumb} className="w-full h-100 object-cover"/>
            </div> 
            
              <div className='w-11/12 mx-auto md:w-3/4 h-100 lg:w-3/5 xl:w-3/4'>
              <h2 className='text-xl text-red-500 text-center font-medium md:text-2xl md:w-4/5 md:mx-auto lg:text-3xl 2xl:text-5xl 2xl:leading-snug'> {dataArray.strMeal} </h2>
              <div className='flex flex-row mt-8 md:w-4/5 md:mx-auto xl:w-2/4 items-center justify-center'> 

                <div className='xl:mx-3 border border-slate-300 md:py-3 py-2  rounded-md mx-1 md:mx-2 flex-wrap  text-center w-2/6 flex flex-col justify-center '>
                 <p className='mb-2 md:mb-3 flex items-center justify-center text-sm md:text-base '>  Category </p>
                <div className='mb-2 flex justify-center text-lg md:text-2xl'> <ImSpoonKnife />  </div>  
                 <p className='text-sm md:text-base'> {item.strCategory} </p>
                  </div> 

                  <div className=' xl:mx-3 border border-slate-300  md:py-3  py-2 rounded-md mx-1   md:mx-2 flex-wrap  text-center w-2/6 flex flex-col justify-center '>
                     <p className='mb-2 md:mb-3 flex items-center justify-center text-sm md:text-base '>  Country </p>
                <div className=' mb-2 flex justify-center text-lg md:text-2xl'> <BiTimeFive />  </div>  
                 <p className='text-sm md:text-base'> {item.strArea} </p>
                  </div> 
               
                  
              </div>
              </div>  
            </div>
            

            <div className="pt-10 w-11/12 md:mx-auto mx-2 pb-8 md:pb-4 xl:pt-24 xl:pb-20"> 
            
           <h3 className='text-xl text-red-500 font-medium md:w-11/12 md:mx-3 mx-3 xl:text-3xl 2xl:text-4xl'> Instructions   </h3> 
          
              <div className='mx-3 text-justify'> 
                {desc.map((d) => 
                <p className='my-3 text-justify'>  {d} </p>
                )}
               </div>
          </div>

    <ContainerList title={item.strCategory} query={item.strCategory}/>

        </div>
          )  } )
      
 : 
      
      null
      }

      </div>
       <Footer />
    </>
  )
}

export default DetailFood