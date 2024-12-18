import React from 'react'
import Lottie from 'lottie-react';
import {Link} from 'react-router-dom';
import animationData from '../assets/error.json'


const ErrorPage = () => {
  return (
    //<div style={{boxShadow:'400px 400px grey'}}>
    <div  className='d-flex flex-column justify-content-center align-items-center vh-100 bg-white text-center'>

      <div style={{maxWidth:'400px',}} > <Lottie animationData={animationData} loop={true}/></div>
      <h2 className='mt-4 shadow p-3 mb-5 bg-white rounded'>Oops! 404 Page Not Found!</h2>
      <p>The page you are looking for either doesnt exist or an error has occured</p>
      <Link to='/'><button className='btn btn-primary mt-3 px-4 py-2'>Go back</button></Link>
    </div>
    //</div>
  )
}

export default ErrorPage
