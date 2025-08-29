import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "@/components/card/PropertyCard";

const Home: React.FC = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 min-h-screen">
      {/* hero section */}
      <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-md">
        <Image
          src="/assets/hero_img.jpg"
          alt="Hero Banner"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
          <p className="text-lg mt-2">
            The best prices for over 2 million properties worldwide
          </p>
        </div>
      </div>
      {/* filter section */}
      <div className="flex flex-wrap gap-3 items-center justify-between px-6 py-4">
        {/* left filter */}
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="px-4 py-2 rounded-full border border-green-400 text-green-500 font-medium"
          >
            All
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-full border border-gray-200 text-gray-700"
          >
            Top Villa
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-full border border-gray-200 text-gray-700"
          >
            Free Reschedule
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-full border border-gray-200 text-gray-700"
          >
            Book Now, Pay later
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-full border border-gray-200 text-gray-700"
          >
            Self Checkin
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-full border border-gray-200 text-gray-700"
          >
            Instant Book
          </button>
        </div>
        {/* right filter */}
        <div className="flex gap-3 items-center">
          <button
            type="button"
            className="px-4 py-2 rounded-full border border-gray-200 flex items-center gap-2 text-gray-700"
          >
            <span>Filter</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-3.586L3.293 6.707A1 1 0 013 6V4z"
              />
            </svg>
          </button>

          <button
            type="button"
            className="px-4 py-2 rounded-full border border-gray-200 text-gray-700"
          >
            Sort by: Highest Price
          </button>
        </div>
      </div>
      <div className="container grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="container mx-auto p-4 grid grid-cols-3 gap-4">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
