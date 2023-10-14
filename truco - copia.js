
//declaracion de variables globales
const arraymano=[]  //array que contendra 6 cartas de la mano, 3 para el usuario y 3 para la maquina
    let cartaAjugar="";
    let repetida=true;  //usada para saber si una carta ya fue sacada del maso
    //creo un array de cartas
    const palo= ["Espada","Oro","Basto","Copa"]  //array de palos para usar los indices
    //              0       1       2       3
    let cartaalazar="";
    const puntosdeljuego=[0,0];     //puntos de toda la partida ([Humano,Maquina])


//declaracion de funciones
function barajar()
{
    //FORMATO DE UNA CARTA: [FLAG 1: SI FUE DADA DEL MASO, FLAG2: SI FUE PUESTA EN LA MESA,VALOR EN EL TRUCO PARA COMPARARLAS(DE 14 A 1), NUMERO DE CARTA, PALO DE LA CARTA(VALOR (0-3) QUE PEGA AL ARRAY PALO)]
    const carta =[ [true,true,14,1,0],
                [true,true,13,1,2],
                    [true,true,12,7,0],
                    [true,true,11,7,1],
                    [true,true,10,3,0],[true,true,10,3,1],[true,true,10,3,2],[true,true,10,3,3],
                    [true,true,9,2,0],[true,true,9,2,1],[true,true,9,2,2],[true,true,9,2,3],   //los 2 valen 9
                    [true,true,8,1,3],[true,true,8,1,1],    //los 1 valen 8
                    [true,true,7,12,0],[true,true,7,12,1],[true,true,7,12,2],[true,true,7,12,3],
                    [true,true,6,11,0],[true,true,6,11,1],[true,true,6,11,2],[true,true,6,11,3],
                    [true,true,5,10,0],[true,true,5,10,1],[true,true,5,10,2],[true,true,5,10,3],
                    [true,true,4,7,1],[true,true,4,7,3],
                    [true,true,3,6,0],[true,true,3,6,1],[true,true,3,6,2],[true,true,3,6,3],
                    [true,true,2,5,0],[true,true,2,5,1],[true,true,2,5,2],[true,true,2,5,3],
                    [true,true,1,4,0],[true,true,1,4,1],[true,true,1,4,2],[true,true,1,4,3] //40 cartas
    ]

     //selecciono una carta al azar
    cartaalazar=Math.floor(Math.random()*40);

    //Copio la carta generada al azar a un arraypartida (Es el que tendra esa mano)
    arraymano.push(carta[cartaalazar])
    carta[cartaalazar][0]=false;  //el elemento 0 del primer array es flag que fue usado

    //reparto 5 cartas mas verificando que no se repitan
    for (let i = 1; i < 6; i++)
        {
            repetida=true
            while(repetida!=false)
            {
                cartaalazar=Math.floor(Math.random()*40);
                if (carta[cartaalazar][0]==true)  //si no esta repetida (Comparo valor carta[ESTE,0,0,0,0]) la cargo
                {
                    arraymano.push(carta[cartaalazar])
                    carta[cartaalazar][0]=false;  //el elemento 0 del primer array es flag que fue usado
                    repetida=false;             //Despues de cargar una carta salgo al for para volver a entrar
                }

            }
        }

           //Resumen de la partida
           console.log("Al humano le toco: "+'\n'
           +arraymano[0][3]+" de "+palo[arraymano[0][4]]+'\n'
           +arraymano[1][3]+" de "+palo[arraymano[1][4]]+'\n'
           +arraymano[2][3]+" de "+palo[arraymano[2][4]]+'\n'+'\n'+'\n'
           +"A LAZARILLO le toco: "+'\n'
           +arraymano[3][3]+" de "+palo[arraymano[3][4]]+'\n'
           +arraymano[4][3]+" de "+palo[arraymano[4][4]]+'\n'
           +arraymano[5][3]+" de "+palo[arraymano[5][4]]+'\n');
 
    /* intento de cargar imagen por js en etiqueta div PREGUNTAR LUCAS
    --------------------------------------------------------------------------------------
    //document.getElementById("1").setAttribute("src", "img/3e.png")
    //document.getElementById("primera").setAttribute("src", "img/3e.png");

    // Select the image element using its ID
    //const image = document.getElementById('primera');

    // Update the image source
    //image.src = 'img/3e.png';
    --------------------------------------------------------------------------------------
    */
}


