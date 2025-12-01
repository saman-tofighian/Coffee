import Header from '@/Components/Header/Header';
import Motto from '@/Components/Motto/Motto';
import Slider from '../Components/Slider/Slider';

export default function Home() {
  return (
    <main className='w-full overflow-x-hidden'>
      <Header />
      <Motto />
      <Slider />
    </main>
  );
}
