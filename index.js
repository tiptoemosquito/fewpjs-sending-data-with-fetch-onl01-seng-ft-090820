// Add your code here
function submitData(userName, userEmail) {
    let formData = {
        name:`${userName}` ,
        email:`${userEmail}` 
    }

    let configObj = { 
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    return fetch("http://localhost:3000/users", configObj)
    .then(resp => resp.json())
    .then(data => handleResponse(data))
    .catch(error => handleError(error))
}

function handleResponse(data) {
    let docBody = document.querySelector('body')
    docBody.innerHTML = data.id
}

function handleError(error) {
    let docBody = document.querySelector('body')
    docBody.innerHTML = error.message
}