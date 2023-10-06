import Input from "../Components/Input";
import Button from "../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Validation from "../Components/InputsValidation";
import axios from "axios";
export default function SignUpPage() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [registerStatus, setRegisterStatus] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email_pattern.test(data.email)) {
      error.email = "Invalid Email format!";
      return;
    } 
    try {
      await axios.post("http://localhost:8080/signup", data).then((res) => {
        if (res.data.Status === "Success") {
          navigate("/login");
        } else {
          setRegisterStatus(res.data.message);
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
    <div className="relative mx-4">
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
              <div>
                <Input
                  type="text"
                  name="name"
                  required={true}
                  autoComplete="on"
                  placeholder="Tom Cruise"
                  onChange={(e) => handleInput(e.target.name, e.target.value)}
                  border={
                    error.name === true && !registerStatus
                      ? "border-green-400"
                      : "border-red-400"
                  }
                ></Input>

                <div>
                  {" "}
                  {error.name && (
                    <span className="text-red-400 flex justify-center">
                      {error.name}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="pb-5">
              <label className="block mb-2 ">Your email</label>
              <div>
                <Input
                  type="email"
                  name="email"
                  required={true}
                  autoComplete="on"
                  placeholder="name@company.com"
                  onChange={(e) => handleInput(e.target.name, e.target.value)}
                  border={
                    error.email === true && !registerStatus
                      ? "border-green-400"
                      : "border-red-400"
                  }
                ></Input>

                <div>
                  {" "}
                  {error.email && (
                    <span className="text-red-400 flex justify-center">
                      {error.email}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="pb-5">
              <label className="block mb-2 ">Password</label>
              <div>
                <Input
                  type="password"
                  name="password"
                  required={true}
                  autoComplete="on"
                  placeholder="••••••••"
                  onChange={(e) => handleInput(e.target.name, e.target.value)}
                  border={
                    error.password === true && !registerStatus
                      ? "border-green-400"
                      : "border-red-400"
                  }
                ></Input>

                <div>
                  {" "}
                  {error.password && (
                    <span className="text-red-400 flex text-center">
                      {error.password}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <span className="text-red-400  flex justify-center">
              {registerStatus}
            </span>
            <div className="pb-5 pt-5">
              <Button text={`Sign up`} onClick={handleSubmit} />
            </div>
            <div className="flex pb-10">
              <p>Already have an account?</p>
              <Link
                to="/login"
                className="font-semibold hover:underline hover:text-blue-600 pl-2"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
