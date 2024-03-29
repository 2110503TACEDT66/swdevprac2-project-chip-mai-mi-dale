import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function getReservation(id:string) {

    const session = await getServerSession(authOptions);

    const response = await fetch(`http://localhost:5000/api/v1/reservations/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${session?.user.token}`
        },
        cache: 'no-cache'
    });

    if (!response) {
        throw new Error("Failed to get reservation")
    }

    return await response.json();
}