let subMenu = document.querySelectorAll('.sub-menu');
subMenu.forEach(function(el) {
    el.addEventListener('mouseover', (evt) => {
        let parentLink = el.parentElement.querySelector('a');
        parentLink.classList.add('hover');
    });
    el.addEventListener('mouseout', (evt) => {
        let parentLink = el.parentElement.querySelector('a');
        parentLink.classList.remove('hover');
    });
})
