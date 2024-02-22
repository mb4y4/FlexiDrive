import React, { useEffect, useState } from "react";
import { FaGasPump } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiSteeringWheelFill } from "react-icons/pi";

function CarCard(props: any) {
  const [car, setCar] = useState<any>();

  useEffect(() => {
    if(props.car){
        setCar(props.car)
    }
  }, [props.car]);
  return car&&(
    <div
      className="relative group bg-gray-50 p-2 sm:
             hover:bg-white
            hover:border-[1px] cursor-pointer duration-75 rounded-lg"
    >
      <h2 className="text-[20px] font-medium mb-2">{car.name}</h2>
      <h2 className="text-[30px] font-bold mb-2">
        <span className="text-[12px] font-light">$ </span>
        {car.prices}
        <span className="text-[12px] font-light"> /day</span>
      </h2>
      <img
        src={car.image?.url}
        alt={car.name}
        width={250}
        height={200}
        className="w-[250px] h-[150px] object-contain mb-4"
      />

      <button className="opacity-0 absolute bottom-4 left-1/2 
                    transform -translate-x-1/2 bg-blue-500 text-white 
                    px-4 py-2 rounded-md transition-opacity duration-300 group-hover:opacity-100">
        Lease Now
      </button>

      <div className="flex justify-around group-hover:hidden">
        <div className="text-center text-gray-500">
          <PiSteeringWheelFill className="w-full text-[22px] mb-2" />
          <h2 className="line-clamp-5 text-[14px] font-light">{car.carType}</h2>
        </div>
        <div className="text-center text-gray-500">
          <FaGasPump className="w-full text-[22px] mb-2" />
          <h2 className="line-clamp-5 text-[14px] font-light">
            {car.carAvg} Mpg
          </h2>
        </div>
        <div className="text-center text-gray-500">
          <MdAirlineSeatReclineNormal className="w-full text-[22px] mb-2" />
          <h2 className="line-clamp-5 text-[14px] font-light">
            {car.seats} seater
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
