import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className='px-[6%] py-20'>
        <section className='mx-auto max-w-3xl text-center'>
          <h1 className='font-extrabold text-[#28221E] text-[38px]'>
            تماس با <span className='text-[#9E624C]'>اریک کافه</span>
          </h1>
          <p className='mt-6 text-[#5C5C5C] leading-8'>
            سوالی دارید یا نیاز به مشاوره دارید؟ تیم اریک کافه با افتخار پاسخگوی
            شماست ☕
          </p>
        </section>

        <section className='gap-14 grid grid-cols-1 lg:grid-cols-2 mt-24'>
          <div className='space-y-10'>
            <div className='flex items-start gap-4'>
              <FaMapMarkerAlt size={26} className='text-[#9E624C]' />
              <div>
                <h3 className='font-semibold text-[#28221E]'>آدرس</h3>
                <p className='mt-2 text-[#5C5C5C] leading-7'>
                  تهران، خیابان ولیعصر، بالاتر از پارک ساعی، پلاک ۱۲۳
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <FaPhoneAlt size={24} className='text-[#9E624C]' />
              <div>
                <h3 className='font-semibold text-[#28221E]'>تلفن تماس</h3>
                <p className='mt-2 text-[#5C5C5C]'>۰۲۱ - ۱۲۳۴۵۶۷۸</p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <FaEnvelope size={24} className='text-[#9E624C]' />
              <div>
                <h3 className='font-semibold text-[#28221E]'>ایمیل</h3>
                <p className='mt-2 text-[#5C5C5C]'>info@ericcafe.ir</p>
              </div>
            </div>
          </div>

          <form className='space-y-6 bg-white shadow-sm p-10 border border-[#F1E2D8] rounded-3xl'>
            <h2 className='font-bold text-[#28221E] text-[22px] text-end'>
              ارسال پیام
            </h2>

            <input
              type='text'
              placeholder='نام شما'
              className='px-5 py-3 border border-[#EAD6C8] focus:border-[#9E624C] rounded-xl outline-none w-full text-end'
            />

            <input
              type='email'
              placeholder='ایمیل'
              className='px-5 py-3 border border-[#EAD6C8] focus:border-[#9E624C] rounded-xl outline-none w-full text-end'
            />

            <textarea
              rows='5'
              placeholder='پیام شما'
              className='px-5 py-3 border border-[#EAD6C8] focus:border-[#9E624C] rounded-xl outline-none w-full text-end resize-none'
            />

            <div className='flex justify-end w-full'>
              <button
                type='submit'
                className='bg-[#9E624C] hover:bg-[#8a523d] px-10 py-3 rounded-full text-white transition cursor-pointer'
              >
                ارسال پیام
              </button>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}
