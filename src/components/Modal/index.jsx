import s from './Modal.module.scss';
import { useEffect } from 'react';

function Modal({ modalState, setModalState }) {
  useEffect(() => {
    if (modalState) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
    return () => {
        document.body.style.overflow = 'auto';
    };
}, [modalState]);

  return (
    <div className={s.modal} style={{ display: modalState ? "flex" : "none" }}>
      <div className={s.modal_content}>
        <h2>Congratulations!</h2>
        <p>Your order has been successfully placed on the website.</p>
        <p>A manager will contact you shortly to confirm your order.</p>
        <button className={s.btn_close} onClick={() => setModalState(false)}>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
}

export default Modal;