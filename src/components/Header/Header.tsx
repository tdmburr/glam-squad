import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../Assets/glam-logo.png';

const Header = () => {
  return (
    <header className='header-container'>
      <Link to="/">
        <img src={logo} id='header-logo' alt="Glam-Squad logo" />
      </Link>
      <h1 className='slogan'>
        Elevate your beauty game with Glam Squad!
      </h1>        
    </header>
  );
};

export default Header;
