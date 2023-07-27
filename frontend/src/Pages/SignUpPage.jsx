import Input from "../Components/Input";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
export default function SignUpPage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-20">
        <Link to="/home" className="flex items-center justify-center">
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
              <label className="block mb-2 ">First name</label>
              <Input
                type="text"
                name="fname"
                required
                autoComplete="on"
                placeholder="Tom"
              ></Input>
            </div>
            <div className="pb-5">
              <label className="block mb-2 ">Last name</label>
              <Input
                type="text"
                name="lname"
                required
                autoComplete="on"
                placeholder="Cruise"
              ></Input>
            </div>
            <div className="pb-5">
              <label className="block mb-2 ">Your email</label>
              <Input
                type="email"
                name="email"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                required
                autoComplete="on"
                placeholder="name@company.com"
              ></Input>
            </div>
            <div className="pb-5">
              <label className="block mb-2 ">Password</label>
              <Input
                type="password"
                name="password"
                required
                autoComplete="on"
                placeholder="••••••••"
              ></Input>
            </div>
            <div className="pb-5">
              <label className="block mb-2 ">Repeat password</label>
              <Input
                type="password"
                name="password"
                required
                autoComplete="on"
                placeholder="••••••••"
              ></Input>
            </div>
            <div className="pb-5">
              <Button text={`Sign up`} />
            </div>
            <div className="flex justify-between pb-10">
              <p>Already have an account?</p>
              <Link
                to="/signin"
                className="font-semibold hover:underline hover:text-blue-600"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
