/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Button from './Button';
import Field from './Field';
import Recaptcha from './Recaptcha';
import onHideRecaptcha from './Recaptcha/listener';
import composeValidators from './utils/compose-validators';

import randomId from '../../utils/random-id';
import { FORM_ERROR } from './utils/constants';

const ToastFieldErrorMessage = (
  <div>Oops, Mohon periksa kembali data yang kamu kirim. Silahkan ulangi kembali.</div>
);

const ToastServerErrorMessage = (
  <div>
    Terjadi masalah pada server, silahkan coba beberapa saat lagi atau kontak
    <b>fostiums@gmail.com</b>.
  </div>
);

const Form = ({
  onSubmit,
  schema,
  useCaptcha,
  submitLabel,
  onSuccessMessage,
}) => {
  const formRef = useRef();
  const recaptchaRef = useRef();

  const [values, setValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [formLevelErrorMessage, setFormLevelErrorMessage] = useState(null);

  const setFieldValue = ({ name, value }) => {
    const newValues = { ...values, [name]: value };
    setValues(newValues);
  };

  const checkIfAllFieldsAreValid = () => (
    schema.every(({ name, validate }) => (
      !composeValidators(validate, values)(values[name])
    ))
  );

  const onFormSubmit = async (ev) => {
    ev.preventDefault();

    if (!checkIfAllFieldsAreValid()) {
      toast.error(ToastFieldErrorMessage);
      return;
    }

    setIsLoading(true);
    setFormLevelErrorMessage(null);

    if (useCaptcha) {
      onHideRecaptcha(() => setIsLoading(false));
      await recaptchaRef.current.executeAsync();
    }

    try {
      await onSubmit(values);
      formRef.current.reset();

      if (onSuccessMessage) {
        toast.success(onSuccessMessage);
      }
    } catch (err) {
      const isServerError = !!err.name;
      const isFieldLevelError = !isServerError;
      const isFormLevelError = !isServerError && !!err[FORM_ERROR];
      const isCaptchaError = !isServerError && !isFormLevelError && err['g-recaptcha-response'];

      if (isFormLevelError || isCaptchaError) {
        const message = isCaptchaError ? 'Incorrect CAPTCHA. Please try again.' : err[FORM_ERROR];
        setFormLevelErrorMessage(message);
      } else {
        const ToastMessage = isFieldLevelError ? ToastFieldErrorMessage : ToastServerErrorMessage;
        toast.error(ToastMessage);
      }
    } finally {
      recaptchaRef?.current?.reset();
      setIsLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={onFormSubmit} className="space-y-5">
      <ToastContainer pauseOnFocusLoss={false} />

      {formLevelErrorMessage && (
        <div className="py-3 px-5 border-b-2 border-red-500 bg-red-50 text-red-500 rounded">
          {formLevelErrorMessage}
        </div>
      )}

      {schema.map(({ validate, ...props }) => (
        <Field
          {...props}
          key={props.name || randomId()}
          validate={composeValidators(validate, values)}
          onChange={(value) => setFieldValue({
            name: props.name,
            value,
          })}
        />
      ))}

      {useCaptcha && (
        <Recaptcha
          ref={recaptchaRef}
          onChange={(token) => setFieldValue({
            name: 'g-recaptcha-response',
            value: token,
          })}
        />
      )}

      <Button isLoading={isLoading}>
        {submitLabel}
      </Button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  schema: PropTypes.arrayOf(PropTypes.object).isRequired,
  useCaptcha: PropTypes.bool,
  submitLabel: PropTypes.string,
  onSuccessMessage: PropTypes.node,
};

Form.defaultProps = {
  useCaptcha: false,
  submitLabel: 'Submit',
  onSuccessMessage: null,
};

export default Form;
