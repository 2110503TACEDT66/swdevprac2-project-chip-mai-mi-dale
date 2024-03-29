import { ReservationItem, ReservationJson, CoworkingSpaceJson, CoworkingSpaceItem } from "../../interfaces";
import ReservationCard from "./ReservationCard";
import getRoom from "@/libs/getRoom";
import getCoworkingSpaces from "@/libs/getCoworkingSpaces";

export default async function ReservationCatalog({reservationJson}:{reservationJson:ReservationJson}) {
    // console.log(reservationJsonReady);
    const reservationJsonReady = await reservationJson
    const coworkingSpacesJsonReady = await getCoworkingSpaces()

    return (
        
        <div className="w-[100%] h-[100%] text-center my-10">
            <div className="text-4xl text-black font-bold">My Booking</div>
            {
                (reservationJsonReady.count > 0) && reservationJsonReady?
            <div className="w-full h-full flex flex-col justify-center items-center">
                {reservationJsonReady.data.map((reservItem:any)=>(
                    <div className="m-2" key={reservItem._id}>
                        <ReservationCard reservation={reservItem}/>
                    </div>
                ))}
            </div>: <div className="text-2xl text-black font-bold">No Booking</div>
            }
        </div>
    )
}
