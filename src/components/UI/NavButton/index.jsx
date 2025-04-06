import s from './NavButton.module.scss';

function NavButton({ title, ...otherProps }) {
  return (
    <button className={s.btn} {...otherProps}>
      {title}
    </button>
  );
}

export default NavButton; 
