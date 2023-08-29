import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu () {
    return (
        <div className="h-[50px] bg-white fixed top-0 right-0 left-0 z-30 border-y-[1px] border-solid border-gray-300 flex flex-row-reverse" >
            <Image src={'/img/vacqlogo.png'} className="h-[100%] w-auto" alt='logo' width={0} height={0} sizes="100vh"/>
            <TopMenuItem title="Booking" pageRef="/booking"/>
        </div>
    )
}