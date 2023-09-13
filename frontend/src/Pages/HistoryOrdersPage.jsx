import React, { useState } from "react";
import data from "../Components/books";
import Navbar from "../Components/Navbar";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import NavicationSide from "../Components/NavicationSide";
export default function HistoryOrders() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (value) => {
    setSearchTerm(value);
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };
  return (
    <div>
      {/* Navbar */}
      <Navbar onSearch={handleSearch} />
      {/* sidebar*/}
      <div className="mr-3 ml-3">
        <NavicationSide hidden={"hidden"} mid_screen={"md:w-80"} long_screen={"lg:w-80"} block="lg:block"/>
        <div className="absolute top-24 h-auto px-10 pb-5 shadow-2xl border-2 rounded-xl bg-white w-full md:w-full lg:w-[calc(100%-362px)] left-3 md:left-3 lg:left-[350px]">
          <h3 className="text-xl font-semibold pt-5 pb-10">
            My orders
          </h3>
          <div className="space-x-3 flex items-center py-5 bg-gray-100">
          <ErrorOutlineIcon className="text-red-500"></ErrorOutlineIcon>
          <label>
          You don't have any orders yet!
          </label>
          </div>
         
        </div>
      </div>
    </div>
  );
}
