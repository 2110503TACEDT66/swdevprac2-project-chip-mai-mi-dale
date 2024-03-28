import Image from "next/image";
import Link from "next/link";
import getCoworkingSpace from "@/libs/getCoworkingSpace";
import getRooms from "@/libs/getRooms";
import RoomCatalog from "@/components/RoomCatalog";
import ReservationForm from "@/components/ReservationForm";

export default async function RoomsDetailPage( {params}: {params: {cid:string}} ) {

    const CoworkingSpaceDetail = await getCoworkingSpace(params.cid);
    const RoomsCoworkingSpace = await getRooms(params.cid);
    console.log("param: ", params.cid);
    
    return (
        <main className="text-center absolute top-[60px] left-0 right-0 flex flex-col justify-center items-center bg-white">
            

            <div className="w-full h-[80vh] flex flex-col justify-center items-center bg-[url(/img/coworkingspace1.jpg)] bg-cover bg-no-repeat bg-center text-white text-center">
                
                <div className="w-full justify-center items-center space-y-5 bg-orange-950 bg-opacity-50 py-10">
                    <h1 className="text-8xl font-bold ">{CoworkingSpaceDetail.data.name}</h1>
                    <div className="w-full flex flex-row space-x-5 justify-center items-center text-center">
                        <p className="text-xl font-semibold">OPEN TIME : {CoworkingSpaceDetail.data.opentime}</p>
                        <p className="text-xl font-semibold">CLOSE TIME : {CoworkingSpaceDetail.data.closetime}</p>
                    </div>
                    <p className="text-xl font-semibold">ADDRESS : {CoworkingSpaceDetail.data.address}</p>
                </div>
            </div>
            
            <div className="w-full flex flex-col justify-center items-center">
                <RoomCatalog rJson={RoomsCoworkingSpace} cwId={params.cid}/>
            </div>
        </main>
    )
}