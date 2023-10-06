import { useState } from "react";
import Navbar from "../Components/Navbar";
import data from "../Components/books";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const handleSearch = (value) => {
    setSearchTerm(value);
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredResults);
   
  };
  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="relative mx-10">
      <div className="mx-auto max-w-2xl py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {searchTerm
            ? searchResults.map((product) => (
                <a key={product.id} href={product.href} className="group shadow-lg rounded-lg">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700 px-3">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900 px-3">
                    {product.price}
                  </p>
                </a>
              ))
            : data.map((product) => (
                <a key={product.id} href={product.href} className="group shadow-lg rounded-lg">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700 px-3">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900 px-3">
                    {product.price}
                  </p>
                </a>
              ))}
        </div>
      </div>
      </div>
     
    </>
  );
}
