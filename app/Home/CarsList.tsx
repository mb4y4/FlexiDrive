import React from "react";
import CarCard from "./CarCard";
import CarCardSkeleton from "./CarCardSkeleton"; // Assuming you have a CarCardSkeleton component

function CarsList(props: any) {
  const { carsList, isLoaded } = props;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-4">
      {carsList.map((car: any, index: number) => (
        <div key={index} onClick={() => (window as any).document.getElementById('my_modal_4').showModal()}>
          <CarCard car={car} />
        </div>
      ))}
      {isLoaded ? [1, 2, 3, 4, 5].map((item) => <CarCardSkeleton key={item} />) : null}
    </div>
  );
}

export default CarsList;
