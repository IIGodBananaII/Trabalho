var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");  
});

document.querySelector("#qtade").addEventListener("change",atualizarPreco)
document.querySelector("#sample-sim").addEventListener("change",atualizarPreco)
document.querySelector("#sample-nao").addEventListener("change",atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function(){
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = 'Prazo: ' + prazo + ' semanas' 
    atualizarPreco()
})

function atualizarPreco(){
    const qtade = document.querySelector("#qtade").value
    const incluiSample = document.querySelector("#sample-sim").checked
    const prazo = document.querySelector("#prazo").value
    let preco = qtade * 50;
    if (incluiSample) preco += 100
    let taxaUrgencia = 1 - prazo*0.1
    preco *= 1 + taxaUrgencia
    

    document.querySelector("#preco").innerHTML = 'R$' + preco
}