import Image from 'next/image'
import Bannar from './components/Bannar'
import AllFoods from './components/AllFoods'

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Bannar/>
        <AllFoods/>
       
      </div>
    </main>
  )
}
