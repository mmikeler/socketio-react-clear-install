const { nanoid } = require('nanoid');
const fetch = require('node-fetch');

const api = {
    apiUrl: 'your_api_base_url',
    users: 'users_api_endpoint'
}
function url(endpoint){
    return api.apiUrl + api[endpoint];
}

module.exports = () => {
    bd = {
        users: {
            add: (arr) => {
                fetch( url('users'), arr )
                .then(res => res.json())
                .then(body => console.log(body));
            
                return 'add new user';
            }
        }
    }
    return bd;
}