function LoadContent() {
  let app = document.getElementsByTagName("body")[0];
  app.innerHTML =  `<div class="text-center">
                      <div class="spinner-border" role="status">
                          <span class="visually-hidden"></span>
                      </div>
                      </div>`;

}


function baseUrl() {
  return 'https://accenture-java-desafio.herokuapp.com/';
}

function dayName(){
  return ['Domingo', 'Segunda feira', 'Terca feira', 'Quarta feira', 'Quinta feira', 'Sexta feira', 'Sábado'];
}

function monName(){
  return  ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
}


function convertData(data) {
  return moment(data).format('DD/MM/YYYY')
}

function convertDataServidor(data) {
  return moment(data).format('YYYY-MM-DD')
}



