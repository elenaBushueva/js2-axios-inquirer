const axios = require('axios');

function update() {

    axios({
        method: 'PATCH',
        url: 'https://nazarov-kanban-server.herokuapp.com/card/61450b92a25258003c5e011a',
        data: {
            description: "",
            priority: 10,
            status: "progress",
            name: "DO IT"
        }
    })
        .then(res => console.log(res.data))
        .catch(err => console.log('error'))

}

module.exports = update;