const composeValidators = (validators = [], values) => (value) => (
  validators.reduce((error, { validator, ...params }) => (
    error || validator(value, { ...params, otherValues: values })
  ), undefined)
);

export default composeValidators;
