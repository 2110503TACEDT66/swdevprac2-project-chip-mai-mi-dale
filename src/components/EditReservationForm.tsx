"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Select } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs, { Dayjs } from "dayjs"
import { TimePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import { ReservationItem } from "../../interfaces";
import { useDispatch } from "react-redux";
import { addReservation } from "@/redux/features/cartSlice";
import { AppDispatch } from "@/redux/store";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { useSession } from "next-auth/react";
import editReservation from "@/libs/editReservation";
import getReservation from "@/libs/getReservation";
import { useEffect } from "react";

const fetch = require("node-fetch");

export default function EditReservationForm({reserveid, reservationItem}:{reserveid:string, reservationItem:any}) {
    console.log('edit reserv form' + reservationItem);

    // const [room, setRoom] = useState<string>('');
    const [date, setDate] = useState<Dayjs | null>(reservationItem.bookDate);
    const [startTime, setStart] = useState<Dayjs | null >(reservationItem.startTime);
    const [endTime, setEnd] = useState<Dayjs | null >(reservationItem.endTime);
    const [people, setPeople] = useState<number>(reservationItem.people);

//   const urlParams = useSearchParams()
//const cid = urlParams.get('id')
//   const roomName = urlParams.get('name')

const [reservResponse, setReservRes] = useState<ReservationItem>()

// useEffect(()=>{
//     const fetchData = async () => {
//         const reservation = await getReservation(reserveid)
//         setReservRes(reservation)
//     }
//     fetchData()
// },[])

  const {data: session}= useSession()
  const router = useRouter()
  //const dispatch = useDispatch<AppDispatch>();
    if(!reservResponse || !session?.user.token) {
        return null
    }
  const editBooking = async () => {
    if(startTime && endTime && date && people) {
        const itemJson = {
            bookDate: dayjs(date).format('YYYY/MM/DD'),
            startTime: dayjs(startTime).format('LT'),
            endTime: dayjs(endTime).format('LT'),
            people: people,
            user: reservResponse.user,
            room: reservResponse.room,
            coworkingspace: reservResponse.coworkingspace
        }

        if(session.user.token){
            const res = await editReservation(itemJson, session.user.token);
            console.log('res test:', res)
            if (res.success) {
                router.push("/mybookings")
            }
        }    
    }
    else {
        alert("Please fill all Fields")
    }
  }

    return (

        
        <div className="relative w-fit h-fit rounded-lg">
            <div className="w-full h-full rounded-lg z-10  backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
                <div className=" grid grid-cols-1 gap-y-5 shadow-lg py-8 px-5 rounded-lg">
                    <h1 className="text-2xl font-bold my-4 text-black">Create Booking</h1>
                    
                    <form action={editBooking} className="flex flex-col gap-3">
                    <table>
                        <tbody>
                            {/* <tr>
                                <td className="text-left px-7 py-3">
                                    <p className="text-black">Room: </p>
                                    </td>
                                <td className="py-3">
                                    <p className="text-black">{roomName}</p>
                                    </td>
                                
                            </tr> */}
                            <tr>
                                <td className="text-left px-7 py-3"><label className="text-black" htmlFor="reserveDate">Booking Date: </label></td>
                                <td className="py-3">
                            <FormControl fullWidth>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <InputLabel id="reserveDate"></InputLabel>
                                <DatePicker 
                                    // inputProps={{
                                    //     placeholder: Booking Date
                                    // }}
                                    className='bg-white rounded-lg border-none'
                                    // labelId="reserveDate"
                                    value={date}
                                    onChange={(value) => { setDate(value);}} />
                                </LocalizationProvider>
                            </FormControl></td>
                            </tr>
                            <tr>
                                <td className="text-left px-7 py-3"><label className="text-black" htmlFor="startTime">Start Time: </label></td>
                                <td className="py-3">
                        <FormControl fullWidth>
                            <InputLabel id="startTime"></InputLabel>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker 
                                className="bg-white rounded-lg border-none"
                                label=''
                                value={startTime}
                                onChange={(value) => { setStart(value)}}>   
                            </TimePicker>
                            </LocalizationProvider>
                        </FormControl></td>
                            </tr>
                            <tr>
                                <td className="text-left px-7 py-3"><label className="text-black" htmlFor="endTime">End Time: </label></td>
                                <td className="py-3">
                        <FormControl fullWidth>
                            <InputLabel id="endTime"></InputLabel>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker 
                                className="bg-white rounded-lg border-none"
                                label=""
                                value={endTime}
                                onChange={(value) => { setEnd(value)}}>   
                            </TimePicker>
                            </LocalizationProvider>
                        </FormControl></td>
                            </tr>
                            <tr>
                                <td className="text-left px-7 py-3"><label className="text-black" htmlFor="peoplenum">Number of People: </label></td>
                                <td className="py-3">
                        <FormControl fullWidth>
                            <TextField id="peoplenum" label="" variant="outlined" type="number" className="bg-white rounded-lg border-none"
                                value={people}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setPeople(parseInt(event.target.value))}}/>
                        </FormControl></td>
                            </tr>
                        </tbody>
                    </table>

                    <button type="submit"
                    className=" font-semibold bg-white text-amber-600 hover:text-white hover:bg-amber-600 font-bold cursor-pointer px-6 py-2 rounded-md">
                    Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
    
  )
}