//server fetch data
import Link from "next/link";
import RoomCard from "./RoomCard";
export default async function RoomCatalog({ rJson }: { rJson:Object }) {
    const rJsonReady = await rJson;
  return (
    <>
      <p className="my-20 [font-family:'Inter',Helvetica] font-normal text-white text-[20px] text-center">Explore {rJsonReady.count} rooms in Co-Working Space</p>
      <div className="w-[80%] my-70 grid grid-cols-3 gap-y-20 gap-x-10 ">
        {rJsonReady.data.map((rItem:Object) => (
          <div className="justify-self-center w-[1/3] h-[300px]">
            <RoomCard rId={rItem.id} rName={rItem.name} rCap={rItem.capacity}/>
          </div>
        ))}
      </div>
    </>
  );
}
