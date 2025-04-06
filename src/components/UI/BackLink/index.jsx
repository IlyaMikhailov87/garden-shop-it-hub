import s from './BackLink.module.scss';
import { ReactComponent as ArrowBack } from '../../../icons/arrow_back.svg';
import { useNavigate } from 'react-router-dom';

function BackLink({ type }) {
  const navigate = useNavigate();

  const types = {
    'productPage': s.productPage,
    'productsPage': s.productsPage
  }

  return (
    <div className={`${s.link} ${types[type]}`} onClick={() => navigate(-1)}>
      <ArrowBack />
      <p>Back</p>
    </div>
  );
}

export default BackLink;
