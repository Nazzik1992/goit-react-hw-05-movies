import {NavLink} from 'react-router-dom'
import css from './Header.module.css'

const navItems = [
    { href: '/', text: 'Home' },
    { href: 'movies', text: 'Movies' },
  ];

 const Header = () => {
    return (
      <ul className={css.HeaderList}>
        {navItems.map(({ href, text }) => (
          <li className={css.HeaderText} key={href}>
            <NavLink to={href} className={css.HeaderLink}>{text}</NavLink>
          </li>
        ))}
      </ul>
    );
  };

  export default Header;