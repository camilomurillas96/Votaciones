const positivos = [
    new Positivo('Bencema'),
    new Positivo('Luis Diaz'),
    new Positivo('Luis Diaz')
];

const negativos = [
    new Negativo('Kylian Mbappé'),
    new Negativo('Bencema')
];

var myNav = document.getElementById("menu");
window.onscroll = function() {
    if (document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80) {
      myNav.classList.remove("bg-dark");
      myNav.classList.add("bg-primary");
    } else {
      myNav.classList.remove("bg-primary");
      myNav.classList.add("bg-dark");
    }
  };

  cargarCards();
  totalVotos();

function cargarCards(){
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       let jugadores = JSON.parse(xhttp.responseText).Jugadores;
       const cantidadJugadores = jugadores.length;
      //  console.log(cantidadJugadores)
      //  console.log(jugadores)
       let card = "";
       for (const [key, value] of Object.entries(jugadores)) {
        // console.log(value);
        if((value.id%2)!=0){
    card += `
    <div class="row cards">
      <div class="col-6">
        <div class="card" style="width: 20rem;">
          <img src="images/jugador/${value.Nombre.split(" ")[1]}.jpg" class="card-img-top" alt="${value.Nombre}">
          <div class="card-body">
            <h5 class="card-title">${cambiarPalabras(value.Nombre)}</h5>
            <p class="card-text nat">Nacionalidad: ${cambiarPalabras(value.Pais)}</p>
            <p class="card-text equipo">Equipo: ${cambiarPalabras(value.Equipo)}</p>
            <div class="card-body">
              <button class="btn btn-primary like"><span class="material-symbols-outlined ">thumb_up</span></button>
              <button class="btn btn-primary dislike"><span class="material-symbols-outlined ">thumb_down</span></button>
            </div>
          </div>
        </div>
      </div>
      
    `;
          
        }else{
          card += `
          <div class="col-6">
            <div class="card" style="width: 20rem;">
              <img src="images/jugador/${value.Nombre.split(" ")[1]}.jpg" class="card-img-top" alt="${value.Nombre}">
              <div class="card-body">
                <h5 class="card-title">${cambiarPalabras(value.Nombre)}</h5>
                <p class="card-text nat">Nacionalidad: ${cambiarPalabras(value.Pais)}</p>
                <p class="card-text equipo">Equipo: ${cambiarPalabras(value.Equipo)}</p>
                <div class="card-body">
                  <button class="btn btn-primary like"><span class="material-symbols-outlined ">thumb_up</span></button>
                  <button class="btn btn-primary dislike"><span class="material-symbols-outlined ">thumb_down</span></button>
                </div>
              </div>
            </div>
          </div>
      </div>`
        }
        }
        document.getElementById("cards").innerHTML = card;
       
    }
};
xhttp.open("GET", "jugadores.json", true);
xhttp.send();
}

function totalVotos(){
  let totalVotosNegativos = 0;
  for(let negativo of negativos){
    totalVotosNegativos++;
  }
  let totalVotosPositivos = 0;
  for(let positivo of positivos){
    totalVotosPositivos++;
  }
// console.log(totalVotosPositivos);

let total = totalVotosPositivos+totalVotosNegativos;
console.log(total);
document.getElementById('conteo').innerHTML = `<h4 class='totalVotos'>Total votos: ${total}</h4>`;
}





function cambiarPalabras( val ) {  
    return val.toLowerCase()
                .trim()
                .split(' ')
                .map( v => v[0].toUpperCase() + v.substr(1) )
                .join(' ');  
}
