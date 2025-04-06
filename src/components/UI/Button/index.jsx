import s from './Button.module.scss';

function Button({ title, theme, size, ...otherProps }) {
  return (
    <button
      {...otherProps}
      className={`${s.btn} ${s[theme]} ${s[size]}`}
    >
      {title}
    </button>
  );
}

export default Button;