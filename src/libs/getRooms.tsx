export default async function getRooms(coworkingSpaceId:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/coworkingSpaces/${coworkingSpaceId}/rooms`,{
        cache: "no-cache"
    })
    if(!response.ok){
        throw new Error("Failed to fetch rooms")
    }

    return await response.json()
}