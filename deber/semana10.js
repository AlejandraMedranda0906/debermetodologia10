//Partiendo del siguiente array, realizar las operaciones necesario para ordenar los días de la semana:
//let week = ['Suday', 'Tuesday', 'Wednesday', 'Thursday',  'Saturday' ]; 
//Eliminar el día domingo del inicio de la lista.
//Agregar el día lunes al inicio de la lista.
//Agregar el día domingo al final de la lista.
//Insertar el día viernes en la posición correspondiente.
//Mostrar en pantalla de elemento en elemento usando un for.
//Usar los métodos: push, pop, shift, unshift, splice

`use strict`


let week  = ['Suday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'];


week.shift('Suday');
week.unshift('Monday');
week.push('Sunday');
week.splice(4, 0, 'Friday');


for(let i=0; i<week.length; i++){
   
    alert(`${i + 1}${week[i]}`);
}
