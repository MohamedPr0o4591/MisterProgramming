// navbar scrolling 

let navbar = document.querySelector('nav');
let moon = document.getElementById('moon2');
let sun = document.getElementById('sun2');
let logoSite = document.getElementById('logoSite');
let canvas = document.querySelector('canvas');

let ctx = canvas.getContext('2d');
let mood;


canvas.width = logoSite.width;
canvas.height = logoSite.height;
ctx.drawImage(logoSite, 0, 0, canvas.width, canvas.height);
logoSite.style.display = 'none';


window.onscroll = _ => {
    value = scrollY;
    if (value >= 100) {
        document.querySelector('nav').classList.add('sticky');
    } else {
        document.querySelector('nav').classList.remove('sticky');
    }
    if (value >= 352) {
        document.querySelectorAll('.services').forEach(e => {
            e.style.opacity = 1;
            e.style.transform = 'scale(1)';
            e.style.zIndex = '1';
        });
    }
    if (value >= 1008) {
        document.querySelectorAll('.projects').forEach(e => {
            e.style.opacity = 1;
            e.style.zIndex = '1';
            e.style.transform = 'scale(1)';
        });
    }
    if (value >= 2455) {
        document.querySelectorAll('.contact').forEach(e => {
            e.style.opacity = 1;
            e.style.zIndex = '1';
            e.style.transform = 'scale(1)';
        });
    }
    if (value >= 3179) {
        document.querySelectorAll('.ourInfo').forEach(e => {
            e.style.opacity = 1;
            e.style.zIndex = '1';
            e.style.transform = 'scale(1)';
        });
    }
    if (value >= 3442) {
        document.querySelectorAll('.blog').forEach(e => {
            e.style.opacity = 1;
            e.style.zIndex = '1';
            e.style.transform = 'scale(1)';
        });
    }

    if (value >= 3838) {
        document.querySelectorAll('footer').forEach(e => {
            e.style.opacity = 1;
            e.style.zIndex = '1';
            e.style.transform = 'scale(1)';
        });
    }
}


moon.addEventListener('click', _ => {
    document.querySelector("body").classList.add('lightMode');
    mood = 'light';
    localStorage.mood = mood;
});
sun.addEventListener('click', _ => {
    document.querySelector("body").classList.remove('lightMode');
    mood = 'dark';
    localStorage.mood = mood;
});

// local storage
if (localStorage.mood === 'light') {
    document.querySelector("body").classList.add('lightMode');
} else {
    document.querySelector("body").classList.remove('lightMode');
}

document.getElementById('lightMode').addEventListener('click', _ => {
    document.querySelector('body').classList.add('lightMode');
});
document.getElementById('darkMode').addEventListener('click', _ => {
    document.querySelector('body').classList.remove('lightMode');
});

document.querySelector('nav .navbar > .navbar-screen-768 > li:first-child').addEventListener('click', _ => {
    document.querySelector('body').classList.remove('lightMode');
});

document.querySelector('nav .navbar > .navbar-screen-768 > li:nth-child(2)').addEventListener('click', _ => {
    document.querySelector('body').classList.add('lightMode');
});

document.querySelectorAll('nav .navbar>.navbar-screen-768>li> #open').forEach(e => {
    e.addEventListener('click', _ => document.querySelector('nav').classList.add('active'));
});

document.querySelectorAll('nav .navbar>.navbar-screen-768>li> #close').forEach(e => {
    e.addEventListener('click', _ => document.querySelector('nav').classList.remove('active'));
});

// ======== pop-noti function ======== //
let closeIcon = document.getElementById('close-icon');
let icons = document.querySelectorAll('.pop-noti .container .box .images i');
icons.forEach(icons => {
    icons.addEventListener('click', _ => {
        document.querySelector('.pop-noti').classList.add('active');
    });
});
closeIcon.addEventListener('click', _ => {
    document.querySelector('.pop-noti').classList.remove('active');
});
