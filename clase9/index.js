const addNewPacient = () => {
    let getPacientList = document.getElementById("Pacient");
    let pacientName = document.getElementById("inputName").value;
    let pacientLastName = document.getElementById("inputLastName").value;
    let pacientVacuna = document.getElementById("inputVacuna").value;
    let pacientDosis = document.getElementById("inputDosis").value;
    let pacientEdad = document.getElementById("inputEdad").value;
    let pacientTemp = document.getElementById("inputTemp").value;
    let newPacient = document.createElement("tr");
    
    newPacient.id = 'clienteHijos';
    newPacient.innerHTML =
        `<th scope="row" > 1</th>
    <td>${pacientName} ${pacientLastName}</td>
    <td>${pacientVacuna}</td>
    <td>${pacientDosis}°</td>`;
    getPacientList.appendChild(newPacient);

    if (pacientEdad < 18) {
        alert("Solo para mayores de edad")
        newPacient.innerHTML =
            `<th scope="row" >1</th>
    <td style = background-color:"red">${pacientName} ${pacientLastName}</td>
    <td>${pacientVacuna}</td>
    <td>${pacientDosis}°</td>`;
    }
   else if (pacientTemp >= 37.2) {
        alert("no te podes vacunar con fiebre, porfavor hacete ver")
        newPacient.innerHTML =
            `<th scope="row" >1</th>
        <td style = background-color:"red">${pacientName} ${pacientLastName}</td>
        <td>${pacientVacuna}</td>
        <td>${pacientDosis}°</td>`;
    }
    console.log(Pacient)
};
const clearList = () => {
    let hijo = document.getElementById("clienteHijos");
    hijo.remove()
    Pacient.pop();
};
console.log(document.getElementById("formulario").value);