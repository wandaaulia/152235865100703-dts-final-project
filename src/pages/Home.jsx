import React from 'react'
import AppBar from '../component/AppBar'
import ContainerList from '../component/ContainerList'
import Footer from '../component/Footer'
import Header from '../component/Header'

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen' > 
      <div className='flex-1 mb-4'>
        <AppBar />
        <Header />
        <ContainerList title="Chicken" query="Chicken"/>
         <ContainerList title="Seafood" query="Seafood"/>
     </div>
         <Footer />
        </div>
  )
}

export default Home