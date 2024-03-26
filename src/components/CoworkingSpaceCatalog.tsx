//server fetch data
import Link from "next/link";
import CoworkingSpaceCard from "./CoworkingSpaceCard";
export default async function CoworkingSpaceCatalog({ cwJson }: { cwJson:Object }) {
    const cwJsonReady = await cwJson;
  return (
    <>
      <p className="my-20 [font-family:'Inter',Helvetica] font-normal text-white text-[20px] text-center">Explore {cwJsonReady.count} Co-Working Spaces in our catalog</p>
      <div className="block w-[80%] my-70 grid grid-cols-3 gap-y-20 gap-x-10 ">
        {cwJsonReady.data.map((cwItem:Object) => (
          <div className="justify-self-center w-[80%]">
            <CoworkingSpaceCard cwName={cwItem.name} cwOpen={cwItem.opentime} cwClose={cwItem.closetime} cwAddress={cwItem.address} cwTel={cwItem.tel} cwId={cwItem.id} />
          </div>
        ))}
      </div>
    </>
  );
}
