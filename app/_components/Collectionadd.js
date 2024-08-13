"use client";

import { useState } from "react";
import { putcollection } from "../_lib/actions";
import { Nextimage } from "./Nextimage";
import { Notifshow } from "./Notifshow";

export function Collectionadd({ mdata }) {
  let notifdata = {
    notifresult: false,
    notifmes: " ",
  };
  let [notif, setnotif] = useState(notifdata);

  return (
    <>
      <div
        className="relative group mt-6"
        onClick={async (e) => {
          let insert_result = await putcollection(mdata);
          if (insert_result === "insert") {
            notifdata.notifresult = true;
            notifdata.notifmes = "Collection added!";
          } else {
            notifdata.notifresult = true;
            notifdata.notifmes = "Already a part of collection.";
          }
          setnotif((prev) => ({
            ...prev,
            notifresult: notifdata.notifresult,
            notifmes: notifdata.notifmes,
          }));
          setTimeout(() => {
            console.log("Collection add notification");
            setnotif((prev) => ({
              ...prev,
              notifresult: false,
            }));
          }, 3000);
        }}
      >
        <button class="text-white py-2 px-4 rounded">
          <Nextimage
            source="/add.png"
            altertext="add Logo"
            width={50}
            height={54}
          />
        </button>
        <div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-full 
      mb-2 w-max bg-gray-800 text-white text-sm rounded py-1 px-2 
      opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Add to collection
        </div>
      </div>
      {notif.notifresult && <Notifshow mes={notif.notifmes} />}
    </>
  );
}
