import React, { useEffect, useState } from "react";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import PlaceIcon from "@mui/icons-material/Place";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Components/Input";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../Components/Button";
import axios from "axios";
export default function NavicationSide({width = "w-full", mid_screen = "md:w-full", long_screen = "lg:w-80", block, hidden}) {
  const [logedIn, setLogedIn] = useState(false);
  const [name, setName] = useState("");
  const [manageData, setManageData] = useState(false);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
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
        alert("error!");
      }
    });
  };
  const handleManageData = () => {
    setManageData(!manageData);
  };
  return (
    <div>
      {logedIn && (
        <aside className={`absolute top-24 ${width} ${mid_screen} ${long_screen} ${block} ${hidden} h-auto p-3 shadow-2xl border-2 rounded-xl bg-white`}>
          <Link to={'/profile'}>
          <div
            className="flex items-center space-x-3 mb-3 border-b-2 pb-3 cursor-pointer"
            onClick={handleManageData}
          >
            <img
              src={require("../icons/profile_user.png")}
              alt="profile_picture"
              className="rounded-full w-12 h-12"
            />
            <h4 className="font-semibold text-lg">{name}</h4>
          </div>
          </Link>
          
          <ul>
            <li className="mb-2">
              <Link
                to={"/"}
                className="flex justify-between items-center space-x-1 p-2 border-b-2 hover:bg-slate-100"
              >
                <div className="flex space-x-1">
                  <HomeIcon className="text-blue-600" />
                  <span className="font-semibold">Dashboard</span>
                </div>
                <ChevronRightIcon className="hover:scale-125" />
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to={"/history/orders"}
                className="flex justify-between items-center space-x-1 p-2 border-b-2 hover:bg-slate-100"
              >
                <div className="flex space-x-1">
                  <InsertDriveFileIcon className="text-purple-600" />
                  <span className="font-semibold">Orders</span>
                </div>
                <ChevronRightIcon className="hover:scale-125" />
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to={"/"}
                className="flex justify-between items-center space-x-1 p-2 border-b-2 hover:bg-slate-100"
              >
                <div className="flex space-x-1">
                  <StarHalfIcon className="text-yellow-400" />
                  <span className="font-semibold">My reviews</span>
                </div>
                <ChevronRightIcon className="hover:scale-125" />
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to={"/"}
                className="flex justify-between items-center space-x-1 p-2 border-b-2 hover:bg-slate-100"
              >
                <div className="flex space-x-1">
                  <PlaceIcon className="text-indigo-600" />
                  <span className="font-semibold">Delivery address</span>
                </div>
                <ChevronRightIcon className="hover:scale-125" />
              </Link>
            </li>
            <li className="mb-2 pb-60">
              <Link
                to={"/"}
                className="flex justify-between items-center space-x-1 p-2 border-b-2 hover:bg-slate-100"
              >
                <div className="flex space-x-1">
                  <SettingsIcon className="text-blue-600" />
                  <span className="font-semibold">Settings</span>
                </div>
                <ChevronRightIcon className="hover:scale-125" />
              </Link>
            </li>
            <li>
              <Link
                to={"/login"}
                className="flex justify-between items-center space-x-1 p-2 border-b-2 hover:bg-slate-100"
              >
                <div className="flex space-x-1">
                  <LogoutIcon className="text-red-500" />
                  <span className="font-semibold" onClick={handleLogOut}>
                    Log out
                  </span>
                </div>
                <ChevronRightIcon className="hover:scale-125" />
              </Link>
            </li>
          </ul>
        </aside>
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
    </div>
  );
}
