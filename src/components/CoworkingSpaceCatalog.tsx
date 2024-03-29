//server fetch data
import Link from "next/link";
import CoworkingSpaceCard from "./CoworkingSpaceCard";
import { CoworkingSpaceItem , CoworkingSpaceJson} from "../../interfaces";
export default async function CoworkingSpaceCatalog({ cwJson }: { cwJson:CoworkingSpaceJson }) {
    const cwJsonReady = await cwJson;
  return (
    <>
      <p className="my-20 [font-family:'Inter',Helvetica] font-normal text-white text-[20px] text-center">Explore {cwJsonReady.count} Co-Working Spaces in our catalog</p>
      <div className="block w-[80%] my-70 grid grid-cols-3 gap-y-20 gap-x-10 ">
        {cwJsonReady.data.map((cwItem:CoworkingSpaceItem) => (
          <div className="justify-self-center w-[75%]" key={cwItem.id}>
            <CoworkingSpaceCard cwName={cwItem.name} cwOpen={cwItem.opentime} cwClose={cwItem.closetime} cwAddress={cwItem.address} cwTel={cwItem.tel} cwId={cwItem.id} cwRoom={cwItem.roomcount} />
          </div>
        ))}
      </div>
    </>
  );
}
