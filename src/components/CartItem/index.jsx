import s from './CartItem.module.scss';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { BASE_URL } from '../..';
import Counter from '../UI/Counter';
import { addItemAction, deleteItemAction } from '../../store/cartReducer';
import { useNavigate } from 'react-router-dom';

function CartItem({ item, id, title, image, price, discont_price, count }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeCount = (operation) => {
    const operations = {
      '+': () => dispatch(addItemAction({ ...item, count: +1 })),
      '-': () => dispatch(addItemAction({ ...item, count: -1 })),
    };
    return operations[operation];
  };

  const handleDeleteFromCart = (id, title, count) => {
    const message = `Successfully deleted from cart <strong>${title}</strong> in the amount of <strong>${count}</strong> count.`

    toast.error(
      <div dangerouslySetInnerHTML={{ __html: message }}></div>,
      {
        position: 'bottom-right',
      },
    );
    dispatch(deleteItemAction({ id, count }));
  };

  return (
    <div key={id} className={s.item}>
      <img src={BASE_URL + image} alt={item.title} className={s.image} onClick={() => navigate('/products/' + id)} />
      <div className={s.product_info}>
        <h3 className={s.title}>{title}</h3>
        <div className={s.counter_prices}>
          <Counter count={count} changeCount={changeCount} />
          <div className={s.prices}>
            <p className={s.new_price}>
              ${discont_price ? discont_price : price}
            </p>
            <p className={s.old_price}>
              {discont_price === null ? '' : '$' + price}
            </p>
          </div>
        </div>
      </div>
      <button className={s.close_btn} onClick={() => handleDeleteFromCart(id, title, count)}>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}

export default CartItem;
