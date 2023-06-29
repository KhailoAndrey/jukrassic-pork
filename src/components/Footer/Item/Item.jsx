import { ReactComponent as Envelop } from '../../../images/Footer/envelop.svg';
import scss from '../Footer.module.scss';

const Item = ({ title, text, link, button }) => {
  return (
    <li>
      {title && <h4>{title}</h4>}

      {link && text && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      )}

      {title === 'Email' && (
        <button>
          <Envelop className={scss.envelopIcon} />

          <span>Mail us</span>
        </button>
      )}
    </li>
  );
};

export default Item;

// socials: {link, text}
// contacts: {title, link, text}
