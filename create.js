const axios = require('axios');
const createQuestions = require('./createQuestions');


async function create() {

    axios({
        method: 'POST',
        url: 'https://nazarov-kanban-server.herokuapp.com/card',
        data: {
            description: "",
            priority: 9,
            status: "progress",
            name: await createQuestions()
        }
    })
        .then(res => console.log(res.data))
        .catch(err => console.log('error'))
}

module.exports = create;