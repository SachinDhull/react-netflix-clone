import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
            navigate('/react-netflix-clone')
    }
  return (
    <>
                 <div className='w-full h-screen'>
                <img className='hidden sm:block absolute w-full h-full object-cover'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/42f6dd08-d478-46e4-a4a8-e3a93aa7e085/IN-en-20230417-popsignuptwoweeks-perspective_alpha_website_small.jpg'
                    alt='/' />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>

                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'>Log In</h1>
                            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                                <input  className='p-3 my-2 bg-gray-700 rounded' type='text' placeholder='Email' />

                                <input className='p-3 my-2 bg-gray-700 rounded' type='text'
                                    placeholder='Password'
                                     />

                                    <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                                    <div className='cursor-pointer flex justify-between items-center text-sm text-gray-600'>
                                        <p><input className='mr-2' type='checkbox'/>Remember Me</p>
                                        <p>Need Help?</p>
                                    </div>
                                    <p className='py-8 '><span className='text-gray-600'>New to Netflix?</span>
                                    {' '}
                                    <Link to='/signup'>
                                    Sign Up
                                    </Link>

                                    </p>
                            </form>

                        </div>

                    </div>
                </div>
            </div> 
    </>
  )
}

export default Login