"use client"

import { removeBooking } from "@/redux/features/bookSlice"
import { useAppSelector , AppDispatch} from "@/redux/store"
import { useDispatch } from "react-redux"

export default function MyBooking () {
    const bookingItem = useAppSelector((state)=>state.bookSlice.bookingItem)
    const dispatch = useDispatch<AppDispatch>()

    return(
       <main>
        <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2">
            {bookingItem? 
            <div>
            <div>First Name: {bookingItem?.firstname} </div>
            <div>Last Name: {bookingItem?.lastname} </div>
            <div>National ID: {bookingItem?.nationalId} </div>
            <div>Hospital: {bookingItem?.hospital} </div>
            <div>Date: {bookingItem?.date} </div>
            <button className='bg-cyan-600 text-white border boarder-cyan-600 p-2 m-2 rounded hover:border-transparent' 
            onClick={()=>dispatch(removeBooking())}>
                Cancel Booking
            </button>
            </div>
            : "No Vaccine Booking"}
        </div>
       </main>
    )
}