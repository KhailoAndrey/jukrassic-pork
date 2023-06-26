import React from 'react';
import styles from './BannerStrip.module.css';
import icon from '../../images/Vector.svg';

const BannerStrip = () => {
  const textItems = [
    { text: 'jukrassic pork' },
    { text: 'listen. watch. enjoy.' },
    { text: 'jukrassic pork' },
    { text: 'listen. watch. enjoy.' },
    { text: 'jukrassic pork' },
    { text: 'listen. watch. enjoy.' },
    { text: 'jukrassic pork' },
    // { text: 'listen. watch. enjoy.' },
    // { text: 'jukrassic pork' },
    // { text: 'listen. watch. enjoy.' },
  ];

  return (
    <>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerTextContainer}>
          <span className={styles.bannerText}>
            {textItems.map((item, index) => (
              <React.Fragment key={index}>
                {index >= 0 && (
                  <img src={icon} alt="Icon" className={styles.icon} />
                )}
                <span>{item.text}</span>
              </React.Fragment>
            ))}
          </span>
        </div>
      </div>
    </>
  );
};

export default BannerStrip;
