export const caracteres = ["=","(",")","+/-","X²","²√","ⁿ√","sin","cos","tg","X³","³√","Xⁿ","1","2","3","/","%","In","4","5","6","*","log","e","7","8","9","-","AC",".","0","ᴨ","+","MR"];
export const caracteresSimples = ["=","+","-","/","*","1","2","3","²√","4","5","6","AC","7","8","9",".","0","%"];
export const numeros = ["0","1","2","3","4","5","6","7","8","9",".","+/-"];
export const cortadores = ["=","X²","²√","ⁿ√","sin","cos","tg","X³","³√","Xⁿ","/","%","In","*","log","e","-","AC","ᴨ","+","MR"];
export const funcionesMath = [
    {
        tipo: 'suma',
        id: '+',
        operar: (num1, num2) => num1 + num2
    },
    {
        tipo: 'resta',
        id: '-',
        operar: (num1, num2) => num1 - num2
    },
    {
        tipo: 'multiplicar',
        id: '*',
        operar: (num1, num2) => num1 * num2
    },
    {
        tipo: 'dvidir',
        id: '/',
        operar: (num1, num2) => num1 / num2
    },
    {
        tipo: 'seno',
        id: 'sin',
        operar: (num1) => Math.asin(num1)
    },
    {
        tipo: 'coseno',
        id: 'cos',
        operar: (num1) => Math.acos(num1)
    },
    {
        tipo: 'tangente',
        id: 'tg',
        operar: (num1) => Math.atan(num1)
    },
    {
        tipo: 'logartimo',
        id: 'log',
        operar: (num1) => Math.log(num1)
    },
    {
        tipo: 'raiz_2',
        id: '²√',
        operar: (num1) => Math.sqrt(num1)
    },
    {
        tipo: 'raiz_3',
        id: '³√',
        operar: (num1) => Math.cbrt(num1)
    },
    {
        tipo: 'raiz_n',
        id: 'ⁿ√',
        /*falta funcion javascript*/
        operar: (num1, num2) => num1 + num2
    },
    {
        tipo: 'exponente_2',
        id: 'X²',
        operar: (num1) => Math.pow(num1, 2)
    },
    {
        tipo: 'exponente_3',
        id: 'X³',
        operar: (num1) => Math.pow(num1, 3)
    },
    {
        tipo: 'exponente_n',
        id: 'Xⁿ',
        operar: (num1, num2) => Math.pow(num1, num2)
    },
    {
        tipo: 'e',
        id: 'e',
        operar: () => Math.E
    },
    {
        tipo: 'logaritmo_neperiano',
        id: 'Ln',
        operar: (num1) => Math.pow(-10, 7) * Math.log(num1 / Math.pow(-10, 7))
    },
    {
        tipo: 'Porcentaje',
        id: '%',
        /*falta funcion javascript*/
        operar: (num1, num2) => num1 + num2
    },
    {
        tipo: 'X',
        id: 'X!',
        /*falta funcion javascript*/
        operar: (num1, num2) => num1 + num2
    }
];