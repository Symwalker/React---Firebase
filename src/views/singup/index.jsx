import React, { useState } from 'react'
import bg1 from "../../assets/bg1.png"
import { useNavigate } from 'react-router-dom'
import { register } from '../../config/firebase'
import { Toaster } from 'react-hot-toast'
const Signup = () => {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const [password, setPassword] = useState()
  const handleSubmit = () => {
    register({fullName, email, age, password})
  }
  return (
    <div className='relative'>
      <div className='absolute h-screen w-screen'>
        <img src={bg1} className='h-full w-full' />
      </div>
      <div className='relative top-[200px] h-[50vh] max-w-[1000px] mx-auto '>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
        <div className='flex gap-3 h-[100%]'>
          <div className='flex basis-1/2 flex-col justify-between  '>
            <div>
              <h1 className='text-[60px] font-bold leading-[65px] text-white'>Create <br />New Account</h1>
              <p className='text-[27px] font-medium text-white mt-5'>Already Register? <span className='underline cursor-pointer under pt-2' onClick={() => navigate('/')}>Login</span></p>
            </div>
            <div className='mt-3 flex flex-col gap-10'>
              <div className='border-2 w-1/6 border-white rounded-full' />

              <p className='text-[20px]  text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper mauris in magna venenatis suscipit.</p>
            </div>
            <div>
              <button className='bg-[#EF6B48] text-[22px] rounded-full text-white px-8 py-2'>Learn More</button>
            </div>
          </div>
          <div className='basis-1/2  h-full bg-[#ffffff47] rounded-[36px]'>
            <div className='flex flex-col pb-7 gap-2 justify-between h-full w-[80%] mx-auto'>
              <h2 className='text-[45px] text-white font-bold text-center '>Login</h2>
              <div className='flex flex-col gap-1'>
                <label className='text-white px-4 font-bold'>NAME</label>
                <input onChange={(e) => setFullName(e.target.value)} type="text" on className='px-5 bg-[#ffffff63] py-2 outline-none text-white placeholder:text-white text-[20px] rounded-full' placeholder='Enter Your Name' />
              </div>

              <div className='flex flex-col gap-1'>
                <label className='text-white px-4 font-bold'>EMAIL</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" className='px-5 bg-[#ffffff63] py-2 outline-none text-white placeholder:text-white text-[20px] rounded-full' placeholder='Enter Your Email' />
              </div>

              <div className='flex flex-col gap-1'>
                <label className='text-white px-4 font-bold'>AGE</label>
                <input onChange={(e) => setAge(e.target.value)} type="text" className='px-5 bg-[#ffffff63] py-2 outline-none text-white placeholder:text-white text-[20px] rounded-full' placeholder='Enter Your Age' />
              </div>

              <div className='flex flex-col gap-1'>
                <label className='text-white px-4 font-bold'>PASSWORD</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className='px-5 bg-[#ffffff63] outline-none text-white py-2 placeholder:text-white text-[20px] rounded-full' placeholder='Enter Your Password ' />
              </div>
              <button onClick={handleSubmit} className='bg-[#EF6B48] mt-2 w-1/3 mx-auto text-[18px] rounded-full text-white  py-2'>Sign Up</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup