import Image from 'next/image';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Slider() {
  const items = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    img: '/img/slider.png',
  }));

  return (
    <section className='bg-[#F2E5DA] mt-10 py-3 w-full overflow-hidden'>
      <Swiper
        modules={[Autoplay]}
        slidesPerView='auto'
        spaceBetween={0}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={false}
        centeredSlides={false}
        style={{
          transitionTimingFunction: 'linear',
        }}
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            className='flex justify-center items-center !w-auto'
          >
            <div className='flex items-center px-14 py-2'>
              <Image src={item.img} alt='slide' width={90} height={40} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
