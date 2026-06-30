
// Aguarda o carregamento do documento
document.addEventListener('DOMContentLoaded', () => {
    const btnInfo = document.getElementById('btn-info');
    const infoExtra = document.getElementById('info-extra');

    // Adiciona evento de clique para mostrar/esconder as curiosidades do MC
    btnInfo.addEventListener('click', () => {
        if (infoExtra.classList.contains('hidden')) {
            infoExtra.classList.remove('hidden');
            btnInfo.textContent = 'Ocultar Curiosidades';
        } else {
            infoExtra.classList.add('hidden');
            btnInfo.textContent = 'Ver Curiosidades';
        }
    });
});
