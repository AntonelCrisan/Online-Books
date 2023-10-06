import React, { useState, useEffect } from "react";
import data from "../Components/books";
import Navbar from "../Components/Navbar";
import NavicationSide from "../Components/NavicationSide";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "../Components/Button";
import { Link} from "react-router-dom";
import axios from "axios";
export default function FavoritesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [logedIn, setLogedIn] = useState(false);
  axios.defaults.withCredentials = true;
  const handleSearch = (value) => {
    setSearchTerm(value);
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
      
    );
    setSearchResults(filteredResults);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/").then((res) => {
      if (res.data.Status === "Success") {
        setLogedIn(true);
      } else {
        setLogedIn(false);
      }
    });
  }, []);
  return (
    <div>
      {/* Navbar */}
      <Navbar onSearch={handleSearch} />
      <div className="relative mx-4">
      
        {logedIn ? (
          <div>
            {/* sidebar */}
            <NavicationSide
              hidden={"hidden"}
              mid_screen={"md:w-80"}
              long_screen={"lg:w-80"}
              block="lg:block"
            />
                     {/* favorite section */}
            <div className="absolute top-24 h-auto px-10 pb-5 shadow-2xl border-2 rounded-xl bg-white w-full md:w-full lg:w-[calc(100%-362px)]  lg:left-[350px]">
              <div className="flex items-center space-x-3 pt-5 border-b-2 pb-3">
                <h3 className="text-xl font-semibold">Favorites</h3>
                <label>0 products</label>
              </div>

              <div className="pt-24 flex flex-col items-center space-y-3 pb-5">
                <FavoriteBorderIcon
                  className="text-blue-600"
                  fontSize="large"
                ></FavoriteBorderIcon>
                <label className="text-xl">Hmm, no product in your list!</label>
                <label className="text-xl">
                  Here are some recommendations that could inspire you.
                </label>
                <Link to={"/"}>
                  <Button text={"See product"}></Button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
            <div className="md:relative md:flex md:flex-row lg:space-x-10 md:space-x-10 pt-24">
                {/* sidebar for login or signup if you are not connected */}
          <div className="w-full md:w-64 lg:w-80 h-auto p-3 shadow-2xl border-2 rounded-xl bg-white">
              <div className="flex flex-col items-center space-y-3 pt-5 pb-5 text-center">
                <img
                  src={require("../icons/user.png")}
                  alt="user"
                  className="w-28"
                />
                <h3 className="text-xl pt-5">
                  Hey, you are now an anonymous user.
                </h3>
                <span>
                  Enter your account or register to keep your favorite products.
                </span>
                <Link to={"/login"}>
                  <Button text={"Log in"}></Button>
                </Link>
                <Link to={"/signup"}>
                  <Button text={"Sign Up"}></Button>
                </Link>
              </div>
            </div>
            {/* favorites section */}
            <div className="md:w-[calc(100%-362px)] h-auto p-3 shadow-2xl border-2 rounded-xl bg-white mt-5 md:mt-0 lg:mt-0 mb-10 md:mb-0 lg:mb-0">
              <div className="flex items-center space-x-3 pt-5 border-b-2 pb-3">
                <h3 className="text-xl font-semibold">Favorites</h3>
                <label>0 products</label>
              </div>

              <div className="pt-24 flex flex-col items-center space-y-3 pb-5">
                <FavoriteBorderIcon
                  className="text-blue-600"
                  fontSize="large"
                ></FavoriteBorderIcon>
                <label className="text-xl text-center">
                  Hmm, no product in your list!
                </label>
                <label className="text-xl text-center">
                  Here are some recommendations that could inspire you.
                </label>
                <Link to={"/"}>
                  <Button text={"See product"}></Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
