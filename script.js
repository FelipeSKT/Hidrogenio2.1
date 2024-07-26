document.addEventListener('DOMContentLoaded', function() {
    const modoNoturnoIcon = document.getElementById('modo-noturno');
    const overlay = document.getElementById('overlay');
    const closeOverlay = document.getElementById('close-overlay');
    const centralButton = document.querySelector('.central-button');

    const lightParticlesConfig = {
        particles: {
            number: { value: 90 },
            color: { value: '#000000' },
            shape: { type: 'circle' },
            opacity: { value: 1, random: true },
            size: { value: 1.5},
            line_linked: { enable: false, color: '#000000' },
            move: { enable: true, speed: 0.2 }
        }
    };

    const darkParticlesConfig = {
        particles: {
            number: { value: 90 },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 1, random: true },
            size: { value: 1.5 },
            line_linked: { enable: false, color: '#ffffff' },
            move: { enable: true, speed: 0.2 }
        }
    };


    const leafParticlesConfig = {
        particles: {
            number: { value: 100 },
            color: { value: '#00ff00' },
            shape: { type: 'image', image: { src: 'folha.png', width: 100, height: 100 } },
            opacity: { value: 0.8 },
            size: { value: 12 },
            line_linked: { enable: false, color: '#ffffff' },
            move: { enable: true, speed:1.5,  direction: 'bottom' }
        }
    };

    const starParticlesConfig = {
        particles: {
            number: { value: 100 },
            color: { value: '#ffffff' },
            shape: { type: 'image', image: { src: 'star.png', width: 100, height: 100 } },
            opacity: { value: 0.7, random: true },
            size: { value: 6, random: true },
            line_linked: { enable: false, color: '#ffffff' },
            move: { enable: true, speed: 0.2 }
        }
    };

    const loadParticlesConfig = (isNightMode) => {
        const config = isNightMode ? darkParticlesConfig : lightParticlesConfig;
        particlesJS('particles-js', config);
    };

    const loadMainParticlesConfig = (isNightMode) => {
        const config = isNightMode ? starParticlesConfig : leafParticlesConfig;
        particlesJS('particles-main', config);
    };

    overlay.style.display = 'none';

    modoNoturnoIcon.addEventListener('click', function() {
        document.body.classList.toggle('modo-noturno');
        if (document.body.classList.contains('modo-noturno')) {
            modoNoturnoIcon.src = 'icone_sol.png';
            loadParticlesConfig(true);
            loadMainParticlesConfig(true);
        } else {
            modoNoturnoIcon.src = 'icone_lua.png';
            loadParticlesConfig(false);
            loadMainParticlesConfig(false);
        }
    });

    centralButton.addEventListener('click', function() {
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
        loadParticlesConfig(document.body.classList.contains('modo-noturno'));
    });

    closeOverlay.addEventListener('click', function() {
        overlay.style.display = 'none';
        document.body.style.overflow = ''; 
    });

    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            overlay.style.display = 'none';
            document.body.style.overflow = ''; 
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

    loadMainParticlesConfig(document.body.classList.contains('modo-noturno')); // Load main particles on page load
});
