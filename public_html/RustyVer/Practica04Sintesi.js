sprintCaracoles=[];
datosEliminado = [];
Caracoles = [
    {
        nombre:"Speed Cargol",
        total:0,
        velocitat:0,
        puntos:0,
        velocitatMaxSprint:0
    },
    {
        nombre:"Cargolet",
        total:0,
        velocitat:0,
        puntos:0,
        velocitatMaxSprint:0
    },
    {
        nombre:"Slow Cargol",
        total:0,
        velocitat:0,
        puntos:0,
        velocitatMaxSprint:0
    },
    {
        nombre:"Gran Cargol",
        total:0,
        velocitat:0,
        puntos:0,
        velocitatMaxSprint:0
    }
    ];
ArrayCaracolesSprint = [];



var nuevaLap=document.getElementById("NuevaLap");

var lap = 1;
var sprintResult = document.getElementById("sprintResult");
var borrarSprint = document.getElementById("borrarSprint");

var velocitatMax1 = 0,velocitatMax2 = 0,velocitatMax3 = 0,velocitatMax4 = 0;


var buttonNueva = document.getElementById("buttonNueva");
var buttonFinaliza = document.getElementById("buttonFinaliza");

var CaracolRanking = document.getElementById("CaracolRanking");

for(var i=0;i<4;i++){
    CaracolRanking.innerHTML+=`
    <div class="col-md-6 col-sm-6 bg-warning" id="CaracolRanking">
          <span>${i+1} </span><span class="text-primary">${Caracoles[i].nombre}</span>
          <span class="text-primary">punts:${Caracoles[i].puntos} Velocidad:${Caracoles[i].velocitatMaxSprint}</span>
    </div>`
}



