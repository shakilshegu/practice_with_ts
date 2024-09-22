import Country from "./Countries"

interface CountryProp {
    country: Country
}


const CountryCard = ({ country }: CountryProp) => {
    return (
        <div>

            <div key={country.name.common}>
                <p>{country.name.common},{country.capital}</p>
            </div>
        </div>
    )
}

export default CountryCard
