function copiarTexto(elementId, button) {
    
    const texto = document.getElementById(elementId).textContent;


    navigator.clipboard.writeText(texto).then(() => {
    
        const textoOriginal = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copiado';

        setTimeout(() => {
            button.innerHTML = textoOriginal;
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}