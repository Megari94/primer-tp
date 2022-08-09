alert ("Clinica Santa Ana, un lugar de confianza")
let nombre = prompt ("Ingresa tu nombre").toLocaleLowerCase();
let apellido = prompt ("Ingresa tu apellido").toLocaleLowerCase();
let doc = prompt ("Ingrese el nombre de su doctor para reservar un turno").toLocaleLowerCase();


//While + If anidado
 
while (nombre, apellido, doc!= ""){
    if((doc=="Gomez") || (doc=="gomez")){
        console.log("Horario de atención: Lunes de 10hs-13hs, ingreso por orden de llegada."); 
    }else if ((doc=="Dominguez") || (doc=="dominguez")){
        console.log("Horario de atencion: Sabados de 8hs a 12hs, ingreso por orden de llegada.");
    }else if ((doc=="Lucero") || (doc=="lucero")){
        console.log("Horario de atencion: Martes de 8hs a 12hs, ingreso por orden de llegada.");
    }else if ((doc=="Aguirre") || (doc=="aguirre")){
        console.log("Horario de atencion: Jueves de 16hs a 20hs, ingreso por orden de llegada.");
    }else{
        console.log("Llamenos al 484881 para coordinar con usted una consulta.");
    }console.log("Sr/a "+ apellido +" "+nombre+" "+"contactenos para confirmar su consulta con el/la Dr/a"+ " "+doc+"."+" "+"Lo/la esperamos!!");
    
   break;
}



    





 


