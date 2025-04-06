import s from './ProductListPage.module.scss';
import Container from '../../components/Container';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllProducts,
  fetchAllProductsByCategories,
  fetchAllProductsSale,
} from '../../asyncActions/products';
import ProductItem from '../../components/ProductItem';
import { BASE_URL } from '../..';
import { useLocation, useParams } from 'react-router-dom';
import ProductFilter from '../../components/ProductFilter';
import ProductSkeleton from '../../components/ProductItem/ProductSkeleton';
import { addItemAction } from '../../store/cartReducer';
import BackLink from '../../components/UI/BackLink';

function ProductListPage({ type }) {
  const { categories_name, products } = useSelector((store) => ({
    categories_name: store.products.categories_name,
    products: store.products.products.filter((elem) => elem.isShow),
  }));
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const actions = {
    all: () => dispatch(fetchAllProducts(() => setLoading(false))),
    sale: () => dispatch(fetchAllProductsSale(() => setLoading(false))),
    categories: () => dispatch(fetchAllProductsByCategories(id, () => setLoading(false))),
  };
  const skeletonsArr = Array.from({ length: 12 }, (_, index) => (
    <ProductSkeleton key={index} />
  ));

  useEffect(() => {
    actions[type]();

    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={s.product_list}>
      <Container>
      <BackLink type={'productsPage'} />
        <h1 className={s.title}>{categories_name}</h1>
        <ProductFilter filterBySale={type !== 'sale'} />
        <div className={s.wrapper}>
          {isLoading
            ? skeletonsArr.map((component) => component)
            : products.map((elem) => (
                <ProductItem
                  key={elem.id}
                  id={elem.id}
                  img={BASE_URL + elem.image}
                  title={elem.title}
                  price={elem.price}
                  discont_price={elem.discont_price}
                  btnClick={() => dispatch(addItemAction({ ...elem }))}
                  count={elem.count}
                />
              ))}
        </div>
        {isLoading ? '' : (!products.length && (
          <p className={s.wrong_filter}>
            Товаров по заданной фильтрации нет или задано неверное условие
            фильтрации!
          </p>
        ))}
      </Container>
    </div>
  );
}

export default ProductListPage;
