"use client"
import Image from "next/image"
import { useRouter } from "next/navigation";


export default function RoomCard({ rId, imgSrc, rName, rCap, cwId }: { rName: string, rId: string, imgSrc?: string, rCap: number, cwId: string}) {
    const router = useRouter();
    
    return (
        <div className="w-[300px] h-full flex flex-col justify-center p-3 items-center bg-white rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
        
                {
                imgSrc ?
                <div className={`relative w-full h-[80%] bg-cover bg-no-repeat rounded-lg`} style={{background:imgSrc}}>
                    <div className="absolute w-full h-full top-0 bg-gradient-to-b from-black/90 to-transparent rounded-lg"></div>
                    <div className="absolute w-full h-full py-5 pl-5 text-left flex flex-col justify-between items-start">
                        <p className="text-xl text-white font-semibold ">{rName}</p>
                        <p className="text-md text-white font-medium">Capacity: {rCap} people</p>
                    </div>
                </div>
                    
                    : <div className="relative w-full h-[80%] bg-[url('/img/meetingroom1.jpg')] bg-cover bg-no-repeat rounded-lg">
                        <div className="absolute w-full h-full top-0 bg-gradient-to-b from-black/90 to-transparent rounded-lg"></div>
                        <div className="absolute w-full h-full py-5 pl-5 text-left flex flex-col justify-between items-start">
                            <p className="text-xl text-white font-semibold ">{rName}</p>
                            <p className="text-md text-white font-medium">Capacity: {rCap} people</p>
                        </div>
                    </div>
                }
            <div className="w-auto h-[20%] mt-5 p-2 flex justify-center items-center" onClick={(e) => { e.stopPropagation(); router.push(`/coworkingspaces/${cwId}/rooms/${rId}`);}}>
                <button className="px-4 py-2 border border-solid border-black rounded-lg text-black font-semibold hover:text-amber-600 hover:border-amber-600">Create Booking</button>
            </div>
        </div>
    )
}