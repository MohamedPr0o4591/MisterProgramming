// swipper js
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});



let serviceMood = 'show';
addChooseItems = _ => {
    if (serviceMood == 'show') {
        document.querySelector('.services .moreServices').style.display = 'block';
        document.querySelector('.services .moreServices').innerHTML = `
        <ul id="listServices">
                <li>
                    <a href="Mobile application programming/mobileProgram.html" target="_blank">
                        Mobile application programming
                    </a>
                </li>
                <li>
                    <a href="web Design/web_design.html">
                        Web design
                    </a>
                </li>
                <li>
                    <a href="services/seo/seo.html">
                        seo services
                    </a>
                </li>
                <li>
                    <a href="services/graphics/graphics.html">
                        Graphic Design
                    </a>
                </li>
            </ul>
        `;
        document.getElementById('listServices').style.animation = 'overScales .5s ease both .1s';
        serviceMood = 'hide';
    } else {
        document.querySelector('.services .moreServices').style.display = 'none';
        serviceMood = 'show';
    }

}

let moodInfo = 'show';
addChooseInfo = _ => {
    if (moodInfo == 'show') {
        moodInfo = 'hideItems';
        document.querySelector('.ourInfo .moreInfo').style.display = 'block';
        document.querySelector('.ourInfo .moreInfo').innerHTML = `
        <ul id="listInfo">
                <li>
                    <a href="about_us/about_us.html">
                        Who are we
                    </a>
                </li>
                <li>
                    <a href="policy_services/policy.html">
                        Policy Services
                    </a>
                </li>
            </ul>
        ` ;
    } else {
        document.querySelector('.ourInfo .moreInfo').style.display = 'none';
        moodInfo = 'show';
    }
}