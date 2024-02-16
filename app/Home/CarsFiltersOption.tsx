import React from "react";

function CarsFiltersOption() {
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-center text-[30px] font-bold">Car Catalog:</h2>
        <h2>Explore our car catalog by selecting the filters below.</h2>
      </div>
      <div className="flex items-center gap-x-4 justify-between w-full max-w-screen-md mt-6 md:mt-0">
        <select className="select select-ghost w-full max-w-xs">
          <option disabled selected>
            Prices
          </option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select>
        <select className="select select-ghost w-full md:block max-w-xs hidden">
          <option disabled selected>
            Manufacturer
          </option>
          <option>Toyota</option>
          <option>Volkswagen</option>
        </select>
      </div>
    </div>
  );
}

export default CarsFiltersOption;
