import React from "react";

function CarCardSkeleton() {
  return (
    <div className="p-4 bg-gray-200 rounded-md">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
        <div className="flex-none w-24 h-24 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}

export default CarCardSkeleton;
