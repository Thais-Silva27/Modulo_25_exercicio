const alunos1 = ['Ian', 'Davi', 'Eros', 'Juliana', 'Fernanda', 'Patricia', 'Gustavo', 'Julia', 'Paula', 'Wagner'];
const notas1 = [3, 5, 8, 6, 7, 10, 8, 4, 10, 10];

const alunos2 = alunos1.map(function(nome, nota) {
    if((notas1[nota] >= 6)){
        return {
            nome: nome,
            nota: notas1[nota]
        };
    }
    
});

console.log(alunos2);


