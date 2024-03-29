//server fetch data
import Link from "next/link";
import RoomCard from "./RoomCard";
import { RoomItem, RoomJson } from "../../interfaces";
export default async function RoomCatalog({ rJson, cwId }: { rJson:RoomJson , cwId:string}) {
    const rJsonReady = await rJson;
    console.log('params test: ', rJsonReady.data)
  return (
    <>
      <p className="my-20 [font-family:'Inter',Helvetica] text-[20px] text-center text-black text-normal">Explore {rJsonReady.count} rooms in Co-Working Space</p>
      <div className="w-[80%] my-70 grid grid-cols-3 grid-rows-1 gap-y-20 gap-x-10 overflow-x-auto">
        {rJsonReady.data.map((rItem:RoomItem) => (
          <div className="justify-self-center w-[1/3] h-[300px]" key={rItem.id}>
            <RoomCard rId={rItem.id} rName={rItem.name} rCap={rItem.capacity} cwId={cwId}/>
          </div>
        ))}
      </div>
    </>
  );
}
