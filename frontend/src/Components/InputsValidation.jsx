function Validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /.{8,}/;
  if (values.name > 1) {
    error.name = false;
  } else {
    error.name = true;
  }
  if (values.email === "") {
    error.email = false;
  } else if (!email_pattern.test(values.email)) {
    error.email = "Invalid Email format";
  } else {
    error.email = true;
  }
  if (values.password === "") {
    error.password = false;
  } else if (!password_pattern.test(values.password)) {
    error.password = "The password must contain at least 8 characters!";
  } else {
    error.password = true;
  }
  if (values.cPassword === "") {
    error.cPassword = false;
  } else if (!password_pattern.test(values.cPassword)) {
    error.cPassword = "The password must contain at least 8 characters!";
  }  else {
    error.cPassword = true;
  }
  return error;
}
export default Validation;
