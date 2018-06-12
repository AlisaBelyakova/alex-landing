window.addEventListener('load', () => {
    var homeBtn = document.getElementById('home-btn');
    var aboutBtn = document.getElementById('about-btn');
    var contactsBtn = document.getElementById('contacts-btn');

    var sections = Array.from(document.getElementsByClassName('section'));
    var main = document.getElementById('main');
    var contacts = document.getElementById('contacts');

    // sections.forEach(item => item.style.display = 'none');

    homeBtn.addEventListener('click', () => {
        sections.forEach(item => item.style.display = 'none');
        home.style.display = 'flex';
        Array.from(document.getElementsByClassName('nav-item')).forEach(item => item.classList.remove('active'))
        document.getElementById('home-link').classList.add('active');
    });

    aboutBtn.addEventListener('click', () => {
        sections.forEach(item => item.style.display = 'none');
        main.style.display = 'flex';
        Array.from(document.getElementsByClassName('nav-item')).forEach(item => item.classList.remove('active'))
        document.getElementById('about-link').classList.add('active');
    });

    contactsBtn.addEventListener('click', () => {
        sections.forEach(item => item.style.display = 'none');
        contacts.style.display = 'flex';
        Array.from(document.getElementsByClassName('nav-item')).forEach(item => item.classList.remove('active'))
        document.getElementById('contacts-link').classList.add('active');
    });

})