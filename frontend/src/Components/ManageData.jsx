import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import Button from './Button';
import Input from './Input';
export default function ManageData() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        alias: "",
        phone: "",
        id: "",
      });
      const [isOpenManageData, setisOpenManageData] = useState(false);
      const [error, setError] = useState("");
    const handleInput = (field, value) => {
        const newData = { ...data, [field]: value };
        setData(newData);
      };
      const closeManageData = () => {
        setisOpenManageData(false);
        navigate("/profile");
      };
      const handleSaveData = () => {};
  return (
    <div>
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
                <span>Name and surname:</span>
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
                <span>Alias: </span>
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
              <span>Date of birth:</span>
              <div className="sm:flex sm:flex-row justify-between pb-5 sm:space-x-2 space-y-1 flex flex-col">
                <select
                  name="day"
                  className="border-2 border-gray rounded-xl p-1 focus:border-blue-600"
                >
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
                <select
                  name="month"
                  className="border-2 border-gray rounded-xl p-1 focus:border-blue-600 flex-grow"
                >
                  <option value="month">Month</option>
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
                <select
                  name="year"
                  className="border-2 border-gray rounded-xl p-1 focus:border-blue-600"
                >
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
    </div>
  )
}