//FUNCION ENVIDO DEL USUARIO Y DE LA MAQUINA
function envido()
{
    //Array que indica que se canto para sumar los puntos
    //puntos[envido,envido,real envido, falta envido]
    const puntos= [false,false,false,false]  
    let total=0; //Acumulador para los puntos del tanto de cada usuario
    let envidohumano=0;
    let envidolazarillo=0;
    //TURNO HUMANO
    //el humano tiene las cartas arraymano[0]//arraymano[3]  [FLAG 1, FLAG2, ESCALA , NUMERO DE CARTA, PALO DE LA CARTA(VALOR (0-3) QUE PEGA AL ARRAY PALO)]

    if((arraymano[0][4]==arraymano[1][4])&&(arraymano[1][4]==arraymano[2][4]))
    {
        alert("USUARIO CANTA: Cómo lágrimas de olvido como suspiros de amor, cantaba sus grandes penas un pájaro en una FLOR.");
        puntos[0]=true;
        puntosdeljuego[0]+=3 //suma tres punto el usuario por flor

    }
    else
    {
        if(arraymano[0][4]==arraymano[1][4])            //palo0=palo1
        {
            envidohumano=contarpuntos(arraymano[0][3],arraymano[1][3]);
        }
        if(arraymano[0][4]==arraymano[2][4])            //palo0=palo2
        {
            envidohumano=contarpuntos(arraymano[0][3],arraymano[2][3]);
        }
        if(arraymano[2][4]==arraymano[1][4])            //palo1=palo2
        {
            envidohumano=contarpuntos(arraymano[2][3],arraymano[1][3]);
        }
    
    //lazarillo mira cuantos puntos de envido tiene
    if(arraymano[3][4]==arraymano[4][4])            //palo3=palo4
        {
            envidolazarillo=contarpuntos(arraymano[3][3],arraymano[4][3]);
        }
    if(arraymano[3][4]==arraymano[5][4])            //palo3=palo5
        {
            envidolazarillo=contarpuntos(arraymano[3][3],arraymano[5][3]);
        }
    if(arraymano[4][4]==arraymano[5][4])            //palo4=palo5
        {
            envidolazarillo=contarpuntos(arraymano[4][3],arraymano[5][3]);
        }

        //despues que lazarillo y humano contaron los puntos el humano pregunta por envido
        if(confirm("Te tocaron "+envidohumano+" puntos"+'\n'+"Queres cantarle ENVIDO?"))
    { 
        puntos[0]=true;  //MARCO QUE SE CANTO ENVIDO

        //LAZARILLO MIRA SI TIENE FLOR
        if((arraymano[3][4]==arraymano[4][4])&&(arraymano[4][4]==arraymano[5][4]))
        {
            alert("JUGADOR DICE: Envido!"+'\n'+
                  "LAZARILLO CANTA SOCARRON: Viniendo de chascomus en una lancha a vapor casi me caigo al agua por agarrar esta flor");
            puntos[0]=true;
            puntosdeljuego[1]+=3 //suma tres puntos lazarillo por flor
        }
        else
        {
        //LAZARILLO EVALUA SI ACEPTA EL ENVIDO
        if (envidolazarillo>20) 
            {
                puntos[0]=true;
                alert("JUGADOR DICE: Envido carajo!"+'\n'+
                "LAZARILLO RESPONDE: Quiero a tu envido!")
                evaluarenvido(envidohumano, envidolazarillo)
            }
            else
            {   
                alert("JUGADOR DICE: Envido !"+'\n'+
                "LAZARILLO RESPONDE: El que huye sirve para otra batalla, NO QUIERO");
                puntosdeljuego[0]+=1 //suma un punto el usuario
                
            }
        }
        
     }

    //TURNO ENVIDO PC (Lazarillo)
    //Lazarillo tiene las cartas arraymano[3]//arraymano[5]  [FLAG 1, FLAG2, ESCALA , NUMERO DE CARTA, PALO DE LA CARTA(VALOR (0-3) QUE PEGA AL ARRAY PALO)]
    if(puntos[0]==false)
    { //si el usuario no canto envido, lazarillo revisa si tiene puntos
        if((arraymano[3][4]==arraymano[4][4])&&(arraymano[4][4]==arraymano[5][4]))
        {
            alert("USUARIO CANTA: Cómo lágrimas de olvido como suspiros de amor, cantaba sus grandes penas un pájaro en una FLOR.");
            puntos[0]=true;
            puntosdeljuego[1]+=3 //suma tres puntos lazarillo por flor
        }
        else
        {
            if (envidolazarillo>=20) 
            {
                puntos[0]=true;  //marco que se canto envido
                if(confirm("LAZARILLO DICE: Cuando vine de La Isla traia un lazo retorcido; con él enlacé dos cartas y con ellas digo ENVIDO."))
                {
                    evaluarenvido(envidohumano, envidolazarillo)

                }
                else
                {
                    puntosdeljuego[1]+=1 //suma 1 puntos Lazarillo por envido no querido
                }
            }
            else
            {
                //CAPACIDAD DE MENTIR Y SALIR A ROBAR PUNTOS DE LAZARILLO AL 33%
                if((Math.floor(Math.random()*3))<1)
                {
                    puntos[0]=true;  //marco que se canto envido
                    if(confirm("LAZARILLO DICE: Cuando vine de La Isla traia un lazo retorcido; con él enlacé dos cartas y con ellas digo ENVIDO."))
                    {
                        evaluarenvido(envidohumano, envidolazarillo)
                        if (puntosdeljuego[1]==2)                   //Lazarillo se burla del usuario despues de mentirle
                        {
                            alert("LAZARILLO SONRIE: Es muy facil ganarte, mintiendo sin tantos")
                        }
                        if (puntosdeljuego[0]==2)                   //Lazarillo reconoce que miente y pierde
                        {
                            alert("Me agarraste!, la mentira tiene patas cortas")
                        }
                    }
                    else
                    {
                        puntosdeljuego[1]+=1 //suma 1 puntos Lazarillo por envido no querido
                        alert("Es muy facil mentirte sin puntos")
                    }
                }

            }

        }
    }
    }
    alert("Humano: "+puntosdeljuego[0]+" // Lazarillo: "+puntosdeljuego[1])
 
}

