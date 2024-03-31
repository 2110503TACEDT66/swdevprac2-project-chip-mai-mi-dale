import { resolve } from "path"
const fetch = require('node-fetch');
import { CoworkingSpaceJson } from "../../interfaces";

export default async function getCoworkingSpaces():Promise<CoworkingSpaceJson> {
    await new Promise((resolve)=>setTimeout(resolve,1000))

    //console.log("getCoworkingSpace")
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/coworkingSpaces`)
    if(!response.ok){
        throw new Error("Failed to fetch Co-working Spaces")
    }

    const body = await response.json()
    //console.log("body", body)
    return body
}