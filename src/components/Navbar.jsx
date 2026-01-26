import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  // Handle Search Input Function
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value)
  };

  return (
    <nav className="w-full h-10 flex justify-between items-center px-2 sm:h-20 sm:px-20">
      {/* Logo - Navbar */}
      <div className="w-[60%] relative h-full flex flex-row-reverse items-center justify-end gap-2  sm:gap-8 sm:w-[45%]">
        <ul
          className={`bg-gray-200 w-100 absolute ${
            toggle ? "-left-2" : "-left-200"
          } top-10 p-8 z-10 duration-200 ease-in-out sm:static sm:w-full sm:bg-transparent sm:flex sm:justify-start sm:items-center sm:gap-8 sm:p-0`}
        >
          <li>
            <label className="cursor-pointer" htmlFor="shop">
              Shop
            </label>
            <select id="shop">
              <option></option>
            </select>
          </li>
          <li>
            <NavLink>On Sale</NavLink>
          </li>
          <li>
            <NavLink>New Arrivals</NavLink>
          </li>
          <li>
            <NavLink>Brands</NavLink>
          </li>
        </ul>
        <h1 className="font-black text-3xl">SHOP.CO</h1>

        <button
          onClick={() => setToggle(!toggle)}
          className="text-2xl sm:hidden"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Search - Cart - Profile */}
      <div className="w-[40%] h-full flex items-center justify-between  sm:w-[55%]">
        <div className="w-[85%] h-full flex justify-center items-center relative">
          <label
            className="text-2xl cursor-pointer absolute top-5.6 right-10 sm:left-2.5 "
            htmlFor="search-product"
            onClick={() => setSearchToggle(!searchToggle)}
          >
            <IoSearch />
          </label>
          <input
            className={`w-full ${searchToggle ? "block " : "hidden"} bg-gray-100 border rounded-3xl py-2 pl-10 placeholder:text-gray-400 sm:block`}
            type="text"
            placeholder="Search for products..."
            id="search-product"
            value={searchInput}
            onChange={handleSearchInput}
          />
          {/* search-products */}
          <div
            className={`${searchInput.trim() ? "block" : "hidden"} w-full h-50 z-10 bg-gray-200 absolute top-17 left-0 rounded-2xl `}
          >
            <ul></ul>
          </div>
        </div>

        <div className="w-[15%] h-full flex justify-end items-center gap-2 text-2xl">
          <NavLink to="/cart">
            <IoCartOutline />
          </NavLink>
          <NavLink to="/profile">
            <CgProfile />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
