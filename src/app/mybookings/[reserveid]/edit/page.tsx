import Image from "next/image";
import Link from "next/link";
import getCoworkingSpace from "@/libs/getCoworkingSpace";
import getRoom from "@/libs/getRoom";
import RoomCatalog from "@/components/RoomCatalog";
import ReservationForm from "@/components/ReservationForm";
import { ReservationItemGet } from "../../../../../interfaces";
import EditReservationForm from "@/components/EditReservationForm";
import getReservation from "@/libs/getReservation";

export default async function Page( {params}: {params: {reserveid:string}}) {
    console.log("ReserveId "+params.reserveid);
    const reservation:ReservationItemGet = await getReservation(params.reserveid);
    console.log(reservation);
    return (
        <div className="h-full w-full text-center absolute top-[60px] left-0 right-0 bg-[url(/img/coworkingspace1.jpg)] bg-cover bg-no-repeat bg-center">
            <div className="w-full flex flex-col justify-center items-center m-10">
                <div className="text-white font-bold text-4xl my-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">Edit Booking</div>
                    {/*  <div className="text-white font-bold text-2xl my-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">Co-Working Space : {reservation.coworkingspace.name}</div>
                    <div className="text-white font-bold text-2xl mt-2 mb-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">Room : {reservation.room.name}</div> */}
                <div className="flex flex-row"></div>
                <div className="w-full h-full relative rounded-lg">
                    <EditReservationForm reserveid={params.reserveid} reservationItem={reservation}></EditReservationForm>
                </div>
            </div>
        </div>
    )
}