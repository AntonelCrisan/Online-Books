import Input from "../Components/Input";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckIcon from "@mui/icons-material/Check";
export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const validEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const validPassword = (password) => {
    return password.length;
  };
  const handleChangePassword = (event) => {
    if (validPassword(event.target.value) < 7) {
      setIsValidPassword(false);
    } else {
      setIsValidPassword(true);
    }
    setPassword(event.target.value);
  };
  const handleChangeEmail = (event) => {
    if (validEmail(event.target.value)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
    setEmail(event.target.value);
  };
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Link to="/home" className="flex items-center justify-center">
        <img src={require("../icons/logo.png")} alt="logo" className="w-10" />
        <span className="text-blue-600 font-semibold text-4xl ml-2">
          Online Books
        </span>
      </Link>

      <div className="flex flex-col min-h-full flex-1  items-center justify-center mx-auto border-2 rounded-xl px-10 bg-white shadow-2xl  mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-2xl font-semibold flex justify-center pb-5">
            Sign in to your account
          </h1>
          <label className="block mb-2 ">Email</label>
          <div className="relative">
            <Input
              type="email"
              name="email"
              required
              autoComplete="on"
              placeholder="name@company.com"
              onChange={handleChangeEmail}
            />
            {isValidEmail ? (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <CheckIcon className="h-5 w-5 text-green-400" />
              </div>
            ) : (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <ErrorOutlineIcon className="h-5 w-5 text-red-400" />
              </div>
            )}
          </div>
          <div className="pt-5">
            <label className="block mb-2 ">Password</label>
            <div className="relative">
              <Input
                type="password"
                name="password"
                required
                autoComplete="on"
                placeholder="••••••••"
                onChange={handleChangePassword}
              ></Input>
              {isValidPassword ? (
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <CheckIcon className="h-5 w-5 text-green-400" />
                </div>
              ) : (
                <div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <ErrorOutlineIcon className="h-5 w-5 text-red-400"/>
            
                  </div>
                
                  <p className="text-red-400 text-l pt-5">
                    The password have to contain least 7 characters
                  </p>
                </div>
              )}
            </div>
          </div>

          <div class="flex items-center justify-between pt-5">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <Input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label for="remember">Remember me</label>
              </div>
            </div>
            <a
              href="/reset"
              className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500  hover:text-blue-600"
            >
              Forgot password?
            </a>
          </div>
          <div className="pt-5">
            <Button text={`Sign in`} />
          </div>
          <div className="flex justify-between pt-5 pb-10">
            <p>Need an account?</p>
            <Link
              to="/signup"
              className="font-semibold hover:underline hover:text-blue-600"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
