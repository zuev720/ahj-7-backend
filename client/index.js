
function request(method, querystring) {
    const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// const query = encodeURIComponent('allTickets');
// 'https://google.com/search'
    const url = new URL(`http://localhost:7070${querystring}`);
    // console.log(url)
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.send();
    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                console.log(xhr.responseText)
                // const data = JSON.parse(xhr.responseText);
                return JSON.parse(xhr.responseText);
            } catch (e) {
                console.error(e);
            }
        }
    });
}

const method = 'GET';
const querystring = `/`;

request(method, querystring);
// console.log(xhr)
