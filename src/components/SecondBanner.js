import React from "react";

const SecondBanner = () => {
  return (
    <div className="bg-secondary font-bold">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center mt-6 py-16">
        <div style={{'border':'3px dashed white'}} className="text-white flex flex-col items-center justify-center gap-2 w-64 h-64  rounded-full">
         <h1 className="text-4xl">1 BN+</h1>
          <p className="text-xl">Daily Impressions </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 w-64 h-64 border-dashed rounded-full bg-white text-secondary">
          <h1 className="text-4xl">$ 500K+</h1>
          <p className="text-xl">Support</p>
          
        </div>
        <div className="flex flex-col items-center justify-center gap-2 w-64 h-64 border-dashed rounded-full bg-primary text-white">
         <h1 className="text-4xl">8K+</h1>
          <p className="text-xl">Global Publishers</p>
          
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
