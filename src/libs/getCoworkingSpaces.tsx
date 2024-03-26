import { resolve } from "path"
const fetch = require('node-fetch');

export default async function getCoworkingSpaces() {
    await new Promise((resolve)=>setTimeout(resolve,1000))

    //console.log("getCoworkingSpace")
    const response = await fetch("http://localhost:5000/api/v1/coworkingSpaces")
    if(!response.ok){
        throw new Error("Failed to fetch Co-working Spaces")
    }

    const body = await response.json()
    //console.log("body", body)
    return body
}