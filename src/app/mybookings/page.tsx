'use client'
import ReservationCard from "@/components/ReservationCard"

export default function BookingPage() {
    return (
        <main className="w-[100%] absolute top-[60px] left-0 right-0 flex flex-col justify-center items-center bg-white">
            <ReservationCard></ReservationCard>
        </main>
    )
}