function runCarrera(){
    for (var i=0;i<4;i++){
        Caracoles[i].velocitat  = Math.floor(Math.random()*(11-1)+1);
        Caracoles[i].total+=Caracoles[i].velocitat;
    }
    CaracolesSprint = [
        {
            lap:lap,
            Caracoles:[
                {
                    nombre:Caracoles[0].nombre,
                    total:Caracoles[0].total,
                    velocidad:Caracoles[0].velocitat
                },
                {
                    nombre:Caracoles[1].nombre,
                    total:Caracoles[1].total,
                    velocidad:Caracoles[1].velocitat
                },
                {
                    nombre:Caracoles[2].nombre,
                    total:Caracoles[2].total,
                    velocidad:Caracoles[2].velocitat
                },
                {
                    nombre:Caracoles[3].nombre,
                    total:Caracoles[3].total,
                    velocidad:Caracoles[3].velocitat
                },
            ]
        }
    ];
    sprint=lap;
    sprintCaracoles.push(sprint)
    ArrayCaracolesSprint.push(CaracolesSprint);
    nuevaLap.innerHTML="";

    nuevaLap.innerHTML+=`
        <div class="col-md-10 col-sm-10 col-xs-10 bg-success text-center">SRINT ${lap}</div>
        <button onclick="runCarrera()" class="col-md-2 col-sm-2 col-xs-2 btn-primary">RUN!</button>`

    for(var i=0;i<4;i++){
        Caracoles.sort((a,b)=>b.total-a.total);
        nuevaLap.innerHTML+=`
        <div class="col-sm-6 col-md-6 col-xs-12 bg-warning">
        <span>${i+1}. </span><span class="text-primary">${Caracoles[i].nombre}</span>
        <span class="text-primary">Total: ${Caracoles[i].total}   Velocidad:${Caracoles[i].velocitat}</span>
        </div>`
    }
    Caracoles.sort(function (a,b){return a.total-b.total;})
    ArrayCaracolesSprint.sort((a,b)=>b.total-a.total);
    sprintResult.innerHTML="";
        sprintResult.innerHTML += `${reprintTable().join(" ")}`

    if(Caracoles[0].velocitat>velocitatMax1){
        velocitatMax1 = Caracoles[0].velocitat;
    }
    if(Caracoles[1].velocitat>velocitatMax2){
        velocitatMax2 = Caracoles[1].velocitat;
    }
    if(Caracoles[2].velocitat>velocitatMax3){
        velocitatMax3 = Caracoles[2].velocitat;
    }
    if(Caracoles[3].velocitat>velocitatMax4){
        velocitatMax4 = Caracoles[3].velocitat;
    }
    lap++;
}
function nuevaCarrera() {
    velocitatMax1=0;velocitatMax2=0;velocitatMax3=0;velocitatMax4=0;
    sprintResult.innerHTML="";borrarSprint.innerHTML="";

    for(var i=0;i<4;i++){Caracoles[i].total = 0;}
    lap = 1;

    for(var i=0;i<4;i++){
        Caracoles[i].velocitat = Math.floor(Math.random() * 11);
        Caracoles[i].total += Caracoles[i].velocitat;
    }
    ArrayCaracolesSprint=[];
    CaracolesSprint = [
        {
            lap:lap,
            Caracoles:[
                {
                    nombre:Caracoles[0].nombre,
                    total:Caracoles[0].total,
                    velocidad:Caracoles[0].velocitat
                },
                {
                    nombre:Caracoles[1].nombre,
                    total:Caracoles[1].total,
                    velocidad:Caracoles[1].velocitat
                },
                {
                    nombre:Caracoles[2].nombre,
                    total:Caracoles[2].total,
                    velocidad:Caracoles[2].velocitat
                },
                {
                    nombre:Caracoles[3].nombre,
                    total:Caracoles[3].total,
                    velocidad:Caracoles[3].velocitat
                },
            ]
        }
    ];
    ArrayCaracolesSprint.push(CaracolesSprint);
    sprint=lap;
    sprintCaracoles.push(sprint)
    borrarSprint.innerHTML+=`<button class="btn-primary" id="borrarSpringButton">BORRA UN SPRINT</button>`;


    nuevaLap.innerHTML+=`<div class="col-md-10 col-sm-10 col-xs-10 bg-success text-center">SRINT ${lap}</div>
                <button onclick="runCarrera()" class="col-md-2 col-sm-2 col-xs-2 btn-primary">RUN!</button>`

    for(var i=0;i<4;i++){
        Caracoles.sort((a,b)=>b.velocitat-a.velocitat);
        nuevaLap.innerHTML+=`
        <div class="col-sm-6 col-md-6 col-xs-12 bg-warning">
        <span>${i+1}. </span><span class="text-primary">${Caracoles[i].nombre}</span>
        <span class="text-primary">Total: ${Caracoles[i].total}   Velocidad:${Caracoles[i].velocitat}</span>
        </div>`
    }

    sprintResult.innerHTML += `
            <table class="col-md-12 col-sm-12 col-xs-12">
                <tr>
                    <th colspan="2" class="text-center bg-success">SPRINT ${ArrayCaracolesSprint[lap-1][0].lap}</th>
                </tr>
               
                ${printTrCaracoles().join(" ")}
            </table>
        `


    if (Caracoles[0].velocitat > velocitatMax1) {
        velocitatMax1 = Caracoles[0].velocitat;
    }
    if (Caracoles[1].velocitat > velocitatMax2) {
        velocitatMax2 = Caracoles[1].velocitat;
    }
    if (Caracoles[2].velocitat > velocitatMax3) {
        velocitatMax3 = Caracoles[2].velocitat;
    }
    if (Caracoles[3].velocitat > velocitatMax4) {
        velocitatMax4 = Caracoles[3].velocitat;
    }

    lap++;
    buttonNueva.innerHTML = "";
    buttonNueva.innerHTML = `<button class="col-md-12 col-sm-12 col-xs-12 btn-primary" disabled onclick="nuevaCarrera()">Nueva Carrera</button>`;
    buttonFinaliza.innerHTML+=`<button class="btn-primary" onclick="finalizaCarrera()">FINALIZA CARRERA</button>`
}
function finalizaCarrera() {

    Caracoles[0].velocitatMaxSprint+=velocitatMax1;
    Caracoles[1].velocitatMaxSprint+=velocitatMax2;
    Caracoles[2].velocitatMaxSprint+=velocitatMax3;
    Caracoles[3].velocitatMaxSprint+=velocitatMax4;
    CaracolRanking.innerHTML = "";

   Caracoles.sort((a,b)=>b.total-a.total);
   Caracoles[0].puntos+=3;
   Caracoles[1].puntos+=2;
   Caracoles[2].puntos+=1;
   Caracoles[3].puntos+=-1;

    buttonNueva.innerHTML = `<button class="btn-primary col-md-12 col-sm-12 col-xs-12" onclick="nuevaCarrera()">Nueva Carrera</button>`;
    buttonFinaliza.innerHTML="";sprintResult.innerHTML=""; borrarSprint.innerHTML=""; nuevaLap.innerHTML = "";
    CaracolSprint = [];
    for(var i=0;i<4;i++){
        Caracoles.sort((a,b)=>b.puntos-a.puntos);
        CaracolRanking.innerHTML+=`
    <div class="col-md-6 col-sm-6 bg-warning">
          <span>${i+1}. </span><span class="text-primary">${Caracoles[i].nombre}</span>
          <span class="text-primary">Puntos:${Caracoles[i].puntos} Velocidad:${Caracoles[i].velocitatMaxSprint}</span>
    </div>`
    }
}


