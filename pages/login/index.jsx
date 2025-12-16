import Image from 'next/image';
import { CiCoffeeBean } from 'react-icons/ci';

export default function LoginPage() {
  return (
    <main className='bg-[#fff8f5] w-full min-h-[100vh]'>
      <section className='px-[12%] pt-5 w-full'>
        <nav className='grid grid-cols-12 w-full'>
          <div className='flex items-center gap-x-3 col-span-6'>
            <span className='flex justify-center items-center bg-[#F2E5DA] rounded-full w-[45px] h-[45px]'>
              <CiCoffeeBean size='1.3rem' color='#9E624C' />
            </span>
            <div className='flex flex-col'>
              <span className='font-extrabold text-[#9E624C] text-[22px]'>
                ۰۲۱-
              </span>
              <span className='font-medium text-[18px] text-black'>
                123232434
              </span>
            </div>
          </div>
          <figure className='flex justify-end col-span-6'>
            <Image src='/img/Logo.png' width={147} height={51} alt='logo' />
          </figure>
        </nav>
        <div className='flex flex-col items-center mt-26 w-full'>
          <span className='flex justify-center items-center bg-[#F2E5DA] rounded-full w-[98px] h-[98px]'>
            <CiCoffeeBean size='2rem' color='#9E624C' />
          </span>
          <span className='mt-6 font-medium text-[30px]'>ثبت نام / ورود</span>
          <span className='mt-4 font-normal text-[16px]'>
            ! برای ورود یا ثبت نام شماره تماس خود را وارد کنید
          </span>
          <label className='mt-8 font-medium text-[15px]'> شماره تماس</label>
          <input
            type='text'
            className='mt-4 px-4 border border-[#9E624C] rounded-[10px] w-[351px] h-[55px]'
          />
          <button className='bg-[#9E624C] mt-6 px-32 py-3 border rounded-[10px] text-white cursor-pointer border[#9E624C]'>
            ثبت نام / ورود
          </button>
        </div>
      </section>

      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#9e624c'
          fill-opacity='1'
          d='M0,224L48,234.7C96,245,192,267,288,266.7C384,267,480,245,576,213.3C672,181,768,139,864,112C960,85,1056,75,1152,101.3C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
    </main>
  );
}
