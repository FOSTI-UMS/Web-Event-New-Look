import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Button({ children, isLoading, disabled }) {
  const isDisabled = isLoading || disabled;

  const disabledStyles = 'bg-gray-100 text-gray-400 transition-colors cursor-default';
  const activeStyles = 'bg-red-500 text-white hover:bg-red-600';

  return (
    <div>
      <button
        disabled={isDisabled}
        type="submit"
        className={
          classnames(
            'mt-8 flex items-center py-3 px-5 font-medium rounded',
            (isDisabled ? disabledStyles : activeStyles),
          )
        }
      >
        {!isLoading ? children : (
          <>
            <div className="w-5 h-5 border-2 border-gray-300 border-r-transparent rounded-full mr-3 animate-spin" />
            <span>Please wait...</span>
          </>
        )}
      </button>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};
