import s from './Counter.module.scss';

function Counter({ count, changeCount }) {
  const changeColor = () => {
    if (count % 2 === 0) {
      return s.change_color1
    } else return s.change_color2
  }

  return (
    <div className={s.counter}>
      <button className={s.btn} disabled={count === 1} onClick={changeCount('-')}>
        <span></span>
      </button>
      <p className={`${s.count} ${changeColor()}`}>{count}</p>
      <button className={s.btn} onClick={changeCount('+')}>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}

export default Counter;