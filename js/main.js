window.onload = function() {
    const btn = document.querySelectorAll('[data-btn]');
    const countHtml = document.querySelectorAll('[data-counter]');

    btn.forEach((item, index) => item.addEventListener('click', function () {
        let counter = countHtml[index];
        counter.value = Number(counter.value) + 1;
        localStorage.setItem(index, counter.value);
    }));

    function getStor() {
        countHtml.forEach((el, i) => {
            el.value = localStorage.getItem(i);
        });
    }

    getStor();
}