const addNewPacient = ()=> {
    let getPacientList = document.getElementById("Pacient");
    let pacientName = document.getElementById("inputName").value;
    let pacientLastName = document.getElementById("inputLastName").value;
    let pacientVacuna = document.getElementById("inputVacuna").value;
    let pacientDosis = document.getElementById("inputDosis").value;
    let newPacient = document.createElement("div");
    newPacient.className = 'col-md-12';
    newPacient.innerHTML = `<h2>${pacientName} ${pacientLastName}</h2><p>vacuna: ${pacientVacuna}</p><p>dosis: ${pacientDosis}</p>`;
    getPacientList.appendChild(newPacient);
    console.log(Pacient)
};
const clearList = ()=> {
    let clear =document.getElementById("Pacient");
    clear.parentNode.removeChild(Pacient)
};