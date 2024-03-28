import Link from "next/link";
import styles from './topmenu.module.css'
import Image from "next/image";

export default function TopMenuItem ({ title, pageRef, imgSrc } : {title: string, pageRef: string, imgSrc?: string}) {
    return (
        <Link href={pageRef} className="text-center font-family:'Inter',Helvetica] font-normal text-black rounded-lg hover:text-amber-600">
            <div className="px-5 py-2 flex flex-row items-center justify-center font-semibold">
                {title}
            {
                imgSrc? <div className="mx-3">
                <Image src={imgSrc} className="relative w-auto h-[25px]" alt="logo" width={0} height={0} sizes='100vh' /> </div>: null
            }
            </div>
        </Link>
    );
}