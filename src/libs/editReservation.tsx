import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ReservationItem } from "../../interfaces";

export default async function editReservation(reservationItem:ReservationItem, id:string, token:string) {

    // const session = await getServerSession(authOptions);

    const response = await fetch(`http://localhost:5000/api/v1/reservations/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            bookDate: reservationItem.bookDate,
            startTime: reservationItem.startTime,
            endTime: reservationItem.endTime,
            people: reservationItem.people
        })
    });

    if (!response.ok) {
        throw new Error("Failed to update reservations")
    }
    return await response.json();
}