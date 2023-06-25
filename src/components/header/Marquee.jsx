import React from 'react';
import styles from './Marquee.module.css';
import icon from '../../images/Vector.svg';

const Marquee = () => {
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
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTextContainer}>
          <span className={styles.marqueeText}>
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

export default Marquee;
