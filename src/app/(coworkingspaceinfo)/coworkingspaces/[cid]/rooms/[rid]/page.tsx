import Image from "next/image";
import Link from "next/link";
import getCoworkingSpace from "@/libs/getCoworkingSpace";
import getRoom from "@/libs/getRoom";
import RoomCatalog from "@/components/RoomCatalog";
import ReservationForm from "@/components/ReservationForm";
import { Room } from "../../../../../../../interfaces";
import { CoworkingSpaceItem } from "../../../../../../../interfaces";

export default async function Room( {params}: {params: {cid:string, rid:string}} ) {
    console.log(params.cid, params.rid);
    const CoworkingDetail = await getCoworkingSpace(params.cid);
    const Room = await getRoom(params.cid,params.rid);

    return (
        <main className="h-full text-center absolute top-[60px] left-0 right-0 flex flex-col justify-center items-center bg-[url(/img/coworkingspace1.jpg)] bg-cover bg-no-repeat bg-center">
            <div className="w-full flex flex-col justify-center items-center">
                <div className="text-white font-bold text-4xl my-4">Create Booking</div>
                <div>Co-Working Space : {CoworkingDetail.data.name}</div>
                <div>Room : {Room.data.name}</div>
                <div className="flex flex-row "></div>
                {
                    Room.data.picture === null? <Image src={Room.data.picture} alt="room" width={0} height={0}/> :  <Image src='/img/meetingroom1.jpg' alt="room"width={0} height={0}/>
                }
                <div className="w-[1/2] h-fit relative rounded-lg">
                    <ReservationForm></ReservationForm>
                </div>
            </div>
        </main>
    )
}