import { forwardRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Recaptcha = forwardRef((props, ref) => {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <ReCAPTCHA
      ref={ref}
      sitekey={siteKey}
      size="invisible"
    />
  );
});

export default Recaptcha;
