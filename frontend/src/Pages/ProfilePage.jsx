import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import axios from "axios";
import Navbar from "../Components/Navbar";
import books from "../Components/books";
import { Link, useNavigate } from "react-router-dom";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import Input from "../Components/Input";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarRateIcon from "@mui/icons-material/StarRate";
import NavicationSide from "../Components/NavicationSide";
import DoorFrontIcon from "@mui/icons-material/DoorFront";
export default function ProfilePage() {
  const navigate = useNavigate();
  const [logedIn, setLogedIn] = useState(false);
  const [data, setData] = useState({
    name: "",
    alias: "",
    phone: "",
    id: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isOpenPhoneNumber, setisOpenPhoneNumber] = useState(false);
  const [isOpenManageData, setisOpenManageData] = useState(false);
  const [error, setError] = useState("");
  const [selectedGrade, setSelectedGrade] = useState([]);
  const handleSearch = (value) => {
    setSearchTerm(value);
    const filteredResults = books.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:8080/").then((res) => {
      if (res.data.Status === "Success") {
        setLogedIn(true);
        setData({
          ...data,
          name: res.data.name,
          email: res.data.email,
          phone: res.data.phone,
          id: res.data.id,
        });
      } else {
        setLogedIn(false);
      }
    });
  }, []);
  const openPhoneNumber = () => {
    setisOpenPhoneNumber(true);
  };
  const closePhoneNumber = () => {
    setisOpenPhoneNumber(false);
  };
  const openMangeData = () => {
    setisOpenManageData(true);
    navigate("#edit-personal-details");
  };
  const closeManageData = () => {
    setisOpenManageData(false);
    navigate("/profile");
  };
  // useEffect(()=>{
  //   axios.get(`http://localhost:8080/profile/change-number/${data.id}`)
  //   .then(res => console.log(res.data));
  // }, []);
  const handleSaveNumber = async (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8080/profile/${data.id}`, data.phone)
      .then((res) => {
        if (res.data.Status === "Success") {
          setisOpenPhoneNumber(false);
        } else {
          setError(res.data.message);
          setisOpenPhoneNumber(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSaveData = () => {};
  const handleInput = (field, value) => {
    const newData = { ...data, [field]: value };
    setData(newData);
  };
  const grades = [
    { grade: 0 },
    { grade: 1 },
    { grade: 2 },
    { grade: 3 },
    { grade: 4 },
    { grade: 5 },
    { grade: 6 },
    { grade: 7 },
    { grade: 8 },
    { grade: 9 },
    { grade: 10 },
  ];
  const toggleBackgroundColor = (grade) => {
    setSelectedGrade(grade === selectedGrade ? null : grade);
  };
  const [reason, setReason] = useState("");
  const handleReason = (e) => {
    setReason(e.target.value);
  }
  const sendExperience = () => {
    if(!selectedGrade.select){
      setError("Pleasse select an answer.");
    }else{
      console.log({grade: selectedGrade, reason: reason});
    }
  }
  return (
    <div>
      {/* Navbar */}
      <Navbar onSearch={handleSearch} />
      {/* sidebar */}
      {logedIn ? (
        <div className="relative mx-4">
          <NavicationSide />
          {/* data of accout */}

          <section className="absolute top-24  h-auto px-10 shadow-2xl border-2 rounded-xl bg-white  hidden md:block lg:block left-[350px] md:w-[calc(100%-350px)] lg:w-auto">
            <h3 className="font-semibold text-xl pb-10 pt-5">
              Data of account
            </h3>
            <div className="flex items-center justify-between  md:space-x-24 lg:space-x-72 pb-20">
              <div className="flex items-center">
                {" "}
                <EditRoundedIcon className="text-blue-600 bg-white rounded-full absolute left-28 md:top-[245px] z-10 lg:top-[210px] shadow-3xl cursor-pointer border-2"></EditRoundedIcon>
                <img
                  src={require("../icons/profile_user.png")}
                  alt="profile_picture"
                  className="rounded-full w-28 absolute"
                />
              </div>

              <ul>
                <li className="pb-3">
                  <div className="flex lg:flex-row md:flex-col items-center">
                    <label>Alias: </label>

                    <span className=" ml-2">{data.alias}</span>
                  </div>
                </li>
                <li className="pb-3">
                  <div className="flex lg:flex-row md:flex-col items-center">
                    <label>Name: </label>

                    <span className=" ml-2">{data.name}</span>
                  </div>
                </li>
                <li className="pb-3">
                  <div className="flex lg:flex-row md:flex-col items-center">
                    <label>Email: </label>
                    <span className="ml-2">{data.email}</span>
                  </div>
                </li>
                <li className="pb-3">
                  <div className="flex lg:flex-row md:flex-col items-center">
                    <label>Phone: </label>
                    <span className=" ml-2 font font-semibold">
                      {data.phone}
                    </span>
                  </div>
                </li>
                <li className="flex lg:flex-row md:flex-col items-center">
                  <Button
                    text={"Change phone number"}
                    onClick={openPhoneNumber}
                    width="w-auto"
                  ></Button>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-center pb-5 pt-5 border-t-2 ">
              <Button
                text={"Manage your data"}
                onClick={openMangeData}
                width="w-auto"
              ></Button>
            </div>
          </section>
          {/* my activity */}

          <section className="absolute h-auto px-10 shadow-2xl border-2 rounded-xl bg-white hidden md:block lg:block w-[calc(100%-350px)] md:top-[625px] lg:top-[550px] left-[350px]">
            <h3 className="font-semibold text-xl pt-5 pb-10">My activity</h3>
            <ul className="flex lg:flex-row md:flex-col justify-between lg:items-center md:items-start pb-10 md:gap-10">
              <li className="flex lg:flex-row md:flex-col lg:items-center justify-between gap-6">
                <DoorFrontIcon
                  className="text-blue-600"
                  fontSize="large"
                ></DoorFrontIcon>
                <div>
                  <div className="">
                    0 order placed
                  </div>
                  <Link to={"/orders"}>
                    <div className="text-blue-600 font-semibold cursor-pointer pt-5 hover:underline">
                      see history of orders
                    </div>
                  </Link>
                </div>
              </li>
              <li className="flex lg:flex-row md:flex-col lg:items-center gap-6">
                <FavoriteIcon
                  className="text-red-500"
                  fontSize="large"
                ></FavoriteIcon>
                <div>
                  <div className="">
                    0 favorite products
                  </div>
                  <Link to={"/favorites"}>
                    {" "}
                    <div className="text-blue-600 font-semibold cursor-pointer pt-5 hover:underline">
                      see favorite products
                    </div>
                  </Link>
                </div>
              </li>
              <li className="flex lg:flex-row md:flex-col lg:items-center gap-6">
                <StarRateIcon
                  className="text-yellow-400"
                  fontSize="large"
                ></StarRateIcon>
                <div>
                  <div className="">
                    0 reviews added
                  </div>
                  <Link to={"/reviews"}>
                    <div className="text-blue-600 font-semibold cursor-pointer pt-5 hover:underline">
                      see reviews
                    </div>
                  </Link>
                </div>
              </li>
            </ul>
          </section>
          {/* evaluate your experience */}
          <section className="absolute h-auto px-10 shadow-2xl border-2 rounded-xl bg-white pb-5 hidden md:block lg:block w-[calc(100%-350px)] md:top-[1200px] lg:top-[770px] left-[350px]">
            <div className="flex lg:flex-row md:flex-col justify-between space-x-5">
              <div className="lg:w-2/4 md:w-full">
                <h3 className="font-semibold text-xl pt-5 pb-5">
                  {" "}
                  Rate your experience with OnlineBooks
                </h3>
                <p>
                  {" "}
                  Based on your experience with OnlineBooks in recent months,
                  what is the probability of recommending us to your loved ones?
                  Grade 0 means 'I do not recommend at all', while 10 means 'I
                  recommend with all confidence'.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-4">
                <div className="grid md:grid-cols-7 lg:grid-cols-11 gap-4 pt-5">
                  {grades.map((item, index) => (
                    <div
                      key={index}
                      className={`rounded-md flex items-center justify-center cursor-pointer p-4 ${
                        item.grade === selectedGrade
                          ? "bg-blue-600 text-white"
                          : "bg-blue-200 text-black"
                      }`}
                      onClick={() => toggleBackgroundColor(item.grade)}
                    >
                      {item.grade}
                    </div>
                  ))}
                </div>

                <div className="w-full">
                  <textarea
                    className="border-2 focus:border-blue-600 px-3 py-1 w-full rounded-md"
                    placeholder="What is the reason why you gave us this rating?(optional)"
                    onChange={handleReason}
                  ></textarea>
                </div>
                {error && <span className="text-red-400">{error}</span>}
              
                <div>
                  <Button text={"Send"} width="w-[200px]" onClick={sendExperience}></Button>
                </div>
              </div>
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
      {isOpenPhoneNumber && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white py-10 px-10 rounded-xl shadow-md mt-10 sm:mx-auto sm:w-full sm:max-w-sm relative">
            <CloseIcon
              className="cursor-pointer absolute top-3 right-3 hover:scale-110"
              onClick={closePhoneNumber}
            />
            <h2 className="flex justify-center text-xl font-semibold">
              Enter or modify phone number
            </h2>
            <br />
            <label className="block mb-2">Phone number</label>
            <Input
              type="number"
              name="phone"
              required={true}
              autoComplete="on"
              value={data.value}
              border={error ? "border-red-400" : "focus:border-blue-600"}
              onChange={(e) => handleInput(e.target.name, e.target.value)}
            />
            {error && (
              <label className="text-red-600 flex justify-center pt-5">
                {error}
              </label>
            )}
            <div className="pt-5">
              <Button text={`Save`} onClick={handleSaveNumber} />
            </div>
          </div>
        </div>
      )}
      {/* manage data */}
      {isOpenManageData && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white py-10 px-10 rounded-xl shadow-md md:w-[460px] lg:w-[460px] w-full relative mx-4">
            <CloseIcon
              className="cursor-pointer absolute top-3 right-3 hover:scale-110"
              onClick={closeManageData}
            />
            <h2 className="flex justify-center text-xl font-semibold">
              Manage the datas
            </h2>
            <br />
            <div>
              <div className="flex flex-col pb-5">
                <label>Name and surname:</label>
                <Input
                  type="text"
                  name="name"
                  autoComplete="off"
                  required={true}
                  placeholder={"Tom Cruise"}
                  border={error ? "border-red-400" : "focus:border-blue-600"}
                  value={data.name}
                  onChange={(e) => handleInput(e.target.name, e.target.value)}
                />
                {error && <span className="text-xs text-red-600">{error}</span>}
              </div>
              <div className="flex flex-col pb-5">
                <label>Alias: </label>
                <Input
                  type="text"
                  name="alias"
                  required={true}
                  autoComplete="off"
                  placeholder={"ex: tomc20"}
                  border="focus:border-blue-600"
                  value={data.alias}
                  onChange={(e) => handleInput(e.target.name, e.target.value)}
                />
              </div>
              <label>Date of birth:</label>
              <div className="sm:flex sm:flex-row justify-between pb-5 sm:space-x-2 space-y-1 flex flex-col">
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
                  <option value=" 1920 "> 1920 </option>
                  <option value=" 1921 "> 1921 </option>
                  <option value=" 1922 "> 1922 </option>
                  <option value=" 1923 "> 1923 </option>
                  <option value=" 1924 "> 1924 </option>
                  <option value=" 1925 "> 1925 </option>
                  <option value=" 1926 "> 1926 </option>
                  <option value=" 1927 "> 1927 </option>
                  <option value=" 1928 "> 1928 </option>
                  <option value=" 1929 "> 1929 </option>
                  <option value=" 1930 "> 1930 </option>
                  <option value=" 1931 "> 1931 </option>
                  <option value=" 1932 "> 1932 </option>
                  <option value=" 1933 "> 1933 </option>
                  <option value=" 1934 "> 1934 </option>
                  <option value=" 1935 "> 1935 </option>
                  <option value=" 1936 "> 1936 </option>
                  <option value=" 1937 "> 1937 </option>
                  <option value=" 1938 "> 1938 </option>
                  <option value=" 1939 "> 1939 </option>
                  <option value=" 1940 "> 1940 </option>
                  <option value=" 1941 "> 1941 </option>
                  <option value=" 1942 "> 1942 </option>
                  <option value=" 1943 "> 1943 </option>
                  <option value=" 1944 "> 1944 </option>
                  <option value=" 1945 "> 1945 </option>
                  <option value=" 1946 "> 1946 </option>
                  <option value=" 1947 "> 1947 </option>
                  <option value=" 1948 "> 1948 </option>
                  <option value=" 1949 "> 1949 </option>
                  <option value=" 1950 "> 1950 </option>
                  <option value=" 1951 "> 1951 </option>
                  <option value=" 1952 "> 1952 </option>
                  <option value=" 1953 "> 1953 </option>
                  <option value=" 1954 "> 1954 </option>
                  <option value=" 1955 "> 1955 </option>
                  <option value=" 1956 "> 1956 </option>
                  <option value=" 1957 "> 1957 </option>
                  <option value=" 1958 "> 1958 </option>
                  <option value=" 1959 "> 1959 </option>
                  <option value=" 1960 "> 1960 </option>
                  <option value=" 1961 "> 1961 </option>
                  <option value=" 1962 "> 1962 </option>
                  <option value=" 1963 "> 1963 </option>
                  <option value=" 1964 "> 1964 </option>
                  <option value=" 1965 "> 1965 </option>
                  <option value=" 1966 "> 1966 </option>
                  <option value=" 1967 "> 1967 </option>
                  <option value=" 1968 "> 1968 </option>
                  <option value=" 1969 "> 1969 </option>
                  <option value=" 1970 "> 1970 </option>
                  <option value=" 1971 "> 1971 </option>
                  <option value=" 1972 "> 1972 </option>
                  <option value=" 1973 "> 1973 </option>
                  <option value=" 1974 "> 1974 </option>
                  <option value=" 1975 "> 1975 </option>
                  <option value=" 1976 "> 1976 </option>
                  <option value=" 1977 "> 1977 </option>
                  <option value=" 1978 "> 1978 </option>
                  <option value=" 1979 "> 1979 </option>
                  <option value=" 1980 "> 1980 </option>
                  <option value=" 1981 "> 1981 </option>
                  <option value=" 1982 "> 1982 </option>
                  <option value=" 1983 "> 1983 </option>
                  <option value=" 1984 "> 1984 </option>
                  <option value=" 1985 "> 1985 </option>
                  <option value=" 1986 "> 1986 </option>
                  <option value=" 1987 "> 1987 </option>
                  <option value=" 1988 "> 1988 </option>
                  <option value=" 1989 "> 1989 </option>
                  <option value=" 1990 "> 1990 </option>
                  <option value=" 1991 "> 1991 </option>
                  <option value=" 1992 "> 1992 </option>
                  <option value=" 1993 "> 1993 </option>
                  <option value=" 1994 "> 1994 </option>
                  <option value=" 1995 "> 1995 </option>
                  <option value=" 1996 "> 1996 </option>
                  <option value=" 1997 "> 1997 </option>
                  <option value=" 1998 "> 1998 </option>
                  <option value=" 1999 "> 1999 </option>
                  <option value=" 2000 "> 2000 </option>
                  <option value=" 2001 "> 2001 </option>
                  <option value=" 2002 "> 2002 </option>
                  <option value=" 2003 "> 2003 </option>
                  <option value=" 2004 "> 2004 </option>
                  <option value=" 2005 "> 2005 </option>
                  <option value=" 2006 "> 2006 </option>
                  <option value=" 2007 "> 2007 </option>
                  <option value=" 2008 "> 2008 </option>
                  <option value=" 2009 "> 2009 </option>
                  <option value=" 2010 "> 2010 </option>
                  <option value=" 2011 "> 2011 </option>
                  <option value=" 2012 "> 2012 </option>
                  <option value=" 2013 "> 2013 </option>
                </select>
              </div>
            </div>

            <div className="pt-5">
              <Button text={`Save`} onClick={handleSaveData} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
