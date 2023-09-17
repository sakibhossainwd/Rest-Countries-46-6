const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries);
    const countriesHTML = countries.map(country => getCountryHTML(country))
    console.log(country);
    const constainer = document.getElementById('git')
}

const getCountryHTML = country => {
    return `
    <div>
    <h3>${country}</h3>
    </div>
    `

}

loadCountries();