'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export default function SpecialDiscounts() {
  const scrollRef = useRef(null);

  const products = [
    {
      id: 1,
      img: '/img/p1.png',
      discount: '10٪',
      title: 'دانه قهوه پاکت برند Boxilian',
      oldPrice: '340,000',
      newPrice: '240,000',
    },
    {
      id: 2,
      img: '/img/p2.png',
      discount: '20٪',
      title: 'دانه قهوه پاکت برند Boxilian',
      oldPrice: '360,000',
      newPrice: '280,000',
    },
    {
      id: 3,
      img: '/img/p3.png',
      discount: '20٪',
      title: 'دانه قهوه پاکت برند Boxilian',
      oldPrice: '300,000',
      newPrice: '240,000',
    },
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className='mt-20 px-[6%] w-full'>
      {/* Title */}

      {/* Background box */}
      <div className='relative bg-[#2C1E17] px-5 py-10 rounded-2xl'>
        <h2 className='mb-6 font-bold text-[30px] text-white text-center'>
          تخفیفات ویژه
        </h2>
        {/* White Slider Box */}
        <div className='relative bg-white shadow-xl mx-auto p-6 rounded-2xl max-w-[1200px]'>
          {/* Tabs */}
          <div className='flex justify-center gap-x-10 mb-6 text-[#726b66] text-[15px]'>
            <span>تجهیزات کافی و رستوران</span>
            <span>ابزار باریستا</span>
            <span>آسیاب قهوه</span>
            <span className='pb-1 border-[#C5875D] border-b-[3px] font-bold text-[#C5875D]'>
              دانه قهوه
            </span>
            <span>دسته بندی ها</span>
          </div>

          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className='hidden top-1/2 left-[-25px] absolute lg:flex justify-center items-center bg-[#E8D9CF] rounded-full w-[45px] h-[45px] -translate-y-1/2'
          >
            <FaAngleLeft size={20} />
          </button>

          <button
            onClick={scrollRight}
            className='hidden top-1/2 right-[-25px] absolute lg:flex justify-center items-center bg-[#E8D9CF] rounded-full w-[45px] h-[45px] -translate-y-1/2'
          >
            <FaAngleRight size={20} />
          </button>

          {/* Slider */}
          <div ref={scrollRef} className='flex gap-6 mt-3 px-2'>
            {products.map((item) => (
              <div
                key={item.id}
                className='relative px-5 py-6 border border-[#EDEAE7] rounded-2xl min-w-[320px] max-w-[320px]'
              >
                {/* Discount Badge */}
                <span className='top-4 right-4 absolute bg-[#2C1E17] px-3 py-1 rounded-full text-white text-sm'>
                  {item.discount}
                </span>

                {/* Product Image */}
                <figure className='flex justify-center mb-4'>
                  <Image
                    src={item.img}
                    alt='product-img'
                    width={197}
                    height={249}
                    className='h-[249px] object-center'
                  />
                </figure>

                {/* Title */}
                <h3 className='font-medium text-[#28221E] text-[15px] text-center leading-6'>
                  {item.title}
                </h3>

                {/* Price */}
                <div className='mt-4 text-center'>
                  <span className='text-[14px] text-gray-400 line-through'>
                    {item.oldPrice} تومان
                  </span>
                  <br />
                  <span className='font-bold text-[#C5875D] text-[17px]'>
                    {item.newPrice} تومان
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
