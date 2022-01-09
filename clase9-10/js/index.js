
const pacientes = []
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
        `
    <td>${pacientName} ${pacientLastName}</td>
    <td>${pacientVacuna}</td>
    <td>${pacientDosis}°</td>`;
    getPacientList.appendChild(newPacient);
    if (pacientEdad < 18) {
        alert("Solo para mayores de edad")
        newPacient.innerHTML =
            `
    <td>${pacientName} ${pacientLastName}</td>
    <td>${pacientVacuna}</td>
    <td style="background-color: red"><b>NO SE PUEDE VACUNAR</b></td>
    `;
    }
    else if (pacientTemp >= 37.2) {
        alert("no te podes vacunar con fiebre, porfavor hacete ver")
        newPacient.innerHTML =
            `
        <td>${pacientName} ${pacientLastName}</td>
        <td>${pacientVacuna}</td>
        <td style="background-color: red"><b>NO SE PUEDE VACUNAR</b></td>`;
    }
    function pacientData(name, lastname, vacuna, dosis) {
        this.name = pacientName;
        this.lastname = pacientLastName;
        this.vacuna = pacientVacuna;
        this.dosis = pacientDosis;
    }
    pacientes.push(new pacientData({ nombre: pacientName, apellido: pacientLastName, vacuna: pacientVacuna, dosis: pacientDosis }))
    actualizoStorange();
};
let actualizoStorange = ()=>{
    let pacientDataJson = JSON.stringify(pacientes);
    localStorage.setItem("Pacientes", pacientDataJson);
}
const clearList = () => {
    let hijo = document.getElementById("clienteHijos");
    hijo.remove()
};

//EVENTOS JQUERY 
$("img").on("mouseenter mouseleave", function(event) {
    $("img").fadeToggle("slow");
})

$("#clear").click(function(event) {
    alert("Borraste un paciente");
})

$("#myBtn").click(function(event) {
    alert("Ingresaste un paciente");
})





