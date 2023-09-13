import React from "react";
import { useState } from "react";

const Cetagurise = ({carentCetagoris,setCarentCetagoris}) => {
 
  return (
    <div className="text-center space-x-3 space-y-5 mx-2">
      <button onClick={() => setCarentCetagoris("All")} className="border-2 hover:bg-red-500 px-3 py-1 text-xl rounded-lg font-medium hover:text-white">
        All
      </button>
      <button onClick={() => setCarentCetagoris("All-rounder")} className="border-2 hover:bg-red-500 px-3 py-1 text-xl rounded-lg font-medium hover:text-white">
        All-rounder
      </button>
      <button onClick={() => setCarentCetagoris("Batsman")} className="border-2 hover:bg-red-500 px-3 py-1 text-xl rounded-lg font-medium hover:text-white">
        Batsman
      </button>
      <button onClick={() => setCarentCetagoris("Bowler")} className="border-2 hover:bg-red-500 px-3 py-1 text-xl rounded-lg font-medium hover:text-white">
        Bowler
      </button>
      <button onClick={() => setCarentCetagoris("Wicketkeeper-batsman")} className="border-2 hover:bg-red-500 px-3 py-1 text-xl rounded-lg font-medium hover:text-white">
        Wicketkeeper-batsman
      </button>
    </div>
  );
};

export default Cetagurise;
