import { CoworkingSpaceItemJson } from "../../interfaces"

export default async function getRooms(coworkingSpaceId:string):Promise<CoworkingSpaceItemJson> {
    console.log("CoId:" + coworkingSpaceId)
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/coworkingSpaces/${coworkingSpaceId}`, {
        method: 'GET',
        cache: 'no-cache'
    })
    if(!response){
        throw new Error(response)
        // throw new Error("Failed to fetch Co-Working Space")
    }

    return await response.json()
}