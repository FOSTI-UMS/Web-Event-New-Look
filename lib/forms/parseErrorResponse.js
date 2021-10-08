import { FORM_ERROR } from '../../components/Form/utils/constants';

const parseErrorResponse = (response) => {
  let errorResponse = {};
  const { code, message, error } = response;

  if (code !== 200 && message) {
    // field level error
    if (error === 'validation_error') {
      errorResponse = message;
    } else {
      // form level error
      errorResponse = { [FORM_ERROR]: message };
    }
  }

  return {
    status_code: code,
    error_response: errorResponse,
  };
};

export default parseErrorResponse;
