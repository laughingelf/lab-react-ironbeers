import { createContext, useEffect, useState } from "react";
import axios from "axios";

const BeerContext = createContext()

function BeerContextProvider({ children }) {
    const [beersData, setBeersData] = useState([])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((res) => {
                // console.log(res.data)
                setBeersData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <BeerContext.Provider value={{ beersData, setBeersData }}>
            {children}
        </BeerContext.Provider>
    )
}

export { BeerContext, BeerContextProvider }