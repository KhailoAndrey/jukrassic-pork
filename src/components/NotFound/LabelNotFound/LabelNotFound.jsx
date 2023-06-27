import PropTypes from 'prop-types';
import scss from './LabelNotFound.module.scss';

function LabelNotFound({ labelNotFound }) {
  return <h1 className={scss.labelNotFound}>{labelNotFound}</h1>;
}

LabelNotFound.propTypes = {
  labelNotFound: PropTypes.string.isRequired,
};

export default LabelNotFound;
