import scss from './ButtonShowMoreMusic.module.scss';

function ButtonShowMoreMusic({ valueShowMoreMusic }) {
  return <button className={scss.showMore}>{valueShowMoreMusic}</button>;
}

export default ButtonShowMoreMusic;
