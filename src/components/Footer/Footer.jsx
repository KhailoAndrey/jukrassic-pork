// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';

import scss from './Footer.module.scss';

function Footer() {
  const getCurrentYear = new Date().getFullYear();

  return (
    <footer className={scss.footer}>
      <div>
        <h3>Get in touch</h3>
        <p>
          Let us know if you have any requests or suggestions. We are open to
          cooperation with concert organizers and promoters.
        </p>
      </div>
      <address>
        <ul>
          <li>
            <h4>Follow us</h4>
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCkqTUZ2u0Yrn_D4Nh5J-zaQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  youtube
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/JukrassicPork/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  facebook
                </a>
              </li>

              <li>
                <a
                  href="https://open.spotify.com/artist/3jkSb8Xr4ybbQCunwYa31c"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  spotify
                </a>
              </li>

              <li>
                <a
                  href="https://soundcloud.com/vyacheslav-lozowy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sound cloud
                </a>
              </li>

              <li>
                <a
                  href="https://music.apple.com/ua/artist/jukrassic-pork/1465099621"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  apple music
                </a>
              </li>
            </ul>
          </li>

          <li>
            <h4>Email</h4>
            <a href="mailto:pork@pork.com.ua">pork@pork.com.ua</a>
            <button>
              {/* FIXME: get svg of envelop */}
              {/* <svg></svg> */}
              <span>Mail us</span>
            </button>
          </li>

          <li>
            <h4>Call</h4>
            <a href="tel:+380991111111">+380 63 5908880</a>
          </li>
        </ul>
        {/* FIXME: get svg of logo */}
        {/* <svg></svg> */}
      </address>
      <p>{`Copyright © 2016-${getCurrentYear} Jukrassic Pork ®. All Rights Reserved.`}</p>
    </footer>
  );
}

export default Footer;
