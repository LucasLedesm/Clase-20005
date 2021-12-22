const addNewPacient = () => {
    let getPacientList = document.getElementById("Pacient");
    let pacientName = document.getElementById("inputName").value;
    let pacientLastName = document.getElementById("inputLastName").value;
    let pacientVacuna = document.getElementById("inputVacuna").value;
    let pacientDosis = document.getElementById("inputDosis").value;
    let pacientEdad = document.getElementById("inputEdad").value;
    let pacientTemp = document.getElementById("inputTemp").value;
    inputTemp.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("myBtn").click();
        }
    });
    let newPacient = document.createElement("div");
    newPacient.className = 'col-md-12';
    newPacient.innerHTML = `<div id = clienteHijos><h2>${pacientName} ${pacientLastName}</h2><p>vacuna: ${pacientVacuna}</p><p>dosis: ${pacientDosis}</p><p>Edad: ${pacientEdad}</p></div>`;
    getPacientList.appendChild(newPacient);


    if (pacientEdad < 18) {
        alert("Solo para mayores de edad")
        newPacient.innerHTML = `<div id = clienteHijos><h2>${pacientName} ${pacientLastName}</h2><p>vacuna: ${pacientVacuna}</p><p>dosis: ${pacientDosis}</p><p style="color:red">Edad: ${pacientEdad}</p></div>`;
    };
    if (pacientTemp >= 37.2) {
        alert("no te podes vacunar con fiebre, porfavor hacete ver")
        newPacient.innerHTML = `<div style = "color:red" id = clienteHijos><h2>${pacientName} ${pacientLastName}</h2><p>vacuna: ${pacientVacuna}</p><p>dosis: ${pacientDosis}</p><p>Edad: ${pacientEdad}</p></div>`;
    }
    if (pacientDosis >= 3) {
        alert("Ya tenes la cantidad de dosis necesaria")
        newPacient.innerHTML = `<div style = "color:green" id = clienteHijos><h2>${pacientName} ${pacientLastName}</h2><p>vacuna: ${pacientVacuna}</p><p>dosis: ${pacientDosis}</p><p>Edad: ${pacientEdad}</p></div>`;
    }
    console.log(Pacient)
};

const clearList = () => {
    let hijo = document.getElementById("clienteHijos");
    hijo.remove()
    Pacient.pop();
};
