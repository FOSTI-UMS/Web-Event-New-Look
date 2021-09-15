import PropTypes from 'prop-types';
import { MenuIcon } from '@heroicons/react/outline';

export default function Button({ handleClick }) {
  return (
    <button type="button" className="text-white px-4" onClick={handleClick}>
      <MenuIcon className="w-5 h-5" />
    </button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  handleClick: () => {},
};
