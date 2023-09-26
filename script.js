// Template, dynamically create HTML elements based on data

const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries);
    const countriesHTML = countries.map(country => getCountryHTML(country))
    const constainer = document.getElementById('container');
    constainer.innerHTML = countriesHTML.join(' ');
}

const getCountryHTML = country => {
    return `
        <div id="country">
            <h3>${country.name.common}</h3>
            <img src="${country.flags.png}" alt="">
        </div>
    `

}

