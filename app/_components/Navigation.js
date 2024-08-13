/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { auth } from "../_lib/auth";
import { Nextimage } from "./Nextimage";
export default async function Navigation() {
  const session = await auth();
  // console.table(session);
  return (
    <nav className="bg-gray-500 p-3 font-bold bg-opacity-10 mb-5">
      <ul className="flex justify-evenly">
        <li className="text-white">
          <Link href="/">
            <Nextimage
              source="/pviewimg.png"
              altertext="PharmaView Logo"
              width={50}
              height={54}
            />
            <span className="hover:text-yellow-900 text-yellow-400">
              PharmaView
            </span>
          </Link>
        </li>
        <li className="text-white">
          <Link href="/search">
            <span className="hover:text-gray-400">Search</span>
          </Link>
        </li>
        <li className="text-white">
          <Link href="/pharmaprofiles">
            <span className="hover:text-gray-400">PharmaCollection</span>
          </Link>
        </li>
        <li className="text-white">
          <Link href="/stats">
            <span className="hover:text-gray-400">PharmaCompanies</span>
          </Link>
        </li>
        <li className="text-white">
          <Link href="/profile">
            <span className="hover:text-gray-400">Profile</span>
          </Link>
        </li>
        <li className="text-white flex justify-end">
          {session?.user?.image ? (
            <div className="flex flex-row justify-center place-items-center">
              <div className="hover:text-gray-400">
                {/* // eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="h-7 rounded-full"
                  src={session.user.image}
                  alt="user image"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pl-2">{session?.user?.name.split(" ")[0]}</div>
            </div>
          ) : (
            <Link href="/profile">
              <span className="hover:text-gray-400">{}</span>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
