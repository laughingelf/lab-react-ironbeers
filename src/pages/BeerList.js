import HomeButton from "../components/HomeButton"
import { BeerContext } from "../context/beer.context"
import { useContext } from "react"
import { Link } from "react-router-dom"

const BeerList = () => {

    const { beersData } = useContext(BeerContext)



    return (
        <div>
            <HomeButton />
            BeerList
            {beersData.map((beer) => {
                return (
                    <div>
                        <Link to={`/beer/${beer._id}`} key={beer._id}>
                            <img src={beer.image_url} />
                            <h3>{beer.name}</h3>
                            <p>{beer.tagline}</p>
                        </Link>
                        <>
                            <p>{beer.contributed_by}</p>
                        </>
                    </div>
                )
            })}
        </div>
    )
}

export default BeerList