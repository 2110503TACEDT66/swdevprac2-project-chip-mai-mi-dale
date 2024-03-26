import Image from "next/image";
import Link from "next/link";
import getCoworkingSpace from "@/libs/getCoworkingSpace";
import getRooms from "@/libs/getRooms";
import RoomCatalog from "@/components/RoomCatalog";
import ReservationForm from "@/components/ReservationForm";

export default async function CoworkingSpaceDetailPage( {params}: {params: {cid:string}} ) {

    const CoworkingSpaceDetail = await getCoworkingSpace(params.cid);
    const RoomsCoworkingSpace = await getRooms(params.cid);

    return (
        <main className="text-center absolute top-[60px] left-0 right-0 flex flex-col justify-center items-center bg-white">
            {/* <h1 className="text-lg font-medium">{CoworkingSpaceDetail.data.name}</h1> */}
            <img src='/img/coworkingspace1.jpg' alt="coworking"
                className="w-full h-[80vh] flex flex-col justify-center items-center object-cover bg-no-repeat"/>
                <ReservationForm></ReservationForm>
            <div className="w-full flex flex-col justify-center items-center">
                <RoomCatalog rJson={RoomsCoworkingSpace}/>
            </div>
        </main>
    )
}