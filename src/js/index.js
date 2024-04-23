const key = "37d40f191ea53f5810e3a67288a24f34"

function colocarDadosNatela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name   /* class cidade tempo em Sao Paulo*/
    document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "°C"/*<p class="temp">21°C</p>  Math.floor serve para arredondar*/
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description /*<p class="texto-previsao">Nublado</p> */
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%" /*<p class="umidade">Umidade:76%</p> */
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`/*<img class="imgprevisao" alt="icone-info-do-tempo" src="https://openweathermap.org/img/wn/04n.png">
    <p */
}

/* (async) vai uasr o servidor [ &lang=pt_br tradução para lingua portuguesa ] &units=metric converte de grau celsius para grau*/ 
async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNatela(dados)

}
/* funcao cliquei no botao ( lupa ) class botao de busca pega o que esta dentro input*/
function cliqueiNoBotao(){
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}