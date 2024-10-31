function gerarCombinacoes(letras) {
    let combinacoes = new Set();

    for (let i = 0; i < letras.length; i++) {
        for (let j = 0; j < letras.length; j++) {
            for (let k = 0; k < letras.length; k++) {
                
                if (i !== j && i !== k && j !== k) {
                    combinacoes.add(letras[i] + letras[j] + letras[k]);
                }
            }
        }
    }

    return Array.from(combinacoes);
}


function solicitarLetras() {
    const letras = prompt("Digite 3 letras distintas:").toLowerCase();

    
    if (letras.length === 3) {
        const resultado = gerarCombinacoes(letras);
        console.log("Combinações:", resultado.join(", "));
    } else {
        alert("Por favor, digite exatamente 3 letras distintas.");
    }
}


solicitarLetras();
