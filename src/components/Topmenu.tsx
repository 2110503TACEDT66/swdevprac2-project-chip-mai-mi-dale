import TopMenuItem from "./TopMenuItem";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";

export default async function Topmenu () {

    const session = await getServerSession(authOptions)
    console.log('session: '+ session?.user.name)

    return (
        <div className="w-full h-[60px] px-10 fixed top-0 left-0 right-0 z-30 bg-[#fffdfb] border-b [border-bottom-style:solid] border-black flex flex-row justify-between items-center space-x-4">
            <Image src="/img/logo.png" className="relative w-auto h-[80%]" alt="logo" width={0} height={0} sizes='100vh' />
            <div className="flex flex-row items-center justify-center">
                <TopMenuItem title="Home" pageRef='/'/>
                <TopMenuItem title="Co-working Spaces" pageRef='/coworkingspaces'/>
                <TopMenuItem title="My Bookings" pageRef='/mybookings'/>
                {
                    session? <TopMenuItem title={`Sign Out of ${session.user?.name}`} pageRef="/api/auth/signout"/>
                    : <TopMenuItem title="Sign In" pageRef='/api/auth/signin'/>
                }

            </div>
            
        </div>
    )
}