import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from 'next-auth'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";

export default async function TopMenu () {

    const session = await getServerSession(authOptions)

    return (
        <div className="h-[50px] bg-white fixed top-0 right-0 left-0 z-30 border-y-[1px] border-solid border-gray-300 flex flex-row-reverse" >
            <Image src={'/img/vacqlogo.png'} className="h-[100%] w-auto" alt='logo' width={0} height={0} sizes="100vh"/>
            <TopMenuItem title="Booking" pageRef="/booking"/>

            <div className='flex flex-row absolute left-0 h-full'>
                { session? <Link href="/api/auth/signout">
                    <div className="flex h-full px-3 items-center justify-center text-center text-sm">Sign-Out</div>
                </Link>: <Link href="/api/auth/signin">
                    <div className="flex h-full px-3 items-center justify-center text-center text-sm">Sign-In</div>
                </Link>
                }
                <TopMenuItem title="My Booking" pageRef="/mybooking"/>
            </div>
            
        </div>
    )
}