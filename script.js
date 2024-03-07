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


    var currentPage = window.location.pathname;
    console.log("Current page:", currentPage);
    

    if (currentPage.includes("index.html")) {
      var homeLink = document.querySelector('.home');
      if (homeLink) {
        homeLink.style.textDecoration = 'underline';
      }
    }


    if (currentPage.includes("about.html")) {
      var aboutLink = document.querySelector('.about-page');
      if (aboutLink) {
        aboutLink.style.textDecoration = 'underline';
      }
    }

})
