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

// Countdown Timer Function
function startCountdown() {
    const countdownElement = document.getElementById('countdown-timer');
    if (!countdownElement) return;

    // Set the end date: 2 days from now
    const endDate = new Date().getTime() + (2 * 24 * 60 * 60 * 1000);

    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = endDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the respective elements
        document.getElementById("days").innerText = String(days).padStart(2, '0');
        document.getElementById("hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

        // If the countdown is over, write some text
        if (distance < 0) {
            clearInterval(timer);
            countdownElement.innerHTML = "<p>この特別キャンペーンは終了しました</p>";
        }
    }, 1000);
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
    revealOnScroll();

    // Start the countdown timer
    startCountdown();
});
