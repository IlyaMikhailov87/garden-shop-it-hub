import { useEffect } from 'react';
import Categories from '../../components/Categories';
import { useLocation } from 'react-router-dom';

function CategoriesPage() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Categories length={5} navBtn={false} />
    </div>
  );
}

export default CategoriesPage;