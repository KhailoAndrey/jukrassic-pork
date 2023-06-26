import styles from './Main.module.css';
import Marquee from './Marquee';

const Main = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.mainBox}></div>
      </div>
      <Marquee />
    </>
  );
};

export default Main;
