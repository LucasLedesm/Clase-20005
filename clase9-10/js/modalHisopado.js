const addNewPacientModalHisopado = () => {
    let getPacientListMH = document.getElementById("PacientMHisopado");
    let pacientNameMH = document.getElementById("inputNameHisopado").value;
    let pacientLastNameMH = document.getElementById("inputLastNameHisopado").value;
    let newPacientMH = document.createElement("div");

    newPacientMH.id = 'clienteHijosModalH';
    newPacientMH.innerHTML =
        `<li style="background-color: rgb(201, 241, 178);">${pacientNameMH} ${pacientLastNameMH}...........${fechaYHora}</li>`;
    getPacientListMH.appendChild(newPacientMH);
};

const clearModalH = () => {
    let hijoMH = document.getElementById("clienteHijosModalH");
    hijoMH.delete()
};


let hoy = new Date();
let fecha = hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear();
let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
let fechaYHora = fecha + ' ' + hora;
