"use client";

import { changeColor } from "../_lib/actionsClient";

export function Getinfo({ mtext, bgcolors }) {
  return (
    <>
      <div
        className="ml-64 mr-64 bg-gradient-to-r from-rose-950 to-red-700 opacity-50 
          border rounded-lg p-6 text-center shadow-lg hover:cursor-pointer 
          hover:shadow-xl transition-shadow duration-300"
        onClick={(e) => changeColor(e)}
      >
        <span className="text-yellow-300 font-bold">{mtext}</span>
      </div>
    </>
  );
}
