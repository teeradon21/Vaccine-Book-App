// import CardPanel from "@/components/CardPanel";
import getHospitals from "@/libs/getHospitals";
import HospitalCatalog from "@/components/HospitalCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import AddHospitalForm from "@/components/AddHospitalForm";
import { getServerSession } from "next-auth"
import getuserProfile from "@/libs/getuserProfile"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Hospital() {
    const hospitals = getHospitals()

    let profile = null
    const session = await getServerSession(authOptions)
    if (session && session.user.token){
        profile = await getuserProfile(session.user.token)
    }
  
    return (
        <main className="text-center items-center p-5">
            <h1 className="text-xl font-medium">Select Hospital</h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
                <HospitalCatalog hospitalJson={hospitals}/>
            </Suspense>
         
         {
            (profile && profile.data.role=="admin")?
            <AddHospitalForm/> : null
         }
        </main>
    )
}