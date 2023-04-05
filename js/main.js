window.onload = function() {
    const btn = document.querySelectorAll('[data-btn]');
    const countHtml = document.querySelectorAll('[data-counter]');
    const clearBtn = document.querySelector('[data-clear-btn]');
    const setCounter = document.querySelector('[data-set-counter]');
    const popUpWrp = document.querySelector('[data-pop-up-wrp]'),
        inputPopUp = popUpWrp.querySelectorAll('input');
    const popUp = document.querySelector('[data-pop-up]');
    const btnClosePopUp = document.querySelector('[data-btn-close]');
    const btnClick = document.querySelector('[data-btn-click]');
    const error = document.querySelector('[data-error]');

    btn.forEach((item, index) => item.addEventListener('click', function () {
        let counter = countHtml[index];
        counter.value = Number(counter.value) + 1;
        localStorage.setItem(index, counter.value);
    }));

    function getStor() {
        countHtml.forEach((el, i) => {
            if(localStorage.getItem(i) === null) {
                el.value = 0;
            } else {
                el.value = localStorage.getItem(i);
            }

        });
    }

    getStor();

    clearBtn.addEventListener('click', function() {
        countHtml.forEach((el, index) => {
            localStorage.setItem(index, '0');
            getStor();
        })
    });

    btnClick.addEventListener('click', () => {
        let key;
        let name;
        inputPopUp.forEach(el => {
            if(el.name === "namberBlock") {
                if(el.value <= (countHtml.length - 1)) {
                    key = String(el.value);
                    el.value = '';
                }
            } if(el.name === "namberCounter") {
                name = el.value;
                if(key !== undefined) {
                    el.value = '';
                }

            }
        });

        if(key === undefined) {
            error.innerHTML = `<p>Такого блока нет</p>`;
            errorFun();
        } if(key == '' || name == '') {
            error.innerHTML = `<p>Введите значиние</p>`;
            errorFun();
        } if(key !== '' && name !== '' && key !== undefined) {
            removePopUp();
            localStorage.setItem(key, name);
        }
        getStor();
    });

    function errorFun() {
        error.classList.add('active');
        setTimeout(function() {
            error.classList.remove('active');
        }, 3000);
    }

    setCounter.addEventListener('click', activPopOP);
    btnClosePopUp.addEventListener('click', removePopUp);
    popUpWrp.addEventListener('click', removePopUp);
    popUp.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    function activPopOP() {
        popUpWrp.classList.add('active');
    }

    function removePopUp() {
        popUpWrp.classList.remove('active');
    }
}