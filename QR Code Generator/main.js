const img = document.getElementById("qrImg");
const url = document.querySelector('.inputBox');

let qrAPI = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

function shortenURL(){
    img.src = qrAPI + url.value;
}