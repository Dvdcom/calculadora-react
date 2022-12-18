
import React, { useState, useContext, useEffect } from "react";
import { numeros , cortadores , funcionesMath } from './Arreglos';

const ingresarValor = React.createContext();
const mostrarValor = React.createContext();
const mostrarSubtotal = React.createContext();
const mostrarOperacion = React.createContext();

export function useIngresarValor() {
    return useContext(ingresarValor);
}

export function useMostrarValor() {
    return useContext(mostrarValor);
}

export function useMostrarSubtotal() {
    return useContext(mostrarSubtotal);
}

export function useMostrarOperacion() {
    return useContext(mostrarOperacion);
}

export function UserProvider(props) {

    const valorInicial = {num1:0,op:"",num2:0};
    const [valor, setValor] = useState(0);
    const [numbers, setNumbers] = useState([]);
    const [operacion, setOperacion] = useState(valorInicial);
    const [memoria, setMemoria] = useState(0);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        /* concatenar el numero  */
        let num = "";
        /* pregunto si numbers se encuentra vacio */
        if (numbers.length > 0) {
            numbers.map(element => {
                return num += element;
            })
            /* convierto la concatenacion dada por el maps en numero */
            num = Number(num)
            /* paso el valor al visor. */
            setValor(num);
        }
    }, [numbers])

    useEffect(() => {
        if (operacion !== valorInicial){
            console.log(operacion);
            darResultado();
        }
    }, [operacion])// eslint-disable-line react-hooks/exhaustive-deps

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

        console.log('se ejecuta: realizar operacion');
        /* ------- ASIGNO VALORES A LA OPERACION : -------- */
        
        var num = Number(document.getElementById('in-resultado').innerHTML);

        if(operacion.num1 === 0){
            console.log('se asigna el primer numero')
            setOperacion({...operacion, num1:num,op:arg,num2:0});
        }else{
            console.log('se asigna el segundo numero');
            setOperacion({...operacion, num1:operacion.num1,op:operacion.op,num2:num});
        }
        if (subtotal !== 0 && operacion.num2 !== 0 ){
            setOperacion({...operacion,num1:subtotal,op:"",num2:0});
            limpiarDisplay(); 
            setValor(subtotal);
        }

        limpiarDisplay();

    }

    const darResultado = () => {
        /* ------- ENTREGO EL RESULTADO REALIZANDO LA OPERACION : ------- */
        console.log('se ejecuto dar resultado');
        /* Solo cuando operacion sea activado */
            funcionesMath.forEach(element => {
                if (element.params === 1 && element.id === operacion.op){
                    let resultado = element.operar(operacion.num1)
                    setSubtotal(resultado);
                } else if ( element.params === 2 && element.id === operacion.op ){
                    let resultado = element.operar(operacion.num1,operacion.num2)
                    setSubtotal(resultado);
                }
            }); 
                
            if( operacion.op !== "="){
            setValor(operacion.op);
            }
    }

    return (
        <mostrarOperacion.Provider value={operacion}>
            <mostrarSubtotal.Provider value={subtotal}>
                <mostrarValor.Provider value={valor}>
                    <ingresarValor.Provider value={ingresoValores}>
                        {props.children}
                    </ingresarValor.Provider>
                </mostrarValor.Provider>
            </mostrarSubtotal.Provider>
        </mostrarOperacion.Provider>
    );
};

/* CONVERTIR A ENTEROS o DOUBLE */