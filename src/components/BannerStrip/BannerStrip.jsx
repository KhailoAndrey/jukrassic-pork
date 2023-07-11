import React from 'react';
import Marquee from 'react-fast-marquee';
import { useTranslation } from 'react-i18next';
import icon from '../../images/Vector.svg';
import scss from './BannerStrip.module.scss';

const BannerStrip = () => {
    const { t } = useTranslation();

  const textItems = [{ text: 'jukrassic pork' }, { text: t('bannerstrip') }];

  return (
    <>
      <div className={scss.bannerContainer}>
        <div className={scss.bannerTextContainer}>
          <Marquee autoFill={true} speed={150}>
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
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default BannerStrip;
