import Image from 'next/image';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
export default function SpecialDiscounts() {
  const products = [
    {
      id: 1,
      img: '/img/p1.png',
      discount: '10%',
      title: 'دانه قهوه پاکت برند Boxilian',
      oldPrice: '340,000',
      newPrice: '240,000',
    },
    {
      id: 2,
      img: '/img/p2.png',
      discount: '20%',
      title: 'دانه قهوه پاکت برند Boxilian',
      oldPrice: '360,000',
      newPrice: '280,000',
    },
    {
      id: 3,
      img: '/img/p3.png',
      discount: '20%',
      title: 'دانه قهوه پاکت برند Boxilian',
      oldPrice: '300,000',
      newPrice: '240,000',
    },
    {
      id: 4,
      img: '/img/p4.png',
      discount: '35%',
      title: 'دانه قهوه پاکت برند Illy',
      oldPrice: '460,000',
      newPrice: '350,000',
    },
  ];

  return (
    <section className='mt-20 px-[6%] w-full'>
      <div className='relative bg-[#2C1E17] px-5 py-12 rounded-3xl'>
        {/* Title */}
        <h2 className='mb-8 font-bold text-[30px] text-white text-center'>
          تخفیفات ویژه
        </h2>

        {/* White Box */}
        <div className='relative bg-white shadow-2xl mx-auto p-6 rounded-3xl max-w-[1200px]'>
          {/* Tabs (Scrollable on mobile) */}
          <div className='flex xl:justify-center gap-8 mb-6 px-4 overflow-x-auto text-[#70675f] text-[15px] whitespace-nowrap'>
            <span className='cursor-pointer cup'>تجهیزات کافی و رستوران</span>
            <span className='cursor-pointer'>ابزار باریستا</span>
            <span className='cursor-pointer'>آسیاب قهوه</span>

            <span className='pb-1 border-[#C5875D] border-b-[3px] font-bold text-[#C5875D] cursor-pointer'>
              دانه قهوه
            </span>

            <span className='cursor-pointer'>دسته بندی ها</span>
          </div>

          {/* Navigation Buttons */}
          <div className='hidden lg:flex'>
            <button className='top-1/2 -left-[25px] z-10 absolute flex justify-center items-center bg-[#E8D9CF] rounded-full w-[45px] h-[45px] swiper-button-prev'>
              <MdOutlineChevronLeft size={20} color='#000' />
            </button>

            <button className='top-1/2 -right-[25px] z-10 absolute flex justify-center items-center bg-[#E8D9CF] rounded-full w-[45px] h-[45px] swiper-button-next'>
              <MdOutlineChevronRight size={20} color='#000' />
            </button>
          </div>

          {/* Swiper Slider */}
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
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {products.map((item) => (
              <SwiperSlide key={item.id}>
                <div className='relative flex flex-col items-center px-5 py-6 border border-[#EDEAE7] rounded-2xl h-[420px]'>
                  <span className='top-4 right-4 absolute bg-[#2C1E17] px-3 py-1 rounded-full text-white text-sm'>
                    {item.discount}
                  </span>
                  <Image
                    src={item.img}
                    width={200}
                    height={230}
                    alt='product'
                    className='h-[230px] object-contain'
                  />
                  <h3 className='mt-4 text-[#28221E] text-[15px] text-center leading-6'>
                    {item.title}
                  </h3>
                  <div className='mt-4 text-center'>
                    <span className='text-gray-400 text-sm line-through'>
                      {item.oldPrice} تومان
                    </span>
                    <br />
                    <span className='font-bold text-[#C5875D] text-[17px]'>
                      {item.newPrice} تومان
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
