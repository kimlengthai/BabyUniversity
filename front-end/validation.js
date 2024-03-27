import validator from "validator";
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function validateName(name) {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
  }
  
  function validateDOB(dob) {
    const dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return dobRegex.test(dob);
  }
  
  module.exports = {
    validateEmail,
    validateName,
    validateDOB,
  };