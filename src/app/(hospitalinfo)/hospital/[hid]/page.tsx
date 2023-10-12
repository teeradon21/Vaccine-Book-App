import Image from "next/image"
import getHospital from "@/libs/getHospital"

export default async function HospitalDetailPage({params}: {params : {hid:string}}){

    const hospitalDetail = await getHospital(params.hid)

    //  //Mock Data
    //  const mockHospitalRepo = new Map()
    //  mockHospitalRepo.set('001',{name:"Chulalongkorn Hospital", image:"/img/chula.jpg"})
    //  mockHospitalRepo.set('002',{name:"Rajavithi Hospital", image:"/img/rajavithi.jpg"})
    //  mockHospitalRepo.set('003',{name:"Thammasat University Hospital", image:"/img/thammasat.jpg"})

    return (
        <main className="text-center p-5">
            <div className="flex flex-row my-5">
                <Image src={hospitalDetail.data.picture} 
                alt="Hospital Picture"
                width={0} height={0} sizes='100vw'
                className='rounded-lg w-[30%] bg-black'/>
                <div className="mx-5 text-left">
                <h1 className="text-xl font-medium my-5">{hospitalDetail.data.name} </h1>
                <div className="text-md mx-5">Address: {hospitalDetail.data.address} </div>
                <div className="text-md mx-5">District: {hospitalDetail.data.district} </div>
                <div className="text-md mx-5">Province: {hospitalDetail.data.province} </div>
                <div className="text-md mx-5">Postal Code: {hospitalDetail.data.postalcode} </div>
                <div className="text-md mx-5">Tel: {hospitalDetail.data.tel} </div>
                </div>
            </div>
        </main>
    )
}