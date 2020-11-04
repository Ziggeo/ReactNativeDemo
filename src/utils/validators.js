import validator from 'validator';
import Strings from '../Strings';

export const validateToken = Token => {
  let isValid = false;
  let message = '';

  if (validator.isEmpty(Token)) {
    message = Strings.errNotEmpty;
  } else {
    isValid = true;
  }

  return {isValid, message};
};
