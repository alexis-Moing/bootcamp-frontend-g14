const url = 'https://restcountries.com/v3.1/all?fields=name,flags'

function fetchCountries() {
    return fetch(url) //promise
    .then(response => response.json())
    .then(data => data)
    .then(err => console.log(err))
}

const renderCountries = function(countries) {
    console.log(countries)
    const countryListElement = document.querySelector('.app_list')

    let countryList = ''

    countries.forEach(country => {
        countryList = countryList + '<h2>' + country.name.common + '<h2>'
    })

    countryListElement.innerHTML = countryList
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('el DOM se cargo totalmente')

    fetchCountries()
        .then(response => renderCountries(response))
})