particlesJS('particles-js', {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });


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
});