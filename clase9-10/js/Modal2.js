let hoy = new Date();
let fecha = hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear();
let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
let fechaYHora = fecha + ' ' + hora;



const addNewPacientModal = () => {
    let getPacientListM = document.getElementById("PacientM");
    let pacientNameM = document.getElementById("inputName").value;
    let pacientLastNameM = document.getElementById("inputLastName").value;
    let pacientEdadM = document.getElementById("inputEdad").value;
    let pacientTempM = document.getElementById("inputTemp").value;
    let newPacientM = document.createElement("div");

    newPacientM.id = 'clienteHijosModal';
    newPacientM.innerHTML =
        `<li style="background-color: rgb(201, 241, 178);">${pacientNameM} ${pacientLastNameM}...........${fechaYHora}</li>`;
    getPacientListM.appendChild(newPacientM);

    if (pacientEdadM < 18) {
        newPacientM.innerHTML =
            `<li style="background-color: red;">${pacientNameM} ${pacientLastNameM}...........${fechaYHora}</li>`;
    }
    else if (pacientTempM >= 37.2) {
        newPacientM.innerHTML =
            `<li style="background-color: red;">${pacientNameM} ${pacientLastNameM}...........${fechaYHora} </li>`;
    }
};

const clearModal = () => {
    let hijoM = document.getElementById("clienteHijosModal");
    hijoM.delete()
};