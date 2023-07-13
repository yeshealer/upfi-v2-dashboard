import BackgroundStar from '@/components/BackgroundStar'
import Homepage from '@/components/Homepage'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex flex-col items-center">
      <img src='/bg-effect.svg' alt='background' className='w-full h-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 my-0 mx-auto z-10' draggable={false} />
      <img src='/bg-glow.svg' alt='background' className='w-[200%] h-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none z-10' draggable={false} />
      <BackgroundStar />
      <Homepage />
      <Footer />
    </main>
  )
}
