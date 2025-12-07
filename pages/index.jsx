import Brands from '@/Components/Brands/Brands';
import Categories from '@/Components/Categories/Categories';
import Header from '@/Components/Header/Header';
import Motto from '@/Components/Motto/Motto';
import Products from '@/Components/Products/Products';
import SpecialOffers from '@/Components/SpecialOffers/SpecialOffers';
import Slider from '../Components/Slider/Slider';

export default function Home() {
  return (
    <main className='w-full overflow-x-hidden'>
      <Header />
      <Motto />
      <Slider />
      <Categories />
      <SpecialOffers />
      <Brands />
      <Products />
    </main>
  );
}
