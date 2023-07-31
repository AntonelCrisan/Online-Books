import Input from "../Components/Input";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setrepeatPassword] = useState("");
  const [validateName, setValidateName] = useState(false);
  const [validateEmail, setValidateEmail] = useState(false);
  const [validatePassword, setValidatePassword] = useState(false);
  const [validateRepPassword, setValidateRepPassword] = useState(false);
 
  const isValidName = (name) => {
    return name.length;
  };
  const handleName = (event) => {
    if (isValidName(event.target.value) > 0) {
      return setValidateName(true);
    } else {
      return setValidateName(false);
    }
    setName(event.target.value);
  };
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const handleEmail = (event) => {
    if (isValidEmail(event.target.value)) {
      setValidateEmail(true);
    } else {
      setValidateEmail(false);
    }
    setEmail(event.target.value);
  };
  const isValidPassword = (password) => {
    return password.length;
  };
  const handlePassword = (event) => {
    if (isValidPassword(event.target.value) <= 7) {
      setValidatePassword(false);
    } else {
      setValidatePassword(true);
    }
    setPassword(event.target.value);
  };
  const isValidRepPassword = (repeatPassword) => {
    return repeatPassword.length;
  };
  const handleRepPassword = (event) => {
    if (isValidRepPassword(event.target.value) <= 7) {
      setValidateRepPassword(false);
    } else {
      setValidateRepPassword(true);
    }
    setrepeatPassword(event.target.value);
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-20">
        <Link to="/" className="flex items-center justify-center">
          <img src={require("../icons/logo.png")} alt="logo" className="w-10" />
          <span className="text-blue-600 font-semibold text-4xl ml-2">
            Online Books
          </span>
        </Link>
        <div className="flex flex-col min-h-full flex-1 items-center justify-center mx-auto border-2  rounded-xl px-10 bg-white shadow-2xl  mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="text-2xl font-semibold flex justify-center pb-5">
              {" "}
              Sign up to your account
            </h1>
            <div className="pb-5">
              <label className="block mb-2 ">Name</label>
              <div className="relative">
                <Input
                  type="text"
                  name="lname"
                  required = {true}
                  autoComplete="on"
                  placeholder="Tom Cruise"
                  onChange={handleName}
                ></Input>
                {validateName ? (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <CheckIcon className="h-5 w-5 text-green-400" />
                  </div>
                ) : (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <ErrorOutlineIcon className="h-5 w-5 text-red-400" />
                  </div>
                )}
              </div>
            </div>
            <div className="pb-5">
              <label className="block mb-2 ">Your email</label>
              <div className="relative">
                <Input
                  type="email"
                  name="email"
                  required = {true}
                  autoComplete="on"
                  placeholder="name@company.com"
                  onChange={handleEmail}
                ></Input>
                {validateEmail ? (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <CheckIcon className="h-5 w-5 text-green-400" />
                  </div>
                ) : (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <ErrorOutlineIcon className="h-5 w-5 text-red-400" />
                  </div>
                )}
              </div>
            </div>
            <div className="pb-5">
              <label className="block mb-2 ">Password</label>
              <div className="relative">
                <Input
                  type="password"
                  name="password"
                  required = {true}
                  autoComplete="on"
                  placeholder="••••••••"
                  onChange={handlePassword}
                ></Input>
                {validatePassword ? (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <CheckIcon className="h-5 w-5 text-green-400" />
                  </div>
                ) : (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <ErrorOutlineIcon className="h-5 w-5 text-red-400" />
                  </div>
                )}
              </div>
            </div>
            <div className="pb-5">
              <label className="block mb-2 ">Repeat password</label>
              <div className="relative">
                <Input
                  type="password"
                  name="password"
                  required = {true}
                  autoComplete="on"
                  placeholder="••••••••"
                  onChange={handleRepPassword}
                ></Input>
                {validateRepPassword && validatePassword ? (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <CheckIcon className="h-5 w-5 text-green-400" />
                  </div>
                ) : (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <ErrorOutlineIcon className="h-5 w-5 text-red-400" />
                  </div>
                )}
              </div>
            </div>
            <div className="pb-5">
              <Button text={`Sign up`} required = {true}/>
            </div>
            <div className="flex pb-10">
              <p>Already have an account?</p>
              <Link
                to="/signin"
                className="font-semibold hover:underline hover:text-blue-600 pl-2"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
