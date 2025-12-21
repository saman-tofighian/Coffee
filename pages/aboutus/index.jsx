import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import Image from 'next/image';
import { CiCoffeeBean } from 'react-icons/ci';
import { FaAward, FaStore, FaUsers } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className='px-[6%] py-16'>
        <section className='items-center gap-10 grid grid-cols-1 lg:grid-cols-2'>
          <div className='relative'>
            <Image
              src='/img/l1.png'
              alt='About Eric Cafe'
              width={520}
              height={420}
              className='shadow-lg rounded-3xl object-cover'
            />
          </div>
          <div className='text-center'>
            <h1 className='font-extrabold text-[#28221E] text-[36px] leading-tight'>
              درباره <span className='text-[#9E624C]'>اریک کافه</span>
            </h1>
            <p className='mt-6 text-[#5C5C5C] text-[16px] leading-8'>
              اریک کافه از دل عشق به قهوه متولد شد. ما تلاش می‌کنیم بهترین
              دانه‌های قهوه، تجهیزات تخصصی و آموزش‌های حرفه‌ای را برای
              علاقه‌مندان و باریستاها فراهم کنیم
            </p>
          </div>
        </section>
        <section className='bg-white shadow-sm mt-24 p-10 rounded-3xl text-end'>
          <h2 className='font-bold text-[#28221E] text-[28px]'>داستان ما</h2>

          <p className='mt-6 text-[#5C5C5C] leading-8'>
            اریک کافه فعالیت خود را با هدف ارائه قهوه تخصصی و آموزش صحیح دم‌آوری
            آغاز کرد. ما معتقدیم قهوه فقط یک نوشیدنی نیست، بلکه یک تجربه است. از
            انتخاب دانه تا آخرین جرعه، کیفیت برای ما اولویت اصلی است
          </p>
        </section>

        <section className='mt-24'>
          <h2 className='font-bold text-[#28221E] text-[28px] text-center'>
            چرا اریک کافه؟
          </h2>

          <div className='gap-8 grid grid-cols-1 md:grid-cols-3 mt-12'>
            {[
              {
                icon: <CiCoffeeBean size={42} />,
                title: 'کیفیت دانه‌ها',
                desc: 'انتخاب بهترین دانه‌های قهوه از مزارع معتبر جهان',
              },
              {
                icon: <FaAward size={38} />,
                title: 'تجربه و تخصص',
                desc: 'سال‌ها تجربه در رست، آموزش و تجهیزات قهوه',
              },
              {
                icon: <FaUsers size={38} />,
                title: 'رضایت مشتری',
                desc: 'پشتیبانی واقعی و احترام به سلیقه مشتریان',
              },
            ].map((item, index) => (
              <div
                key={index}
                className='bg-white hover:shadow-md p-8 border border-[#F1E2D8] rounded-3xl text-center transition'
              >
                <div className='flex justify-center mb-4 text-[#9E624C]'>
                  {item.icon}
                </div>
                <h3 className='font-semibold text-[#28221E] text-[18px]'>
                  {item.title}
                </h3>
                <p className='mt-3 text-[#5C5C5C] text-[14px] leading-7'>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className='bg-[#9E624C] mt-24 py-14 rounded-3xl text-white'>
          <div className='gap-10 grid grid-cols-1 sm:grid-cols-3 text-center'>
            <div>
              <FaStore size={36} className='mx-auto mb-3' />
              <p className='font-extrabold text-[30px]'>+۵۰</p>
              <p className='opacity-90 text-sm'>محصول تخصصی</p>
            </div>
            <div>
              <FaUsers size={36} className='mx-auto mb-3' />
              <p className='font-extrabold text-[30px]'>+۱۰,۰۰۰</p>
              <p className='opacity-90 text-sm'>مشتری وفادار</p>
            </div>
            <div>
              <FaAward size={36} className='mx-auto mb-3' />
              <p className='font-extrabold text-[30px]'>+۵</p>
              <p className='opacity-90 text-sm'>سال تجربه</p>
            </div>
          </div>
        </section>

        <section className='mt-24'>
          <h2 className='font-bold text-[#28221E] text-[28px] text-center'>
            تیم اریک کافه
          </h2>

          <div className='gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12'>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className='bg-white p-6 border border-[#F1E2D8] rounded-3xl text-center'
              >
                <Image
                  src={`/img/team${i}.jpg`}
                  alt='team member'
                  width={160}
                  height={160}
                  className='mx-auto rounded-full object-cover'
                />
                <h4 className='mt-4 font-semibold text-[#28221E]'>
                  باریستا اریک
                </h4>
                <p className='mt-1 text-[#9E624C] text-sm'>Coffee Specialist</p>
              </div>
            ))}
          </div>
        </section>

        <section className='mt-28 text-center'>
          <h3 className='font-bold text-[#28221E] text-[26px]'>
            آماده تجربه یک قهوه متفاوت هستید؟
          </h3>
          <p className='mt-4 text-[#5C5C5C]'>
            محصولات و آموزش‌های اریک کافه را همین حالا ببینید
          </p>

          <button className='bg-[#9E624C] hover:bg-[#8a523d] mt-8 px-10 py-3 rounded-full text-white transition'>
            مشاهده محصولات
          </button>
        </section>
      </main>

      <Footer />
    </>
  );
}
