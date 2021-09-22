const defaultMessage = {
  required: () => 'Bidang harus diisi',
  minLength: (threshold) => `Nilai harus memiliki setidaknya ${threshold} karakter`,
  maxLength: (threshold) => `Nilai tidak boleh melebihi ${threshold} karakter`,
  pattern: () => 'Nilai tidak valid',
};

const validatorTypes = {
  REQUIRED: (value, { message }) => (
    value ? undefined : (message || defaultMessage.required())
  ),
  MIN_LENGTH: (value, { message, threshold }) => (
    value.length >= threshold ? undefined : (message || defaultMessage.minLength(threshold))
  ),
  MAX_LENGTH: (value, { message, threshold }) => (
    value.length <= threshold ? undefined : (message || defaultMessage.maxLength(threshold))
  ),
  PATTERN: (value, { message, pattern }) => (
    new RegExp(pattern).test(value) ? undefined : (message || defaultMessage.pattern())
  ),
};

export default validatorTypes;
