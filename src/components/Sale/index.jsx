import s from './Sale.module.scss';
import Container from '../Container';
import NavButton from '../UI/NavButton';
import { useDispatch, useSelector } from 'react-redux';
import { forwardRef, useEffect, useState } from 'react';
import { fetchAllProducts } from '../../asyncActions/products';
import { BASE_URL } from '../..';
import ProductItem from '../ProductItem';
import { useLocation, useNavigate } from 'react-router-dom';
import { addItemAction } from '../../store/cartReducer';
import ProductSkeleton from '../ProductItem/ProductSkeleton';

export const Sale = forwardRef((props, ref) => {
  const [isLoading, setLoading] = useState(true);
  const { products } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const skeletonsArr = Array.from({ length: 4 }, (_, index) => (
    <ProductSkeleton key={index} />
  ));

  useEffect(() => {
    dispatch(fetchAllProducts(() => setLoading(false)));
  }, [pathname]);

  return (
    <div className={s.sale} ref={ref}>
      <Container>
        <div className={s.title_line}>
          <h2 className={s.title}>Sale</h2>
          <NavButton
            title={'All sales'}
            onClick={() => navigate('/products/sales')}
          />
        </div>
        <div className={s.wrapper_list}>
          {isLoading
            ? skeletonsArr.map((component) => component)
            : products
                .sort((a, b) => b.discont_price - a.discont_price)
                .slice(0, 4)
                .map((elem) => (
                  <ProductItem
                    key={elem.id}
                    id={elem.id}
                    img={BASE_URL + elem.image}
                    title={elem.title}
                    price={elem.price}
                    discont_price={elem.discont_price}
                    btnClick={() => dispatch(addItemAction({ ...elem }))}
                  />
                ))}
        </div>
      </Container>
    </div>
  );
});
