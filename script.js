const nomeDacidade = document.getElementById("nomeDacidade")
const adicionarClima = document.getElementById("adicionarClima")
const cidade = document.getElementById("cidade")
const temperatura = document.getElementById("temperatura")
const iconeElemento = document.getElementById("icone-clima") 

adicionarClima.addEventListener("click", async () => {
    try {
        // 1. Pede os dados reais ao servidor utilizando a sua chave ativada
        let resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nomeDacidade.value}&units=metric&lang=pt_br&appid=23b47ac3ea5a22d97a3fb1dee3944bf8`);
        let dados = await resposta.json();
        
        // 2. Injeta os dados reais da internet diretamente no HTML
        cidade.textContent = dados.name;
        const descricao = dados.weather[0].description;
        const  icone = dados.weather[0].icon;
        iconeElemento.src = `https://openweathermap.org/img/wn/${icone}@2x.png`;
        
temperatura.textContent = `${dados.main.temp} °C - ${descricao}`;

    } catch (erro) {
        // 3. A rede de segurança caso o utilizador digite uma cidade inexistente
        console.error("Erro na busca:", erro);
        cidade.textContent = "Cidade não encontrada";
        temperatura.textContent = "";
    }
});

