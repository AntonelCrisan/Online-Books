import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Components/Input";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "./Button";
import axios from "axios";
const Navbar = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toLogIn_SignUp, settoLogIn_SignUp] = useState(false);
  const [toProfile_LogOut, settoProfile_LogOut] = useState(false);
  const [logedIn, setLogedIn] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleProfile = () => {
    settoProfile_LogOut(!toProfile_LogOut);
    settoLogIn_SignUp(!toLogIn_SignUp);
  };
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };
  useEffect(() => {
    axios.get("http://localhost:8080/").then((res) => {
      if (res.data.Status === "Success") {
        setLogedIn(true);
        setName(res.data.name);
      } else {
        setLogedIn(false);
      }
    });
  }, []);
  const handleLogOut = () => {
    axios.get("http://localhost:8080/logout").then((res) => {
      if (res.data.Status === "Success") {
        navigate("/login");
      } else {
        return;
      }
    });
  };
  return (
    <nav className="bg-white p-3 border-b-2 shadow-md fixed w-full z-30">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={require("../icons/logo.png")} alt="logo" className="w-7" />
          <span className="text-blue-600 font-semibold text-2xl ml-2 whitespace-nowrap mr-10">
            Online Books
          </span>
        </Link>
        {/* Mobile menu toggle button */}
        {!isOpen ? (
          <Bars3Icon
            onClick={handleMenu}
            className="md:hidden flex items-center text-blue-600 h-6 w-6 cursor-pointer"
          ></Bars3Icon>
        ) : (
          <XMarkIcon
            onClick={handleMenu}
            className="md:hidden flex items-center text-blue-600  h-6 w-6 cursor-pointer"
          ></XMarkIcon>
        )}

        {/* Desktop menu */}
        <div className="hidden md:flex md:items-center  md:w-[30%] lg:w-[60%]">
          <Input
            name = "searchBar"
            type="text"
            placeholder="Search book"
            required={false}
            autoComplete="off"
            onChange={handleSearch}
            border = "focus:border-blue-600"
          />
        </div>
        <div className="hidden md:flex md:items-center">
          <div className="flex justify-between">
            {logedIn ? (
              <div
                className="flex items-center ml-4 hover:bg-slate-100 rounded-xl p-2 cursor-pointer "
                onClick={handleProfile}
              >
               <img src={require("../icons/profile_user.png")} alt="profile_picture" className=" rounded-3xl w-8 h-8"/>
                <span className="ml-2 mr-2 group/item whitespace-nowrap">My account</span>
              </div>
            ) : (
              <div
                className="flex items-center ml-4 hover:bg-slate-100 rounded-xl p-2 cursor-pointer "
                onClick={handleProfile}
              >
                <PermIdentityIcon className="text-blue-600" />
                <span className="ml-2 group/item whitespace-nowrap">My account</span>
              </div>
            )}

            {/* Popup to sign in and sing up */}
            {logedIn ? (
              <div>
                {toProfile_LogOut && (
                  <div className="absolute top-[71px] right-[271px] z-10 bg-white rounded-xl w-60 border-2 p-3 shadow-lg">
                    <div className="text-m flex pb-3">Hello, {name}</div>
                    <div className="bg-gray-200 h-1"></div>
                    <div className="flex items-center justify-evenly pt-3">
                      {" "}
                      <Link to="/profile">
                        {" "}
                        <Button text={`Profile`}></Button>
                      </Link>
                      <Link to="/login">
                        {" "}
                        <Button
                          text={`Log out`}
                          onClick={handleLogOut}
                        ></Button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div>
                {toLogIn_SignUp && (
                  <div className="absolute top-16 right-64 z-10 bg-white rounded-xl w-60 border-gray p-3 shadow-lg">
                    <div className="text-xs flex pb-3">
                      Enter in your Online Books account and have complete
                      control over the offers.
                    </div>
                    <div className="bg-gray-200 h-1"></div>
                    <div className="flex items-center justify-evenly pt-3">
                      {" "}
                      <Link to="/login">
                        {" "}
                        <Button text={`Log in`}></Button>
                      </Link>
                      <Link to="/signup">
                        {" "}
                        <Button text={`Sign up`}></Button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}

            <Link className="flex items-center ml-4  hover:bg-slate-100 rounded-xl p-2" to={"/favorites"}>
              <FavoriteBorderIcon className="text-blue-600" />
              <span className="ml-2 ">Favorites</span>
            </Link>
            <Link className="flex items-center ml-4  hover:bg-slate-100 rounded-xl p-2">
              <ShoppingCartOutlinedIcon className="text-blue-600" />
              <span className="ml-2 whitespace-nowrap">My basket</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 block transition ease-out overflow-hidden">
          <Input
            type="text"
            name = "searchBar"
            placeholder="Search book"
            required={false}
            autoComplete="off"
            onChange={handleSearch}
            border = "focus:border-blue-600"
          />
          {logedIn ? (
            <div>
              <Link
                to="/profile"
                className="mt-4 flex border-b-2 hover:bg-slate-100  p-2"
              >
                <img src={require("../icons/profile_user.png")} alt="profile_picture" className=" rounded-3xl w-8 h-8"/>
                <span className="ml-2 ">My account</span>
              </Link>
              <Link className="flex mt-4 border-b-2 hover:bg-slate-100  p-2" to={"/favorites"}>
                <FavoriteBorderIcon className="text-blue-600" />
                <span className="ml-2">Favorites</span>
              </Link>
              <Link className="flex mt-4 border-b-2 hover:bg-slate-100  p-2">
                <ShoppingCartOutlinedIcon className="text-blue-600" />
                <span className="ml-2">My basket</span>
              </Link>
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                className="mt-4 flex border-b-2 hover:bg-slate-100  p-2"
              >
                <PermIdentityIcon className="text-blue-600" />
                <span className="ml-2 ">My account</span>
              </Link>
              <Link className="flex mt-4 border-b-2 hover:bg-slate-100  p-2" to={"/favorites"}>
                <FavoriteBorderIcon className="text-blue-600" />
                <span className="ml-2">Favorites</span>
              </Link>
              <Link className="flex mt-4 border-b-2 hover:bg-slate-100  p-2">
                <ShoppingCartOutlinedIcon className="text-blue-600" />
                <span className="ml-2">My basket</span>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
