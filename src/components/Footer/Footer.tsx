import { CURRENT_YEAR } from '../../config';

import './styles/app__footer.css';
import './styles/footer.css';
import './styles/footer__info-text.css';
import './styles/footer__info-text_type_author.css';
import './styles/footer__info-text_type_date.css';

const Footer = (): JSX.Element => {
  return (
    <footer className='footer app__footer'>
      <p className='footer__info-text footer__info-text_type_author'>Developed by GreysMouse</p>
      <p className='footer__info-text footer__info-text_type_date'>{ CURRENT_YEAR }</p>
    </footer>
  );
}

export default Footer;
