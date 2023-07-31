import { Link } from "react-router-dom";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
export default function ResetPasswordPae() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
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
  return (
    <div className="flex flex-col items-center justify-center">
      {!isValid ? (
        <div className="flex flex-col items-center justify-center py-20">
          <Link to="/" className="flex items-center justify-center">
            <img
              src={require("../icons/logo.png")}
              alt="logo"
              className="w-10"
            />
            <span className="text-blue-600 font-semibold text-4xl ml-2">
              Online Books
            </span>
          </Link>

          <div className="flex flex-col min-h-full flex-1  items-center justify-center mx-auto border-2 rounded-xl px-10 bg-white shadow-2xl  mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <h1 className="text-2xl font-semibold flex justify-center pb-5">
                Reset your password
              </h1>
              <p className="pb-5">
                If the account exists, we'll email you instructions to reset the
                password.
              </p>
              <label className="block mb-2 ">Your email</label>
              <div className="relative">
                <Input
                  type="email"
                  name="email"
                  required
                  autoComplete="on"
                  placeholder="name@domain.com"
                  onChange={handleChange}
                ></Input>
                {isValid ? (
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
                <Button text={`Reset password`} onClick={handleReset} />
              </div>

              <Link
                to="/signin"
                className="flex items-center justify-center hover:underline hover:text-blue-600 pt-4 pb-10"
              >
                <p>Return to sign in</p>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {showMessage ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Link to="/" className="flex items-center justify-center">
                <img
                  src={require("../icons/logo.png")}
                  alt="logo"
                  className="w-10"
                />
                <span className="text-blue-600 font-semibold text-4xl ml-2">
                  Online Books
                </span>
              </Link>
              <div className="flex flex-col min-h-full flex-1  items-center justify-center mx-auto border-2 rounded-xl px-10 bg-white shadow-2xl  mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <div>
                    <CheckCircleOutlineIcon
                      className="text-green-400"
                      style={{ fontSize: 50 }}
                    />
                  </div>
                  <h1 className="text-green-400 pt-2">
                    We’ve sent an email to <p className="underline">{email}</p>{" "}
                    with instructions.
                  </h1>
                  <Link
                    to="/signin"
                    className="flex items-center justify-center hover:underline hover:text-blue-600 pt-4"
                  >
                    <p>Return to sign in</p>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20">
              <Link to="/" className="flex items-center justify-center">
                <img
                  src={require("../icons/logo.png")}
                  alt="logo"
                  className="w-10"
                />
                <span className="text-blue-600 font-semibold text-4xl ml-2">
                  Online Books
                </span>
              </Link>

              <div className="flex flex-col min-h-full flex-1  items-center justify-center mx-auto border-2 rounded-xl px-10 bg-white shadow-2xl  mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <h1 className="text-2xl font-semibold flex justify-center items-center pb-5">
                    Reset your password
                  </h1>
                  <p className="pb-5">
                    If the account exists, we'll email you instructions to reset
                    the password.
                  </p>
                  <label className="block mb-2 ">Your email</label>
                  <div className="relative">
                    <Input
                      type="email"
                      name="email"
                      required
                      autoComplete="on"
                      placeholder="name@domain.com"
                      onChange={handleChange}
                    ></Input>
                    {isValid ? (
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
                    <Button text={`Reset password`} onClick={handleReset} />
                  </div>

                  <Link
                    to="/signin"
                    className="flex items-center justify-center hover:underline hover:text-blue-600 pt-4 pb-10"
                  >
                    <p>Return to sign in</p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
