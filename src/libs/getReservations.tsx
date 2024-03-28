import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { resolve } from "path"
const fetch = require('node-fetch');

export default async function getReservations() {
    //await new Promise((resolve)=>setTimeout(resolve,1000))

    //console.log("getCoworkingSpace")

    const session = await getServerSession(authOptions)

    const response = await fetch("http://localhost:5000/api/v1/reservations",{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${session?.user.token}`
    },
    cache: "no-cache"
    })
    console.log('res: ', response)
    if(!response.ok){
        throw new Error("Failed to fetch Reservations")
    }

    const body = await response.json()
    
    return body
}