function Caracol(nombre, mascota) {
    this.nombre = nombre;
    this.puntos = 0;
    this.velocidad = 10;
    this.distancia = 0;
    this.sprint;
    this.mascota = mascota;
    this.sprinter = function () {
        var random = Math.floor(Math.random() * this.velocidad) + 1;
        this.distancia += random;
        this.sprint = random;
    };
}

function Mascota(nombre, eslogan) {
    this.nombre = nombre;
    this.eslogan = eslogan;
}

var M1 = new Mascota("Tortuga", "Cowabunga!");
var M2 = new Mascota("Pirata", "Yahr!");
var M3 = new Mascota("Chicho", "3Puntos!");
var M4 = new Mascota("Pokemon", "Catch Em!");
var C1 = new Caracol("Julio", M1);
var C2 = new Caracol("Carlos", M2);
var C3 = new Caracol("Pepe", M3);
var C4 = new Caracol("Manuel", M4);
var Caracoles = [C1, C2, C3, C4];
function mostraArray() {
    var info = document.getElementById("pos1");
    info.innerHTML = "1r: " + Caracoles[0].nombre + " - Puntos: " + Caracoles[0].puntos + " - Velocidad: " + Caracoles[0].velocidad + " - " + Caracoles[0].mascota.nombre + " - " + Caracoles[0].mascota.eslogan;
    var info = document.getElementById("pos2");
    info.innerHTML = "2n: " + Caracoles[1].nombre + " - Puntos: " + Caracoles[1].puntos + " - Velocidad: " + Caracoles[1].velocidad + " - " + Caracoles[1].mascota.nombre + " - " + Caracoles[1].mascota.eslogan;
    var info = document.getElementById("pos3");
    info.innerHTML = "3r: " + Caracoles[2].nombre + " - Puntos: " + Caracoles[2].puntos + " - Velocidad: " + Caracoles[2].velocidad + " - " + Caracoles[2].mascota.nombre + " - " + Caracoles[2].mascota.eslogan;
    var info = document.getElementById("pos4");
    info.innerHTML = "4r: " + Caracoles[3].nombre + " - Puntos: " + Caracoles[3].puntos + " - Velocidad: " + Caracoles[3].velocidad + " - " + Caracoles[3].mascota.nombre + " - " + Caracoles[3].mascota.eslogan;
}
var ListSprint = new Array();
var carrera = 1;
function calcularDistancia() {
    if (cont < 1) {
        for (i = 0; i < Caracoles.length; i++) {
            Caracoles[i].sprinter();
        }

        Caracoles.sort(function (a, b) {
            return b.distancia - a.distancia;
        });
        ListSprint[carrera] = [];
        for (i = 0; i < Caracoles.length; i++) {
            ListSprint[carrera][i] = [Caracoles[i].nombre, Caracoles[i].distancia];
        }
        console.log(ListSprint);
        var info = document.getElementById("carrera");
        info.innerHTML = "SPRINT " + carrera;
        var info = document.getElementById("pos5");
        info.innerHTML = "1r: " + Caracoles[0].nombre + " - Total: " + Caracoles[0].distancia + " - Sprint: " + Caracoles[0].sprint + " - " + Caracoles[0].mascota.nombre + " - " + Caracoles[0].mascota.eslogan;
        ;
        var info = document.getElementById("pos6");
        info.innerHTML = "2n: " + Caracoles[1].nombre + " - Total: " + Caracoles[1].distancia + " - Sprint: " + Caracoles[1].sprint + " - " + Caracoles[1].mascota.nombre + " - " + Caracoles[1].mascota.eslogan;
        ;
        var info = document.getElementById("pos7");
        info.innerHTML = "3r: " + Caracoles[2].nombre + " - Total: " + Caracoles[2].distancia + " - Sprint: " + Caracoles[2].sprint + " - " + Caracoles[2].mascota.nombre + " - " + Caracoles[2].mascota.eslogan;
        ;
        var info = document.getElementById("pos8");
        info.innerHTML = "4r: " + Caracoles[3].nombre + " - Total: " + Caracoles[3].distancia + " - Sprint: " + Caracoles[3].sprint + " - " + Caracoles[3].mascota.nombre + " - " + Caracoles[3].mascota.eslogan;
        ;
        showInfoCarrera();
        var info = document.getElementById("pos9");
        info.innerHTML += "";
        showInfoCarrera();
        carrera++;
    } else {
        alert("No puedes iniciar otro sprint cuando has finalizado la carrera - Crea una nueva carrera");
    }
}
function showInfoCarrera() {
    var info = document.getElementById("pos9");
    info.innerHTML = "";
    for (i = 1; i < ListSprint.length; i++) {
        var info = document.getElementById("pos9");
        info.innerHTML += "<div>" + 'SPRINT ' + i + "</div>";
        var m = 0;
        var num = 1;
        while (m < Caracoles.length) {
            var info = document.getElementById("pos9");
            info.innerHTML += "<div>" + num + "r: " + ListSprint[i][m][0] + " - Total " + ListSprint[i][m][1] + "</div>";
            m++;
            num++;
        }
        info.innerHTML += "</br>";
    }
}

function showBorraCarrera() {
    var info = document.getElementById("listeliminados");
    info.innerHTML = "";
    for (i = 0; i < BorraArray.length; i++) {
        var info = document.getElementById("listeliminados");
        info.innerHTML += "<div>" + 'SPRINT ' + (i+1) + "</div>";
        var m = 0;
        var num = 1;
        while (m < Caracoles.length) {
            var info = document.getElementById("listeliminados");
            info.innerHTML += "<div>" + num + "r: " + BorraArray[i][m][0] + " - Total " + BorraArray[i][m][1] + "</div>";
            m++;
            num++;
        }
        info.innerHTML += "</br>";
    }
}

