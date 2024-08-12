import { Nextimage } from "@/app/_components/Nextimage";
import { getparticularmeds } from "@/app/_lib/data-service";
import Image from "next/image";
import "@/app/globals.css";
import Link from "next/link";
import { Collectionadd } from "@/app/_components/Collectionadd";

export default async function Pharma({ params }) {
  console.log("params number", params);
  let mdata = await getparticularmeds(params.pharma);
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="mycard flex flex-col justify-between items-center gase ne">
          <p className="text-3xl font-extrabold text-yellow-500">
            {mdata[0].med_name}
          </p>
          {/* <p className="gas ne">
            <Nextimage
              source={mdata[0].med_image_URL}
              altertext="PharmaView Logo"
              width={120}
              height={140}
            />
          </p> */}
          <p className="underline">Side Effects</p>
          <p className="overflow-auto p-5 text-center">
            {mdata[0].med_side_effects}
          </p>
          <Collectionadd mdata={mdata[0]} />
          <p>
            <Link href="/search">
              <span className="block py-2.5 px-4 mt-4 rounded transition duration-200 hover:bg-gray-700 text-orange-300">
                BACK
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
