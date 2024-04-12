import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/dummy logo.png'
import image from '../../../assets/singup.jpeg'
import { SignupData } from '../../data/data'

const SignUp:React.FC = () => {
  return (
    <div className="w-full h-screen grid md:grid-cols-2 lg:grid-cols-[2fr,3fr]">
    <div className="w-full bg-slate-50 grid items-center p-8">
      <form className="w-full bg-white flex flex-col gap-4 justify-center border-2 p-8 rounded-lg">
        <div className="w-full flex gap-10 justify-start items-center">
          <div>
            <img
              src={logo}
              alt="logo"
            />
          </div>
          <span className="text-4xl font-medium ">
              <h1 className='mb-2'>Sign Up</h1>
          <div className='w-5/6 bg-blue-600 h-1 rounded-lg'></div>
          </span>
        </div>
        {Object.keys(SignupData).map((key) => (
          <div
            key={key}
            className="w-full flex flex-col gap-1">
            <label
              htmlFor={key}
              className="tracking-wider text-base  font-sans font-bold">
              {SignupData[key as keyof typeof SignupData].label}
            </label>
            <input
              type={SignupData[key as keyof typeof SignupData].type}
              id={key}
              className="p-2 rounded-lg border-2"
            />
          </div>
        ))}
        <Link to={'/'}>
          <button className="btn w-full bg-blue-600 text-white text-xl hover:bg-blue-500">
            Sign Up
          </button>
        </Link>
        <p>
         I already have an account?{' '}
          <Link to={'/'} className="text-blue-600">
            Sign In
          </Link>
        </p>
      </form>
    </div>
    <div className="w-full hidden md:grid lg:grid place-items-center ">
      <div>
        <img
          src={image}
          alt="sing image"
        />
      </div>
    </div>
  </div>
  )
}

export default SignUp