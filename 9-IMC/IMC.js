/*
    Dada uma lista de pacientes, descubra o IMC
    de cada paciente e imprima "Paciente X possui o IMC de: Y"
    Onde X é o nome do paciente e Y é o IMC
    Crie uma função para fazer o cálculo de IMC
*/

const patients = [
    {
        name: 'Diego Fernandes',
        age: 31,
        weight: 80,
        height: 188
    },
    {
        name: 'Mayk Brito',
        age: 41,
        weight: 89,
        height: 186
    },
    {
        name: 'Rodrigo gonçalves',
        age: 34,
        weight: 83,
        height: 178
    }
]

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
    return `
        Paciente ${patient.name} possui o IMC de 
        ${IMC(patient.weight, patient.height)}
    `
}

for (let patient of patients) {
    let IMCmessage = printPatientIMC(patient)
    alert(IMCmessage)
}