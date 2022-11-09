// Codigo TypeScript

// function sumar(a, b) {
//     return a + b;
// }

// const resultado = sumar('Rodrigo', ' Placeres');

// console.log(resultado) // Rodrigo Placeres


//------------------------------------------------------//

// function sumar(a: number, b: number) {
//     return a + b;
// }

// const resultado = sumar(5, 7);

// console.log(resultado) // 12

//------------------------------------------------------//
// function sumar(a: number, b: number) {
//     return (a + b).toString();
// }

// const resultado = sumar(5, 7);

// console.log(resultado) // 12 (string)

//------------------------------------------------------//

function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

const multiplicar = (numero: number, otroNumero?: number, base: number = 2): number => {
    return numero * base;
}

// const resultado = sumar(10, 20);
// const resultado = multiplicar(5, 0, 10);
// console.log(resultado); // 30


interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

// Se pone void si no retorna nada
function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;

}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida:', this.pv);
    }
}

curar(nuevoPersonaje, 20)

nuevoPersonaje.mostrarHp();