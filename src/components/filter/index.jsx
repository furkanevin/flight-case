import { useEffect, useState } from 'react';
import {
  FaPlane,
  FaPlaneArrival,
  FaPlaneDeparture,
  FaRegCalendarAlt,
} from 'react-icons/fa';

const Filter = ({destTo,destFrom,setFlights}) => {

  return (
    <div className="box flex flex-col gap-5 ">
      <div className="flex justify-between items-center">
        <h1 className="flex items-center font-bold text-xl gap-3">
          <FaPlane />
          Book Your Flight
        </h1>

        <div className="rounded-full overflow-hidden text-white font-bold text-sm">
          <button className="bg-purple-800 py-3 px-4 hover:brightness-75 transition">
            Round Trip
          </button>
          <button className="bg-purple-200 text-purple-800 py-3 px-4 hover:brightness-75 transition">
            One Way
          </button>
        </div>
      </div>

      <form>
        <div className="flex max-lg:flex-col gap-5 md:gap-10">
          <div className="flex flex-1 gap-2">
            <div className="flex flex-1 gap-1 items-center border rounded-3xl rounded-r-none shadow p-2 border-gray-300">
              <FaPlaneDeparture className="text-purple-800" />
              <select type="text" className="outline-none w-full">
              {
                
                destFrom?.map((item,key)=>{

                  console.log(item)
                  return <option value={item}>{item}</option>

                })
              }
              </select>
            </div>

            <div className="flex flex-1 gap-1 items-center border rounded-3xl rounded-l-none shadow p-2 border-gray-300">
              <FaPlaneArrival className="text-purple-800" />
              <select type="text" className="outline-none w-full">
              {
                
                destTo?.map((item,key)=>{
                  return <option value={item}>{item}</option>

                })
              }
              </select>
            </div>
          </div>

          <div className="flex flex-1 gap-2">
            <div className="flex flex-1 gap-1 items-center border rounded-3xl rounded-r-none shadow p-2 border-gray-300">
              <FaRegCalendarAlt className="text-purple-800" />
              <input type="date" className="outline-none w-full" />
            </div>

            <div className="flex flex-1 gap-1 items-center border rounded-3xl rounded-l-none shadow p-2 border-gray-300">
              <FaRegCalendarAlt className="text-purple-800" />
              <input type="date" className="outline-none w-full" />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-purple-800 hover:bg-purple-700 transition text-white rounded-lg px-3 py-2 mt-5"
        >
          Show Flights
        </button>
      </form>
    </div>
  );
};

export default Filter;
