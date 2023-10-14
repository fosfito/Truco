//variables
//1 carta [boolean mazo, int valor, int nro, char palo]

const tipo=["Oro","Copa","Espada","Basto"];
const numero=[];
const mano=[];   //aca van las 6 cartas de la mano
//genero el array de numeros




//funciones
//Generar carta al azar
function generar()
    {
        let cartanum=Math.floor(Math.random()*11+1)
        let palo=tipo[Math.floor(Math.random()*4)]
        return(cartanum+" de "+palo)    
     }
   

//main
alert(generar());