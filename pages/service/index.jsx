import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import { motion } from 'framer-motion';
import {
  CiCoffeeBean,
  CiDeliveryTruck,
  CiSettings,
  CiShop,
} from 'react-icons/ci';

const services = [
  {
    id: 4,
    title: 'پشتیبانی و تعمیرات',
    desc: 'پشتیبانی، سرویس و تعمیر دستگاه‌های قهوه',
    icon: CiSettings,
  },
  {
    id: 3,
    title: 'ارسال سریع',
    desc: 'تحویل سریع سفارشات در کمترین زمان ممکن',
    icon: CiDeliveryTruck,
  },
  {
    id: 2,
    title: 'تجهیزات کافی‌شاپ',
    desc: 'فروش و تأمین تجهیزات حرفه‌ای کافی‌شاپ و رستوران',
    icon: CiShop,
  },
  {
    id: 1,
    title: 'فروش قهوه تخصصی',
    desc: 'عرضه انواع قهوه‌های تخصصی با بهترین کیفیت و رُست تازه',
    icon: CiCoffeeBean,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className='px-[6%] py-24'>
        <section className='mb-16 text-center'>
          <h1 className='font-bold text-[#2C2C2C] text-[36px]'>خدمات ما</h1>
          <p className='mx-auto mt-4 max-w-xl text-[#6B6B6B]'>
            ما در قهوه‌اریک مجموعه‌ای کامل از خدمات تخصصی قهوه و تجهیزات را
            ارائه می‌دهیم
          </p>
        </section>

        <motion.section
          initial='hidden'
          animate='visible'
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className='gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 120 }}
                className='bg-white shadow-sm hover:shadow-md p-8 rounded-3xl text-center transition'
              >
                <div className='flex justify-center mb-6'>
                  <span className='flex justify-center items-center bg-[#F2E5DA] rounded-full w-[72px] h-[72px]'>
                    <Icon size={36} color='#9E624C' />
                  </span>
                </div>

                <h3 className='mb-3 font-semibold text-[20px]'>
                  {service.title}
                </h3>

                <p className='text-[#6B6B6B] text-[15px] leading-relaxed'>
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
