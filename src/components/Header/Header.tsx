import './styles/header.css';
import './styles/header__app-name.css';

const Header = (): JSX.Element => {
  return (
    <header className='header'>
      <p className='header__app-name'>Advanced TODO App</p>
    </header>
  );
}

export default Header;
