import Input from "../Components/Input";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckIcon from "@mui/icons-material/Check";
import Validation from "../Components/LoginValidation";
export default function SignInPage() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
   setError(Validation(data));
  }
  const handleInput = (event) => {
    setData(prev => ({...prev, [event.target.name]: [event.target.value]}));
  }
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Link to="/" className="flex items-center justify-center">
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
              onChange={handleInput}
            />

            {error ? (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <CheckIcon className="h-5 w-5 text-green-400" />
              </div>
            ) : (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <ErrorOutlineIcon className="h-5 w-5 text-red-400" />
              </div>
            )}
          </div>
          {error && (
            <span className="text-red-400">{error}</span>
          )}
          <div className="pt-5">
            <label className="block mb-2 ">Password</label>
            <div className="relative">
              <Input
                type="password"
                name="password"
                required
                autoComplete="on"
                placeholder="••••••••"
                onChange={handleInput}
              ></Input>
              {error ? (
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <CheckIcon className="h-5 w-5 text-green-400" />
                </div>
              ) : (
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <ErrorOutlineIcon className="h-5 w-5 text-red-400" />
                </div>
              )}
            </div>
            {error && (<span className="text-red-400">{error}</span>)}
          </div>
          <div class="flex items-center justify-between pt-5">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  required
                  className="cursor-pointer"
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
            <Button text={`Sign in`} onClick={handleSubmit} />
          </div>
          <div className="flex pt-5 pb-10">
            <p>Need an account?</p>
            <Link
              to="/signup"
              className="font-semibold hover:underline hover:text-blue-600 pl-2"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
