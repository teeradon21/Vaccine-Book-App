import { createSlice, PayloadAction} from "@reduxjs/toolkit"
import { BookingItem } from "../../../interface"

type BookState = {
    bookingItem: BookingItem|null
}

const initialState:BookState = { bookingItem: null}

export const bookSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        addBooking: (state, action:PayloadAction<BookingItem>)=>{
            state.bookingItem = action.payload
        },
        removeBooking: (state)=>{
            state.bookingItem = null
        }
    }
})

export const {addBooking, removeBooking} = bookSlice.actions
export default bookSlice.reducer