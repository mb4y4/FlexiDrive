"use client"
import { getCarsList } from "@/services";
import CarsFiltersOption from "./Home/CarsFiltersOption";
import Hero from "./Home/Hero";
import SearchInput from "./Home/SearchInput";
import { useEffect, useState } from "react";
 
export default function Home() {

  const [carsList, setCarsList]= useState<any>([])
  useEffect(() => {
    getCarList_();
  }, []);

  const getCarList_=async()=> {
    const result:any = await getCarsList();
    console.log(result);
    setCarsList(result?.carLists)
  }


  return (
      <div className="flex flex-col justify-start h-screen p-5 sm:px-10 md:px-20">
        <Hero/>
        <SearchInput/>
        <CarsFiltersOption/>
      </div>
    
  )
}
