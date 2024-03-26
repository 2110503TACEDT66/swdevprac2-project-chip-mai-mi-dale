import { ReservationItem } from "../../interfaces";

export default async function createReservation(reservationItem: ReservationItem) {
    const response = await fetch("http://localhost:5000/api/v1/auth/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            startdate: reservationItem.startTime,
            enddate: reservationItem.endTime,
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