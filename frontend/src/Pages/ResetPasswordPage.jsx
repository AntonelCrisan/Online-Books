import { Link } from "react-router-dom";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { useState } from "react";
import Validation from "../Components/InputsValidation";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function ResetPasswordLinkPage() {
  const { token } = useParams();
  const [data, setData] = useState({ password: "", cPassword: "" });
  const [error, setError] = useState({});
  const [resetStatus, setResetStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const userData = {
    password: data.password,
    token: token,
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (data.password !== data.cPassword) {
      setResetStatus("The passwords don't match!");
      return;
    }

    if (data.password.length === 0 || data.cPassword.length === 0) {
      setResetStatus("All fields are required.");
      return;
    }

    try {
      await axios
        .post(`http://localhost:8080/reset-password/${token}`, userData)
        .then((res) => {
          if (res.data.message) {
            setResetStatus(res.data.message);
          } else {
            setShowPopup(true);
          }
        });
    } catch (error) {
      if (error.response) {
        setResetStatus(`Server Error: ${error.response.status}`);
      } else if (error.request) {
        setResetStatus("Network Error: Please check your internet connection.");
      } else {
        setResetStatus("An error occurred. Please try again later.");
      }
      console.error("error: ", error);
    }
  };
  const handleInput = (field, value) => {
    const newData = { ...data, [field]: value };
    setData(newData);
    setError(Validation(data));
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
        <div className="flex flex-col min-h-full flex-1  items-center justify-center mx-auto border-2 rounded-xl px-10 bg-white shadow-2xl  mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="text-2xl font-semibold flex justify-center pb-5">
              Reset your password
            </h1>
            <label className="block mb-2">New password</label>
            <div className="relative">
              <Input
                type="password"
                name="password"
                required
                autoComplete="on"
                placeholder="••••••••"
                onChange={(e) => handleInput(e.target.name, e.target.value)}
                border={
                  error.password === true && !resetStatus
                    ? "border-green-400"
                    : "border-red-400"
                }
              ></Input>

              <div>
                {error.password && (
                  <span className="text-red-400 flex justify-center text-center pt-2">{error.password}</span>
                )}
              </div>
            </div>
            <br />
            <label className="block mb-2 ">Confirm new password</label>
            <div className="relative">
              <Input
                type="password"
                name="cPassword"
                required
                autoComplete="on"
                placeholder="••••••••"
                onChange={(e) => handleInput(e.target.name, e.target.value)}
                border={
                  error.cPassword === true && !resetStatus
                    ? "border-green-400"
                    : "border-red-400"
                }
              ></Input>

              <div>
                {error.cPassword && (
                  <span className="text-red-400 flex justify-center text-center pt-2">{error.cPassword}</span>
                )}
              </div>
            </div>
            <span className="text-red-400  flex justify-center pt-5">
              {resetStatus}
            </span>
          
            <br />
            <div className="pb-10">
              <Button text={`Reset password`} onClick={handleSubmit} />
            </div>
          </div>
        </div>
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
            <div className="bg-white py-10 px-10 rounded-xl shadow-md mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="flex justify-center text-3xl font-semibold">
                Done!
              </h2>
              <br />
              <div className="flex bg-green-100 p-3">
                {" "}
                <CheckCircleIcon className="text-green-400" />
                <p> Your password has been changed!</p>
              </div>
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
    </div>
  );
}
