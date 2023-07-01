import scss from '../Footer.module.scss';

const Item = ({ title, name, link }) => {
  return (
    <li>
      {title && <h4>{title}</h4>}

      {link && name && (
        <a
          className={scss.address__social_list_link}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      )}
    </li>
  );
};

export default Item;
