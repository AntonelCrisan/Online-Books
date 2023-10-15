import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import axios from "axios";
import Navbar from "../Components/Navbar";
import books from "../Components/books";
import { Link, useNavigate } from "react-router-dom";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarRateIcon from "@mui/icons-material/StarRate";
import NavicationSide from "../Components/NavicationSide";
import DoorFrontIcon from "@mui/icons-material/DoorFront";
import ManageData from "../Components/ManageData";
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

  const openMangeData = () => {
    setisOpenManageData(true);
    navigate("#edit-personal-details");
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
  };
  const sendExperience = () => {
    if (!selectedGrade.select) {
      setError("Pleasse select an answer.");
    } else {
      console.log({ grade: selectedGrade, reason: reason });
    }
  };
  return (
    <div>
      {/* Navbar */}
      <Navbar onSearch={handleSearch} />
      {/* sidebar */}
      {logedIn ? (
        <div className="relative mx-4">
          <NavicationSide />
          {/* data of accout */}
          <div className="absolute left-[330px] top-24 flex flex-col gap-5">
            <section className="h-auto px-10 shadow-2xl border-2 rounded-xl bg-white  hidden md:block lg:block">
              <h3 className="font-semibold text-xl pb-10 pt-5">
                Data of account
              </h3>
              <div className="flex flex-row justify-between items-center pb-20">
                <div className="flex items-center">
                  {" "}
                  <EditRoundedIcon className="text-blue-600 bg-white rounded-full absolute left-[120px] z-10 top-[190px] shadow-3xl cursor-pointer border-2"></EditRoundedIcon>
                  <img
                    src={require("../icons/profile_user.png")}
                    alt="profile_picture"
                    className="rounded-full w-28 absolute "
                  />
                </div>

                <ul className="flex flex-col flex-wrap">
                  <li className="pb-3">
                    <div className="flex lg:flex-row md:flex-col items-center">
                      <span>Alias: </span>

                      <span className=" ml-2">{data.alias}</span>
                    </div>
                  </li>
                  <li className="pb-3">
                    <div className="flex lg:flex-row md:flex-col items-center">
                      <span>Name: </span>

                      <span className=" ml-2">{data.name}</span>
                    </div>
                  </li>
                  <li className="pb-3">
                    <div className="flex lg:flex-row md:flex-col items-center">
                      <span>Email: </span>
                      <span className="ml-2">{data.email}</span>
                    </div>
                  </li>
                  <li className="pb-3">
                    <div className="flex lg:flex-row md:flex-col items-center">
                      <span>Phone: </span>
                      <span className=" ml-2 font font-semibold">
                        {data.phone}
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="border-2 rounded-xl text-center py-10 px-2">
                  Thank you for being our customer{" "}
                  <span className="text-xl font-semibold">1 years</span>
                </div>
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

            <section className=" h-auto px-10 shadow-2xl border-2 rounded-xl bg-white hidden md:block lg:block">
              <h3 className="font-semibold text-xl pt-5 pb-10">My activity</h3>
              <ul className="flex lg:flex-row md:flex-col justify-between lg:items-center md:items-start pb-10 md:gap-5">
                <li className="flex lg:flex-row md:flex-col lg:items-center justify-between gap-6 md:w-full lg:w-auto">
                  <DoorFrontIcon
                    className="text-blue-600"
                    fontSize="large"
                  ></DoorFrontIcon>
                  <div>
                    <div className=" border-dotted border-b-2">0 order placed</div>
                    <Link to={"/orders"}>
                      <div className="text-blue-600 font-semibold cursor-pointer pt-5 hover:underline">
                        see history of orders
                      </div>
                    </Link>
                  </div>
                </li>
                <li className="flex lg:flex-row md:flex-col lg:items-center gap-6 md:w-full lg:w-auto">
                  <FavoriteIcon
                    className="text-red-500"
                    fontSize="large"
                  ></FavoriteIcon>
                  <div>
                    <div className=" border-dotted border-b-2">0 favorite products</div>
                    <Link to={"/favorites"}>
                      {" "}
                      <div className="text-blue-600 font-semibold cursor-pointer pt-5 hover:underline">
                        see favorite products
                      </div>
                    </Link>
                  </div>
                </li>
                <li className="flex lg:flex-row md:flex-col lg:items-center gap-6 md:w-full lg:w-auto">
                  <StarRateIcon
                    className="text-yellow-400"
                    fontSize="large"
                  ></StarRateIcon>
                  <div>
                    <div className=" border-dotted border-b-2">0 reviews added</div>
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
            <section className=" h-auto px-10 shadow-2xl border-2 rounded-xl bg-white pb-5 hidden md:block lg:block">
              <div className="flex lg:flex-row md:flex-col justify-between space-x-5">
                <div className="lg:w-2/4 md:w-full">
                  <h3 className="font-semibold text-xl pt-5 pb-5">
                    {" "}
                    Rate your experience with OnlineBooks
                  </h3>
                  <p>
                    {" "}
                    Based on your experience with OnlineBooks in recent months,
                    what is the probability of recommending us to your loved
                    ones? Grade 0 means 'I do not recommend at all', while 10
                    means 'I recommend with all confidence'.
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
                      name="textarea"
                      className="border-2 focus:border-blue-600 px-3 py-1 w-full rounded-md"
                      placeholder="What is the reason why you gave us this rating?(optional)"
                      onChange={handleReason}
                    ></textarea>
                  </div>
                  {error && <span className="text-red-400">{error}</span>}

                  <div>
                    <Button
                      text={"Send"}
                      width="w-[200px]"
                      onClick={sendExperience}
                    ></Button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : (
        // if you are not loged in
        <div className="hidden">
          <h2>Ups... You are not loged in to see your profile</h2>
          <span>Press the button login to connect your accout!</span>
          <Link to="/login">
            {" "}
            <Button text={`Log in`}></Button>
          </Link>
        </div>
      )}
      {/* manage data */}
      {isOpenManageData && (
        <ManageData></ManageData>
      )}
    </div>
  );
}
