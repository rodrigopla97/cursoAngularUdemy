// Codigo TypeScript

interface SuperHeroe {
    nombre: string;
    edad: number;
    // direccion: any;
    // ------------------
    // direccion: {
    //     calle: string;
    //     pais: string;
    //     ciudad: string;
    // },
    direccion: Direccion;
    mostrarDireccion: () => void;
}

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Fake St 123',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);