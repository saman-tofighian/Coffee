import Brands from '@/Components/Brands/Brands';
import Categories from '@/Components/Categories/Categories';
import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import Learning from '@/Components/Learning/Learning';
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
      <Learning />
      <Footer />
    </main>
  );
}
