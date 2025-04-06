import s from './Header.module.scss';
import { ReactComponent as LogoSvg } from '../../icons/logo.svg';
import { ReactComponent as CartSvg } from '../../icons/cart.svg';
import Container from '../Container';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const nav = [
  { id: 1, title: 'Main Page', path: '/' },
  { id: 2, title: 'Categories', path: '/categories' },
  { id: 3, title: 'All products', path: '/products/all' },
  { id: 4, title: 'All sales', path: '/products/sales' },
];

function Header() {
  const { totalCount } = useSelector((store) => store.cart);
  const { pathname } = useLocation();
  const [burgerOpen, setBurgerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <header className={s.header}>
      <Container>
        <div className={s.wrapper}>
          <LogoSvg onClick={() => navigate('/')} />
          <button
            className={s.burgerBtn}
            onClick={() => toggleMenu()}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul
            className={`${s.list} ${burgerOpen ? s.activeBurger : ''}`}
          >
            {nav.map((elem) => (
              <li
                key={elem.id}
                className={pathname === elem.path ? s.active : ''}
                onClick={() => toggleMenu()}
              >
                <Link to={elem.path}>{elem.title}</Link>
              </li>
            ))}
          </ul>
          <div className={s.cart} onClick={() => navigate('/cart')}>
            <CartSvg />
            {totalCount ? <span>{totalCount}</span> : ''}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
