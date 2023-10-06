import { Link } from "react-router-dom";
import Button from "../Components/Button";
import Input from "../Components/Input";
import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Validation from "../Components/InputsValidation";
import axios from "axios";

export default function ResetPasswordPae() {
  const [data, setData] = useState({ email: "" });
  const [error, setError] = useState({});
  const [resetStatus, setResetStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:8080/forgot-password", data)
        .then((res) => {
          if (res.data.message) {
            setResetStatus(res.data.message);
          } else {
            setShowPopup(true);
          }
        });
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const handleInput = (field, value) => {
    const newData = { ...data, [field]: value };
    setData(newData);
    setError(Validation(data));
  };
  return (
    <div className="flex flex-col items-center justify-center py-20 relative mx-4">
      <Link to="/" className="flex items-center justify-center">
        <img src={require("../icons/logo.png")} alt="logo" className="w-10" />
        <span className="text-blue-600 font-semibold text-4xl ml-2">
          Online Books
        </span>
      </Link>
      <div className="flex flex-col min-h-full flex-1  items-center justify-center mx-auto border-2 rounded-xl px-10 bg-white shadow-2xl mt-10 w-[350px] sm:w-auto lg:w-[350px]">
        <div className="mt-10">
          <h1 className="text-2xl font-semibold flex justify-center pb-5">
            Forgot password
          </h1>
          <h1 className="pb-5 ">
            If the account exists, we'll email you instructions to reset the
            password.
          </h1>
          <label className="block mb-2">Email</label>
          <div className="relative">
            <Input
              type="email"
              name="email"
              required
              autoComplete="on"
              placeholder="name@company.com"
              onChange={(e) => handleInput(e.target.name, e.target.value)}
              border={
                error.email === true && !resetStatus ? "border-green-400" : "border-red-400"
              }
            />
              <div>
                {" "}
                {error.email && (
                  <span className="text-red-400 flex justify-center text-center pt-2">{error.email}</span>
                )}
              </div>
          </div>
          <span className="text-red-400  flex justify-center text-center pt-5">
            {resetStatus}
          </span>
          <br />
          <div>
            <Button text={`Send email`} onClick={handleSubmit} />
          </div>
          <div className="flex justify-center pt-5 pb-10">
            <Link
              to="/login"
              className="font-semibold hover:underline hover:text-blue-600 pl-2"
            >
              Return to log in
            </Link>
          </div>
        </div>
      </div>
      {/* Popup content */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white py-10 px-10 rounded-xl shadow-md mt-10 sm:mx-auto sm:w-full sm:max-w-sm relative mx-4">
            <h2 className="flex justify-center text-3xl font-semibold">
              Done!
            </h2>
            <br />
            <div className="flex bg-green-100 p-3">
              {" "}
              <CheckCircleIcon className="text-green-400" />
              <p> We’ve sent an email to {data.email} with instructions.</p>
            </div>

            <p className="text-xs">
              If the email doesn't show up soon, check your spam folder. We sent
              it from email@login.online-books.com.
            </p>
            <div className="pt-10">
              {" "}
              <Link to={"/login"}>
                <Button text={`Return to log in`} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
