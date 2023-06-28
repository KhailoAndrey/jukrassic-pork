import scss from './HeaderMenu.module.scss';
import { MdArrowForward } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../images/Logo.svg';
import { ReactComponent as Burger } from '../../../images/burger_menu.svg';

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

function HeaderMenu() {
  return (
    <div className={scss.header_menu}>
      <button className={scss.logo} onClick={handleScrollToTop}>
        <Logo />
      </button>
      <NavLink to="/music" className={scss.link}>
        <p>Listen to music</p>
        <MdArrowForward style={{ verticalAlign: 'middle', fontSize: '24px' }} />
      </NavLink>
      <button className={scss.burger_btn}>
        <Burger />
      </button>
    </div>
  );
}

export default HeaderMenu;
