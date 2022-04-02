const logosScroll = document.getElementById('logosScroll');
const logosScrollWidth = logosScroll.scrollWidth;


window.addEventListener('load', () => {
    self.setInterval(() => {
        const first = document.querySelector('#logosScroll a');

        if (!isElementInViewport(first)) {
            logosScroll.appendChild(first);
            logosScroll.scrollLeft = first.offsetWidth + 20;
            logosScroll.scrollTo(logosScroll.scrollLeft - first.offsetWidth, 0);
        }
        if (logosScroll.scrollLeft !== logosScrollWidth) {
            logosScroll.scrollTo(logosScroll.scrollLeft + 2, 0);
        }
    }, 15);
});

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.right > 0;
}