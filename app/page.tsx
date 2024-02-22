"use client"
import { getCarsList } from "@/services";
import CarsFiltersOption from "./Home/CarsFiltersOption";
import Hero from "./Home/Hero";
import SearchInput from "./Home/SearchInput";
import { useEffect, useState } from "react";
import CarsList from "./Home/CarsList";
 
export default function Home() {

  const [carsList, setCarsList]= useState<any>([])
  const [carsOrgList, setCarsOrgList]= useState<any>([])

  useEffect(() => {
    getCarList_();
  }, []);

  const getCarList_=async()=> {
    const result:any = await getCarsList();
    console.log(result);
    setCarsList(result?.carLists)
    setCarsOrgList(result?.carLists)
  }

  const filterCarList=(brand:string) => {
    const filterList=carsOrgList.filter((item:any) =>
    item.carBrand === brand);

    setCarsList(filterList);
  }

  const orderCarList=(order:any)=> {
    const sortedData = [...carsOrgList].sort((a, b) =>
    order==-1? a.prices - b.prices : b.prices - a.prices);
    setCarsList(sortedData);
  }


  return (
      <div className="flex flex-col justify-start
      h-screen p-5 sm:px-10 md:px-20
      lg:px-8 xl:px-20">
        <Hero/>
        <SearchInput/>
        <CarsFiltersOption carsList={carsOrgList}
        orderCarList={(value:string)=>orderCarList(value)}
        setBrand={(value:string)=>filterCarList(value)}/>
        <CarsList carsList={carsList} />
      </div>
    
  )
}
