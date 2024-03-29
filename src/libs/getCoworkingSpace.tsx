export default async function getRooms(coworkingSpaceId:string) {
    console.log("CoId:" + coworkingSpaceId)
    const response = await fetch(`http://localhost:5000/api/v1/coworkingSpaces/${coworkingSpaceId}`, {
        method: 'GET',
        cache: 'no-cache'
    })
    if(!response){
        throw new Error(response)
        // throw new Error("Failed to fetch Co-Working Space")
    }

    return await response.json()
}