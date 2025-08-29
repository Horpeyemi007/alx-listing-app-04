import { PropertyProps } from "@/interfaces";
import React from "react";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-2">
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <span className="font-semibold text-gray-700 mr-2">
            {property.category[0]}
          </span>
          <span className="mr-2">&middot;</span>
          <span className="font-semibold text-gray-700 mr-2">
            {property.category[1]}
          </span>
          <span className="mr-2">&middot;</span>
          <span className="font-semibold text-gray-700">
            {property.category[2]}
          </span>
        </div>
        <h3 className="font-semibold text-lg text-gray-900 mb-1">
          {property.name}
        </h3>
        <p className="text-sm text-gray-500 mb-2">
          {property.address.state}, {property.address.city},{" "}
          {property.address.country}
        </p>
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <span className="text-yellow-500 mr-1">★</span> {property.rating}
        </div>
        <p className="text-xl font-bold text-gray-900 mt-2">
          ${property.price}
          <span className="text-sm font-normal text-gray-500">/n</span>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
