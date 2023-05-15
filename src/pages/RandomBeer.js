import { useContext } from "react"
import { BeerContext } from "../context/beer.context"
import { Navigate } from "react-router-dom"

const RandomBeer = () => {

    const { beersData } = useContext(BeerContext)

    console.log(beersData)

    const randomId = Math.floor(Math.random() * beersData.length)


    return (
        <div>
            <Navigate to={`/beer/${beersData[randomId]._id}`} />
        </div>
    )
}

export default RandomBeer

