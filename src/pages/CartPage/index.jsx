import s from './CartPage.module.scss';
import Container from '../../components/Container';
import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem';
import NavButton from '../../components/UI/NavButton';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/UI/Button';
import Form from '../../components/UI/Form';

function CartPage({ setModalState }) {
  const { cart, totalCount, totalAmount } = useSelector((store) => ({
    cart: store.cart.cart,
    totalCount: store.cart.totalCount,
    totalAmount: store.cart.totalAmount,
  }));
  const navigate = useNavigate();
  const navigateToProducts = () => navigate('/products/all');

  return (
    <div className={s.cart}>
      <Container>
        <div className={s.title_line}>
          <h2 className={s.title}>Shopping cart</h2>
          <NavButton
            title={'Back to the store'}
            onClick={() => navigateToProducts()}
          />
        </div>
        {cart.length ? (
          <div className={s.cart_wrap}>
            <div className={s.cart_list}>
              {cart.map((elem) => (
                <CartItem
                  item={elem}
                  id={elem.id}
                  title={elem.title}
                  image={elem.image}
                  price={elem.price}
                  discont_price={elem.discont_price}
                  count={elem.count}
                  key={elem.id}
                />
              ))}
            </div>
            <div className={s.amount}>
              <h3 className={s.amount_title}>Order details</h3>
              <p className={s.total_count}>{totalCount} items</p>
              <div className={s.total_amount}>
                <p className={s.total_title}>Total</p>
                <p className={s.price}>${totalAmount.toFixed(2)}</p>
              </div>
              <Form
                theme={'white'}
                titleForBtn={'Order'}
                themeForBtn={'green'}
                sizeForBtn={'xl'}
                type={'cart'}
                setModalState={setModalState}
              />
            </div>
          </div>
        ) : (
          <div className={s.cart_empty}>
            <p>Looks like you have no items in your basket currently.</p>
            <Button
              title={'Continue Shopping'}
              theme={'green'}
              size={'small'}
              onClick={() => navigateToProducts()}
            />
          </div>
        )}
      </Container>
    </div>
  );
}

export default CartPage;
