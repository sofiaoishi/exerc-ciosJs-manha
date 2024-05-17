//Construir um menu que e possível escolher um exercício entre os anteriores, para ser executado
//Faça com que o menu repita a execução disponibilize as opções para o usuário
//até que seja digitado sair

function {
    const menuDiv = document.getElementById('menu');
    
function showMenu() {
    //Limpa o menu anterior
    menuDiv.innerHTML = '';
    
    //Opções do menu
    const options = [
        { text: "Opção 1", action: option1 },
        { text: "Opção 2", action: option2 },
        { text: "Opção 3", action: option3 },
        { text: "Sair", action: exitMenu }
]
    
    options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.classList.add("option");
        button.addEventListener("click", option.action);
        menuDiv.appendChild(button);
})
}
    
function option1() {
        alert("Você escolheu a opção 1");
        repeatMenu();
}
    
function option2() {
        alert("Você escolheu a opção 2");
        repeatMenu();
}
    
function option3() {
        alert("Você escolheu a opção 3");
        repeatMenu();ç
}
    
function exitMenu() {
        alert("Saindo do menu. Até mais!");
        menuDiv.innerHTML = "<p>Você saiu do menu.</p>";
}
    
function repeatMenu() {
        setTimeout(showMenu, 1000); 
        // Recarrega o menu após 1 segundo
}
    
        // Exibe o menu pela primeira vez
        showMenu()
}

