import React, { useEffect, useState } from "react";

function CarsFiltersOption({ carsList, setBrand, orderCarList }: any) {
  const [brandList, setBrandList] = useState<any>([]);
  const BrandSet = new Set();

  useEffect(() => {
    if (carsList) {
      filterCarList();
    }
  }, [carsList]);

  const filterCarList = () => {
    carsList.forEach((element: any) => {
      BrandSet.add(element.carBrand);
    });
    setBrandList(Array.from(BrandSet));
  };

  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-center text-[30px] font-bold">Car Catalog:</h2>
        <h2>Explore our car catalog by selecting the filters below.</h2>
      </div>
      <div className="flex items-center gap-x-4 justify-between w-full max-w-screen-md mt-6 md:mt-0">
        <select
          className="select select-ghost w-full max-w-xs"
          onChange={(e) => orderCarList(e.target.value)}
          defaultValue="default"
        >
          <option value="default" disabled>
            Prices
          </option>
          <option value="-1">Min to Max</option>
          <option value="1">Max to Min</option>
        </select>
        <select
          className="select select-ghost w-full md:block max-w-xs hidden"
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="default" disabled selected>
            Manufacturer
          </option>
          {brandList.map((brand: any, index: number) => (
            <option key={index}>{brand}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CarsFiltersOption;
