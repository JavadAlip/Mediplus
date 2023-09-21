import React, { useState } from 'react';
import { Link } from 'react-router-dom';  

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className='px-5 lg:px-0'>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
        <h3 className='text-primaryColor text-[22px] leading-7 font-bold mb-10'>Please <span
          className='text-greenColor'> Login!</span></h3>
        <form className='py-4 md:py-0'>
          <div className='mb-5'>
            <input
              type='email'
              placeholder='Enter Your Email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className='w-full px-4 py-3 border-b border-solid border-primaryColor focus:outline-none
              focus:border-b-textColor text-[16px] leading-7 text-textColor placeholder:text-textColor rounded-md cursor-pointer'
            />
          </div>
          <div className='mb-5'>
            <input
              type='password'
              placeholder='Enter Your Password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              className='w-full px-4 py-3 border-b border-solid border-primaryColor focus:outline-none
              focus:border-b-textColor text-[16px] leading-7 text-textColor placeholder:text-textColor rounded-md cursor-pointer'
            />
          </div>
          <div className='mt-7'>
            <button type='submit' className='btn mt-2 w-full bg-primaryColor text-white text-[18px] px-4 py-3
            leading-[30px] rounded-lg'>Login</button>
          </div>
          <p className='mt-5 text-textColor text-center'>Don't have an account? <Link to='/Signup' className="text-primaryColor font-medium ml-1">Signup</Link></p>          
        </form>
      </div>
    </section>
  );
};

export default Login;
