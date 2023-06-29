import { ReactComponent as Envelop } from '../../../images/Footer/envelop.svg';
import scss from '../Footer.module.scss';

const Item = ({ title, name, link }) => {
  console.log('name:', name);
  console.log('link:', link);
  return (
    <li>
      {title && <h4>{title}</h4>}

      {link && name && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {name}
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
