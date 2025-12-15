import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import Image from 'next/image';
import { useState } from 'react';
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa';

const productImages = [
  '/img/p1.png',
  '/img/p2.png',
  '/img/p3.png',
  '/img/p4.png',
];

export default function ProductPage() {
  const [count, setCount] = useState(1);
  const [activeImage, setActiveImage] = useState(productImages[0]);
  const [activeTab, setActiveTab] = useState('description');

  const handleIncrease = () => setCount((prev) => prev + 1);

  const handleDecrease = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  const handleSelectImage = (src) => setActiveImage(src);

  const handleChangeTab = (tab) => setActiveTab(tab);

  return (
    <>
      <Header />

      <main className='px-[6%] py-12'>
        <div className='space-y-16 mx-auto max-w-6xl'>
          <section className='gap-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.05)] p-8 rounded-[32px]'>
            <div className='flex flex-col justify-between order-2 lg:order-1 text-center lg:text-end'>
              <div>
                <h1 className='mt-2 font-extrabold text-[#28221E] text-[28px] leading-relaxed'>
                  Boxilian دانه قهوه باکسی برند
                </h1>

                <p className='mt-3 text-gray-400 text-xs'>
                  Boxilian : دانه قهوه | برند
                </p>

                <div className='flex justify-center lg:justify-end items-center gap-2 mt-3 text-sm'>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <FaStar key={i} className='text-[#C5875D]' />
                  ))}
                  <span className='text-gray-500'>(۴.۸ از ۱۲۳ نظر)</span>
                </div>

                <div className='gap-3 grid grid-cols-2 md:grid-cols-4 mt-6 text-xs'>
                  <div className='flex justify-center lg:justify-end items-center gap-2 bg-[#FFF9F4] px-3 py-2 border border-[#F0DED0] rounded-2xl'>
                    <div>
                      <p className='font-semibold text-[#28221E]'>
                        شرایط ارسال
                      </p>
                      <p className='mt-3 text-[11px] text-gray-500'>
                        حدود ۲ الی ۶ روز کاری
                      </p>
                    </div>
                  </div>

                  <div className='flex justify-center lg:justify-end items-center gap-2 bg-[#FFF9F4] px-3 py-2 border border-[#F0DED0] rounded-2xl'>
                    <div>
                      <p className='font-semibold text-[#28221E]'>ضمانت کالا</p>
                      <p className='mt-3 text-[11px] text-gray-500'>
                        تا ۷ روز ضمانت عودت کالا
                      </p>
                    </div>
                  </div>

                  <div className='flex justify-center lg:justify-end items-center gap-2 bg-[#FFF9F4] px-3 py-2 border border-[#F0DED0] rounded-2xl'>
                    <div>
                      <p className='font-semibold text-[#28221E]'>پشتیبانی</p>
                      <p className='mt-3 text-[11px] text-gray-500'>
                        پشتیبانی ۲۴ ساعته از تلگرام
                      </p>
                    </div>
                  </div>

                  <div className='flex justify-center lg:justify-end items-center gap-2 bg-[#FFF9F4] px-3 py-2 border border-[#F0DED0] rounded-2xl'>
                    <div>
                      <p className='font-semibold text-[#28221E]'>پرداخت</p>
                      <p className='mt-3 text-[11px] text-gray-500'>
                        پرداخت امن از درگاه مطمئن
                      </p>
                    </div>
                  </div>
                </div>

                <p className='mt-5 text-[14px] text-gray-600 leading-7'>
                  ترکیبی از دانه‌های عربیکا با روست متوسط، مناسب برای اسپرسو و
                  دریپ. عطر شکلات و مغزها، با بدنه متوسط و افترتیست شیرین که
                  تجربه‌ای متعادل و دلنشین ایجاد می‌کند
                </p>

                <div className='flex justify-center lg:justify-end items-end gap-4 mt-6'>
                  <div>
                    <span className='block text-gray-400 text-xs'>
                      قیمت قبل
                    </span>
                    <span className='text-gray-400 text-sm line-through'>
                      ۳۶۰,۰۰۰ تومان
                    </span>
                  </div>
                  <div>
                    <span className='block text-[#C5875D] text-xs'>
                      قیمت ویژه امروز
                    </span>
                    <div className='font-extrabold text-[#9E624C] text-[30px]'>
                      ۲۴۰,۰۰۰ تومان
                    </div>
                  </div>
                </div>

                <div className='flex flex-wrap justify-center lg:justify-end items-center gap-3 mt-6 text-xs'>
                  <button className='px-4 py-2 border border-[#E2C8B6] rounded-full text-[#C5875D]'>
                    ۲۵۰ گرم
                  </button>
                  <button className='bg-[#F7E6D9] px-4 py-2 border border-transparent hover:border-[#E2C8B6] rounded-full text-gray-500'>
                    ۵۰۰ گرم
                  </button>
                  <button className='bg-[#F7E6D9] px-4 py-2 border border-transparent hover:border-[#E2C8B6] rounded-full text-gray-500'>
                    ۱ کیلو
                  </button>
                  <span className='text-gray-500'>: وزن بسته</span>
                </div>
              </div>

              <div className='flex flex-wrap justify-center lg:justify-end items-center gap-4 mt-8'>
                <div className='flex items-center gap-4 bg-[#FFF9F4] px-4 py-2 border border-[#E3D3C7] rounded-full'>
                  <button
                    onClick={handleIncrease}
                    className='flex justify-center items-center bg-[#9E624C] rounded-full w-8 h-8 text-white cursor-pointer'
                  >
                    <FaPlus size={12} />
                  </button>

                  <span className='min-w-[24px] font-bold text-[#28221E] text-sm text-center'>
                    {count}
                  </span>

                  <button
                    onClick={handleDecrease}
                    disabled={count === 1}
                    className={`flex h-8 w-8 items-center justify-center rounded-full border border-[#E3D3C7] text-[#9E624C] cursor-pointer ${
                      count === 1 ? 'cursor-not-allowed opacity-40' : ''
                    }`}
                  >
                    <FaMinus size={12} />
                  </button>
                </div>

                <button className='bg-[#9E624C] hover:bg-[#8a523d] shadow-md px-10 py-3 rounded-full font-semibold text-white text-sm transition hover:-translate-y-[1px] cursor-pointer'>
                  افزودن به سبد خرید
                </button>

                <button className='text-[#C5875D] text-xs underline underline-offset-4 cursor-pointer'>
                  افزودن به علاقه‌مندی‌ها
                </button>
              </div>
            </div>

            <div className='flex flex-col items-center gap-5 order-1 lg:order-2'>
              <div className='flex justify-center items-center bg-[#FFF9F4] border border-[#F0DED0] rounded-[28px] w-full h-[340px]'>
                <img
                  src={activeImage}
                  alt='product'
                  className='w-auto max-h-[260px] object-contain'
                />
              </div>

              <div className='flex gap-3'>
                {productImages.map((src) => (
                  <button
                    key={src}
                    onClick={() => handleSelectImage(src)}
                    className={`rounded-2xl border p-1 transition cursor-pointer ${
                      activeImage === src
                        ? 'border-[#C5875D] bg-[#F7E6D9]'
                        : 'border-[#E8D7CA] hover:border-[#C5875D]'
                    }`}
                  >
                    <img
                      src={src}
                      alt='thumb'
                      className='rounded-xl w-[64px] h-[64px] object-contain'
                    />
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className='bg-white shadow-[0_18px_60px_rgba(0,0,0,0.04)] p-8 rounded-[32px]'>
            <div className='flex justify-end gap-8 border-[#F0E1D7] border-b text-sm'>
              {[
                { id: 'reviews', label: 'نظرات کاربران' },
                { id: 'specs', label: 'مشخصات فنی' },
                { id: 'description', label: 'توضیحات محصول' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleChangeTab(tab.id)}
                  className={`pb-3 transition cursor-pointer ${
                    activeTab === tab.id
                      ? 'border-b-2 border-[#C5875D] text-[#C5875D]'
                      : 'text-gray-500 hover:text-[#C5875D]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className='mt-6 text-[14px] text-gray-600 text-end leading-8'>
              {activeTab === 'description' && (
                <>
                  <p>
                    این قهوه ترکیبی از دانه‌های عربیکای ارتفاعات آمریکای جنوبی
                    است که با روست متوسط، طعم متعادلی بین شیرینی و اسیدیته ایجاد
                    می‌کند. نت‌های شکلات تلخ، فندق و کارامل آن را برای اسپرسو و
                    لاته ایده‌آل کرده است
                  </p>
                  <p className='mt-3'>
                    فرآوری شسته و برشته‌کاری دقیق باعث شده این محصول تلخی
                    آزاردهنده نداشته باشد و برای مصرف روزانه مناسب باشد. بهترین
                    نتیجه در آسیاب تازه و دم‌آوری با دستگاه اسپرسوساز خانگی یا
                    موکاپات به دست می‌آید
                  </p>
                </>
              )}

              {activeTab === 'specs' && (
                <ul className='space-y-2'>
                  <li>نوع دانه: عربیکا %۱۰۰</li>
                  <li>درجه روست: مدیوم</li>
                  <li>مناسب برای: اسپرسو، موکاپات، فرنچ‌پرس</li>
                  <li>کشور مبدأ: برزیل و کلمبیا</li>
                </ul>
              )}

              {activeTab === 'reviews' && (
                <div className='space-y-4 text-sm'>
                  <p>
                    میانگین امتیاز کاربران: ۴.۸ از ۵ بر اساس ۱۲۳ نظر ثبت شده.
                  </p>
                  <p>
                    برای ثبت نظر خود، ابتدا محصول را خریداری و سپس وارد حساب
                    کاربری شوید.
                  </p>
                </div>
              )}
            </div>

            <div className='gap-4 grid grid-cols-1 md:grid-cols-3 mt-8'>
              <Image
                width={160}
                height={250}
                src='/img/b1.jpg'
                alt='gallery-1'
                className='rounded-2xl w-full h-[270px] object-center'
              />
              <Image
                width={160}
                height={250}
                src='/img/b2.jpg'
                alt='gallery-2'
                className='rounded-2xl w-full h-[270px] object-center'
              />
              <Image
                width={160}
                height={250}
                src='/img/b3.jpg'
                alt='gallery-3'
                className='rounded-2xl w-full h-[270px] object-center'
              />
            </div>
          </section>

          <section className='space-y-6 mt-28'>
            <div className='flex justify-between items-center'>
              <button className='text-[#C5875D] cursor-pointer'>
                مشاهده همه
              </button>
              <h3 className='font-bold text-[#28221E] text-[22px]'>
                پیشنهادات ما
              </h3>
            </div>

            <div className='gap-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'>
              {[1, 2, 3, 4].map((i) => (
                <article
                  key={i}
                  className='group flex flex-col items-center bg-white shadow-[0_14px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_18px_60px_rgba(0,0,0,0.08)] p-5 border border-[#F1E2D8] rounded-3xl text-center transition hover:-translate-y-1'
                >
                  <div className='flex justify-center items-center rounded-2xl w-full'>
                    <Image
                      width={200}
                      height={180}
                      src='/img/p1.png'
                      alt='related-product'
                      className='w-auto h-[180px] object-center'
                    />
                  </div>

                  <h4 className='mt-6 font-medium text-[#28221E] text-sm'>
                    Boxilian دانه قهوه پاکت برند
                  </h4>

                  <div className='mt-4 font-bold text-[#9E624C] text-[14px]'>
                    ۲۴۰,۰۰۰ تومان
                  </div>

                  <button className='bg-[#F7E6D9] group-hover:bg-white mt-4 px-10 py-2 border border-transparent group-hover:border-[#C5875D] rounded-full text-[#9E624C] text-xs transition cursor-pointer'>
                    مشاهده محصول
                  </button>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
