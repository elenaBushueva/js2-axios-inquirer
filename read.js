const axios = require('axios');

function read() {

    axios({
        method: 'GET',
        url: 'https://nazarov-kanban-server.herokuapp.com/card',
    })
        .then(res => console.log(res.data))
        .catch(err => console.log('error'))
}


module.exports = read;