'use client'

import { useRouter } from "next/navigation";

export default function Banner () {

  const router = useRouter()

    return (
        <div className="w-full h-[80vh] flex flex-col justify-center items-center bg-[url(https://c.animaapp.com/07wo9h0j/img/background.png)] bg-cover bg-no-repeat">
          
          <div className="w-full flex flex-col justify-center items-center">
              <div className=" [font-family:'Inter',Helvetica] font-semibold text-white text-[64px] text-center">
                Co-working Space Hub
              </div>

              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[28px] text-center">
                Reserve your space, craft your success.
              </p>

              <button className="my-12 all-[unset] box-border bg-white border border-solid border-black shadow-[0px_4px_4px_#00000040] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
                <div className="m-2 px-16 py-2 border border-solid border-black [font-family:'Inter',Helvetica] font-normal text-[#1f1f1f] text-xl text-center hover:border-amber-600 hover:text-amber-600"
              onClick={(e) => { e.stopPropagation(); router.push('/coworkingspaces') }}>
                  See Co-Working Space
                </div>
              </button>
          </div>

        </div>
    )
}