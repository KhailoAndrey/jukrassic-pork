import { useContext, useEffect, useState } from 'react';
import useFetch from 'hooks/useFetch';
import Item from './Item/Item';
import ModalForm from './ModalForm/ModalForm';
import { ReactComponent as Logo } from '../../images/Logotype.svg';
import { ReactComponent as Envelop } from '../../images/Footer/envelop.svg';
import scss from './Footer.module.scss';
import { LanguageContext } from 'utils/LanguageContext';

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentLanguage } = useContext(LanguageContext);
  const { isLoading, data } = useFetch('contacts');

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('no_scroll');
      return;
    }
    document.body.classList.remove('no_scroll');
  }, [isModalOpen]);

  const getCurrentYear = new Date().getFullYear();

  return (
    <>
      {!isLoading && (
        <footer className={scss.footer} id="contacts">
          <div className={`container ${scss.footer__wrap}`}>
            <div className={scss.appeal__wrap}>
              <h2 className={scss.appeal__title}>
                {data && data.title[currentLanguage]}
              </h2>

              <p className={scss.appeal__desc}>
                {data && data.description[currentLanguage]}
              </p>
            </div>

            <address className={scss.address__wrap}>
              {/* socials */}
              <div className={scss.address__wrap_secondary}>
                <h3 className={scss.address__title}>
                  {/* FIXME: fix with i18next */}
                  {currentLanguage === 'en' ? `Follow us` : 'Слідкуйте'}
                </h3>

                <ul className={scss.address__social_list}>
                  {data &&
                    data.socialMediaList.map(({ link, name, id }) => (
                      <Item key={id} link={link} name={name} />
                    ))}
                </ul>
              </div>

              {/* contacts */}
              <ul
                className={[
                  scss.contacts_wrap,
                  scss.address__wrap_secondary,
                ].join(' ')}
              >
                <li>
                  {/* email */}
                  <h3 className={scss.address__title}>
                    {/* FIXME: fix with i18next */}
                    {currentLanguage === 'en' ? `Email` : 'Пишіть'}
                  </h3>
                  <a
                    className={scss.address__social_list_link}
                    href={data && `mailto:${data.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data && data.email}
                  </a>

                  <button
                    className={scss.mail_btn}
                    type="button"
                    onClick={() => {
                      setIsModalOpen(true);
                    }}
                  >
                    <Envelop className={scss.envelopIcon} />

                    <span className={scss.mail_btn__text}>
                      {/* FIXME: fix with i18next or leave it in EN as in mockup? */}
                      {currentLanguage === 'en' ? `Mail us` : 'Mail us'}
                    </span>
                  </button>
                </li>

                {/* phone */}
                <li>
                  <h3 className={scss.address__title}>
                    {/* FIXME: fix with i18next */}
                    {currentLanguage === 'en' ? `Call` : 'Дзвоніть'}
                  </h3>
                  <a
                    className={scss.address__social_list_link}
                    href={data && `tel:${data.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data && data.phone}
                  </a>
                </li>
              </ul>
            </address>
            <Logo className={scss.logo} />

            <p
              className={scss.copyright}
            >{`Copyright © 2016-${getCurrentYear} Jukrassic Pork ®. All Rights Reserved.`}</p>
          </div>
          {isModalOpen && (
            <ModalForm
              onClose={() => {
                setIsModalOpen(!isModalOpen);
              }}
            />
          )}
        </footer>
      )}
    </>
  );
}

export default Footer;
