export function getUsers(appState) {
    return fetch('http://localhost:3000/user.json', {
    method: 'GET',
    }).then((res) => res.json(), (err) => console.log(err));
}
