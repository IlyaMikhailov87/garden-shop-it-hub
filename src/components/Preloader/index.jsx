import s from './Preloader.module.scss';
import { useState, useEffect } from 'react';

function Preloader() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const handleOnLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handleOnLoad);
    }

    return () => {
      window.removeEventListener('load', handleOnLoad);
    };
  }, []);

  return (
    <div
      className={s.preloader}
      style={{ display: isLoading ? 'flex' : 'none' }}
    >
      <span className={s.loader}></span>
    </div>
  );
}

export default Preloader;
