export default function Banner () {
    return (
        <div className="absolute w-[1440px] h-[972px] top-[60px] left-0 bg-[url(https://c.animaapp.com/07wo9h0j/img/background.png)] bg-[100%_100%]">
          <div className="relative w-[787px] h-[325px] top-[281px] left-[328px]">
            <div className="absolute w-[783px] h-[179px] top-0 left-0">
              <div className="absolute w-[783px] h-[119px] top-0 left-0 [font-family:'Inter',Helvetica] font-semibold text-white text-[64px] text-center tracking-[0] leading-[normal]">
                Co-working Space Hub
              </div>
              <p className="absolute w-[783px] h-[77px] top-[102px] left-0 [font-family:'Inter',Helvetica] font-normal text-white text-[28px] text-center tracking-[0] leading-[normal]">
                Reserve your space, craft your success.
              </p>
            </div>
            <button className="all-[unset] box-border absolute w-[387px] h-[86px] top-[239px] left-[199px]">
              <div className="relative w-[385px] h-[86px] bg-[#ffffffd4] border border-solid border-black shadow-[0px_4px_4px_#00000040] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
                <div className="absolute w-[360px] h-[64px] top-[10px] left-[12px] border border-solid border-black" />
                <div className="absolute w-[286px] h-[56px] top-[14px] left-[49px] [font-family:'Inter',Helvetica] font-normal text-[#1f1f1f] text-[24px] text-center tracking-[0] leading-[normal]">
                  See Co-Working Space
                </div>
              </div>
            </button>
          </div>
        </div>
    )
}