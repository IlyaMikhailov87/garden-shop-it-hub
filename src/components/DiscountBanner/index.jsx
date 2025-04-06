import s from './DiscountBanner.module.scss';
import Container from '../Container';
import Form from '../UI/Form';

function DiscountBanner({ setModalState }) {
  return (
    <div className={s.banner}>
      <Container>
        <div
          className={s.wrapper}
          style={{
            background:
              'url(/garden-shop-it-hub/img/discount-banner.png) no-repeat 0 100%, linear-gradient(261deg, #0b710b 32.63%, #393 98.96%)',
          }}
        >
          <h2 className={s.title}>5% off on the first order</h2>
          <Form
            theme={'transparent'}
            titleForBtn={'Get a discount'}
            themeForBtn={'white'}
            sizeForBtn={'xl'}
            setModalState={setModalState}
          />
        </div>
      </Container>
    </div>
  );
}

export default DiscountBanner;
