import React from 'react'
import {Header,Footer,Calculator} from '../../components'

const Home = () => {
  return (
    <>
    <Header/>
      <div className="bg-dark">
        <p>Home</p>
      </div>
      <Calculator/>
    <Footer/>
    </>
  )
}

export default Home