import Image from "next/image"
export default function ProsCard({imgSrc, description}:{
    imgSrc: string,
    description: string
}){
    return(
        <div className="w-[1/3] flex flex-col justify-center items-center p-5 space-y-[50px] text-center">
            <Image src={imgSrc} className="relative w-auto h-[80px]" alt="detail" width={0} height={0} sizes='100vh' />
            <p>{description}</p>
        </div>
    )
}