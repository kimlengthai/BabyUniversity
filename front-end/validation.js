import { isValid, parseISO } from 'date-fns';
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateFirstName(firstName) {
  const nameRegex = /^[a-zA-Z]+$/;
  return nameRegex.test(firstName);
}
export function validateLastName(lastName) {
  const nameRegex = /^[a-zA-Z]+$/;
  return nameRegex.test(lastName);
}


export function validateDOB(DOB) {
  const dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  return dobRegex.test(DOB);
}

 


export function validateParentalPin(parentalPin) {
  const pinRegex = /^\d{4}$/;
  return pinRegex.test(parentalPin);
}

export function validatePassword(password, confirmPassword) {
  const errors = [];

  // Ensure password is at least 6 characters long
  if (password.length < 6) {
    errors.push('Password must be at least 6 characters long.');
  }

  const capitalRegex = /[A-Z]/;
  if (!capitalRegex.test(password)) {
    errors.push('Password must contain at least one uppercase letter.');
  }

  const specialRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (!specialRegex.test(password)) {
    errors.push('Password must contain at least one special character.');
  }

  const numberRegex = /[0-9]/;
  if (!numberRegex.test(password)) {
    errors.push('Password must contain at least one number.');
  }

  if (password !== confirmPassword) {
    errors.push('Passwords do not match.');
  }

  return errors;
}

export function validateCardNumber(cardNumber) {
  const cardNumberRegex = /^[0-9]{16}$/;
  return cardNumberRegex.test(cardNumber);
}

export function validateCardExpiration(expirationDate) {
  if (!isValid(parseISO(expirationDate))) {
    return 'Invalid expiration date format. Use YYYY-MM-DD.';
  }

  const today = new Date();
  const [year, month] = expirationDate.split('-').map(Number);

  if (year < today.getFullYear() || (year === today.getFullYear() && month < today.getMonth() + 1)) {
    return 'Card has expired.';
  }

  return null;
}

export function validateCVV(cvv) {
  const cvvRegex = /^[0-9]{3,4}$/;
  return cvvRegex.test(cvv);
}