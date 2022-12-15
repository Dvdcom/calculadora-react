
import React, { useState, useContext, useEffect } from "react";
import { numeros } from './Arreglos';
import { cortadores } from './Arreglos'

const ingresarValor = React.createContext();
const mostrarValor = React.createContext();

export function useIngresarValor() {
    return useContext(ingresarValor);
}

export function useMostrarValor() {
    return useContext(mostrarValor);
}

export function UserProvider(props) {

    const [valor, setValor] = useState(0);
    const [numbers, setNumbers] = useState([]);
    /* const [primerNumero, setPrimerNumero] = useState(0); */
    /* const [segundoNumero, setSegundoNumero] = useState(0); */
    /* const [memoria, setMemoria] = useState(0) */

    useEffect(() => {
        /* concatenar el numero  */
        let num = "";
        if (numbers.length > 0) {
            numbers.map(element => {
                return num += element;
            })
            /* setear valor */
            setValor(num);
        }

    }, [numbers])

    const ingresoValores = (e) => {
        /* logica de ingreso */

        let ingreso = e.target.value;

        /* concatenar si son numeros y puntos */
        if (numeros.includes(ingreso)) {
            setNumbers(numbers => [...numbers, ingreso]);
        }

        switch (cortadores.includes(ingreso)) {
            case ingreso === "AC":
                setValor(0);
                break;
            case ingreso === "MR":
                console.log('El número permanece en memoria');
                break;
            case ingreso === "=":
                console.log('Dar el resultado');
                break;
            default:
                console.log('otra operacion');
        }

    }

    return (
        <mostrarValor.Provider value={valor}>
            <ingresarValor.Provider value={ingresoValores}>
                {props.children}
            </ingresarValor.Provider>
        </mostrarValor.Provider>
    );
};
