import Input from "../Components/Input";
import Button from "../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Validation from "../Components/InputsValidation";
import axios from "axios";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
export default function LogInPage() {
  const navigation = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
  const [loginStatus, setloginStatus] = useState("");
  const [show_hidePassword, setShow_hidePassword] = useState(false);
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
      console.log("Error: ", error);
    }
  };
  const handleInput = (field, value) => {
    const newData = { ...data, [field]: value };
    setData(newData);
    setError(Validation(data));
  };
  const toggleShowHide = () => {
    setShow_hidePassword(!show_hidePassword);
  };
  return (
    <div className="flex flex-col items-center justify-center py-20 relative mx-4">
      <Link to="/" className="flex items-center justify-center">
        <img src={require("../icons/logo.png")} alt="logo" className="w-10" />
        <span className="text-blue-600 font-semibold text-4xl ml-2">
          Online Books
        </span>
      </Link>

      <div className="flex flex-col min-h-full flex-1 items-center justify-center mx-auto border-2  rounded-xl px-10 bg-white shadow-2xl  mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-2xl font-semibold flex justify-center pb-5">
            Log in to your account
          </h1>
          <span className="block mb-2 ">Email</span>
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
                error.email === true && !loginStatus
                  ? "border-green-400"
                  : "border-red-400"
              }
            />
            <div>
              {error.email && (
                <span className="text-red-400 flex justify-center pt-2">
                  {error.email}
                </span>
              )}
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-between">
            <span className="block mb-2 ">Password</span>
            <span onClick={toggleShowHide}>
              {!show_hidePassword ? (
                <span className="cursor-pointer text-sm">
                  <VisibilityIcon fontSize="small" /> Show
                </span>
              ) : (
                <span className="cursor-pointer text-sm">
                  <VisibilityOffIcon fontSize="small" /> Hide
                </span>
              )}
            </span>
            </div>
           
            <div className="relative">
              <Input
                type= {!show_hidePassword ? "password": "text"}
                name="password"
                required
                autoComplete="on"
                placeholder="••••••••"
                value={data}
                onChange={(e) => handleInput(e.target.name, e.target.value)}
                border={
                  error.password === true && !loginStatus
                    ? "border-green-400"
                    : "border-red-400"
                }
              ></Input>
              <div>
                {error.password && (
                  <span className="text-red-400 flex justify-center pt-2 text-center">
                    {error.password}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="pt-5 flex justify-center">
            <Link
              to={"/forgot-password"}
              className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500  hover:text-blue-600"
            >
              Forgot password?
            </Link>
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
