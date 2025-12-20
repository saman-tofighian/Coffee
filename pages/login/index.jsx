'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { CiCoffeeBean } from 'react-icons/ci';
import { FiPhone } from 'react-icons/fi';

export default function LoginPage() {
  const [step, setStep] = useState('phone');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const otpRefs = useRef([]);

  const submitPhoneHandler = () => {
    if (!/^09\d{9}$/.test(phone)) {
      setError('شماره موبایل معتبر نیست');
      return;
    }
    setError('');
    setStep('otp');
  };

  const handleOtpChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 4) {
      otpRefs.current[index + 1].focus();
    }
  };

  const submitOtpHandler = () => {
    const code = otp.join('');
    if (code.length < 5) {
      alert('کد را کامل وارد کنید');
      return;
    }
    console.log('VERIFY OTP:', code);
  };

  const stepVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <main className='relative bg-[#FFF8F5] min-h-screen overflow-hidden'>
      <header className='px-[12%] pt-6'>
        <nav className='items-center grid grid-cols-12'>
          <div className='hidden lg:flex items-center gap-3 col-span-6'>
            <span className='flex justify-center items-center bg-[#F2E5DA] rounded-full w-[45px] h-[45px]'>
              <CiCoffeeBean size={22} color='#9E624C' />
            </span>
            <div>
              <p className='font-bold text-[#9E624C] text-[22px]'>۰۲۱-</p>
              <p className='font-medium text-[18px]'>123232434</p>
            </div>
          </div>

          <div className='flex justify-center lg:justify-end col-span-12 lg:col-span-6'>
            <Image src='/img/Logo.png' alt='logo' width={147} height={51} />
          </div>
        </nav>
      </header>

      <section className='z-10 relative flex flex-col items-center mt-24 text-center'>
        <div className='flex justify-center items-center bg-[#F2E5DA] rounded-full w-[98px] h-[98px]'>
          <CiCoffeeBean size={36} color='#9E624C' />
        </div>

        <h1 className='mt-6 font-semibold text-[30px]'>ثبت نام / ورود</h1>

        <AnimatePresence mode='wait'>
          {step === 'phone' && (
            <motion.div
              key='phone'
              variants={stepVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className='flex flex-col items-center'
            >
              <p className='mt-3 text-[#5C5C5C] text-[16px]'>
                برای ورود یا ثبت نام شماره تماس خود را وارد کنید
              </p>

              <div className='mt-8 w-[351px] text-right'>
                <label className='block mb-2 font-medium text-[15px]'>
                  شماره تماس
                </label>

                <div className='relative'>
                  <FiPhone className='top-1/2 right-4 absolute text-[#9E624C] -translate-y-1/2' />
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='09xxxxxxxxx'
                    className='pr-11 pl-4 border border-[#9E624C] rounded-[10px] outline-none w-full h-[55px]'
                  />
                </div>

                {error && <p className='mt-2 text-red-500 text-sm'>{error}</p>}
              </div>

              <button
                onClick={submitPhoneHandler}
                className='bg-[#9E624C] mt-6 px-32 py-3 rounded-[10px] text-white cursor-pointer'
              >
                ثبت نام / ورود
              </button>
            </motion.div>
          )}

          {step === 'otp' && (
            <motion.div
              key='otp'
              variants={stepVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className='flex flex-col items-center'
            >
              <p className='mt-3 text-[#5C5C5C] text-[16px]'>
                کد ارسال شده به شماره {phone} را وارد کنید
              </p>

              <div className='flex gap-3 mt-8'>
                {otp.map((value, index) => (
                  <input
                    key={index}
                    ref={(el) => (otpRefs.current[index] = el)}
                    value={value}
                    maxLength={1}
                    onChange={(e) => handleOtpChange(e.target.value, index)}
                    className='border border-[#9E624C] rounded-[10px] outline-none w-[55px] h-[55px] text-[20px] text-center'
                  />
                ))}
              </div>

              <button
                onClick={submitOtpHandler}
                className='bg-[#9E624C] mt-8 px-32 py-3 rounded-[10px] text-white cursor-pointer'
              >
                تأیید و ورود
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <div className='bottom-0 left-0 absolute w-full'>
        <svg viewBox='0 0 1440 320' preserveAspectRatio='none'>
          <path
            fill='#EAD6CB'
            d='M0,192 C240,128 480,256 720,240 960,224 1200,128 1440,160 L1440,320 L0,320 Z'
          />
          <path
            fill='#9E624C'
            d='M0,256 C240,288 480,224 720,224 960,224 1200,288 1440,256 L1440,320 L0,320 Z'
          />
        </svg>
      </div>
    </main>
  );
}
