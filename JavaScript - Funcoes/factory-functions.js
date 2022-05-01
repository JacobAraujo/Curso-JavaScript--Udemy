function createPeople(name, lastName, height, weight){
    return{
        name,
        lastName,

        // getter
        get completeName(){
            return `${this.name} ${this.lastName}`;
        },

        // setter
        set completeName(valor){
            valor = valor.split(' ');
            this.name = valor[0];
        },

        fala(assunto = 'Nada'){    
            return `${name} está falando sobre ${assunto}.`; // this.nome -> nesse caso o nome acessado é o de dentro do return (menos performático). Sem o this o nome está sendo pego dos parâmetros.
        },

        height,
        weight,

        // getter -> o get faz a função imc() se comportar como atributo, isto é, pode ser visto usando p1.imc
        get imc(){
            return (this.weight / (this.height ** 2)).toFixed(2);
        }

    };
}

let p1 = createPeople('Kevin', 'Armando', 1.83, 60);
console.log(p1.fala('passarim'));
console.log(p1.name);
console.log(p1.imc);
p1.completeName = 'jaocb alexandre';
console.log(p1.name)


