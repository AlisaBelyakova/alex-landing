window.addEventListener('load', () => {
    var homeBtn = document.getElementById('home-btn');
    var aboutBtn = document.getElementById('about-btn');
    var contactsBtn = document.getElementById('contacts-btn');

    var sections = Array.from(document.getElementsByClassName('section'));
    var main = document.getElementById('main');
    var contacts = document.getElementById('contacts');

    sections.forEach(item => item.style.display = 'none');

    homeBtn.addEventListener('click', () => {
        sections.forEach(item => item.style.display = 'none');
        main.style.display = 'flex';
    });

    aboutBtn.addEventListener('click', () => {
        sections.forEach(item => item.style.display = 'none');
        main.style.display = 'flex';
    });

    contactsBtn.addEventListener('click', () => {
        sections.forEach(item => item.style.display = 'none');
        contacts.style.display = 'flex';
    });

})