icon = document.querySelector('img', 'list__img');
all_ancora = document.querySelectorAll('a', 'list__text');

function click_Ancora(index) {
    if (index === 1) {
        mover_icone(icon, all_ancora[0]);
    } else if (index === 2) {
        mover_icone(icon, all_ancora[1]);

    } else if (index === 3) {
        mover_icone(icon, all_ancora[2]);

    } else {
        return;
    }
}

function mover_icone(icon, ancora) {
    console.log(icon)
    novo_pai = ancora.parentNode;
    if (icon && novo_pai) {
        novo_pai.insertBefore(icon, novo_pai.firstChild);

    }
}

let timer;
function scrollpage() {
    const fixedSection = document.getElementById('navbar');
    fixedSection.style.display = 'flex';

    clearTimeout(timer);
    timer = setTimeout(() => {
        fixedSection.style.display = 'none';
    }, 2500);
}

window.addEventListener('scroll', scrollpage);
window.addEventListener('load', scrollpage);