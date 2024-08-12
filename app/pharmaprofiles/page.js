import { getcollection } from "../_lib/data-service";

export default async function Pharmaprofiles() {
  let profiledata = await getcollection();
  return (
    <>
      <div className="text-center text-yellow-500 font-extrabold text-4xl">
        Your pharma profiles
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {profiledata.map((med, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-red-300 to-orange-700 text-red-950 p-4 rounded-lg shadow-lg 
            transform hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <h2 className="text-xl font-bold mb-2 text-center">
              {med.med_name}
            </h2>
            <div>
              <h3 className="font-semibold underline">Uses:</h3>
              <p className="mb-2 text-green-700 font-bold">{med.med_uses}</p>
            </div>
            <div>
              <h3 className="font-semibold underline    ">Side Effects:</h3>
              <p className="text-red-800 font-semibold">
                {med.med_side_effects}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
