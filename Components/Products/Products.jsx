import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeftLong } from 'react-icons/fa6';

export default function Products() {
  const products = [
    {
      id: 1,
      img: '/img/p1.png',
      discount: '20%',
      title: 'دانه قهوه پاکت برند Boxilian',
      category: 'قهوه دانه',
      oldPrice: '360,000',
      newPrice: '240,000',
    },
    {
      id: 2,
      img: '/img/p1.png',
      discount: '20%',
      title: 'دانه قهوه پاکت برند Boxilian',
      category: 'قهوه دانه',
      oldPrice: '360,000',
      newPrice: '240,000',
    },
    {
      id: 3,
      img: '/img/p1.png',
      discount: '20%',
      title: 'دانه قهوه پاکت برند Boxilian',
      category: 'قهوه دانه',
      oldPrice: '360,000',
      newPrice: '240,000',
    },
    {
      id: 4,
      img: '/img/p1.png',
      discount: '20%',
      title: 'دانه قهوه پاکت برند Boxilian',
      category: 'قهوه دانه',
      oldPrice: '360,000',
      newPrice: '240,000',
    },
    {
      id: 5,
      img: '/img/p1.png',
      discount: '20%',
      title: 'دانه قهوه پاکت برند Boxilian',
      category: 'قهوه دانه',
      oldPrice: '360,000',
      newPrice: '240,000',
    },
    {
      id: 6,
      img: '/img/p1.png',
      discount: '20%',
      title: 'دانه قهوه پاکت برند Boxilian',
      category: 'قهوه دانه',
      oldPrice: '360,000',
      newPrice: '240,000',
    },
    {
      id: 7,
      img: '/img/p1.png',
      discount: '20%',
      title: 'دانه قهوه پاکت برند Boxilian',
      category: 'قهوه دانه',
      oldPrice: '360,000',
      newPrice: '240,000',
    },
    {
      id: 8,
      img: '/img/p1.png',
      discount: '20%',
      title: 'دانه قهوه پاکت برند Boxilian',
      category: 'قهوه دانه',
      oldPrice: '360,000',
      newPrice: '240,000',
    },
  ];

  return (
    <section className='mt-24 px-[6%] w-full'>
      <div className='flex justify-around items-center bg-white px-6 py-4 border-[#E9E9E8] border-[2px] rounded-[50px] w-full'>
        <nav className='bg-[#E9E9E8] px-8 py-4 rounded-[20px]'>
          <ul className='flex gap-x-5'>
            <li>
              <Link href='/'>شو کیک</Link>
            </li>
            <li>
              <Link href='/'>تجهیزات کافه و رستوران</Link>
            </li>
            <li>
              <Link href='/'>کرپ ساز صنعتی</Link>
            </li>
            <li>
              <Link href='/'>بویلر آب جوش</Link>
            </li>
            <li>
              <Link href='/'>ابزار باریستا</Link>
            </li>
            <li>
              <Link href='/'>آسیاب قهوه</Link>
            </li>
            <li>
              <Link href='/'>همه دسته بندی ها</Link>
            </li>
          </ul>
        </nav>
        <div className='flex items-center gap-x-3'>
          <div>
            <h5 className='font-semibold text-[#28221E] text-[30px] leading-none'>
              پرفروش ترین ها
            </h5>
            <p className='opacity-80 mt-3 text-[#28221E] text-[15px]'>
              پرفروش ترین محصولات اریک کافه
            </p>
          </div>
          <Image src='/img/coffee.png' alt='Coffee' width={62} height={62} />
        </div>
      </div>

      <div className='gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-14'>
        {products.map((item) => (
          <div
            key={item.id}
            className='relative bg-white shadow-sm hover:shadow-lg px-6 py-6 border border-[#EFEFEF] rounded-3xl transition-all duration-300 cursor-pointer'
          >
            {/* Discount Badge */}
            <span className='top-4 right-4 absolute bg-[#2C1E17] px-3 py-1 rounded-full text-[13px] text-white'>
              {item.discount}
            </span>

            {/* Image */}
            <div className='flex justify-center w-full'>
              <Image
                src={item.img}
                alt={item.title}
                width={200}
                height={230}
                className='h-[210px] object-contain'
              />
            </div>

            {/* Title */}
            <h3 className='mt-4 font-medium text-[#28221E] text-[16px] leading-6'>
              {item.title}
            </h3>

            {/* Category */}
            <span className='text-[#8A8A8A] text-[13px]'>{item.category}</span>

            {/* Prices */}
            <div className='mt-3'>
              <span className='text-[14px] text-gray-400 line-through'>
                {item.oldPrice} تومان
              </span>
              <br />
              <span className='font-bold text-[#C5875D] text-[18px]'>
                {item.newPrice} تومان
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className='flex justify-center mt-14 w-full'>
        <button className='flex items-center gap-x-6 bg-[#9E624C] hover:bg-[#915f46] shadow-md px-10 py-3 rounded-full text-[15px] text-white duration-500 ease-in-out cursor-pointer'>
          <span>
            <FaArrowLeftLong className='mt-1' />
          </span>
          مشاهده بیشتر
        </button>
      </div>
    </section>
  );
}
