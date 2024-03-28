"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
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

const fetch = require('node-fetch');

export default function ReservationForm({onDateChange} : {onDateChange:Function}) {
    const [room, setRoom] = useState<string | null>(null);
    const [date, setDate] = useState<Dayjs | null>(null);
    const [startTime, setStart] = useState<Dayjs | null>(null);
    const [endTime, setEnd] = useState<Dayjs | null>(null);
    const [people, setPeople] = useState<number>(0);

    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>()

    const makeBooking = async () => {

        if (room && date && startTime && endTime && people) {
            const item: ReservationItem = JSON.parse(JSON.stringify({
                roomId: room,
                bookDate: dayjs(date).format('YYYY/MM/DD'),
                startTime: startTime,
                endTime: endTime,
                peopleNum: people
            }))
            dispatch(addReservation(item))
            alert('this works')
        }
    }

    const handleSubmit = async () => {
        //e.preventDefault();

        if (!room || !date || !startTime || !endTime || !people) {
            throw new Error();
        }

        try {
            const res = await fetch(`http://localhost:5000/api/v1/auth/coworkingspaces/${cid}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    room,
                    date,
                    startTime,
                    endTime,
                    people
                }),
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push("/");
            } else {
                console.log("Booking failed.");
            }
        
        } catch (error) {
            console.log("Error during booking: ", error);
        }
    };

    return (

        <div className="">
            <div className="w-full h-full absolute backdrop-blur-lg backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]"></div>
            <div className="w-full h-full relative">
            <div className="z-10 grid grid-cols-1 gap-y-5 shadow-lg p-5 rounded-lg border-t-4 border-green-400">
                <h1 className="text-xl font-bold my-4 text-black">Booking</h1>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <table>
                    <tbody>
                        <tr>
                            <td className="text-left px-7 py-3">
                        <label className="text-black" htmlFor="room">Room: </label></td>
                        <td className="py-3">
                        <FormControl fullWidth>
                            <InputLabel id="room">Room</InputLabel>
                            <Select
                                labelId="room"
                                id="room"
                                value={room}
                                label="RoomId"
                                onChange={(e) => { setRoom(e.target.value)} }
                            >
                                <MenuItem value={10}>ten</MenuItem>
                            </Select>
                        </FormControl>

                        </td>
                        </tr>
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
                                className='bg-white'
                                labelId="reserveDate"
                                value={date}
                                onChange={(value) => { setDate(value); onDateChange(value) }} />
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
                            className="bg-white"
                            labelId="startTime"
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
                            className="bg-white"
                            labelId="endTime"
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
                        <TextField id="peoplenum" label="" variant="outlined" type="number"
                            value={people}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setPeople(event.target.value)}}/>
                    </FormControl></td>
                        </tr>
                    </tbody>
                </table>

                    {/* <br /> */}
                    
                    <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2 rounded-md"
                    onClick={makeBooking}>
                        Submit
                    </button>

                </form>
            </div>
        </div>
        </div>
    );
}
