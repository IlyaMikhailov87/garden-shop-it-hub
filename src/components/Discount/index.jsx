import s from './Discount.module.scss';
import Container from '../../components/Container';
import Button from '../../components/UI/Button';

function Discount({ autoScroll }) {
  return (
    <div
      className={s.discounts}
      style={{
        background:
          'url(/garden-shop-it-hub/img/main-img.jpg) no-repeat center center / cover',
      }}
    >
      <Container>
        <h1 className={s.title}>
          Amazing Discounts on Garden Products!
        </h1>
        <Button title={'Check out'} theme={'green'} size={'small'} onClick={autoScroll} />
      </Container>
    </div>
  );
}

export default Discount;
