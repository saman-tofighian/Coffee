import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeftLong } from 'react-icons/fa6';

const categories = [
  'نگهداری قهوه',
  'تجهیزات کافه',
  'باریستا',
  'قهوه و دم‌آوری',
  'همه آموزش‌ها',
];

const courses = [
  {
    id: 1,
    title: 'V60 راهنمای کامل دم‌آوری قهوه با ',
    img: '/img/l1.png',
    date: 'اردیبهشت ۱۴۰۳',
    category: 'قهوه و دم‌آوری',
  },
  {
    id: 2,
    title: 'آموزش تنظیم آسیاب قهوه برای اسپرسو',
    img: '/img/l2.png',
    date: ' اردیبهشت ۱۴۰۳',
    category: 'باریستا',
  },
  {
    id: 3,
    title: 'چطور بهترین قهوه را نگهداری کنیم؟',
    img: '/img/l3.png',
    date: ' اردیبهشت ۱۴۰۳',
    category: 'نگهداری قهوه',
  },
  {
    id: 4,
    title: 'آشنایی با تجهیزات ضروری کافه',
    img: '/img/l1.png',
    date: '۲۰ اردیبهشت ۱۴۰۳',
    category: 'تجهیزات کافه',
  },
];

export default function LearningPage() {
  return (
    <>
      <Header />
      <main className='px-[6%] py-16'>
        <section className='mx-auto max-w-2xl text-center'>
          <h1 className='font-extrabold text-[#28221E] text-[34px]'>
            آموزش‌های اریک کافه
          </h1>
          <p className='mt-4 text-[#6F6F6F] text-[16px] leading-7'>
            آموزش‌های تخصصی قهوه، باریستا و تجهیزات کافه برای علاقه‌مندان و
            حرفه‌ای‌ها
          </p>
        </section>

        <section className='flex justify-center gap-4 mt-12 pb-2 overflow-x-auto'>
          {categories.map((item, index) => (
            <button
              key={index}
              className={`whitespace-nowrap px-6 py-2 rounded-full border text-sm transition cursor-pointer
              ${
                index === 4
                  ? 'bg-[#9E624C] text-white border-[#9E624C]'
                  : 'bg-white text-[#9E624C] border-[#E6CFC2] hover:bg-[#F2E5DA]'
              }`}
            >
              {item}
            </button>
          ))}
        </section>

        <section className='gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 text-end'>
          {courses.map((course) => (
            <article
              key={course.id}
              className='group bg-white shadow-[0_12px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_18px_60px_rgba(0,0,0,0.1)] border border-[#F1E2D8] rounded-3xl transition hover:-translate-y-1'
            >
              <div className='relative rounded-t-3xl w-full h-[200px] overflow-hidden'>
                <Image
                  src={course.img}
                  alt={course.title}
                  fill
                  className='object-cover group-hover:scale-105 transition duration-500'
                />
              </div>

              <div className='p-5'>
                <span className='text-[#9E624C] text-[12px]'>
                  {course.category}
                </span>

                <h3 className='mt-2 font-semibold text-[#28221E] text-[15px] line-clamp-2 leading-6'>
                  {course.title}
                </h3>

                <div className='flex justify-between items-center mt-5'>
                  <span className='text-[12px] text-gray-500'>
                    {course.date}
                  </span>

                  <Link
                    href={`/learning/${course.id}`}
                    className='flex items-center gap-2 hover:gap-3 text-[#9E624C] text-[13px] transition-all cursor-pointer'
                  >
                    <FaArrowLeftLong />
                    مشاهده آموزش
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
        <div className='flex justify-center mt-16'>
          <button className='flex items-center gap-4 bg-[#9E624C] hover:bg-[#8A523D] shadow-md px-10 py-3 rounded-full text-[15px] text-white transition cursor-pointer'>
            <FaArrowLeftLong />
            مشاهده آموزش‌های بیشتر
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
