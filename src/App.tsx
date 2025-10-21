import { useEffect, useState } from "react"
import BEERCARD, {type BeerCardType} from "./components/BeerCard"



const App = () => {
  const [beerData, setBeerData] = useState<BeerCardType[]>([])

  useEffect(() => {
    fetch("data.json")
      .then(response => response.json())
      .then(data => setBeerData(data))
  }, [])
  
  return (
    <div className="beerCardWrapper">
      {beerData.map(beer => <BEERCARD {...beer}/>)}
    </div>
  )
}

export default App