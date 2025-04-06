import s from './NotFoundPage.module.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/UI/Button';
import Container from '../../components/Container';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className={s.wrapper}>
      <Container>
        <div className={s.info}>
          <img src="/garden-shop-it-hub/img/404.png" alt="Page Not Found" />
          <h1>Page Not Found</h1>
          <p>
            We’re sorry, the page you requested could not be found.
            Please go back to the homepage.
          </p>
          <Button
            title={'Go Home'}
            theme={'green'}
            size={'small'}
            onClick={() => navigate('/')}
          />
        </div>
      </Container>
    </div>
  );
}

export default NotFoundPage;
