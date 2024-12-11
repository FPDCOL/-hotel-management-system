import React from 'react';
import Lottie from 'lottie-react';
import {Link} from 'react-router-dom';
import animationData from '../assets/animation.json'

const MainPage = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100 bg-white text-center'>

      <div style={{maxWidth:'400px'}}> 
        <Lottie animationData={animationData} loop={true}/>
        </div>
      <h2 className='mt-4'>Looks like your not signed in</h2>
      <p> Log in to see booings</p>
      <Link to='/login'><button className='btn btn-primary mt-3 px-4 py-2'>Log in</button></Link>
    </div>
  )
}

export default MainPage
