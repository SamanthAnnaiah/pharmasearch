import { Getinfo } from "./_components/Getinfo";
import { Getmedcounts } from "./_components/Getmedcounts";
import { Getmedmanufscounts } from "./_components/Getmedmanufscounts";
import { Nextimage } from "./_components/Nextimage";
import { signInAction, signOutAction } from "./_lib/actions";
import { auth } from "./_lib/auth";
import { getinfo, getmainmeds, getmanufacturers } from "./_lib/data-service";

export const revalidate = 8640;

export default async function Home() {
  let session = await auth();
  let manuf_data = await getmanufacturers();
  let mtext = await getinfo();

  return session?.user?.email ? (
    <>
      <main className="flex flex-col items-center justify-center">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex flex-row">
          <div
            className="flex flex-col p-3 m-3 justify-center items-center border-b border-gray-300 
           pb-6 pt-8 dark:border-neutral-800 rounded-lg"
          >
            <div>
              <Nextimage
                source="/drugs.gif"
                altertext="PharmaView Logo"
                width={100}
                height={100}
              />
            </div>
            <div className="mt-4">
              <code className="font-mono font-bold text-yellow-200">
                TotalPharms:&nbsp;{<Getmedcounts />}
              </code>
            </div>
          </div>
          <div
            className="flex flex-col p-3 m-3 justify-center items-center border-b border-gray-300 
           pb-6 pt-8 dark:border-neutral-800 rounded-lg"
          >
            <div>
              <Nextimage
                source="/manufacture.gif"
                altertext="PharmaView Logo"
                width={100}
                height={100}
              />
            </div>
            <div className="mt-4">
              <code className="font-mono font-bold text-yellow-200">
                TotalManufs:&nbsp;{<Getmedmanufscounts />}
              </code>
            </div>
          </div>
        </div>

        {/* <Getmainpharms /> */}
        {/* <MenuChart manuf_data={manuf_data} /> */}
        {/* <Bchart manuf_data={manuf_data} /> */}

        <div className="flex items-center justify-center">
          <Getinfo mtext={mtext} bgcolors={""} />
        </div>
      </main>
      <div className="absolute bottom-4 left-2 ml-3">
        <form action={signOutAction}>
          <button
            className="rounded-md bg-gradient-to-r from-rose-950 to-red-700 px-6 py-1 text-yellow-100
           hover:from-pink-500 hover:to-yellow-500 font-bold"
          >
            Sign Out
          </button>
        </form>
      </div>
    </>
  ) : (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg w-80">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-700">
          Login?
        </h2>
        <form action={signInAction}>
          <button className="flex items-center justify-center w-full px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
            <svg
              className="w-5 h-5 mr-3 svg-inline--fa fa-google fa-w-16"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8c0 141.5-92.5 242.2-228 242.2-130.8 0-240-109.3-240-240S129.2 24 260 24c64.3 0 118.4 23.8 160.2 63.2l-64.8 64.8c-20.5-20.5-47.8-33.5-95.3-33.5-79.7 0-143.4 63.4-143.4 142.4 0 79.1 63.7 142.5 143.4 142.5 67.6 0 113.3-37.2 123.3-88H260v-80.4h228v30.4z"
              ></path>
            </svg>
            SignIn with Google
          </button>
        </form>
      </div>
    </div>
  );
}

async function Getmainpharms() {
  let pdata = await getmainmeds();
  return (
    <>
      <h1 className="text-center font-extrabold">Trending Medicines</h1>
      <ul className="flex flex-col justify-between align-middle">
        {pdata.map((item) => (
          <li
            className="m-3 flex flex-row justify-between align-middle border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-yellow-700/30"
            key={item.med_id}
          >
            <div className="m-3">Med Name: {item.med_name} /</div>
            <div className="m-3">Manufacturer: {item.med_manufacturer}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
