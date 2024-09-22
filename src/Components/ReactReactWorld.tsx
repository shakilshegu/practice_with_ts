// create  a simple react application a list of countries and their capitals
// the application should have the following features:
// the List of countries and capitals should be fetched from an API
// the list should be displayed in the  'CountriesPage'.
// the user should be able filter the list by capital .

import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Country from "./Countries";

// fetch all countries , use the /all endpoints

const BASE_URL = "https://restcountries.com/v3.1";

const FILTERABLE_CAPITALS = [
    "Tallinn",
    "Helsinki",
    "Stockholm",
    "Oslo",
    "Copenhagen",
    "Reykjavik"
] as const
type Capital = (typeof FILTERABLE_CAPITALS)[number];



const ReactReactWorld = () => {
    const [countries, setCountries] = useState<Country[]>([])
    const [capital, setCapital] = useState<Capital>()

    useEffect(() => {
        const fetchData = async () => {
            const url = capital ? `${BASE_URL}/capital/${capital}` : `${BASE_URL}/all`
            try {
                const data = await fetch(url)
                const parseData = await data.json()
                setCountries(parseData)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [capital])


    return (
        <div>
            <div>
                <select onChange={(event) => setCapital(event.target.value as Capital)} >
                    <option value="" disabled selected> Select Capital </option>
                    {FILTERABLE_CAPITALS.map(capital => {
                        return (
                            <option key={capital} value={capital}>{capital}</option>
                        )
                    })}
                </select>
            </div>
            <div>
                {countries.map((country) => {
                    return <CountryCard country={country} />
                })}
            </div>
        </div>
    )
}

export default ReactReactWorld
