import classnames from 'classnames';
import PropTypes from 'prop-types';
import { ExclamationCircleIcon } from '@heroicons/react/solid';

import randomId from '../../../utils/random-id';

export default function Input({
  labelText, onBlur, onChange, errorMessage, helperText, ...inputProps
}) {
  const id = `input-${randomId()}`;

  const inputBorderStyle = errorMessage ? 'border-red-500' : 'border-gray-100 border-b-gray-400 focus:border-b-gray-600';

  return (
    <div>
      {labelText && (
        <label
          htmlFor={id}
          className="inline-block mb-2 text-sm text-gray-400 cursor-text select-none transition-all peer-valid:mt-0.5 peer-valid:text-[10px] peer-focus:mt-0.5 peer-focus:text-[10px] peer-focus:text-red-500 md:text-gray-400"
        >
          {labelText}
        </label>
      )}

      <div className="relative group">
        <input
          {...inputProps}
          id={id}
          className={classnames('peer block text-sm w-full p-3 rounded border bg-gray-100 transition-colors focus:bg-gray-200 focus:outline-none', inputBorderStyle)}
          onInput={(ev) => onChange(ev.target.value)}
          onBlur={(ev) => onBlur(ev.target.value)}
          autoComplete="off"
        />

        {errorMessage && (
          <div className="absolute mr-4 top-1/2 right-0 transform -translate-y-1/2">
            <ExclamationCircleIcon className="w-4 h-4 text-red-500" />
          </div>
        )}
      </div>

      {errorMessage && (
        <div className="mt-2 text-red-500 text-xs">
          {errorMessage}
        </div>
      )}

      {(helperText && !errorMessage) && (
        <div className="text-xs text-gray-400 mt-2 tracking-wide">
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
