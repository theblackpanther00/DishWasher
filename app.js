const bros = ["Jared", "Jacinth", "Joel"];

const go = document.getElementById("names");

const resultDiv = document.getElementById("result");

go.addEventListener("click", chooseBro);

function chooseBro() {
    const randomBroIndex = Math.floor(Math.random() * bros.length);
    const randomBro = bros[randomBroIndex];
    resultDiv.textContent = "Dish Duty: " + randomBro;
}