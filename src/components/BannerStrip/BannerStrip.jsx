import React from 'react';

// import Marquee from 'react-fast-marquee';
import scss from './BannerStrip.module.scss';
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
      <div className={scss.bannerContainer}>
        <div className={scss.bannerTextContainer}>
          <span className={scss.bannerText}>
            {textItems.map((item, index) => (
              <React.Fragment key={index}>
                {index >= 0 && (
                  <img src={icon} alt="Icon" className={scss.icon} />
                )}
                <span>{item.text}</span>
              </React.Fragment>
            ))}
          </span>
          {/* <Marquee>
            I can be a React component, multiple React components, or just some
            text.
          </Marquee> */}
        </div>
      </div>
    </>
  );
};

export default BannerStrip;
