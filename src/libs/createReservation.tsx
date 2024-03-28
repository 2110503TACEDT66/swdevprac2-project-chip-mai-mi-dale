import { ReservationItem } from "../../interfaces";

export default async function createReservation(reservationItem: ReservationItem, token: string) {
    const response = await fetch("http://localhost:5000/api/v1/reservations", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            bookDate: reservationItem.bookDate,
            startTime: reservationItem.startTime,
            endTime: reservationItem.endTime,
            room: reservationItem.roomId,
            coworkingspace: reservationItem.coId,
            people: reservationItem.peopleNum,
            user: reservationItem.user
            // name: userRegisterData.name, 
            // tel: userRegisterData.tel,
            // email: userRegisterData.email,
            // password: userRegisterData.password,
            // role: role.toString()
         })
    });

    if (!response.ok) {
        throw new Error("Failed to create reservation")
    }

    // return success:boolean and token
    return await response.json();
}