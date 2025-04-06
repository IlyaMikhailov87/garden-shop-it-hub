import s from './ProductItem.module.scss';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ProductItem({
  id,
  img,
  title,
  price,
  discont_price,
  btnClick,
  count,
}) {
  const navigate = useNavigate();

  const calculateDiscountPercentage = (price, discountPrice) => {
    if (discountPrice !== null) {
      const discount = ((price - discountPrice) / price) * 100;
      const discountPercentage = Math.round(discount * 100) / 100;

      return Math.floor(discountPercentage);
    }
  };
  const handleAddToCart = (e, title, count) => {
    e.stopPropagation();

    const message = `Successfully added to cart <strong>${title}</strong> in the amount of <strong>${count}</strong> count.`

    toast.success(
      <div dangerouslySetInnerHTML={{ __html: message }}></div>,
      {
        position: 'bottom-right',
      },
    );
    btnClick();
  };

  return (
    <div className={s.item} onClick={() => navigate(`/products/${id}`)}>
      {discont_price && (
        <div className={s.discount}>
          -{calculateDiscountPercentage(price, discont_price)}%
        </div>
      )}
      <div className={s.img}>
        <img src={img} alt={title} />
        <Button
          title={'Add to cart'}
          theme={'green'}
          size={'xl'}
          onClick={(e) => handleAddToCart(e, title, count ? count : 1)}
        />
      </div>
      <div className={s.text_info}>
        <h4 className={s.title}>{title}</h4>
        <div className={s.prices}>
          <p className={s.new_price}>
            ${discont_price ? discont_price : price}
          </p>
          <p className={s.old_price}>
            {discont_price === null ? '' : '$' + price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
