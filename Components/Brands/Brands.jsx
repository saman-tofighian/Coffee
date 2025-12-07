import Image from 'next/image';
import { useState } from 'react';

export default function Brands() {
  const [brandImage] = useState([
    { id: 1, Image: '/img/b1.jpg' },
    { id: 2, Image: '/img/b2.jpg' },
    { id: 3, Image: '/img/b3.jpg' },
    { id: 4, Image: '/img/b4.jpg' },
  ]);

  return (
    <section className='mt-23 px-[6%] w-full'>
      <div className='gap-x-8 gap-y-10 xl:gap-y-0 grid grid-cols-12 w-full'>
        {brandImage.map((item, index) => (
          <figure
            key={item.id}
            className={`
              ${
                index === 0
                  ? 'col-span-12 md:col-span-8 md:col-start-3'
                  : index === 1 || index === 2
                  ? 'col-span-6'
                  : 'col-span-12 md:col-span-8 md:col-start-3'
              }
              lg:col-span-3
            `}
          >
            <Image
              src={item.Image}
              alt='ImageBrand'
              width={355}
              height={166}
              className='bg-center rounded-3xl w-full h-auto max-h-[250px]'
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
