const navbar = document.querySelector('body .navbar')
navbar.classList.add('shrink')

const videos = document.querySelectorAll('video')
videos.forEach(video => {
    video.addEventListener('canplay', () => {
        video.removeAttribute("poster");
    })
});