const axios = require('axios');

function del() {

    axios({
        method: 'DELETE',
        url: 'https://nazarov-kanban-server.herokuapp.com/card/614511a2a25258003c5e011f',
    })
        .then(res => console.log(res.data))
        .catch(err => console.log('error'))

}

module.exports = del;