import React, { useState } from "react";
import { Link} from "react-router-dom";
import Input from "../Components/Input";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
const Navbar = ({onSearch}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };
  return (
    <nav className="bg-white p-3 border-b-2 shadow-md fixed w-full">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={require("../icons/logo.png")} alt="logo" className="w-7" />
          <span className="text-blue-600 font-semibold text-2xl ml-2">
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
        <div className="hidden md:flex md:items-center w-2/4">
          <Input
            type="text"
            placeholder="Search book"
            required={false}
            autoComplete="off"
            onChange={handleSearch}
          />
        
        </div>
        <div className="hidden md:flex md:items-center">
          <div className="flex justify-between">
            <Link to="/signin" className="flex items-center ml-4">
              <img
                src={require("../icons/user_icon.png")}
                alt="user"
                className="w-6"
              />
              <span className="ml-2">My account</span>
            </Link>
            <Link className="flex items-center ml-4 pl-5">
              <img
                src={require("../icons/heart_icon.png")}
                alt="user"
                className="w-6"
              />
              <span className="ml-2">Favorites</span>
            </Link>
            <Link className="flex items-center ml-4 pl-5">
              <img
                src={require("../icons/basket_icon.png")}
                alt="user"
                className="w-6"
              />
              <span className="ml-2">My basket</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 block">
          <Input
            type="text"
            placeholder="Search book"
            required={false}
            autoComplete="off"
            onChange={handleSearch}
          />
          <Link to="/signin" className="mt-4 flex border-b-2">
            <img
              src={require("../icons/user_icon.png")}
              alt="user"
              className="w-6"
            />
            <span className="ml-2">My account</span>
          </Link>
          <Link className="flex mt-4 border-b-2">
            <img
              src={require("../icons/heart_icon.png")}
              alt="user"
              className="w-6"
            />
            <span className="ml-2">Favorites</span>
          </Link>
          <Link className="flex mt-4 border-b-2">
            <img
              src={require("../icons/basket_icon.png")}
              alt="user"
              className="w-6"
            />
            <span className="ml-2">My basket</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
