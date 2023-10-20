document.addEventListener('DOMContentLoaded', function() {
    let blocoAzul = document.getElementById('blocoAzul');
    let blocoVermelho = document.getElementById('blocoVermelho');
    let posicaoInicialAzul = {top: 50, left: 50};
    let posicaoInicialVermelho = {top: 150, left: 150};

    // Função para mover o bloco azul
    function moverBloco(event) {
        switch(event.key) {
            case 'ArrowUp':
                blocoAzul.style.top = (parseInt(blocoAzul.style.top || '0') - 10) + 'px';
                break;
            case 'ArrowDown':
                blocoAzul.style.top = (parseInt(blocoAzul.style.top || '0') + 10) + 'px';
                break;
            case 'ArrowLeft':
                blocoAzul.style.left = (parseInt(blocoAzul.style.left || '0') - 10) + 'px';
                break;
            case 'ArrowRight':
                blocoAzul.style.left = (parseInt(blocoAzul.style.left || '0') + 10) + 'px';
                break;
        }

        // Verificar colisão
        if (verificarColisao()) {
            blocoAzul.style.top = posicaoInicialAzul.top + 'px';
            blocoAzul.style.left = posicaoInicialAzul.left + 'px';
            blocoVermelho.style.top = posicaoInicialVermelho.top + 'px';
            blocoVermelho.style.left = posicaoInicialVermelho.left + 'px';
        }
    }

    // Função para verificar a colisão
    function verificarColisao() {
        let ret1 = blocoAzul.getBoundingClientRect();
        let ret2 = blocoVermelho.getBoundingClientRect();

        return !(ret2.left > ret1.right || 
                 ret2.right < ret1.left || 
                 ret2.top > ret1.bottom ||
                 ret2.bottom < ret1.top);
    }

    // Adicionar evento de escuta para o movimento
    window.addEventListener('keydown', moverBloco);
});
