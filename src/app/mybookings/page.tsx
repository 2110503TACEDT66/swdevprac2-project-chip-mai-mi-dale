
import ReservationCard from "@/components/ReservationCard"
import ReservationCatalog from "@/components/ReservationCatalog"
import getCoworkingSpaces from "@/libs/getCoworkingSpaces";
import getReservations from "@/libs/getReservations";
import { useEffect, useState } from "react";

export default async function BookingPage() {

    // const CoworkingSpaceDetail = await getCoworkingSpaces();
    const reservations = await getReservations();
    //const RoomsCoworkingSpace = await getRooms(params.cid);
    return (
        <main className="absolute w-[100%] top-[60px] left-0 right-0 [background:white] bg-cover bg-center min-h-screen">
            <div className="flex flex-row justify-center">
                <ReservationCatalog reservationJson={reservations}/>
            </div>
        </main>
    )
}