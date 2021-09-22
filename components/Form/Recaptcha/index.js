import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';

const Recaptcha = forwardRef(({ onChange }, ref) => {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <ReCAPTCHA
      ref={ref}
      sitekey={siteKey}
      onChange={onChange}
      size="invisible"
    />
  );
});

Recaptcha.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Recaptcha;
