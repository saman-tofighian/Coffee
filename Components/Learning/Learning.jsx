import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeftLong } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Learning() {
  const items = [
    {
      id: 1,
      img: '/img/l1.png',
      title:
        'لورم ایپسوم متن ساختگی برای طراحان میباشد که با استفاده از آن متن تستی مینویسند!',
      date: '۱۱ اردیبهشت ۱۴۰۳',
    },
    {
      id: 2,
      img: '/img/l2.png',
      title:
        'لورم ایپسوم متن ساختگی برای طراحان میباشد که با استفاده از آن متن تستی مینویسند!',
      date: '۱۲ اردیبهشت ۱۴۰۳',
    },
    {
      id: 3,
      img: '/img/l3.png',
      title:
        'لورم ایپسوم متن ساختگی برای طراحان میباشد که با استفاده از آن متن تستی مینویسند!',
      date: '۱۳ اردیبهشت ۱۴۰۳',
    },
  ];

  return (
    <section className='mt-24 px-[6%] w-full'>
      <div className='relative bg-[#2C1E17] py-8 rounded-3xl'>
        <h2 className='mt-4 mb-10 font-bold text-[30px] text-white text-center'>
          آموزش های اریک کافه
        </h2>

        <div className='relative bg-white shadow-2xl mx-auto px-5 py-8 rounded-3xl max-w-[1200px]'>
          <button className='hidden top-1/2 -left-7 z-10 absolute lg:flex justify-center items-center bg-[#E8D9CF] rounded-full w-[48px] h-[48px] swiper-button-prev'>
            <span className='text-xl'>›</span>
          </button>

          <button className='hidden top-1/2 -right-7 z-10 absolute lg:flex justify-center items-center bg-[#E8D9CF] rounded-full w-[48px] h-[48px] swiper-button-next'>
            <span className='text-xl rotate-180'>›</span>
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{ delay: 3000 }}
            spaceBetween={25}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <div className='bg-white shadow-sm hover:shadow-lg px-5 py-6 border border-[#EDEAE7] rounded-2xl transition-all duration-300'>
                  <Image
                    src={item.img}
                    width={400}
                    height={240}
                    alt='course'
                    className='rounded-xl w-full h-[210px] object-cover'
                  />

                  <p className='mt-4 text-[#28221E] text-[15px] text-end leading-7'>
                    {item.title}
                  </p>

                  <div className='flex justify-between items-center mt-6 text-[14px]'>
                    <span className='text-gray-500'>{item.date}</span>

                    <Link
                      href='/'
                      className='flex items-center gap-x-2 font-semibold text-[#C5875D] hover:underline'
                    >
                      <span>
                        <FaArrowLeftLong className='mt-1' />
                      </span>
                      مشاهده بیشتر
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className='flex justify-center mt-10'>
            <button className='flex items-center gap-x-6 bg-[#9E624C] hover:bg-[#915f46] shadow-md px-10 py-3 rounded-full text-[15px] text-white duration-500 ease-in-out cursor-pointer'>
              <span>
                <FaArrowLeftLong className='mt-1' />
              </span>
              مشاهده بیشتر
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
