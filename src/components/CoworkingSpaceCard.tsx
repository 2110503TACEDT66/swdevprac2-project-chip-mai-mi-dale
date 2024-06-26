'use client';
import Image from "next/image"
import { useRouter } from "next/navigation";

export default function CoworkingSpaceCard({cwName, imgSrc, cwOpen, cwClose, cwAddress, cwTel, cwId, cwRoom}:{cwName:string, imgSrc?:string, cwOpen:string, cwClose:string, cwAddress:string, cwTel:string, cwId:string, cwRoom:number}) {
    const router = useRouter();
    return (
        <div className="w-full h-[580px] flex flex-col justify-center items-center bg-white rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] ring-8 ring-white">
            {
            imgSrc?
                <div className="w-full h-[50%] relative rounded-t-3xl">
                    <Image src={imgSrc} className=" w-full h-full object-cover rounded-t-3xl" alt="detail" width={0} height={0} fill={true} sizes='100vh' />
                </div>
                :<div className="w-full h-[50%] relative rounded-t-3xl">
                    <Image src="/img/coworkingspace1.jpg" className=" w-full h-full object-cover rounded-t-3xl" alt="detail" width={0} height={0} fill={true}  sizes='100vh' />
                </div>
            }
 
            <div className="text-left w-full h-[25%] px-10 my-10 leading-5 text-black ">
                <p className="text-xl font-semibold mb-2">{cwName}</p>
                <div className="w-full px-5 space-y-3">
                <p><span className="font-medium">Open Time:</span> {cwOpen}</p>
                <p><span className="font-medium">Close Time:</span> {cwClose}</p>
                <p><span className="font-medium">Address:</span> {cwAddress}</p>
                <p><span className="font-medium">Tel:</span> {cwTel}</p>
                <p>
                 
                    {cwRoom === 0 ? (
                        <div><span className="font-medium">Room:</span> No room</div>
                    ) : (
                        <div><span className="font-medium">Room:</span> {cwRoom} count</div>
                    )}
                </p>
            </div>
            </div>

            <div className="w-full h-[25%] flex justify-center items-center" onClick={(e) => { e.stopPropagation(); router.push(`/coworkingspaces/${cwId}/rooms`) }}>
                <button className="px-4 py-2 border border-solid border-black rounded-lg text-black font-semibold hover:text-amber-600 hover:border-amber-600"> See More Details</button>
            </div>
        </div>
    )
}