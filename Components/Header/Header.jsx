import Image from 'next/image';
import Link from 'next/link';
import { BsBasket } from 'react-icons/bs';
import { CiCoffeeBean } from 'react-icons/ci';

export default function Header() {
  return (
    <header className='px-[6%] py-6 w-full'>
      <section className='grid grid-cols-12 w-full'>
        <div className='flex justify-start items-center gap-x-5 col-span-3'>
          <span className='flex justify-center items-center bg-[#9E624C] rounded-full w-[45px] h-[45px] cursor-pointer'>
            <BsBasket size='1.3rem' color='#fff' />
          </span>
          <Link
            href='/'
            className='bg-transparent hover:bg-black px-5 py-2 border border-[#000] rounded-[100px] font-medium text-[16px] text-black hover:text-white duration-500 ease-in-out'
          >
            ورود / ثبت نام
          </Link>
        </div>
        <figure className='flex justify-center col-span-6'>
          <Image src='/img/Logo.png' width={147} height={51} />
        </figure>
        <div className='flex justify-end items-center gap-x-3 col-span-3'>
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
      </section>
    </header>
  );
}
