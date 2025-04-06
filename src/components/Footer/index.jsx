import s from './Footer.module.scss';
import Container from '../Container';
import Map from '../Map';
import { ReactComponent as InstagramSvg } from '../../icons/ic-instagram.svg';
import { ReactComponent as WhatsappSvg } from '../../icons/ic-whatsapp.svg';

function Footer() {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.wrapper}>
          <h2 className={s.title}>Contact</h2>
          <div className={s.info}>
            <div className={s.infoElem}>
              <span>Contact</span>
              <h3>+7 (499) 350-66-04</h3>
            </div>
            <div className={s.infoElem}>
              <span>Socials</span>
              <div className={s.socialsWrapper}>
                <InstagramSvg />
                <WhatsappSvg />
              </div>
            </div>
            <div className={s.infoElem}>
              <span>Address</span>
              <h3>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</h3>
            </div>
            <div className={s.infoElem}>
              <span>Working Hours</span>
              <h3>24 hours a day</h3>
            </div>
          </div>
          <Map />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
