document.addEventListener('DOMContentLoaded', function() {

    var logoContainer = document.getElementById('logo-container')

    if (logoContainer) {
        logoContainer.addEventListener('click', function() {

            window.location.href = 'index.html'
        })
    }


    var heroSection = document.getElementById('hero')


    if (heroSection) {
        heroSection.addEventListener('click', function() {

            window.location.href = 'post.html'
        })
    }
})