var BorraArray = new Array();
function borrarSprint() {
    if (cont < 1) {
        var numero;
        numero = prompt('BORRA UN SPRINT:');
        //    for (i = 0; i < Caracoles.length; i++) {
        BorraArray.push(ListSprint[numero]);
        // }
        
        // Ya funciona.
        
        console.log(BorraArray);
        showBorraCarrera();
        Caracoles.sort(function (a, b) {
            return b.distancia - a.distancia;
        });
        //  Eliminamos del array el sprint elegido.
        // ListSprint.splice(numero, 1);
        //   carrera--;
//       showInfoCarrera();
//       //Comprobamos que le informacion del array elegido se guarda bien en este array.
        //       console.log(BorraArray);
//        //Comprobamos que la distancia se reste correctamente.
//        console.log(Caracoles);
//        //Comprobamos si se borra el sprint elegido.
//        console.log(ListSprint);
    } else {
        alert("No puedes borrar un sprint cuando has finalizado la carrera - Crea una nueva carrera");
    }
}

var TotalArray = new Array();
var cont = 0;
function finalizar() {
    //Creo este contador para que solo pueda finalizar una vez la carrera.
    if (cont < 1) {
        Caracoles.sort(function (a, b) {
            return b.distancia - a.distancia;
        });
        Caracoles[0].puntos += 3;
        Caracoles[0].velocidad += 3;
        Caracoles[1].puntos += 2;
        Caracoles[1].velocidad += 2;
        Caracoles[2].puntos += 1;
        Caracoles[2].velocidad += 1;
        Caracoles[3].puntos += (-1);
        Caracoles[3].velocidad += (-1);
        Caracoles.sort(function (a, b) {
            return b.puntos - a.puntos;
        });
        var info = document.getElementById("pos1");
        info.innerHTML = "1r: " + Caracoles[0].nombre + " - Puntos: " + Caracoles[0].puntos + " - Velocidad: " + Caracoles[0].velocidad + " - " + Caracoles[0].mascota.nombre + " - " + Caracoles[0].mascota.eslogan;
        ;
        var info = document.getElementById("pos2");
        info.innerHTML = "2n: " + Caracoles[1].nombre + " - Puntos: " + Caracoles[1].puntos + " - Velocidad: " + Caracoles[1].velocidad + " - " + Caracoles[1].mascota.nombre + " - " + Caracoles[1].mascota.eslogan;
        var info = document.getElementById("pos3");
        info.innerHTML = "3r: " + Caracoles[2].nombre + " - Puntos: " + Caracoles[2].puntos + " - Velocidad: " + Caracoles[2].velocidad + " - " + Caracoles[2].mascota.nombre + " - " + Caracoles[2].mascota.eslogan;
        ;
        var info = document.getElementById("pos4");
        info.innerHTML = "4r: " + Caracoles[3].nombre + " - Puntos: " + Caracoles[3].puntos + " - Velocidad: " + Caracoles[3].velocidad + " - " + Caracoles[3].mascota.nombre + " - " + Caracoles[3].mascota.eslogan;
        ;
        cont++;
    } else {
        alert("Ya has finalizado la carrera - Crea nueva carrera");
    }
}

function newCarrera() {
    ListSprint.length = 0;
    cont = 0;
    carrera = 1;
    Caracoles[0].distancia = 0;
    Caracoles[1].distancia = 0;
    Caracoles[2].distancia = 0;
    Caracoles[3].distancia = 0;
    var info = document.getElementById("carrera");
    info.innerHTML = "SPRINT -";
    var info = document.getElementById("pos5");
    info.innerHTML = "1r:";
    var info = document.getElementById("pos6");
    info.innerHTML = "2n:";
    var info = document.getElementById("pos7");
    info.innerHTML = "3r:";
    var info = document.getElementById("pos8");
    info.innerHTML = "4r:";
    var info = document.getElementById("pos9");
    info.innerHTML = "";
}

function revertir() {

    Caracoles.sort(function (a, b) {
        return a.puntos - b.puntos;
    });
    var info = document.getElementById("pos1");
    info.innerHTML = "1r: " + Caracoles[0].nombre + " - Puntos: " + Caracoles[0].puntos + " - Velocidad: " + Caracoles[0].velocidad + " - " + Caracoles[0].mascota.nombre + " - " + Caracoles[0].mascota.eslogan;
    ;
    var info = document.getElementById("pos2");
    info.innerHTML = "2n: " + Caracoles[1].nombre + " - Puntos: " + Caracoles[1].puntos + " - Velocidad: " + Caracoles[1].velocidad + " - " + Caracoles[1].mascota.nombre + " - " + Caracoles[1].mascota.eslogan;
    var info = document.getElementById("pos3");
    info.innerHTML = "3r: " + Caracoles[2].nombre + " - Puntos: " + Caracoles[2].puntos + " - Velocidad: " + Caracoles[2].velocidad + " - " + Caracoles[2].mascota.nombre + " - " + Caracoles[2].mascota.eslogan;
    ;
    var info = document.getElementById("pos4");
    info.innerHTML = "4r: " + Caracoles[3].nombre + " - Puntos: " + Caracoles[3].puntos + " - Velocidad: " + Caracoles[3].velocidad + " - " + Caracoles[3].mascota.nombre + " - " + Caracoles[3].mascota.eslogan;
    ;
}

function eliminar() {
//Eliminamos del array el sprint elegido.

    var numero;
    numero = prompt('BORRA UN SPRINT:');
    
    ListSprint.splice(numero, 1);
    carrera--;
    
    console.log(ListSprint);
}