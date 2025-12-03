import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { BiSolidCoffeeTogo } from 'react-icons/bi';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { GiCoffeeBeans, GiCoffeePot } from 'react-icons/gi';
import { PiCoffee, PiCoffeeBeanBold } from 'react-icons/pi';
import { RiCake3Fill } from 'react-icons/ri';
import { SiBuymeacoffee, SiCoffeescript } from 'react-icons/si';
import { TbBlenderFilled } from 'react-icons/tb';

export default function Categories() {
  const scrollRef = useRef(null);

  const CategoriesItem = [
    { id: 1, icon: <PiCoffeeBeanBold size='1.8rem' />, title: 'قهوه ساز ها' },
    { id: 2, icon: <TbBlenderFilled size='1.8rem' />, title: 'آسیاب قهوه' },
    { id: 3, icon: <GiCoffeePot size='1.8rem' />, title: 'ابزار باریستا' },
    { id: 4, icon: <PiCoffee size='1.8rem' />, title: 'دم آوری قهوه' },
    { id: 5, icon: <SiBuymeacoffee size='1.8rem' />, title: 'تجهیزات بار سرد' },
    { id: 6, icon: <GiCoffeeBeans size='1.8rem' />, title: 'کرپ ساز صنعتی' },
    { id: 7, icon: <BiSolidCoffeeTogo size='1.8rem' />, title: 'بویلر آب جوش' },
    { id: 8, icon: <SiCoffeescript size='1.8rem' />, title: 'سماور صنعتی' },
    { id: 9, icon: <RiCake3Fill size='1.8rem' />, title: 'شو کیک' },
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -250, behavior: 'smooth' });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 250, behavior: 'smooth' });
  };

  return (
    <section className='mt-20 px-[6%] w-full'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='flex justify-center lg:justify-between items-center w-full'
      >
        <div className='hidden lg:flex gap-x-3'>
          <button
            onClick={scrollLeft}
            className='bg-[#F2E5DA] px-3.5 py-3.5 rounded-[14px] cursor-pointer'
          >
            <FaAngleLeft />
          </button>

          <button
            onClick={scrollRight}
            className='bg-[#F2E5DA] px-3.5 py-3.5 rounded-[14px] cursor-pointer'
          >
            <FaAngleRight />
          </button>
        </div>

        <div className='flex items-center gap-x-2'>
          <div className='flex flex-col text-start'>
            <h2 className='font-medium text-[#28221E] text-3xl text-end'>
              دسته‌بندی محصولات
            </h2>
            <p className='mt-3 font-medium text-[#28221E] text-[16px]'>
              از میان بهترین‌ها، بهترین هارا برای شما فراهم کرده‌ایم
            </p>
          </div>

          <figure>
            <Image src='/img/coffee.png' alt='coffee' width={62} height={62} />
          </figure>
        </div>
      </motion.div>

      <div
        ref={scrollRef}
        className='flex gap-6 mt-10 py-4 overflow-x-scroll lg:overflow-x-hidden overflow-y-hidden scroll-smooth scrollbar-hide'
      >
        {CategoriesItem.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileTap={{ scale: 0.96 }}
            className='flex flex-col items-center min-w-[140px] text-center cursor-pointer'
          >
            <motion.span
              className='flex justify-center items-center bg-white px-5 py-8 border border-[#F2E5DA] rounded-[10px]'
              whileHover={{ rotate: 2 }}
            >
              {item.icon}
            </motion.span>
            <h6 className='mt-4 font-medium text-[16px]'>{item.title}</h6>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
