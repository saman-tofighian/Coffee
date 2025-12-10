import Image from 'next/image';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
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
      date: ' اردیبهشت ۱۴۰۳',
    },
    {
      id: 2,
      img: '/img/l2.png',
      title:
        'لورم ایپسوم متن ساختگی برای طراحان میباشد که با استفاده از آن متن تستی مینویسند!',
      date: ' اردیبهشت ۱۴۰۳',
    },
    {
      id: 3,
      img: '/img/l3.png',
      title:
        'لورم ایپسوم متن ساختگی برای طراحان میباشد که با استفاده از آن متن تستی مینویسند!',
      date: ' اردیبهشت ۱۴۰۳',
    },
    {
      id: 4,
      img: '/img/l1.png',
      title:
        'لورم ایپسوم متن ساختگی برای طراحان میباشد که با استفاده از آن متن تستی مینویسند!',
      date: ' اردیبهشت ۱۴۰۳',
    },
  ];

  return (
    <section className='mt-24 px-[6%] w-full'>
      <div className='relative bg-[#2C1E17] px-5 py-14 rounded-3xl'>
        <h2 className='mb-8 font-bold text-[30px] text-white text-center'>
          آموزش های اریک کافه
        </h2>

        <div className='relative bg-white shadow-xl mx-auto p-6 rounded-3xl max-w-[1200px]'>
          <div className='hidden lg:flex'>
            <button className='top-1/2 -left-[25px] z-10 absolute flex justify-center items-center bg-[#E8D9CF] rounded-full w-[45px] h-[45px] cursor-pointer swiper-button-prev'>
              <MdOutlineChevronLeft size={20} color='#000' />
            </button>

            <button className='top-1/2 -right-[25px] z-10 absolute flex justify-center items-center bg-[#E8D9CF] rounded-full w-[45px] h-[45px] cursor-pointer swiper-button-next'>
              <MdOutlineChevronRight size={20} color='#000' />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{ delay: 2500 }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              940: { slidesPerView: 1 },
              1024: { slidesPerView: 3 },
            }}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <div className='flex flex-col bg-white p-4 border border-[#EFEFEF] rounded-[20px] overflow-hidden'>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={600}
                    height={350}
                    className='rounded-[10px] w-full h-[272px] object-center'
                  />

                  <div className='px-5 pt-4 pb-5'>
                    <h3 className='text-[#28221E] text-[15px] text-end leading-7'>
                      {item.title}
                    </h3>

                    <div className='flex justify-between mt-7 w-full text-[#8F8F8F] text-[14px]'>
                      <span>{item.date}</span>

                      <button className='flex items-center gap-x-2 font-medium text-[#9E624C] cursor-pointer'>
                        <FaArrowLeftLong size={14} />
                        مشاهده بیشتر
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className='flex justify-center mt-14 w-full'>
          <button className='flex items-center gap-x-3 bg-[#9E624C] hover:bg-[#8a5741] shadow-md px-12 py-3 rounded-full text-[16px] text-white transition cursor-pointer'>
            <FaArrowLeftLong size={16} />
            مشاهده بیشتر
          </button>
        </div>
      </div>
    </section>
  );
}
