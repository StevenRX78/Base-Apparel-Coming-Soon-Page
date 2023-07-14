const form = document.querySelector("form");
const input = document.querySelector("input");
const alertImg = document.querySelector("span img");
const alertMsg = document.querySelector(".alert");

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]>\w+)*(\.\w{2,3})+$/;

    if (input.value=="") {
        alerts();
        return (alertMsg.innerHTml = "Please fill in your email");
    }
    if(!input.value.match(pattern)) {
        alerts();
        return (alertMsg.innerHTml = "Please provide a valid email");
    }
    return alert("Thank you for filling in your email");
});

function alerts() {
    input.style.borderColor = "hsl(0, 93%, 68%)";
        alertImg.style.display = "block";
        alertMsg.style.display = "block";
}

function clearAlert() {
    input.style.borderColor = "hsla(0, 36%, 70%, 50%)";
        alertImg.style.display = "none";
        alertMsg.style.display = "none";
}

input.addEventListener("keypress", ()=> {
    clearAlert();
})