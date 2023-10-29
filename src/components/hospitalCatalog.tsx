import {useReducer} from 'react'
import ProductCard from "./ProductCard";
import Link from 'next/link';

export default async function HospitalCatalog({hospitalJson}:{hospitalJson:Object}) {
    const hospitalJsonReady = await hospitalJson
    
    return (
      <div>
        <div className= "m-5 flex flex-row content-around justify-around flex-wrap" >
        {hospitalJsonReady.data.map((hospitalItem:Object)=>(
          <Link href={`/hospital/${hospitalItem.id}`} className='w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:p-6 lg:p-8'>
            <ProductCard hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture} 
            /> 
            </Link>
          ))}
        </div>
      </div>  
    )
}