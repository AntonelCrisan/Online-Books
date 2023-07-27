import { Link } from "react-router-dom";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
export default function ResetPasswordPae() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const handleChange = (event) => {
    if (isValidEmail(event.target.value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setEmail(event.target.value);
  };
  const handleReset = () => {
    setShowMessage(true);
  };
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {showMessage && isValid && !isOpen && (
        <div className="min-h-full flex-1  items-center justify-center mx-auto border-2 rounded-xl py-4 bg-white shadow-2xl  mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-end px-5">
            <XMarkIcon
              onClick={handleClose}
              className=" text-black  h-6 w-6 cursor-pointer"
            ></XMarkIcon>
          </div>
          <div className="flex flex-col items-center justify-center">
          <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-green-400 pt-2">
              We’ve sent an email to <p className="underline">{email}</p> with
              instructions.
            </h1>
           
          </div>
        </div>
      )}
      <div className="flex flex-col items-center justify-center py-20">
        <Link to="/home" className="flex items-center justify-center">
          <img src={require("../icons/logo.png")} alt="logo" className="w-10" />
          <span className="text-blue-600 font-semibold text-4xl ml-2">
            Online Books
          </span>
        </Link>

        <div className="flex flex-col min-h-full flex-1  items-center justify-center mx-auto border-2 rounded-xl px-7 bg-white shadow-2xl  mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="text-2xl font-semibold flex justify-center items-center pb-5">
              Reset your password
            </h1>
            <p className="pb-5">
              If the account exists, we'll email you instructions to reset the
              password.
            </p>
            <div className="pb-10">
              <label className="block mb-2 ">Your email</label>
              <Input
                type="email"
                name="email"
                required
                autoComplete="on"
                placeholder="name@company.com"
                onChange={handleChange}
              ></Input>
              {isValid ? (
                <div className="text-green-400 pt-2">Valid email adress</div>
              ) : (
                <div className="text-red-400 pt-2">Invalid email adress</div>
              )}
            </div>

            <div className="pb-5">
              <Button text={`Reset password`} onClick={handleReset} />
            </div>

            <Link
              to="/signin"
              className="flex items-center justify-center hover:underline hover:text-blue-600 pb-10"
            >
              <p>Return to sign in</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
