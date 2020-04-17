import validator from 'validator';

export const validateToken = Token => {
  let isValid = false;
  let message = '';

  if (validator.isEmpty(Token)) {
    message = 'Please enter your Token.';
  } else {
    isValid = true;
  }

  return {isValid, message};
};
