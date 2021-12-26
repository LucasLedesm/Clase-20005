const addNewPacientHisopado = () => {
    let getPacientListH = document.getElementById("PacientHisopado");
    let pacientNameH = document.getElementById("inputNameHisopado").value;
    let pacientLastNameH = document.getElementById("inputLastNameHisopado").value;
    let sintoma1 = document.getElementById("inputSintomas1").value;
    let sintoma2 = document.getElementById("inputSintomas2").value;
    let newPacientHisopado = document.createElement("tr");

    newPacientHisopado.id = 'clienteHijosH';
    newPacientHisopado.innerHTML =
    `<td>${pacientNameH} ${pacientLastNameH}</td>
     <th scope="col"></th>
     <td>${sintoma1}, ${sintoma2}</td>`;
    getPacientListH.appendChild(newPacientHisopado);

};
const clearListHisopado = () => {
    let hijoH = document.getElementById("clienteHijosH");
    hijoH.remove()
};