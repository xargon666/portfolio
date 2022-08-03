import React from 'react'
import {Header,Footer,Calculator} from '../../components'
import './Home.css'

export const Home = () => {
  return (
    <>
      <div className="bg-image">
        <img id="dev-for-hire"></img>
        <Header/>
        <p>Home</p>
        <Footer/>
      </div>
    </>
  )
}
