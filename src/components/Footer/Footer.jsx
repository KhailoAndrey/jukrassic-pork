// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';

import Item from './Item/Item';
import { ReactComponent as Logo } from '../../images/Footer/footer-logo.svg';
import scss from './Footer.module.scss';

const contacts = [
  { title: 'Email', text: 'pork@pork.com.ua' },
  { title: 'Call', text: '+380991111111', link: 'tel:+380991111111' },
];

const socials = [
  {
    text: 'youtube',
    link: 'https://www.youtube.com/channel/UCkqTUZ2u0Yrn_D4Nh5J-zaQ',
  },
  { text: 'facebook', link: 'https://www.facebook.com/JukrassicPork/' },
  {
    text: 'spotify',
    link: 'https://open.spotify.com/artist/3jkSb8Xr4ybbQCunwYa31c',
  },
  { text: 'sound cloud', link: 'https://soundcloud.com/vyacheslav-lozowy' },
  {
    text: 'apple music',
    link: 'https://music.apple.com/ua/artist/jukrassic-pork/1465099621',
  },
];

function Footer() {
  const getCurrentYear = new Date().getFullYear();

  // TODO: useContacts hook for dynamic data

  return (
    <footer className={`${scss.footer}`}>
      <div className={`container ${scss.footerWrap}`}>
        <div className={scss.appealWrap}>
          <h3>Get in touch</h3>
          <p>
            Let us know if you have any requests or suggestions. We are open to
            cooperation with concert organizers and promoters.
          </p>
        </div>

        <address className={scss.addressWrap}>
          {/* socials */}
          <div>
            <h4>Follow us</h4>
            <ul>
              {socials.map(({ link, text }, index) => (
                <Item key={index} link={link} text={text} />
              ))}
            </ul>
          </div>

          {/* contacts */}
          <ul className={scss.contactsWrap}>
            {contacts.map(({ title, link, text }, index) => (
              <Item key={index} title={title} link={link} text={text} />
            ))}
          </ul>

          <Logo className={scss.footerLogo} />
        </address>

        <p>{`Copyright © 2016-${getCurrentYear} Jukrassic Pork ®. All Rights Reserved.`}</p>
      </div>
    </footer>
  );
}

export default Footer;
