window.addEventListener('load', () => {


    let picturesCarusel = window.setInterval(() => {
        console.log('change pics')
        let isNumber = /^[0-9]$/
        let caruselImgs = Array.from(document.getElementsByClassName('slide-img'));

        caruselImgs.forEach(item => {
            let getTheScr = item.getAttribute('src');
            let numberOfItem = Number(getTheScr.split('').filter(char => isNumber.test(char)).join(''));

            if (numberOfItem === 12) numberOfItem = 1;
            else numberOfItem += 1;

            item.setAttribute('src', `./images/slides/${numberOfItem}.jpg`)
        });

    }, 2000);




})