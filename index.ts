// Import stylesheets
import './style.css';

// Questão 3: data


function obter_dia (data) {
  let dia : Date = data.getDate();
  return dia;
  

}
let dt = new Date ();

let hoje = obter_dia(dt);
document.write ('Hoje é dia ' + hoje )



