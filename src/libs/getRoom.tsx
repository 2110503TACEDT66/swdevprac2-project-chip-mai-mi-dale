export default async function getRoom(coId:string, roomId:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/coworkingSpaces/${coId}/rooms/${roomId}`,{
        cache: "no-cache"
    })
    
    if(!response.ok){
        throw new Error("Failed to fetch a room")
    }

    return await response.json()
}