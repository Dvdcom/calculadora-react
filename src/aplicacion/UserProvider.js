
import React, { useState, useContext, useEffect } from "react";
import { numeros } from './Arreglos';
import { cortadores } from './Arreglos';
import { funcionesMath } from './Arreglos';

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
    const [operacion, setOperacion] = useState({num1:0,op:"",num2:0});
    /* const [primerNumero, setPrimerNumero] = useState(0); */
    /* const [segundoNumero, setSegundoNumero] = useState(0); */
    const [memoria, setMemoria] = useState(0);

    useEffect(() => {
        /* concatenar el numero  */
        let num = "";
        /* problema con este condicional */
        if (numbers.length > 0) {
            numbers.map(element => {
                return num += element;
            })
            /* setear valor */
            num = Number(num)
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

        if (cortadores.includes(ingreso)){
        switch (ingreso) {
                case "AC":
                    limpiarDisplay();
                    break;
                case "MR":
                    guardarEnMemoria();
                    break;
                default:
                    realizarOperacion(ingreso);
            }
        }

    }

    const limpiarDisplay = () => {
        setNumbers([]);
        setValor(0);
    }

    const guardarEnMemoria = () => {
        if (memoria === '0') {
            setMemoria(Number(document.getElementById("in-resultado").innerHTML));
        } else {
            setValor(memoria);
            setMemoria('0')
        }
    }   
    
    const realizarOperacion = (arg) => {
        if (arg === "=") {
            var mun = Number(document.getElementById('in-resultado').innerHTML)
            setOperacion({num1:operacion.num1,op:operacion.op,num2:mun})
            
            let resultado;
            funcionesMath.forEach(element => {
                if ( element.id === operacion.op ){
                    resultado = element.operar(operacion.num1,mun);
                }
            });

            limpiarDisplay();
            setValor(resultado);

        }else{
            /* asignar y cortar */
            var num = Number(document.getElementById('in-resultado').innerHTML);
            setOperacion({num1:num,op:arg,num2:0})
            limpiarDisplay();
            setValor(arg);
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

/* CONVERTIR A ENTEROS o DOUBLE */