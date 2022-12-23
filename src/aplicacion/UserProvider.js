
import React, { useState, useContext, useEffect } from "react";
import { numeros, cortadores, funcionesMath } from './Arreglos';

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
/* agregar subtotal a operaciones ! */
    const valorInicial = { num1: 0, op: "", num2: 0 };
    const [valor, setValor] = useState("");
    const [operacion, setOperacion] = useState(valorInicial);
    const [memoria, setMemoria] = useState(0);
    const [subtotal, setSubtotal] = useState(0);

    const [completo, setCompleto] = useState({estado:false,conteo:0});

    useEffect(() => {
        if (operacion !== valorInicial) {
            realizarOperacion();
        }
    }, [operacion])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        console.log('el subtotal tiene valor de : ' + subtotal);
        if( subtotal !== 0) {
            darResultado('none');
        }
    },[subtotal]);// eslint-disable-line react-hooks/exhaustive-deps

    const ingresoValores = (e) => {
        /* logica de ingreso */
        let ingreso = e.target.value;
        let valorActual = document.getElementById('in-resultado').innerHTML;
        let valorConcatenado = 0;
        
        if (numeros.includes(ingreso)) {


            valorConcatenado += Number(valorActual + ingreso);
            setValor(valorConcatenado);
            
            /* realizo asignacion de numero en el hook operacion */

            if (completo.conteo > 2){
                /*asigno el valor subtotal : ' + subtotal);*/
                setOperacion({ ...operacion, num1: subtotal, op: operacion.op, num2: valorConcatenado });
            }else{

                if (completo.estado === false) {
                    /* asigno el primer valor a operacion' */
                    setOperacion({ ...operacion, num1: valorConcatenado, op: operacion.op, num2: operacion.num2 });
                }else{
                    /* asigno el segundo valor a operacion' */
                    setOperacion({ ...operacion, num1: operacion.num1, op: operacion.op, num2: valorConcatenado });
                }
            }

        }

        if (cortadores.includes(ingreso)) {
            /* levanto banderin cada que ingresa un cortador */
            setCompleto({...completo,estado:true,conteo:completo.conteo + 1});

            switch (ingreso) {
                case "AC":
                    limpiarDisplay();
                    break;
                case "MR":
                    guardarEnMemoria();
                    break;
                case "=":
                    darResultado(ingreso);
                    break;
                case "e":
                    setOperacion({ ...operacion, num1: operacion.num1, op: ingreso, num2: operacion.num2 });
                break;
                default:
                    if (operacion.num2 === 0 ) {
                        setOperacion({ ...operacion, num1: operacion.num1, op: ingreso, num2: 0 });
                    }else if (operacion.num1 !== 0 && operacion.num2 !== 0){
                        setOperacion({ ...operacion, num1: subtotal, op: ingreso, num2: 0 });
                    }
                    if ( operacion.num2 === 0 && subtotal !== 0){
                        setOperacion({ ...operacion, num1: subtotal, op: ingreso, num2: 0 });
                    }
                    setValor("");
            }
        }

    }

    const limpiarDisplay = () => {
        /* seteo los valores  */
        setValor("");
        setOperacion(valorInicial);
        setSubtotal(0);
        setCompleto({...completo,estado:false,conteo:0})
    }

    const guardarEnMemoria = () => {
        if (memoria === '0') {
            setMemoria(Number(document.getElementById("in-resultado").innerHTML));
        } else {
            setValor(memoria);
            setMemoria('0')
        }
    }

    const realizarOperacion = () => {
        /* ------- ENTREGO EL RESULTADO DEL SUBTOTAL REALIZANDO LA OPERACION : ------- */
        if(operacion.op !== ""){
            /* Se ejecuta realizar operacion */
            console.log('se ejecuta realizar operacion ' + operacion.op)
            funcionesMath.forEach(element => {
                if (element.params === 1 && element.id === operacion.op) {
                    let resultado = Number(element.operar(operacion.num1));
                    console.log('el resultado es : '+ resultado)
                    setSubtotal(resultado);
                    setValor(resultado);
                } else if (element.params === 2 && element.id === operacion.op && operacion.num2 > 0) {
                    let resultado = Number(element.operar(operacion.num1, operacion.num2));
                    setSubtotal(resultado);
                } else if (element.params === 0 && element.id === operacion.op){
                    let resultado = Number(element.operar());
                    console.log('el resultado es : '+ resultado)
                    setSubtotal(resultado);
                    setValor(resultado);
                }
            });
        }

    }

    const darResultado = (arg) => {

        if(arg !== 'none'){
            setValor(subtotal);
            /* 'entrego el valor total en display' */
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
