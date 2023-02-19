export const cities = [
    'Paris',
    'Budapest',
    'Skopje',
    'Rotterdam',
    'Valencia',
    'Vancouver',
    'Amsterdam',
    'Vienna',
    'Sydney',
    'New York City',
    'London',
    'Bangkok',
    'Hong Kong',
    'Dubai',
    'Rome',
    'Istanbul'
];

export const searchCity = (input) => {
    if (input === '*') return cities;
    if (input.length < 2) return null;
    return cities.filter(city => city.includes(input))
}