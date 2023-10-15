import React, { useState } from "react";
import data from "../Components/books";
import Navbar from "../Components/Navbar";
import DescriptionIcon from "@mui/icons-material/Description";

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
      <div className='relative mx-4'>
      {/* sidebar */}
      <NavicationSide
        hidden={"hidden"}
        mid_screen={"md:w-80"}
        long_screen={"lg:w-80"}
        block="lg:block"
      />
      {/* history section */}
      <div className="absolute top-24 h-auto px-10 pb-5 shadow-2xl border-2 rounded-xl bg-white w-full md:w-full lg:w-[calc(100%-330px)] lg:left-[330px]">
        <div className="flex items-center space-x-3 pt-5 border-b-2 pb-3">
          <h3 className="text-xl font-semibold">My orders</h3>
        </div>

        <div className="pt-24 flex flex-col items-center space-y-3 pb-5">
          <DescriptionIcon
            className="text-blue-600"
            fontSize="large"
          ></DescriptionIcon>
          <label className="text-xl text-center">You have no orders placed!</label>
        </div>
      </div>
    </div>
    </div>
  );
}
