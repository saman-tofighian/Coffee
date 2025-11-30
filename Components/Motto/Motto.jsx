import Image from 'next/image';
import Link from 'next/link';
import { GoArrowLeft } from 'react-icons/go';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Motto() {
  return (
    <section className='relative mt-12 px-[6%] w-full'>
      <Image
        src='/img/leaf.png'
        alt='leaf'
        width={180}
        height={180}
        className='hidden md:block top-0 left-0 absolute opacity-50 pointer-events-none select-none'
      />

      <div className='md:hidden'>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
        >
          <SwiperSlide>
            <MobileCard />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='hidden gap-x-6 md:gap-y-10 lg:gap-y-0 md:grid grid-cols-12 w-full'>
        <figure className='col-span-12 lg:col-span-8'>
          <div className='rounded-[20px] w-full h-[420px] lg:h-[441px] overflow-hidden'>
            <Image
              src='/img/Motto1.png'
              alt='Motto Image'
              width={1000}
              height={441}
              className='w-full h-full object-center'
            />
          </div>
        </figure>
        <RightCard />
      </div>
    </section>
  );
}

function MobileCard() {
  return (
    <div className='bg-[#28221E] p-6 rounded-[20px] w-full'>
      <Image
        src='/img/leaf.png'
        alt='leaf'
        width={70}
        height={70}
        className='top-2 right-4 absolute'
      />

      <span
        id='fontMadi'
        className='font-light text-[#F2E5DA] text-sm text-center tracking-wide'
      >
        Erick Coffee
      </span>

      <h1 className='mt-3 font-bold text-white text-3xl text-center leading-[40px]'>
        اریک کافه
      </h1>

      <p className='mt-3 text-[#F2E5DA] text-[16px] text-center leading-[28px]'>
        کامل ترین تجهیزات کافه و رستوران در ایران
      </p>

      <div className='flex justify-center mt-6'>
        <Link
          href='/'
          className='flex items-center gap-x-3 bg-[#FFFFFF33] hover:bg-[#ffffff4b] backdrop-blur-sm px-6 py-2 rounded-[100px] text-[15px] text-white duration-300'
        >
          <GoArrowLeft size='1.2rem' />
          مشاهده محصولات
        </Link>
      </div>

      <div className='mt-6 rounded-[16px] overflow-hidden'>
        <Image
          src='/img/Motto1.png'
          alt='Motto Image'
          width={1000}
          height={400}
          className='w-full h-48 object-cover'
        />
      </div>
    </div>
  );
}

function RightCard() {
  return (
    <div className='relative flex flex-col justify-center col-span-12 lg:col-span-4 bg-[#28221eed] p-10 rounded-[20px] text-center lg:text-right'>
      <Image
        src='/img/leaf.png'
        alt='leaf'
        width={90}
        height={90}
        className='top-4 right-4 absolute'
      />

      <span
        id='fontMadi'
        className='font-light text-[#F2E5DA] text-sm tracking-wide'
      >
        Erick Coffee
      </span>

      <h1 className='mt-3 font-bold text-white text-4xl leading-[48px]'>
        اریک کافه
      </h1>

      <p className='mt-4 text-[#F2E5DA] text-[17px] leading-[30px]'>
        کامل ترین تجهیزات کافه و رستوران در ایران
      </p>

      <div className='flex justify-center lg:justify-end mt-8 w-full'>
        <Link
          href='/'
          className='flex justify-center items-center gap-x-3.5 bg-[#FFFFFF33] hover:bg-[#ffffff4b] backdrop-blur-sm px-6 py-2 rounded-[100px] text-[16px] text-white duration-300'
        >
          <GoArrowLeft size='1.3rem' />
          مشاهده محصولات
        </Link>
      </div>
    </div>
  );
}
