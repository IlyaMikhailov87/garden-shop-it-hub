import s from './HomePage.module.scss';
import Discount from '../../components/Discount';
import Categories from '../../components/Categories';
import DiscountBanner from '../../components/DiscountBanner';
import { Sale } from '../../components/Sale';
import { useRef } from 'react';

function HomePage({ setModalState }) {
  const scrollRef = useRef();

  function autoScroll() {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className={s.home}>
      <Discount autoScroll={autoScroll} />
      <Categories length={4} navBtn={true} />
      <DiscountBanner setModalState={setModalState} />
      <Sale ref={scrollRef} />
    </div>
  );
}

export default HomePage;
