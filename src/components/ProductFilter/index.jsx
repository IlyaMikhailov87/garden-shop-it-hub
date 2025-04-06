import s from './ProductFilter.module.scss';
import { useDispatch } from 'react-redux';
import { filterAction } from '../../store/productsReducer';
import { useRef, useState } from 'react';

function ProductFilter({ filterBySale }) {
  const dispatch = useDispatch();
  const formRef = useRef();
  const [selectOpen, setSelectOpen] = useState(false)

  const handleForm = () => {
    const form_data = new FormData(formRef.current);
    const data = Object.fromEntries(form_data);

    data.max = data.max ? +data.max : Infinity;
    data.min = data.min ? +data.min : 0;
    data.checkbox = Boolean(data.checkbox);

    dispatch(filterAction(data));
  };

  return (
    <div>
      <form ref={formRef} onChange={handleForm} className={s.filter_items}>
        <div className={s.filter_by_price}>
          <p>Price</p>
          <input type="number" name="min" placeholder="from" />
          <input type="number" name="max" placeholder="to" />
        </div>
        {filterBySale && (
          <div className={s.filter_by_sale}>
            <input name="checkbox" type="checkbox" id="cb" />
            <label htmlFor="cb">Discounted items</label>
          </div>
        )}
        <div className={s.select_wrap} onClick={() => setSelectOpen(!selectOpen)}>
          <label>Sorted</label>
          <div className={s.arrow_down} style={{ transform: selectOpen ? "rotate(180deg)" : "rotate(0)" }}></div>
          <select name="select">
            <option value="by default">by default</option>
            <option value="newest">newest</option>
            <option value="price: high-low">price: high-low</option>
            <option value="price: low-high">price: low-high</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default ProductFilter;
