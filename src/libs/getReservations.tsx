import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { resolve } from "path"

export default async function getReservations() {
    //await new Promise((resolve)=>setTimeout(resolve,1000))

    //console.log("getCoworkingSpace")

    const session = await getServerSession(authOptions)

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/reservations`,{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${session?.user.token}`
    },
    cache: "no-cache"
    })
    if(!response.ok){
        throw new Error("Failed to fetch Reservations")
    }
    let jsonData = response.json();
    
    return jsonData
}