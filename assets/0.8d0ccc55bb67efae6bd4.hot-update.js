webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).ready(function () {
        var swiper = new Swiper('.swiper-container', {
                slidesPerView: 'auto',
                centeredSlides: false,
                spaceBetween: 30,
                loop: true,
                navigation: {
                        nextEl: '.swiper-button-next'
                }
        });

        (function () {

                var youtube = document.querySelectorAll(".youtube");

                for (var i = 0; i < youtube.length; i++) {

                        var source = SITEDATA.themepath + "/img/video-thumb.jpg";

                        var image = new Image();
                        image.src = source;
                        image.addEventListener("load", function () {
                                youtube[i].appendChild(image);
                        }(i));

                        youtube[i].addEventListener("click", function () {

                                var iframe = document.createElement("iframe");

                                iframe.setAttribute("frameborder", "0");
                                iframe.setAttribute("allowfullscreen", "");
                                iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

                                this.innerHTML = "";
                                this.appendChild(iframe);
                        });
                };
        })();
});

/***/ })
])