export type BeerCardType = {
  image: string
  name: string
  abv: string
  volume: string
  price: number
  available: boolean
}

const BeerCard = (props: BeerCardType) => {
  return (
    <div className='beerCard'>
    <img src={props.image} alt="" />
    <h1>{props.name}</h1>
    <p>ABV: {props.abv}%</p>
    <p>Volume: {props.volume}ml</p>
    <p>Price: {props.price} Ft</p>
    <p>{props.available ? "Raktáron" : "Nincs készleten"}</p>
    </div>
  )
}

export default BeerCard