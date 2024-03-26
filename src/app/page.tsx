import Banner from '@/components/Banner'
import Image from 'next/image'
import ProsCard from '@/components/ProsCard'

export default function Home() {
  return (
    <main className='w-[100%] absolute top-[60px] left-0 right-0 flex flex-col justify-center items-center bg-white'>
      <Banner/>
      <div className='w-full text-center py-[18%] px-[20px] text-xl text-black'>
        "Experience seamless productivity with our hassle-free reservation system tailored for co-working spaces. <br />Reserve your spot effortlessly and unlock endless possibilities for collaboration and growth."
      </div>

      <div className='w-[60%] mb-[15%] grid grid-cols-3 items-start gap-[10px] text-black'>
        <ProsCard imgSrc='/img/clock.png' description='Enabling you to secure a workspace remotely, utilizing an internet connection, thereby optimizing efficiency and minimizing logistical complexities'/>
        <ProsCard imgSrc='/img/guarantee.png' description='Curate exceptional workspaces for your consideration'/>
        <ProsCard imgSrc='/img/house.png' description='Easily browse and compare different co-working spaces, granting you access to a wide range of options to suit your preferences and needs'/>
      </div>

      <div className='bg-orange-950 absolute bottom-0 left-0 right-0 h-[25px] mt-[50px]'></div>
    </main>
  )
}
