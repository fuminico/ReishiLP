// Function to handle tab switching
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }
    const tablinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

document.addEventListener('DOMContentLoaded', function () {
    // Set the first tab to be active by default
    if(document.querySelector('.tab-link')) {
        document.querySelector('.tab-link').click();
    }

    // Accordion functionality for FAQ
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('active');
            const accordionBody = header.nextElementSibling;
            if (header.classList.contains('active')) {
                accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
            } else {
                accordionBody.style.maxHeight = 0;
            }
        });
    });

    // Video Modal functionality
    const modal = document.getElementById('video-modal');
    if (modal) {
        const videoBtns = document.querySelectorAll('.video-btn');
        const closeBtn = modal.querySelector('.close-btn');
        const videoPlayer = document.getElementById('video-player');

        videoBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const videoId = btn.getAttribute('data-video-id');
                videoPlayer.innerHTML = `<iframe src="https://placehold.co/560x315/000000/ffffff?text=Video+${videoId}" frameborder="0" allowfullscreen></iframe>`;
                modal.style.display = 'block';
            });
        });

        const closeModal = () => {
            modal.style.display = 'none';
            videoPlayer.innerHTML = '';
        };
        closeBtn.addEventListener('click', closeModal);
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                closeModal();
            }
        });
    }

    // Sticky Header
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            header.classList.add('visible');
        } else {
            header.classList.remove('visible');
        }
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
});