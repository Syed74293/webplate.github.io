// Navigation Active
$(function () {
    $('a').each(function () {
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('active'); $(this).parents('li').addClass('active');
        }
    });
});

// Apply Height for inherit
document.querySelector('.nav').style.height = `${$('#navigation').height()}px`;

// Navigation After 300 Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY >= 300) {
        document.getElementById('navigation').style.opacity = '0.9';
        document.querySelector('.hidenav').style.display = 'block';
    }
    else {
        document.getElementById('navigation').style.opacity = '1';
        document.querySelector('#navigation').style.top = '0px';
        document.querySelector('.hidenav').style.display = 'none';
    }
});

// How to Hide After 300 Scroll
function hide_nav() {
    document.querySelector('#navigation').style.top = '-100px';
}

// Hamburger Navigation
function menu() {
    if (document.getElementById('bar').style.width != '100vw') {
        document.getElementById('bar').style.width = '100vw';
    } else {
        document.getElementById('bar').style.width = '0vw';
    }
}

// Template Names
let names = ['responsive', 'lavender', 'syed'], k = 0;

// Search
function search() {
    let input = document.getElementById('filter').value;
    input = input.toLowerCase();
    if (find(input) == true) {
        console.log(input);
    }
    else {
        document.getElementsByClassName('toast')[0].style.right = '0%';
        setTimeout(() => {
            document.getElementsByClassName('toast')[0].style.right = '-130%';
        }, 10000);
    }
}

// Filter Template Names using Search
function find(query) {
    let k = false;
    names.forEach((name) => {
        if (name == query) {
            k = true;
            // window.location='https://picturesbyh.blogspot.com/name';
        }
    });
    return k;
}

// Toast Cancel
function cancel(n) {
    document.getElementsByClassName('toast')[n].style.right = '-130%';
}

// Templates Show More
function more(n) {
    if (n == 0)
        document.getElementsByClassName('toast')[n + 1].style.right = '0%';
    else
        window.location = `/Pages/${n}.html`;
}

// Loading
function loaded() {
    document.querySelector('#load').style.display = 'none';
    document.querySelector('body').style.overflow = 'unset';
}