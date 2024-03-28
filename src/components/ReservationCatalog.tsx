import { ReservationItem, ReservationJson, CoworkingSpaceJson, CoworkingSpaceItem } from "../../interfaces";
import ReservationCard from "./ReservationCard";
import getRoom from "@/libs/getRoom";

export default async function ReservationCatalog({reservationJson, coworkingSpaceJson}:{reservationJson:ReservationJson, coworkingSpaceJson:CoworkingSpaceJson}) {
    const reservationJsonReady = await reservationJson;
    const coworkingSpacesJsonReady = await coworkingSpaceJson;

    return (
        <>
            <div>
                {reservationJsonReady.data.map((reservItem:ReservationItem)=>(
                    <div>
                        <ReservationCard roomName={reservItem.roomId}/>
                    </div>
                ))}
                {
                    coworkingSpacesJsonReady.data.map((coItem:CoworkingSpaceItem)=>(
                        <ReservationCard coName={coItem.name}/>
                    ))
                }
            </div>
        </>
    )
}
