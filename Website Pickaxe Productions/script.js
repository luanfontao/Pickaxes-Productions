document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-menu ul li a');
    const sections = document.querySelectorAll('section');

    // Função para remover e adicionar 'active' class
    const setActiveLink = (link) => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    };

    // Criar um IntersectionObserver com threshold ajustado
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Ajustado para 50% da seção visível
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                console.log(`Seção visível: ${id}`); // Log de depuração
                const activeLink = document.querySelector(`.nav-menu ul li a[href="#${id}"]`);
                if (activeLink) {
                    setActiveLink(activeLink);
                }
            }
        });
    }, observerOptions);

    // Observar cada seção
    sections.forEach(section => {
        observer.observe(section);
    });

    // Scroll suave para topo
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Modal 'Sobre Nós'
    const sobreNosBtn = document.getElementById('sobreNosBtn');
    const modal = document.getElementById('sobreNosModal');
    const closeBtn = document.querySelector('.close');

    if (sobreNosBtn && modal && closeBtn) {
        sobreNosBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block';
        });

        // Fechar o modal
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target == modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Remoção do Manipulador de Envio de Formulário de Contato
    // Como a seção "Contato" foi removida, não há necessidade de manipular o envio do formulário.

});
