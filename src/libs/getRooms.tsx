export default async function getRooms(coworkingSpaceId:string) {
    const response = await fetch(`http://localhost:5000/api/v1/coworkingSpaces/${coworkingSpaceId}/rooms`)
    if(!response.ok){
        throw new Error("Failed to fetch rooms")
    }

    return await response.json()
}