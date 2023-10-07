// Template, dynamically create HTML elements based on data

const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries[0]);
    const countriesHTML = countries.map(country => getCountryHTML(country))
    const constainer = document.getElementById('container');
    constainer.innerHTML = countriesHTML.join(' ');
}
// orginal basic code
// const getCountryHTML = country => {
//     return `
//         <div id="country">
//             <h3>${country.name.common}</h3>
//             <img src="${country.flags.png}" alt="">
//         </div>
//     `

// }

// destructuring option - 01
// const getCountryHTML = country => {
//     const {name, flags} = country;
//     return `
//         <div id="country">
//             <h3>${name.common}</h3>
//             <img src="${flags.png}" alt="">
//         </div>
//     `

// }
// destructuring option - 01
const getCountryHTML = ({name, flags, area}) => {
    return `
        <div id="country">
            <h3>${name.common}</h3>
            <p>Area:- ${area}</p>
            <img src="${flags.png}" alt="">
        </div>
    `

}

loadCountries();