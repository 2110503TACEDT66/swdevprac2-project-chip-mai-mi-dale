'use client'
import { useAppSelector, AppDispatch} from '@/redux/store'
import { useDispatch } from 'react-redux'
import { removeReservation } from '@/redux/features/cartSlice'
import { useEffect, useState } from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function ReservationCard({coName, roomName, bookDate, starttime, endtime, capacity, id}:{coName:string, roomName:string, bookDate:string, starttime:string, endtime:string, capacity:string, id:string}){
    const router = useRouter();
    const coItems = useAppSelector((state)=> state.cartSlice.coItems)
    const dispatch = useDispatch<AppDispatch>()
    const { data:session } = useSession()

    const [reservationResponse, setReservationResponse] = useState(null)

    // useEffect(()=>{
    //     const fetchData = async () => {
    //         const reservation = await deleteReservation(id, )
    //     }
    // })

    return(
        <div className="w-[500px] h-[250px] flex flex-col justify-center items-center bg-white rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] mt-20">
            {
                coItems && coItems.map((reservationItem) => (
                    <div className="font-bold [font-family:'Inter-Bold',Helvetica] text-black">
                        {/* key={reservationItem.roomId} */}
                        {/* <div>Co-Working Space's name : {reservationItem.coName}</div>
                    <div>Room : {reservationItem.roomId}</div>
                    <div>Date : {reservationItem.bookDate}</div>
                    <div>Time : From {reservationItem.startTime} to {reservationItem.endTime}</div>
                    <div>Capacity : {reservationItem.peopleNum}</div> */}

                        <div className='text-left w-full my-4 leading-5'>
                            <div>Co-Working Space ID : {reservationItem.coId}</div>
                            <div>Room ID : {reservationItem.roomId}</div>
                            <div>Number of People : {reservationItem.peopleNum}</div>
                            <div>Starts from : {reservationItem.startTime}</div>
                            <div>Until : {reservationItem.endTime}</div>
                        </div>

                        <div className='flex flex-row spacing justify-center space-x-5'>
                            <button className="rounded-md bg-green-600 hover:bg-green-400 px-3 py-2 text-white shadow-sm justify-center flex items-center w-[50%]"
                                name='edit' >Edit</button>
                            <button className="rounded-md bg-red-600 hover:bg-red-400 px-3 py-2 text-white shadow-sm justify-center flex items-center w-[50%]"
                                name="remove" onClick={() => dispatch(removeReservation(reservationItem))}>
                                Remove
                            </button>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}