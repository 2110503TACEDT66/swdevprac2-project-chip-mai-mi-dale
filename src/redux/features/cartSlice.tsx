import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interfaces";
import deleteReservation from "@/libs/deleteReservation";

type CartState = {
    coItems: ReservationItem[]
}

const initialState: CartState = { coItems: [] }

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<ReservationItem>) => {
            state.coItems.push(action.payload)
        },
        removeReservation: (state, action: PayloadAction<string>) => {
            state.coItems = state.coItems.filter((reservation) => reservation.id !== action.payload)
            deleteReservation(action.payload)

            // const remainItems = state.coItems.filter(obj => {
            //     return ((obj.roomId !== action.payload.roomId)
            //         || (obj.coId !== action.payload.coId)
            //         || (obj.coName !== action.payload.coName)
            //         || (obj.bookDate !== action.payload.bookDate)
            //         || (obj.startTime !== action.payload.startTime)
            //         || (obj.endTime !== action.payload.endTime)
            //         || (obj.peopleNum !== action.payload.peopleNum))
            // })
            // state.coItems = remainItems
        }
    }
})

export const { addReservation, removeReservation } = cartSlice.actions
export default cartSlice.reducer