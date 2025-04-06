import s from './Categories.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Container from '../Container';
import NavButton from '../UI/NavButton';
import { fetchCategoriesList } from '../../asyncActions/categories';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../..';
import CategoriesSkeleton from './CategoriesSkeleton';

function Categories({ length, navBtn }) {
  const categories = useSelector((store) => store.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const skeletonArr = Array.from({ length: 4 }, (_, index) => (
    <CategoriesSkeleton key={index} />
  ));

  useEffect(() => {
    dispatch(fetchCategoriesList(() => setLoading(false)));
  }, []);

  return (
    <div className={s.categories}>
      <Container>
        <div className={s.title_line}>
          <h2 className={s.title}>Categories</h2>
          {navBtn && (
            <NavButton
              title={'All categories'}
              onClick={() => navigate('/categories')}
            />
          )}
        </div>
        <ul className={s.category_list}>
          {isLoading
            ? skeletonArr.map((component) => component)
            : categories.slice(0, length).map((elem) => (
                <Link
                  className={s.category}
                  key={elem.id}
                  to={'/categories/' + elem.id}
                >
                  <li>
                    <div
                      style={{
                        background: `url(${BASE_URL}${elem.image}) no-repeat center center / cover`,
                      }}
                      className={s.category_image}
                    ></div>
                    <p className={s.category_name}>{elem.title}</p>
                  </li>
                </Link>
              ))}
        </ul>
      </Container>
    </div>
  );
}

export default Categories;
