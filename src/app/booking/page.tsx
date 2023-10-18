import { Select, MenuItem } from "@mui/material"
import { getServerSession } from "next-auth"
import getuserProfile from "@/libs/getuserProfile"
import { authOptions } from "../api/auth/[...nextauth]/route"
import DateReserve from "@/components/DateReserve"

export default async function Booking() {

  const session = await getServerSession(authOptions)
  if (!session || !session.user.token){
    return null
  }
  const profile = await getuserProfile(session.user.token)
  var createdAt = new Date(profile.data.createdAt)
    return(
        <main className="w-[100%] flex flex-col items-center space-y-4">
          <div className="bg-slate-100 m-5 p-5">
          <div className="text-2xl">{profile.data.name}</div> 
           <table className="table-auto border-separate border-spacing-2"><tbody>
              <tr><td>Email</td><td>{profile.data.email}</td></tr>
              <tr><td>Tel</td><td>{profile.data.tel}</td></tr>
              <tr><td>Member Since</td><td>{createdAt.toDateString()}</td></tr>
           </tbody></table>
          </div>
          <div className="text-2xl font-medium py-2">New Booking</div>

          <div className="my-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pb-5">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="First Name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                  placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 indent-2"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Last Name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                  placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 indent-2"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              National ID
              </label>
              <div className="mt-2">
                <input
                  id="national-id"
                  name="national-id"
                  type="text"
                  placeholder="National ID"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                  placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 indent-2"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="hospital" className="block text-sm font-medium leading-6 text-gray-900">
                Hospital
              </label>
              <div className="mt-1">
                <Select variant="standard" name="hospital" id="hospital" className="h-10 w-[100%] text-gray-900 sm:text-sm sm:leading-6 indent-2">
                        <MenuItem value="Chulalongkorn">Chulalongkorn Hospital</MenuItem>
                        <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
                        <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
                </Select>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Date
              </label>
              <div className="mt-1">
                <DateReserve/>
              </div>
            </div>

        </div>
        <button type="submit" 
        className='rounded-md bg-teal-200 px-3 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:bg-teal-300 focus-visible:outline 
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'> 
        Book Now
        </button>
        </main>
    )
}