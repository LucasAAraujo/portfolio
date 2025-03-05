document.addEventListener('DOMContentLoaded', function () {
    const aboutButton = document.querySelector('.about-button');
    const projectsButton = document.querySelector('.projects-button');
    const modalAbout = document.getElementById('modal-about');
    const modalProjects = document.getElementById('modal-projects');
    const closeModalButtons = document.querySelectorAll('.close-modal');

    aboutButton.addEventListener('click', function () {
        modalAbout.classList.remove('hidden');
    });

    projectsButton.addEventListener('click', function () {
        modalProjects.classList.remove('hidden');
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', function () {
            modalAbout.classList.add('hidden');
            modalProjects.classList.add('hidden');
        });
    });

    window.addEventListener('click', function (event) {
        if (event.target === modalAbout) {
            modalAbout.classList.add('hidden');
        }
        if (event.target === modalProjects) {
            modalProjects.classList.add('hidden');
        }
    });
});