"use client";

import Link from "next/link";
import { useRef } from "react";

export default function Medresults({ sresult, handlesort }) {
  let toggler = useRef(false);
  let stype = 0;
  let results = (
    <>
      <ul
        className="flex flex-row justify-start items-center text-left
                        mb-2 rounded-md shadow-sm p-2 text-lg text-red-200 font-bold"
      >
        {/* <li className="w-12">{item.med_id}</li> */}
        <li className="w-2/4">
          Med Name
          <span
            className="cursor-pointer"
            onClick={() => handlesortlocal((stype = 1), sresult, handlesort)}
          >
            ⬆️
          </span>
        </li>
        <li className="w-2/4 ml-2 ">
          Uses
          <span
            className="cursor-pointer"
            onClick={() => handlesortlocal((stype = 2), sresult, handlesort)}
          >
            ⬆️
          </span>
        </li>
        <li className="w-4/5">Composition</li>
        <li className="w-1/4">
          Manufacturer
          <span
            className="cursor-pointer"
            onClick={() => handlesortlocal((stype = 3), sresult, handlesort)}
          >
            ⬆️
          </span>
        </li>
      </ul>
      <div className="flex flex-col text-sm w-full h-96 overflow-auto">
        {sresult.map((item, index) => {
          return (
            <>
              <Link href={`/search/${item.med_id}`} key={index}>
                <ul
                  key={item.med_id}
                  className="flex flex-row justify-left items-center text-left space-y-1
                        mb-2 rounded-md shadow-sm shadow-yellow-500 border border-x-yellow-300 border-y-yellow-700 p-2
                        hover:bg-slate-500/40 hover:text-lime-400 bg-orange-800/70"
                >
                  {/* <li className="w-12">{item.med_id}</li> */}
                  <li className="w-2/4">
                    <span
                      class="bg-green-300 text-red-950 inline-block text-left
                                 px-2 py-1 rounded text-md font-semibold hover:bg-stone-200/60"
                    >
                      {item.med_name}
                    </span>
                  </li>
                  <li className="w-2/4 ml-2">
                    <span
                      class="bg-blue-500 inline-block text-left
                                 px-2 py-1 rounded text-md font-semibold hover:bg-red-400/60"
                    >
                      {item.med_uses}
                    </span>
                  </li>
                  <li className="w-4/5 ml-2">{item.med_comp}</li>
                  <li className="w-1/4 ml-2 text-red-200">
                    {item.med_manufacturer}
                  </li>
                </ul>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
  return <>{results}</>;

  function handlesortlocal(stype, sresult, handlesort) {
    let sortedResult = [];
    switch (stype) {
      case 1:
        if (!toggler.current) {
          sortedResult = [...sresult].sort((a, b) =>
            b.med_name.localeCompare(a.med_name)
          );
        } else {
          sortedResult = [...sresult].sort((a, b) =>
            a.med_name.localeCompare(b.med_name)
          );
        }
        break;
      case 2:
        if (!toggler.current) {
          sortedResult = [...sresult].sort((a, b) =>
            b.med_uses.localeCompare(a.med_uses)
          );
        } else {
          sortedResult = [...sresult].sort((a, b) =>
            a.med_uses.localeCompare(b.med_uses)
          );
        }
        break;
      case 3:
        if (!toggler.current) {
          sortedResult = [...sresult].sort((a, b) =>
            b.med_manufacturer.localeCompare(a.med_manufacturer)
          );
        } else {
          sortedResult = [...sresult].sort((a, b) =>
            a.med_manufacturer.localeCompare(b.med_manufacturer)
          );
        }
        break;
      default:
        break;
    }

    toggler.current = !toggler.current;
    handlesort(sortedResult);
  }
}
