'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsBasket } from 'react-icons/bs';
import { CiCoffeeBean } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const NavLinks = [
    { id: 1, name: 'صفحه اصلی', href: '/' },
    { id: 2, name: 'لیست محصولات', href: '/product' },
    { id: 3, name: 'خدمات', href: '/' },
    { id: 4, name: 'آموزش ها', href: '/' },
    { id: 5, name: 'درباره ما', href: '/' },
    { id: 6, name: 'تماس با ما', href: '/' },
  ];

  const listParent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const listItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <header className='px-[6%] py-6 w-full'>
      <section className='hidden lg:grid grid-cols-12 w-full'>
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
          <Image src='/img/Logo.png' width={147} height={51} alt='logo' />
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

      <nav className='hidden lg:grid grid-cols-12 bg-[#28221E] mt-8 px-4 py-2.5 rounded-[100px] w-full'>
        <div className='col-span-2'>
          <Link
            href='/'
            className='flex justify-center items-center gap-x-2 bg-[#FFFFFF33] px-3 py-2 rounded-[37px] w-fit text-white hover:text-[#f79774] duration-500 cursor-pointer'
          >
            <FaInstagram size='1.3rem' />
            Erick.Cafe
          </Link>
        </div>

        <div className='flex justify-end col-span-10'>
          <ul className='flex flex-row-reverse items-center gap-x-12 px-6'>
            {NavLinks.map((item) => (
              <li key={item.id} className='text-white'>
                <Link
                  href={item.href}
                  className='hover:text-[#f79774] duration-500'
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className='lg:hidden flex justify-between items-center w-full'>
        <span className='flex justify-center items-center bg-[#9E624C] rounded-full w-[40px] h-[40px] cursor-pointer'>
          <BsBasket size='1.2rem' color='#fff' />
        </span>

        <Image src='/img/Logo.png' width={120} height={40} alt='logo' />

        <motion.button
          onClick={() => setOpenMenu(!openMenu)}
          animate={{ rotate: openMenu ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className='text-black text-3xl cursor-pointer'
        >
          {openMenu ? <HiX /> : <HiOutlineMenu />}
        </motion.button>
      </section>

      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: 'blur(6px)' }}
            animate={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }}
            exit={{
              opacity: 0,
              y: -20,
              filter: 'blur(6px)',
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className='lg:hidden bg-[#28221E] mt-4 px-6 py-6 rounded-3xl w-full text-white'
          >
            <motion.ul
              variants={listParent}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='flex flex-col items-center gap-y-6 text-lg'
            >
              {NavLinks.map((item) => (
                <motion.li key={item.id} variants={listItem}>
                  <Link
                    href={item.href}
                    className='block py-2 w-full hover:text-[#f79774] duration-300'
                    onClick={() => setOpenMenu(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
