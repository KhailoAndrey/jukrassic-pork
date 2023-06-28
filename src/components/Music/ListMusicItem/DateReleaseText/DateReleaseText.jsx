import PropTypes from 'prop-types';

import scss from './DateReleaseText.module.scss';

function DateReleaseText({ dateReleaseText }) {
  return <p className={scss.dateReleaseText}>{dateReleaseText}</p>;
}

DateReleaseText.propTypes = {
  dateReleaseText: PropTypes.string.isRequired,
};

export default DateReleaseText;
