document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('modo-noturno').addEventListener('click', function() {
        document.body.classList.toggle('modo-noturno');
    });

    window.addEventListener('scroll', function() {
        const footer = document.querySelector('footer');
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
            footer.style.bottom = '0';
        } else {
            footer.style.bottom = '-150px';
        }
    });


        const overlay = document.getElementById('overlay');
        const closeOverlay = document.getElementById('close-overlay');
        const centralButton = document.querySelector('.central-button');
    
        // Inicialmente, a sobreposição deve estar oculta
        overlay.style.display = 'none';
    
        centralButton.addEventListener('click', function() {
            overlay.style.display = 'flex'; // Use 'flex' para exibir a sobreposição centralizada
        });
    
        closeOverlay.addEventListener('click', function() {
            overlay.style.display = 'none';
        });
    
        // Fechar a sobreposição quando clicar fora dela
        overlay.addEventListener('click', function(event) {
            if (event.target === overlay) {
                overlay.style.display = 'none';
            }
        });
    });
    

