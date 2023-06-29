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
      <footer className={scss.footer}>
        <div className={`container ${scss.footer__wrap}`}>
          <div className={scss.appeal__wrap}>
            <h2 className={scss.appeal__title}>{data && data.title.en}</h2>

            <p className={scss.appeal__desc}>{data && data.description.en}</p>
          </div>

          <address className={scss.address__wrap}>
            {/* socials */}
            <div>
              <h3 className={scss.address__title}>Follow us</h3>
              <ul>
                {data &&
                  data.socialMediaList.map(({ link, name, id }) => (
                    <Item key={id} link={link} name={name} />
                  ))}
              </ul>
            </div>

            {/* contacts */}
            <ul className={scss.contactsWrap}>
              <li>
                <h3 className={scss.address__title}>Email</h3>
                <a
                  href={data && `mailto:${data.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data && data.email}
                </a>

                <button>
                  <Envelop className={scss.envelopIcon} />

                  <span>Mail us</span>
                </button>
              </li>

              <li>
                <h3 className={scss.address__title}>Call</h3>
                <a
                  href={data && `tel:${data.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data && data.phone}
                </a>
              </li>

              {/* {data &&
                data.map(({ title, link, name, id }, index) => (
                  <Item key={index} title={title} link={link} text={name} />
                ))} */}
            </ul>

            <Logo className={scss.footerLogo} />
          </address>

          <p>{`Copyright © 2016-${getCurrentYear} Jukrassic Pork ®. All Rights Reserved.`}</p>
        </div>
      </footer>
    )
  );
}

export default Footer;
