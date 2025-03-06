document.addEventListener('DOMContentLoaded', function () {
    const aboutButton = document.querySelector('.about-button');
    const projectsButton = document.querySelector('.projects-button');
    const modalAbout = document.getElementById('modal-about');
    const modalProjects = document.getElementById('modal-projects');
    const closeModalButtons = document.querySelectorAll('.close-modal');

    aboutButton.addEventListener('click', function () {
        modalAbout.classList.remove('hidden');
        setTimeout(() => modalAbout.classList.add('show'), 10);
    });

    projectsButton.addEventListener('click', function () {
        modalProjects.classList.remove('hidden');
        setTimeout(() => modalProjects.classList.add('show'), 10);
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modal = button.closest('.modal');
            modal.classList.remove('show');
            setTimeout(() => modal.classList.add('hidden'), 300);
        });
    });

    window.addEventListener('click', function (event) {
        if (event.target.classList.contains('modal')) {
            event.target.classList.remove('show');
            setTimeout(() => event.target.classList.add('hidden'), 300);
        }
    });

    // Language switcher
    const btnPT = document.getElementById('btn-pt');
    const btnEN = document.getElementById('btn-en');
    const elements = document.querySelectorAll('[data-pt]');

    btnPT.addEventListener('click', function () {
        elements.forEach(el => {
            el.innerHTML = el.getAttribute('data-pt');
        });
    });

    btnEN.addEventListener('click', function () {
        elements.forEach(el => {
            el.innerHTML = el.getAttribute('data-en');
        });
    });

    // Set default language to PT
    btnPT.click();
});
