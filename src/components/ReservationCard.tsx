'use client'
import { useAppSelector, AppDispatch} from '@/redux/store'
import { useDispatch } from 'react-redux'
import { removeReservation } from '@/redux/features/cartSlice'
import { useEffect, useState, useRef } from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { useSession } from 'next-auth/react'
import deleteReservation from '@/libs/deleteReservation'
import getReservation from '@/libs/getReservation'
import { ReservationJson, ReservationItem } from '../../interfaces'
import getCoworkingSpace from '@/libs/getCoworkingSpace'
import { CoworkingSpaceJson, CoworkingSpaceItem } from '../../interfaces'
import editReservation from '@/libs/editReservation'
import { useRouter } from 'next/navigation'
import Image from "next/image"

export default function ReservationCard({reservation}:{reservation:any}){
    console.log(reservation)
    //const coworkingSpaces = getCoworkingSpaces()

    const { data:session } = useSession()
    const router = useRouter()

    if(!session?.user.token){
        return null
    }

    return(
        <div className="w-[100%] flex flex-col justify-center items-center bg-white rounded-3xl p-5 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] m-5 p-3">
            {/* <div>{reservation}</div> */}
            <div className='text-left w-full my-4 leading-5 text-black px-10 space-y-2'>
                <div className='text-2xl font-bold'>Co-Working Space Name: {reservation.coworkingspace.name}</div>
                <div><span className="text-lg font-semibold">Room Name : </span> {reservation.room.name}</div>
                <div><span className="text-lg font-semibold">User : </span> {reservation.user.name}</div>
                <div><span className="text-lg font-semibold">Number of People : </span> {reservation.people}</div>
                <div><span className="text-lg font-semibold">Starts from : </span>{reservation.startTime}</div>
                <div><span className="text-lg font-semibold">Until : </span>{reservation.endTime}</div>
            </div>
            <div className='flex flex-row spacing justify-center mt-2 space-x-5'>
                <button className="rounded-md bg-green-600 hover:bg-green-400 px-3 py-2 text-white shadow-sm justify-center flex items-center px-[60%]"
                    name='edit' onClick={()=> session.user.token? router.push(`/mybookings/${reservation._id}/edit`) : alert("Cannot get session")}>
                        Edit
                </button>
                <button className="rounded-md bg-red-600 hover:bg-red-400 px-3 py-2 text-white shadow-sm justify-center flex items-center px-[50%]"
                    name="remove" onClick={()=> session.user.token? deleteReservation(reservation._id, session.user.token): alert("Cannot get session")}>
                    Remove
                </button>
            </div>
        </div>
    )
}