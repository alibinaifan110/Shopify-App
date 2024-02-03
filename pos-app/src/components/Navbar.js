import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { FiSend } from "react-icons/fi";
import { MdOutlineCalendarMonth } from "react-icons/md";

// import search from "./assets/search.svg"
// import filter from "./assets/filter.svg"
// import calender from "./assets/calender.svg"
// import send from "./assets/send.svg"

const Navbar = () => {
  return (
    <>
      <div>
        <div className="m-4 flex flex-row place-content-between items-center ">
          <span className="font-medium text-lg">Purchases</span>
          <div className="flex flex-row space-x-2">
            <div className="flex border justify-center items-center gap-2 ">
              <div className="flex gap-2 border rounded items-center justify-center p-3 text-base font-normal">
              <CiSearch />
              <input
                type="text"
                placeholder="Search"
                className="border-none outline-none"/>
              </div>
            </div>
            <button className="flex gap-2 border rounded items-center justify-center p-3 text-base font-normal">
            <CiFilter />
              Filter
            </button>
            <button className="flex gap-2 border rounded items-center justify-center p-3 text-base font-normal">
            <MdOutlineCalendarMonth />
              Filter
            </button>
            <button className="flex gap-2 border rounded items-center justify-center p-3 text-base font-normal">
            <FiSend /> Share
            </button>
            <select className="flex border  items-center justify-center p-3 text-base font-normal">
              <option>Bulk Action</option>
            </select>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;
