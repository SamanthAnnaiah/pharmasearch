import { Submitbutton } from "@/app/_components/Submitbutton";
import { getuser, updateProfile } from "@/app/_lib/actions";
import { auth } from "@/app/_lib/auth";

export default async function Myaccount() {
  let userdata = await getuser();
  let userphone = userdata[0].phone;
  let userpassport = userdata[0].passport;
  let session = await auth();
  return (
    <>
      <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
          Your Profile
        </div>
        <form className="py-4 px-6" action={updateProfile}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                            leading-tight focus:outline-none focus:shadow-outline"
              name="fullname"
              type="text"
              defaultValue={session.user.name}
              disabled
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                            leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              defaultValue={session.user.email}
              placeholder="Enter your email"
              disabled
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 
                            px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              defaultValue={userphone}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="">
              Passport Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 
                            px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="passport"
              type="tel"
              placeholder="Enter your passport"
              defaultValue={userpassport}
            />
          </div>
          <Submitbutton />
        </form>
      </div>
    </>
  );
}
