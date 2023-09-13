import Input from "../Components/Input";
import Button from "../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Validation from "../Components/InputsValidation";
import axios from "axios";
export default function LogInPage() {
  const navigation = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
  const [loginStatus, setloginStatus] = useState("");
  axios.defaults.withCredentials = true;
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/login", data).then((res) => {
        if (res.data.Status === "Success") {
          navigation("/");
        } else {
          setloginStatus(res.data.message);
        }
      });
    } catch (error) {
      console.log("Erorr: ", error);
    }
  };
  const handleInput = (field, value) => {
    const newData = { ...data, [field]: value };
    setData(newData);
    setError(Validation(data));

  };
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
            Log in to your account
          </h1>
          <label className="block mb-2 ">Email</label>
          <div className="relative">
            <Input
              type="email"
              name="email"
              required
              autoComplete="on"
              placeholder="name@company.com"
              value={data}
              onChange={(e) => handleInput(e.target.name, e.target.value)}
              border={
                error.email === true && !loginStatus ? "border-green-400" : "border-red-400"
              }
            />
              <div>
                {error.email && (
                  <span className="text-red-400 flex justify-center pt-2">{error.email}</span>
                )}
              </div>
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
                onChange={(e) => handleInput(e.target.name, e.target.value)}
                border={
                  error.password === true && !loginStatus
                    ? "border-green-400"
                    : "border-red-400"
                }
              ></Input>
                <div>
                  {error.password && (
                    <span className="text-red-400 flex justify-center pt-2 text-center">{error.password}</span>
                  )}
                </div>
            </div>
          </div>
          <div class="flex items-center justify-between pt-5 pb-5">
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
              href="/forgot-password"
              className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500  hover:text-blue-600"
            >
              Forgot password?
            </a>
          </div>

          <span className="text-red-400  flex justify-center">
            {loginStatus}
          </span>

          <div className="pt-5">
            <Button text={`Log in`} onClick={handleSubmit} />
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