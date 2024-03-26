export default async function getRooms(coworkingSpaceId:string) {
    const response = await fetch(`http://localhost:5000/api/v1/coworkingSpaces/${coworkingSpaceId}`)
    if(!response.ok){
        throw new Error("Failed to fetch Co-Working Space")
    }

    return await response.json()
}