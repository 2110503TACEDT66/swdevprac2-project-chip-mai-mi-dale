import getCoworkingSpaces from "@/libs/getCoworkingSpaces";
import CoworkingSpaceCatalog from "@/components/CoworkingSpaceCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";


export default async function CoworkingSpace() {
    
    const coworkingSpaces = getCoworkingSpaces()

    return (
        <main className="w-[100%] absolute top-[60px] left-0 right-0 [background:linear-gradient(180deg,rgb(69,59,46)_40.05%,rgb(255,255,255)_98.72%)] bg-cover bg-center">
            <div className="w-full py-[20px] my-[80px] text-center">
                <p className="[font-family:'Inter',Helvetica] font-semibold text-white text-[48px] text-center">
                    Our Co-Working Spaces
                </p>
                <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[24px] text-center">
                    Empower your workday: Choose your ideal co-working space with ease.
                </p>
                <Suspense fallback={<p>Loading ... <LinearProgress color="inherit"/></p> }>
                    <div className="w-full flex flex-col justify-center items-center">
                        <CoworkingSpaceCatalog cwJson={coworkingSpaces}/>
                    </div>
                </Suspense>
            </div>

        </main>
    )
}