//funcion truco maquina y pc
function truco()
    {
        let trucocantado=[false,false,false]        //variable que uso para saber si se canto truco, retruco, vale 4 y sacar los puntos
    //Juego de la carta humano
    
    cartaAjugar=prompt("Ingrese la opcion que desea jugar: "+'\n'
    +"1 => TIRAR "+arraymano[0][3]+" de "+palo[arraymano[0][4]]+'\n'
    +"2 => TIRAR "+arraymano[1][3]+" de "+palo[arraymano[1][4]]+'\n'
    +"3 => TIRAR "+arraymano[2][3]+" de "+palo[arraymano[2][4]]+'\n'
    +"4 => CANTAR TRUCO ")
    
    }

function mostrarmenu()
{

}

function contarpuntos(valor1,valor2)    // contar puntos del envido
    {
            let rta=20;
            if(valor1<8)
            {
                rta+=valor1;
            }
            if(valor2<8)
            {
                rta+=valor2;
            }
            return rta
    }

function evaluarenvido(envidoH, envidoL)
{
    if(envidoH>=envidoL)
                {
                    alert("Los "+envidoH+" puntos del humano son mejores que los "+envidoL+" puntos de lazarillo")
                    puntosdeljuego[0]+=2;
                }
                else
                {
                    alert("Los "+envidoL+" puntos de Lazarillo le ganan a los "+envidoH+" puntos del jugador")
                    puntosdeljuego[1]+=2;
                }

}

        
    
    


//main del truco
barajar();
envido();          //la funcion envido actualiza los puntos del juego
truco();            