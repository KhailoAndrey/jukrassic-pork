// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';

import useFetch from 'hooks/useFetch';
import Item from './Item/Item';
import { ReactComponent as Logo } from '../../images/Footer/footer-logo.svg';
import { ReactComponent as Envelop } from '../../images/Footer/envelop.svg';
import scss from './Footer.module.scss';

function Footer() {
  const getCurrentYear = new Date().getFullYear();
  const { isLoading, data } = useFetch('contacts');
  console.log('data:', data);
  console.log('isLoading:', isLoading);

  return (
    !isLoading && (
      <footer className={scss.footer} id="contacts">
        <div className={`container ${scss.footer__wrap}`}>
          <div className={scss.appeal__wrap}>
            <h2 className={scss.appeal__title}>{data && data.title.en}</h2>

            <p className={scss.appeal__desc}>{data && data.description.en}</p>
          </div>

          <address className={scss.address__wrap}>
            {/* socials */}
            <div className={scss.address__wrap_secondary}>
              <h3 className={scss.address__title}>Follow us</h3>
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
                <h3 className={scss.address__title}>Email</h3>
                <a
                  className={scss.address__social_list_link}
                  href={data && `mailto:${data.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data && data.email}
                </a>

                <button className={scss.mail_btn}>
                  <Envelop className={scss.envelopIcon} />

                  <span className={scss.mail_btn__text}>Mail us</span>
                </button>
              </li>

              {/* phone */}
              <li>
                <h3 className={scss.address__title}>Call</h3>
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
      </footer>
    )
  );
}

export default Footer;
