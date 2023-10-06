import React from 'react'
import Navbar from '../Components/Navbar'
import NavicationSide from '../Components/NavicationSide'
import StarIcon from '@mui/icons-material/Star';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import { useState } from 'react';
import data from '../Components/books';
export default function ReviewPage() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (value) => {
    setSearchTerm(value);
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredResults);
    if(value === filteredResults){
        navigate('/');
      }
  };
  return (
    <>
        {/* navbar */}
        <Navbar onSearch={handleSearch} />
        <div className='relative mx-4'>
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
                <h3 className="text-xl font-semibold">Reviews</h3>
                <label>0 reviews</label>
              </div>

              <div className="pt-24 flex flex-col items-center space-y-3 pb-5">
                <StarIcon
                  className="text-yellow-400"
                  fontSize="large"
                ></StarIcon>
                <label className="text-xl text-center">Hmm, no reviews added!</label>
                <label className="text-l text-center">
                  Here are some recommendations that could inspire you.
                </label>
                <Link to={"/"}>
                  <Button text={"See product"}></Button>
                </Link>
              </div>
            </div>
          </div>
    </>
  )
}
