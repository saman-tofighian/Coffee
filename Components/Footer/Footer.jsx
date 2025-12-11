import Image from 'next/image';
import Link from 'next/link';
import {
  FaInstagram,
  FaLinkedinIn,
  FaRegCopyright,
  FaTelegramPlane,
} from 'react-icons/fa';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import { GoDotFill } from 'react-icons/go';

export default function Footer() {
  return (
    <footer className='bg-[#28221E] mt-32 pt-16 w-full text-white'>
      <section className='px-[6%] w-full text-center'>
        <h5 className='font-extrabold text-[28px]'>اریک کافه</h5>
        <p className='mx-auto mt-3 max-w-[550px] font-semibold text-[16px] leading-8'>
          لورم ایپسوم متن ساختگی برای طراحان میباشد که با استفاده از آن متن تستی
          مینویسند
        </p>
      </section>

      <section className='flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10 px-[6%] text-[15px]'>
        <span className='flex items-center gap-x-2'>
          دسته بندی کیک یک
          <GoDotFill />
        </span>
        <span className='flex items-center gap-x-2'>
          دسته بندی کیک دو
          <GoDotFill />
        </span>
        <span className='flex items-center gap-x-2'>
          دسته بندی کیک سه
          <GoDotFill />
        </span>
        <span className='flex items-center gap-x-2'>
          دسته بندی کیک چهار
          <GoDotFill />
        </span>
        <span className='flex items-center gap-x-2'>
          دسته بندی کیک پنج
          <GoDotFill />
        </span>
      </section>

      <div className='flex justify-center mt-14 w-full'>
        <span className='border-white/20 border-t w-4/6'></span>
      </div>

      <section className='flex lg:flex-row flex-col-reverse justify-around items-center gap-y-10 mt-10 px-[6%] w-full'>
        <section className='flex justify-center items-center gap-10'>
          <Image
            src='/img/zarinpal.png'
            alt='zarinpal'
            width={92}
            height={99}
          />
          <Image src='/img/enamad.png' alt='enamad' width={92} height={99} />
        </section>

        <section className='flex flex-col justify-center items-center gap-6 text-[15px]'>
          <div className='flex items-center gap-2'>
            <span className='text-[20px]'>
              <span className='font-extrabold text-[#9E624C]'>۰۲۱-</span>
              ۱۲۳۴۵۶۷۸
            </span>
            <FiPhone className='text-[18px]' />
          </div>

          <div className='flex items-center gap-2'>
            <span className='text-[16px]'>
              تهران، خیابان ولیعصر، کوچه بلاک ۱۳
            </span>
            <FiMapPin className='text-[18px]' />
          </div>
        </section>
      </section>

      <div className='flex justify-between items-center bg-[#1A1613] mt-8 px-[6%] py-3 w-full'>
        <section className='flex justify-center items-center gap-x-5 mt-2 text-[20px]'>
          <Link
            href='https://www.linkedin.com/in/saman-tofighian'
            target='_blank'
          >
            <FaInstagram className='hover:opacity-100 cursor-pointer' />
          </Link>
          <Link
            href='https://www.linkedin.com/in/saman-tofighian'
            target='_blank'
          >
            <FaTelegramPlane className='hover:opacity-100 cursor-pointer' />
          </Link>
          <Link
            href='https://www.linkedin.com/in/saman-tofighian'
            target='_blank'
          >
            <FaLinkedinIn className='hover:opacity-100 cursor-pointer' />
          </Link>
        </section>
        <p className='flex items-center gap-x-2 text-[12px] md:text-[15px]'>
          تمام حقوق این وب سایت متعلق به سامان توفیقیان میباشد
          <FaRegCopyright className='mt-1' />
        </p>
      </div>
    </footer>
  );
}
