const appURL= "https://api.adviceslip.com/advice";

const rollDice = document.querySelector('.dice');
rollDice.addEventListener('click', setQuery);

function setQuery() {
    getAdvice();
}

async function getAdvice(){
    const response = await fetch(appURL);
    var data = await response.json();

    document.querySelector(".adviceQ").innerHTML = data.slip.advice;
    document.querySelector(".adviceNum").innerHTML = `ADVICE #${data.slip.id}`;
    console.log(data.slip.advice);
    console.log(data.slip.id);
}

