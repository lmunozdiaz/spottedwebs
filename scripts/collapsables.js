const collapsables = document.querySelectorAll('.collapsable');

collapsables.forEach(item => {
    item.addEventListener('click', function () {
        this.classList.toggle("collapsable--expanded")
    });
})