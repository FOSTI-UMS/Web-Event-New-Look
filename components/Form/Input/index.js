import PropTypes from 'prop-types';
import { ExclamationCircleIcon } from '@heroicons/react/solid';

import randomId from '../../../utils/random-id';

export default function Input({
  labelText, onBlur, onChange, errorMessage, helperText, ...inputProps
}) {
  const id = `input-${randomId()}`;

  return (
    <div>
      <div className="relative group">
        <input
          {...inputProps}
          id={id}
          className="peer block text-sm w-full p-3 pt-5 pb-2 border-b border-gray-400 bg-gray-50 focus:outline-none focus:border-red-500"
          onInput={(ev) => onChange(ev.target.value)}
          onBlur={(ev) => onBlur(ev.target.value)}
          autoComplete="off"
        />

        {labelText && (
          <label
            htmlFor={id}
            className="absolute top-0 left-0 mt-4 ml-3 text-sm text-gray-400 cursor-text select-none transition-all peer-valid:mt-0.5 peer-valid:text-[10px] peer-focus:mt-0.5 peer-focus:text-[10px] peer-focus:text-red-500"
          >
            {labelText}
          </label>
        )}

        {errorMessage && (
          <div className="absolute mr-4 top-1/2 right-0 transform -translate-y-1/2">
            <ExclamationCircleIcon className="w-4 h-4 text-red-500" />
            <span className="absolute right-0 mr-6 -mt-5 py-1 px-2 bg-red-500 text-white rounded text-xs whitespace-nowrap">
              {errorMessage}
            </span>
          </div>
        )}
      </div>

      {helperText && (
        <div className="text-xs text-gray-400 mt-2">
          {helperText}
        </div>
      )}
    </div>
  );
}

Input.propTypes = {
  labelText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  errorMessage: PropTypes.string,
  helperText: PropTypes.string,
};

Input.defaultProps = {
  onBlur: () => {},
  labelText: null,
  errorMessage: null,
  helperText: null,
};
