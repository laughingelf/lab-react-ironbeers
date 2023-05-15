import HomeButton from "../components/HomeButton"
import { BeerContext } from '../context/beer.context'
import { useContext } from 'react'
import { useParams } from "react-router-dom"


const SingleBeer = () => {

    const { beersData } = useContext(BeerContext)
    const { id } = useParams()

    const foundBeer = beersData.find((beer) => {
        // console.log('foundBeer', foundBeer)
        return beer._id === id;
    })

    return (
        !foundBeer ?

            <div>
                <p>No beer found</p>
            </div>
            :

            <div>
                <HomeButton />

                <>
                    <img src={foundBeer.image_url} />
                    <h2>{foundBeer.name}</h2>
                    <p>{foundBeer.tagline}</p>
                    <p>{foundBeer.first_brewed}</p>
                    <p>{foundBeer.attenuation_level}</p>
                    <p>{foundBeer.description}</p>
                    <p>{foundBeer.contributed_by}</p>
                </>
            </div>
    )
}

export default SingleBeer