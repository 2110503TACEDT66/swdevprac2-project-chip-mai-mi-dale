import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function getReservation(id:string) {

    const session = await getServerSession(authOptions);

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/reservations/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${session?.user.token}`
        },
        cache: 'no-cache'
    });

    if (!response.ok) {
        throw new Error("Failed to get reservation")
    }

    return await response.json();
}