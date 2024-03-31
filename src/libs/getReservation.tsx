import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ReserveItemJson } from "../../interfaces";

export default async function getReservation(id:string):Promise<ReserveItemJson> {

    const session = await getServerSession(authOptions);

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/reservations/${id}`, {
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