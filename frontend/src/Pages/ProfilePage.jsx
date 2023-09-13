import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import axios from "axios";
import Navbar from "../Components/Navbar";
import data from "../Components/books";
import { Link } from "react-router-dom";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import Input from "../Components/Input";
import CloseIcon from "@mui/icons-material/Close";
import NoteIcon from "@mui/icons-material/Note";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarRateIcon from "@mui/icons-material/StarRate";
import NavicationSide from "../Components/NavicationSide";
export default function ProfilePage() {
  const [logedIn, setLogedIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [changeNumber, setchangeNumber] = useState(false);
  const [manageData, setManageData] = useState(false);
  const [number, setNumber] = useState("");
  const [savedNumber, setSavedNumber] = useState("");
  const [error, setError] = useState("");
  const handleSearch = (value) => {
    setSearchTerm(value);
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:8080/").then((res) => {
      if (res.data.Status === "Success") {
        setLogedIn(true);
        setName(res.data.name);
        setEmail(res.data.email);
      } else {
        setLogedIn(false);
      }
    });
  }, []);
  const handleNumber = () => {
    setchangeNumber(!changeNumber);
  };
  const handleManageData = () => {
    setManageData(!manageData);
  };
  const handleSave = () => {
    setSavedNumber(number);
    setNumber("");
    if (number.length === 0) {
      setError("Please enter a number!");
    } else {
      setchangeNumber(false);
    }
  };
  const handleInput = (e) => {
    setNumber(e.target.value);
  };
  return (
    <div>
      {/* Navbar */}
      <Navbar onSearch={handleSearch} />
      {/* sidebar */}
      {logedIn ? (
        <div className="px-3">
          <NavicationSide />
          {/* data of accout */}
          <section className="absolute top-24  h-auto px-10 shadow-2xl border-2 rounded-xl bg-white hidden lg:block left-[350px]">
            <h3 className="font-semibold text-xl pb-10 pt-5">
              Data of account
            </h3>
            <div className="flex items-center justify-between space-x-56 pb-20">
              <div className="flex items-center">
                {" "}
                <EditRoundedIcon className="text-blue-600 bg-white rounded-full absolute left-28 top-48 shadow-3xl cursor-pointer border-2"></EditRoundedIcon>
                <img
                  src={require("../icons/profile_user.png")}
                  alt="profile_picture"
                  className="rounded-full w-28"
                />
              </div>

              <ul>
                <li className="pb-3">
                  <div className="flex flex-row">
                    <label>Name: </label>
                    <span>{name}</span>
                  </div>
                </li>
                <li className="pb-3">
                  <div className="flex flex-row">
                    <label>Email: </label>
                    <span>{email}</span>
                  </div>
                </li>
                <li className="pb-3">
                  <div className="flex flex-row">
                    <label>Phone: {number}</label>
                    {savedNumber && (
                      <span className="font-bold">{savedNumber}</span>
                    )}
                  </div>
                </li>
                <Button text={"Change number"} onClick={handleNumber}></Button>
              </ul>
            </div>

            <div className="flex items-center justify-center pb-5 pt-5 border-t-2 ">
              <Button
                text={"Manage your data"}
                onClick={handleManageData}
              ></Button>
            </div>
          </section>
        </div>
      ) : (
        // if you are not loged in
        <div className="hidden">
          <h2>Ups... You are not loged in to see your profile</h2>
          <label>Press the button login to connect your accout!</label>
          <Link to="/login">
            {" "}
            <Button text={`Log in`}></Button>
          </Link>
        </div>
      )}
      {/* change number */}
      {changeNumber && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white py-10 px-10 rounded-xl shadow-md mt-10 sm:mx-auto sm:w-full sm:max-w-sm relative">
            <CloseIcon
              className="cursor-pointer absolute top-3 right-3 hover:scale-110"
              onClick={handleNumber}
            />
            <h2 className="flex justify-center text-xl font-semibold">
              Enter or modify phone number
            </h2>
            <br />
            <label className="block mb-2">Phone number</label>
            <Input
              type="text"
              name="name"
              required={true}
              autoComplete="on"
              onChange={handleInput}
            />
            {error && (
              <label className="text-red-600 flex justify-center pt-5">
                {error}
              </label>
            )}
            <div className="pt-5">
              <Button text={`Save`} onClick={handleSave} />
            </div>
          </div>
        </div>
      )}
      {/* manage data */}
      {manageData && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white py-10 px-10 rounded-xl shadow-md mt-10 relative md:w-full lg:w-[460px] w-full">
            <CloseIcon
              className="cursor-pointer absolute top-3 right-3 hover:scale-110"
              onClick={handleManageData}
            />
            <h2 className="flex justify-center text-xl font-semibold">
              Manage the datas
            </h2>
            <br />
            <div className="">
            <div className="flex flex-col pb-5">
              <label>Name and surname:</label>
              <Input
                type="text"
                name="name"
                required={true}
                placeholder={"Tom Cruise"}
                border = "focus:border-blue-600"
              />
            </div>
            <div className="flex flex-col pb-5">
              <label>Alias: </label>
              <Input
                type="text"
                name="name"
                required={true}
                autoComplete="on"
                placeholder={"ex: tomc20"}
                border = "focus:border-blue-600"
              />
            </div>
            <label>Date of birth:</label>
            <div className="flex flex-row justify-between pb-5 space-x-2">
              <select className="border-2 border-gray rounded-xl p-1 focus:border-blue-600">
                <option value="Day">Day</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select className="border-2 border-gray rounded-xl p-1 focus:border-blue-600 flex-grow">
                <option value="January">Mounth</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
              <select className="border-2 border-gray rounded-xl p-1 focus:border-blue-600">
                <option> Year </option>
                <option> 1920 </option>
                <option> 1921 </option>
                <option> 1922 </option>
                <option> 1923 </option>
                <option> 1924 </option>
                <option> 1925 </option>
                <option> 1926 </option>
                <option> 1927 </option>
                <option> 1928 </option>
                <option> 1929 </option>
                <option> 1930 </option>
                <option> 1931 </option>
                <option> 1932 </option>
                <option> 1933 </option>
                <option> 1934 </option>
                <option> 1935 </option>
                <option> 1936 </option>
                <option> 1937 </option>
                <option> 1938 </option>
                <option> 1939 </option>
                <option> 1940 </option>
                <option> 1941 </option>
                <option> 1942 </option>
                <option> 1943 </option>
                <option> 1944 </option>
                <option> 1945 </option>
                <option> 1946 </option>
                <option> 1947 </option>
                <option> 1948 </option>
                <option> 1949 </option>
                <option> 1950 </option>
                <option> 1951 </option>
                <option> 1952 </option>
                <option> 1953 </option>
                <option> 1954 </option>
                <option> 1955 </option>
                <option> 1956 </option>
                <option> 1957 </option>
                <option> 1958 </option>
                <option> 1959 </option>
                <option> 1960 </option>
                <option> 1961 </option>
                <option> 1962 </option>
                <option> 1963 </option>
                <option> 1964 </option>
                <option> 1965 </option>
                <option> 1966 </option>
                <option> 1967 </option>
                <option> 1968 </option>
                <option> 1969 </option>
                <option> 1970 </option>
                <option> 1971 </option>
                <option> 1972 </option>
                <option> 1973 </option>
                <option> 1974 </option>
                <option> 1975 </option>
                <option> 1976 </option>
                <option> 1977 </option>
                <option> 1978 </option>
                <option> 1979 </option>
                <option> 1980 </option>
                <option> 1981 </option>
                <option> 1982 </option>
                <option> 1983 </option>
                <option> 1984 </option>
                <option> 1985 </option>
                <option> 1986 </option>
                <option> 1987 </option>
                <option> 1988 </option>
                <option> 1989 </option>
                <option> 1990 </option>
                <option> 1991 </option>
                <option> 1992 </option>
                <option> 1993 </option>
                <option> 1994 </option>
                <option> 1995 </option>
                <option> 1996 </option>
                <option> 1997 </option>
                <option> 1998 </option>
                <option> 1999 </option>
                <option> 2000 </option>
                <option> 2001 </option>
                <option> 2002 </option>
                <option> 2003 </option>
                <option> 2004 </option>
                <option> 2005 </option>
                <option> 2006 </option>
                <option> 2007 </option>
                <option> 2008 </option>
                <option> 2009 </option>
                <option> 2010 </option>
                <option> 2011 </option>
                <option> 2012 </option>
                <option> 2013 </option>
              </select>
            </div>
            </div>
           
            <div className="pt-5">
              <Button text={`Save`} />
            </div>
          </div>
        </div>
      )}
      {/* my activity */}
      <section
        className="absolute h-auto px-10 shadow-2xl border-2 rounded-xl bg-white pb-5 hidden lg:block"
        style={{ width: "calc(100% - 362px)", top: "520px", left: "350px" }}
      >
        <h3 className="font-semibold text-xl pt-5 pb-5">My activity</h3>
        <ul className="flex flex-row justify-between">
          <li className="flex flex-row items-center space-x-6">
            <NoteIcon className="text-blue-600" fontSize="large"></NoteIcon>
            <div>
              <div className="border-b-2 pb-1">0 order placed</div>
              <Link to={"/history/orders"}>
                <div className="text-blue-600 font-semibold cursor-pointer pt-5 hover:underline">
                  see history of orders
                </div>
              </Link>
            </div>
          </li>
          <li className="flex flex-row items-center space-x-6">
            <FavoriteIcon
              className="text-red-500"
              fontSize="large"
            ></FavoriteIcon>
            <div>
              <div className="border-b-2 pb-1">0 favorite products</div>
              <Link to={"/favorites"}>
                {" "}
                <div className="text-blue-600 font-semibold cursor-pointer pt-5 hover:underline">
                  see favorite products
                </div>
              </Link>
            </div>
          </li>
          <li className="flex flex-row items-center space-x-6">
            <StarRateIcon
              className="text-yellow-400"
              fontSize="large"
            ></StarRateIcon>
            <div>
              <div className="border-b-2 pb-1">0 reviews added</div>
              <div className="text-blue-600 font-semibold cursor-pointer pt-5 hover:underline">
                see reviews
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
