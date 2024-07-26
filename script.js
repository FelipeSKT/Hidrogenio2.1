document.addEventListener('DOMContentLoaded', function() {
    const modoNoturnoIcon = document.getElementById('modo-noturno');
    const overlay = document.getElementById('overlay');
    const closeOverlay = document.getElementById('close-overlay');
    const centralButton = document.querySelector('.central-button');

    const lightParticlesConfig = {
        particles: {
            number: { value: 50 },
            color: { value: '#000000' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3 },
            line_linked: { enable: true, color: '#000000' },
            move: { enable: true, speed: 2 }
        }
    };

    const darkParticlesConfig = {
        particles: {
            number: { value: 50 },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3 },
            line_linked: { enable: true, color: '#ffffff' },
            move: { enable: true, speed: 2 }
        }
    };

    const loadParticlesConfig = (isNightMode) => {
        const config = isNightMode ? darkParticlesConfig : lightParticlesConfig;
        particlesJS('particles-js', config);
    };

    overlay.style.display = 'none';

    modoNoturnoIcon.addEventListener('click', function() {
        document.body.classList.toggle('modo-noturno');
        if (document.body.classList.contains('modo-noturno')) {
            modoNoturnoIcon.src = 'icone_sol.png';
            loadParticlesConfig(true);
        } else {
            modoNoturnoIcon.src = 'icone_lua.png';
            loadParticlesConfig(false);
        }
    });

    centralButton.addEventListener('click', function() {
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Desativa o scroll quando o overlay está visível
        loadParticlesConfig(document.body.classList.contains('modo-noturno'));
    });

    closeOverlay.addEventListener('click', function() {
        overlay.style.display = 'none';
        document.body.style.overflow = ''; // Restaura o scroll quando o overlay é fechado
    });

    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            overlay.style.display = 'none';
            document.body.style.overflow = ''; // Restaura o scroll quando o overlay é fechado
        }
    });

    window.addEventListener('scroll', function() {
        const footer = document.querySelector('footer');
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
            footer.style.bottom = '0';
        } else {
            footer.style.bottom = '-150px';
        }
    });
});
