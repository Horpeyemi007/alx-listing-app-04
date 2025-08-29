import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 h-30">
      <div className="flex justify-between text-white p-4">
        <div>
          <h1 className="font-semibold text-center underline p-2">ALX</h1>
          <p className="text-sm">
            We provide you with the best property in town
          </p>
        </div>
        <div>
          <h1 className="font-semibold text-center underline p-2">Explore</h1>
          <p className="text-sm">About</p>
          <p className="text-sm">Pricing</p>
        </div>
        <div>
          <h1 className="font-semibold text-center underline p-2">Help</h1>
          <ul>
            <li>support</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
