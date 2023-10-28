"use client"

import { Select, MenuItem } from "@mui/material"
import { useState } from "react"
import {useDispatch} from "react-redux"
import { AppDispatch } from "@/redux/store"
import { addBooking } from "@/redux/features/bookSlice"
import { BookingItem } from "../../interface"
import dayjs, { Dayjs } from "dayjs"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


export default function BookingForm(){
    
    const [firstname, setFirstname] = useState<string>("")
    const [lastname, setLastname] = useState<string>("")
    const [nationalId, setNationalId] = useState<string>("")
    const [hospital, setHospital] = useState<string>("")
    const [date, setDate] = useState<Dayjs|null>(null)
  
    const dispatch = useDispatch<AppDispatch>()
  
    const makeBooking = () => {
      if(firstname && lastname && nationalId && hospital && date){
        const item:BookingItem = {
          firstname: firstname,
          lastname : lastname,
          nationalId : nationalId,
          hospital : hospital,
          date: dayjs(date).format("DD/MM/YYYY")
        }
        dispatch(addBooking(item))
      }
    }

    return(
        <div>
            <div className="text-2xl font-medium py-2">New Booking</div>

            <div className="my-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
                </label>
                <div className="mt-2">
                <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    value={firstname}
                    placeholder="First Name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                    placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 indent-2"
                    onChange={(e)=>setFirstname(e.target.value)}
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
                    value={lastname}
                    placeholder="Last Name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                    placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 indent-2"
                    onChange={(e)=>setLastname(e.target.value)}
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
                    value={nationalId}
                    placeholder="National ID"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                    placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 indent-2"
                    onChange={(e)=>setNationalId(e.target.value)}
                />
                </div>
            </div>

            <div className="sm:col-span-4">
                <label htmlFor="hospital" className="block text-sm font-medium leading-6 text-gray-900">
                Hospital
                </label>
                <div className="mt-1">
                <Select variant="standard" name="hospital" id="hospital" value={hospital}
                className="h-10 w-[100%] text-gray-900 sm:text-sm sm:leading-6 indent-2"
                onChange={(e)=> {setHospital(e.target.value)}}>
                        <MenuItem value="Chulalongkorn Hospital">Chulalongkorn Hospital</MenuItem>
                        <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
                        <MenuItem value="Thammasat University Hospital">Thammasat University Hospital</MenuItem>
                </Select>
                </div>
            </div>

            <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                Date
                </label>
                <div className="mt-1">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className="bg-white text-gray-900"
                    value={date}
                    onChange={(value)=>setDate(value)}/>
                </LocalizationProvider>
                </div>
            </div>

            </div>
            <button type="submit" 
            className='rounded-md bg-teal-200 px-3 py-2 m-2 text-sm font-semibold text-gray-600 shadow-sm hover:bg-teal-300 
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            onClick={makeBooking}> 
            Book Now
            </button>
        </div>
    )
}
