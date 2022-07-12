let tableBody = document.querySelector("#tbody");

function renderScores() {
    for (let i = 0; i < JSON.parse(localStorage.getItem("highScores")).length; i++) {
        // new table data element with username data of i written into it from local storage
            let userI = document.createElement('td');   
            userI.innerHTML = JSON.parse(localStorage.getItem("highScores")[i].username);
            console.log(JSON.parse(localStorage.getItem("highScores")));
        // new table data element with userScore data of i written into it from local storage
            let scoreI = document.createElement('td');
            scoreI.innerHTML = JSON.parse(localStorage.getItem("highScores")[i].userScore); 
        // row with fresh user data appended to it
            let rowI = document.createElement('tr');
            rowI.appendChild(userI, scoreI);
        // append fresh row to table body
            tableBody.appendChild(rowI);
    }
};

renderScores();