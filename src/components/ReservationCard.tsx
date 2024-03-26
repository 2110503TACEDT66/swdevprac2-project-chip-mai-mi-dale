'use client'
import { useAppSelector, AppDispatch} from '@/redux/store'
import { useDispatch } from 'react-redux'
import { removeReservation } from '@/redux/features/cartSlice'

export default function ReservationCard(){

    const coItems = useAppSelector((state)=> state.cartSlice.coItems)
    const dispatch = useDispatch<AppDispatch>()

    return(
        <div className='bg-white flex flex-row justify-center w-full'>
        {
            coItems && coItems.map((reservationItem)=>(
                <div className="font-bold [font-family:'Inter-Bold',Helvetica] text-black">
                    key={reservationItem.roomId}
                    {/* <div>Co-Working Space's name : {reservationItem.coName}</div>
                    <div>Room : {reservationItem.roomId}</div>
                    <div>Date : {reservationItem.bookDate}</div>
                    <div>Time : From {reservationItem.startTime} to {reservationItem.endTime}</div>
                    <div>Capacity : {reservationItem.peopleNum}</div> */}

                    <div>Co-Working Space ID : {reservationItem.coId}</div>
                    <div>Room ID : {reservationItem.roomId}</div>
                    <div>Number of People : {reservationItem.peopleNum}</div>

                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                        name="remove" onClick={() => dispatch(removeReservation(reservationItem))}>
                        Remove from Cart
                    </button>
                </div>
            ))
        } 
        </div>
    )
}