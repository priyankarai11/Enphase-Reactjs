const EMAIL_REGEX = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const PASSWORD_REGEX = RegExp(
  /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
);

const ZIP_REGEX = RegExp(/^[0-9\b]+$/);

const PHONE_NUMBER_REGEX = RegExp(/^[0-9\b]+$/);
export { EMAIL_REGEX, PASSWORD_REGEX, PHONE_NUMBER_REGEX, ZIP_REGEX };
