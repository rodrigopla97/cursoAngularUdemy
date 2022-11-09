// Codigo TypeScript

// arrays - arreglos

// let habilidades: (boolean | string | number)[] = ['Bash', 'Counter', 'Healing', 100];
// habilidades.push(true)

let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}
const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);