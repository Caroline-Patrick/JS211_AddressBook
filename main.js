let usersArray = []

accessUsers = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(users => usersArray.push(users.results))
    console.log(usersArray)
}

console.log()

// console.log(users.results[0].name)
// https://randomuser.me/api/?results=100

const displayUsers = () => {
    const allUsers = document.getElementById('all-users');
    usersArray.map((users, index)=> {
        const li = document.createElement('li');
        const text = document.createTextNode(`#${index}, Name: ${users.results}`)
        li.appendChild(text)
        allUsers.appendChild(li)
    }) 
}