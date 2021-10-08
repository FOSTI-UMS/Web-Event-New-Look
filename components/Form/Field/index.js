import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Field({
  Component, validate, onChange, ...inputProps
}) {
  const [isAlreadyOnBlur, setIsAlreadyOnBlur] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const onBlur = (value) => {
    setIsAlreadyOnBlur(true);
    setErrorMessage(validate(value));
  };

  return (
    <Component
      {...inputProps}
      errorMessage={errorMessage}
      onBlur={onBlur}
      onChange={(value) => {
        onChange(value);
        if (isAlreadyOnBlur) {
          setErrorMessage(validate(value));
        }
      }}
    />
  );
}

Field.propTypes = {
  Component: PropTypes.func.isRequired,
  validate: PropTypes.func,
  onChange: PropTypes.func,
};

Field.defaultProps = {
  validate: () => {},
  onChange: () => {},
};
