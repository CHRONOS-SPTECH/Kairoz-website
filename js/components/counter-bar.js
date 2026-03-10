export function couterBarNumbersDimanic() {
    const listaDeDados = [
        { id: "projetos",   alvo: 30, sufixo: "+", extra: "" },
        { id: "clientes",   alvo: 20, sufixo: "+", extra: "" },
        { id: "retencao",   alvo: 95, sufixo: "",  extra: "%" },
        { id: "experiencia", alvo: 5,  sufixo: "+", extra: " <span>Anos</span>" }
    ];

    listaDeDados.forEach((item) => {
        const elementoH3 = document.querySelector(`[data-id="${item.id}"] h3`);
        
        if (elementoH3) {
            let valorAtual = 0;
            const velocidade = item.alvo / 50;

            function animarNumeros() {
                if (valorAtual < item.alvo) {
                    valorAtual += velocidade;
                    
                    elementoH3.innerHTML = item.sufixo + Math.ceil(valorAtual) + item.extra;
                    
                    setTimeout(animarNumeros, 20);
                } else {
                    elementoH3.innerHTML = item.sufixo + item.alvo + item.extra;
                }
            }

            animarNumeros(); 
        }
    });
}