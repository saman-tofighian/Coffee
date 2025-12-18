'use client';

import Image from 'next/image';
import { useState } from 'react';
import { CiCoffeeBean } from 'react-icons/ci';
import { FiPhone } from 'react-icons/fi';

export default function LoginPage() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const submitHandler = () => {
    if (!/^09\d{9}$/.test(phone)) {
      setError('شماره موبایل معتبر نیست');
      return;
    }

    setError('');
    console.log('SEND OTP TO:', phone);
    //  otp
  };

  return (
    <main className='relative bg-[#FFF8F5] min-h-screen overflow-hidden'>
      <header className='px-[12%] pt-6'>
        <nav className='items-center grid grid-cols-12'>
          <div className='hidden lg:flex items-center gap-3 col-span-6'>
            <span className='flex justify-center items-center bg-[#F2E5DA] rounded-full w-[45px] h-[45px]'>
              <CiCoffeeBean size={22} color='#9E624C' />
            </span>

            <div className='leading-tight'>
              <p className='font-bold text-[#9E624C] text-[22px]'>۰۲۱-</p>
              <p className='font-medium text-[18px]'>123232434</p>
            </div>
          </div>

          <div className='flex justify-center lg:justify-end col-span-12 lg:col-span-6'>
            <Image src='/img/Logo.png' alt='logo' width={147} height={51} />
          </div>
        </nav>
      </header>

      <section className='flex flex-col items-center mt-24 text-center'>
        <div className='flex justify-center items-center bg-[#F2E5DA] rounded-full w-[98px] h-[98px]'>
          <CiCoffeeBean size={36} color='#9E624C' />
        </div>

        <h1 className='mt-6 font-semibold text-[30px]'>ثبت نام / ورود</h1>

        <p className='mt-3 text-[#5C5C5C] text-[16px]'>
          برای ورود یا ثبت نام شماره تماس خود را وارد کنید
        </p>

        <div className='mt-8 w-[351px] text-right'>
          <label className='block mb-2 font-medium text-[15px]'>
            شماره تماس
          </label>

          <div className='relative'>
            <FiPhone
              className='top-1/2 right-4 absolute text-[#9E624C] -translate-y-1/2'
              size={18}
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder='09xxxxxxxxx'
              className='pr-11 pl-4 border border-[#9E624C] rounded-[10px] outline-none focus:ring-[#9E624C] focus:ring-1 w-full h-[55px] text-[15px]'
            />
          </div>

          {error && <p className='mt-2 text-red-500 text-sm'>{error}</p>}
        </div>

        <button
          className='bg-[#9E624C] mt-6 px-32 py-3 border rounded-[10px] text-white cursor-pointer border[#9E624C]'
          onClick={submitHandler}
        >
          ثبت نام / ورود
        </button>
      </section>

      <div className='bottom-0 left-0 absolute w-full'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          {' '}
          <path
            fill='#9e624c'
            fill-opacity='1'
            d='M0,224L48,234.7C96,245,192,267,288,266.7C384,267,480,245,576,213.3C672,181,768,139,864,112C960,85,1056,75,1152,101.3C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>{' '}
        </svg>
      </div>
    </main>
  );
}
