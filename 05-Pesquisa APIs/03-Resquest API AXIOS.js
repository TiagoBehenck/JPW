const axios = require('axios');

axios.get('https://swapi.co/api/planets/1')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });