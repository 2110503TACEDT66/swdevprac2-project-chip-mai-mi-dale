import TopMenuItem from "@/components/TopMenuItem"
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-[100%] absolute top-[60px] left-0 right-0 flex flex-col justify-between items-center bg-white">
        <div className="flex flex-col ">
            <TopMenuItem title="Users" pageRef='/allusers'/>
            <TopMenuItem title="Bookings" pageRef='/allbookings'/>
            <TopMenuItem title="Co-Working Spaces" pageRef='/allcoworkings'/>
        </div>
        {children}
    </div>
  )
}

