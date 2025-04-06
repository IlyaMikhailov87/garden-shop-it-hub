import s from './ProductPage.module.scss';
import Container from '../../components/Container';
import Button from '../../components/UI/Button';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProductById } from '../../asyncActions/products';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../..';
import Counter from '../../components/UI/Counter';
import { addItemAction } from '../../store/cartReducer';
import BackLink from '../../components/UI/BackLink';

function ProductPage() {
  const { products } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [count, setCount] = useState(1);

  const changeCount = (operation) => {
    const operations = {
      '+': () => setCount(count + 1),
      '-': () => setCount(count - 1),
    };

    return operations[operation];
  };
  const handleAddToCart = (elem, title, count) => {
    const message = `Successfully added to cart <strong>${title}</strong> in the amount of <strong>${count}</strong> count.`

    toast.success(
      <div dangerouslySetInnerHTML={{ __html: message }}></div>,
      {
        position: 'bottom-right',
      },
    );
    dispatch(addItemAction({ ...elem, count: count }));
  };

  useEffect(() => {
    dispatch(fetchProductById(id));

    window.scrollTo(0, 0);
  }, [dispatch, id]);

  return (
    <div>
      <Container>
      <BackLink type={'productPage'} />
        {products.map((elem) => (
          <div key={elem.id} className={s.product}>
            <div className={s.productImage_wrapper}>
              <img src={BASE_URL + elem.image} alt={elem.title} />
            </div>
            <div className={s.productInfo_wrapper}>
              <h2 className={s.product_title}>{elem.title}</h2>
              <div className={s.price_wrapper}>
                <p className={s.new_price}>
                  $
                  {elem.discont_price
                    ? elem.discont_price
                    : elem.price}
                </p>
                <p className={s.old_price}>
                  {elem.discont_price === null
                    ? ''
                    : '$' + elem.price}
                </p>
              </div>
              <div className={s.controls_wrapper}>
                <Counter count={count} changeCount={changeCount} />
                <Button
                  title={'Add to cart'}
                  theme={'green'}
                  size={'xl'}
                  onClick={() => handleAddToCart(elem, elem.title, count)}
                />
              </div>
              <h3 className={s.description_title}>Description</h3>
              <p className={s.description_text}>{elem.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default ProductPage;
