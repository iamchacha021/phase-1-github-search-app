








const fetchUsers = ()=>{
    return fetch('https://api.github.com/search/users?q=octocat')
    .then(response => response.json())
    .then((data)=> {
        console.log(data)
        console.log(data.items)
        let userName = data.items
        userName.forEach((name)=>{
            const userList = document.querySelector('#user-list')
            const liName = document.createElement('li')
            liName.innerHTML = name.login

            userList.appendChild(liName)
        })
    })
}
fetchUsers()


const fetchRepos = ()=>{
    return fetch('https://api.github.com/users/octocat/repos')
    .then(response => response.json())
    .then((data) => {
        data.forEach((repo)=>{
            console.log(repo.name)
            const reposList = document.querySelector('#repos-list')
            const liRepo =document.createElement('li')
            liRepo.innerHTML = repo.name

            reposList.appendChild(liRepo)
        })
    })
}
fetchRepos()