document.body.addEventListener('click', function (e) {
    datosEliminado = [];
    if (e.target.id === "borrarSpringButton") {
        let numSprint = prompt("Introduce el sprint que quieres borrar")
        sprintResult.innerHTML="";
        for(var i=0;i<ArrayCaracolesSprint.length;i++){
            if((numSprint)==(ArrayCaracolesSprint[i][0].lap)){
                for(var z=0;z<4;z++){
                    DatosEliminados=[
                        {
                          nombre:ArrayCaracolesSprint[i][0]['Caracoles'][0].nombre,
                          total:ArrayCaracolesSprint[i][0]['Caracoles'][0].total,
                            velocidad:ArrayCaracolesSprint[i][0]['Caracoles'][0].velocidad
                        },
                        {
                            nombre:ArrayCaracolesSprint[i][0]['Caracoles'][1].nombre,
                            total:ArrayCaracolesSprint[i][0]['Caracoles'][1].total,
                            velocidad:ArrayCaracolesSprint[i][0]['Caracoles'][1].velocidad
                        },
                        {
                            nombre:ArrayCaracolesSprint[i][0]['Caracoles'][2].nombre,
                            total:ArrayCaracolesSprint[i][0]['Caracoles'][2].total,
                            velocidad:ArrayCaracolesSprint[i][0]['Caracoles'][2].velocidad
                        },
                        {
                            nombre:ArrayCaracolesSprint[i][0]['Caracoles'][3].nombre,
                            total:ArrayCaracolesSprint[i][0]['Caracoles'][3].total,
                            velocidad:ArrayCaracolesSprint[i][0]['Caracoles'][3].velocidad
                        }
                    ]
                }
                datosEliminado.push(DatosEliminados);
                ArrayCaracolesSprint.splice(i,1);
                for(var i=0;i<4;i++){
                    for (var c=0;c<4;c++){
                        if(datosEliminado[0][i].nombre===Caracoles[c].nombre){
                            Caracoles[c].total-=datosEliminado[0][i].velocidad;
                        }
                    }

                }
            }
        }
 sprintResult.innerHTML +=`${reprintTable().join(" ")}`
 nuevaLap.innerHTML="";
Caracoles.sort((a,b)=>b.total-a.total);
 nuevaLap.innerHTML+=`${reprintnuevalap()}`
    }
})

function reprintTable() {
    return ArrayCaracolesSprint.map((sprintcaracoles,i)=>{
        return `<table class="col-md-12 col-sm-12 col-xs-12">
               <tr>
                    <th colspan="2" class="text-center bg-success">SPRINT ${sprintcaracoles[0].lap}</th>
                </tr>
                ${reprintTr().join(" ")}
               </table>`
        function reprintTr() {
            ArrayCaracolesSprint[0].sort((a,b)=>b.total-a.total)
            return sprintcaracoles[0].Caracoles.map((caracoles,i)=>{
                return `
                        <tr>
                            <td>${i+1}. <b class="text-primary">${caracoles.nombre}</b></td>
                            <td>Velocidad: ${caracoles.velocidad}</td>
                        </tr>
                     `
            });
        }
    })
}
function printTrCaracoles(){
    return ArrayCaracolesSprint[lap-1].map((caracol,i) => {
            return `${printTdCaracoles()}`
    })
}
function printTdCaracoles() {
    ArrayCaracolesSprint[lap-1][0]['Caracoles'].sort((a,b)=>b.velocidad-a.velocidad)
    return ArrayCaracolesSprint[lap-1][0]['Caracoles'].map((caracoles,i)=>{
        return`
        <tr>
            <td>${i+1}. <b class="text-primary">${caracoles.nombre}</b></td>
            <td>Velocidad: ${caracoles.velocidad}</td>
        </tr>`
    }).join(" ")
}


function reprintnuevalap(){
    return`
        <div class="col-md-10 col-sm-10 col-xs-10 bg-success text-center">SRINT ${lap-1}</div>
        <button onclick="runCarrera()" class="col-md-2 col-sm-2 col-xs-2 btn-primary">RUN!</button>
        ${reprintnuevatabla().join(" ")}
   `

    function reprintnuevatabla() {
        return Caracoles.map((c,i)=>{
            return`<div class="col-sm-6 col-md-6 col-xs-12 bg-warning">
        <span>${i+1}. </span><span class="text-primary">${c.nombre}</span>
        <span class="text-primary">Total: ${c.total}   Velocidad:${c.velocitat}</span>
        </div>`
        })
    }
    for(var i=0;i<4;i++){
        return`
        <div class="col-sm-6 col-md-6 col-xs-12 bg-warning">
        <span>${i+1}. </span><span class="text-primary">${Caracoles[i].nombre}</span>
        <span class="text-primary">Total: ${Caracoles[i].total}   Velocidad:${Caracoles[i].velocitat}</span>
        </div>`
    }
}

