import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import Validation from "../Components/InputsValidation";
import axios from "axios";
export default function ResetPasswordLinkPage() {
  const [email, setEmail] = useState("");
  const [data, setData] = useState({ password: " ", cPassword: "" });
  const [error, setError] = useState({});
  const [resetStatus, setResetStatus] = useState("");
  const navigate = useNavigate();

  const userData = {
    email: "antonel19.gabriel@gmail.com",
    password: data.password,
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.password === data.cPassword) {
      setResetStatus("");
      axios
        .post("http://localhost:8080/reset_password_link", userData)
        .then((res) => {
          if (res.data.message) {
            setResetStatus(res.data.message);
          } else {
            alert("Password reset successful.");
            navigate("/signin");
          }
        })  
    } else {
      setResetStatus("The passwords don't match!");
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
                ></Input>
                {error.password === true ? (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <CheckIcon className="h-5 w-5 text-green-400" />
                  </div>
                ) : (
                  <div>
                    {error.password && (
                      <span className="text-red-400">{error.password}</span>
                    )}
                  </div>
                )}
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
                ></Input>
                {error.cPassword === true ? (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <CheckIcon className="h-5 w-5 text-green-400" />
                  </div>
                ) : (
                  <div>
                    {error.cPassword && (
                      <span className="text-red-400">{error.cPassword}</span>
                    )}
                  </div>
                )}
              </div>
              <span className="text-red-400  flex justify-center pt-5">
                {resetStatus}
              </span>
              {/* {resetStatus ? (
            <span className="text-red-400  flex justify-center pt-5">
              {resetStatus}
            </span>
          ) : null} */}
              <br />
              <div className="pb-10">
                <Button text={`Reset password`} onClick={handleSubmit} />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
