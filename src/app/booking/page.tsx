import { getServerSession } from "next-auth"
import getuserProfile from "@/libs/getuserProfile"
import { authOptions } from "../api/auth/[...nextauth]/route"
import BookingForm from "@/components/BookingForm"


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
          <BookingForm/>
        </main>
    )
}