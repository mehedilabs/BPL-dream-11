import { Suspense } from "react"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Players from "./components/players/players"
import type { Iplayer } from "./types/player"



const playersFetch = async (): Promise<Iplayer[]> => {
  const res = await fetch("/data.json")
  const data = await res.json();
  return data;
}
function App() {
const playersPromise = playersFetch();
  return (
    <>
 <Nav/>
 <Hero/>
 <Suspense fallback={<h2>Loading...</h2>}>

<Players playersPromise={playersPromise}/>

 </Suspense>



  </>
  )
}

export default App
