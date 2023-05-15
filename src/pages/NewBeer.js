import { useState } from "react"
import HomeButton from "../components/HomeButton"

const NewBeer = () => {
    const [form, setForm] = useState()



    return (
        <HomeButton /> >

        <div className="AddApartmentPage">
            <h3>Add New Apartment</h3>

            {/*    ADD   */}
            <form onSubmit={handleSubmit} >
                <label>Title</label>
                <input
                    type="text"
                    name="headline"
                    onChange={(e) => setHeadline(e.target.value)}
                    value={headline}
                />

                <label>Price per Day</label>
                <input
                    type="number"
                    name="pricePerDay"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />

                <button type="submit">Create Apartment</button>

            </form>
        </div>
    )
}

export default NewBeer