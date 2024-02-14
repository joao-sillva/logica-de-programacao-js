/* 
    Crie uma lista de pacientes Cada paciente dentro da lista,
    deverá conter: nome, idade, peso e altura.
    Escreva uma lista contendo o nome dos pacientes,
    suas idades, pesos e alturas
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

let patientsNames = []

for (let patient of patients) {    
    patientsNames.push(`
        nome: ${patient.name}
        idade: ${patient.age}
        peso: ${patient.weight}
        altura: ${patient.height}
    `)
}

alert(patientsNames)