window.addEventListener('orientationchange', function() {
    if (window.orientation === 90 || window.orientation === -90) {
        document.body.style.transform = 'rotate(-90deg)';
        document.body.style.transformOrigin = 'left top';
        document.body.style.width = '100vh';
        document.body.style.overflowX = 'hidden';
        document.body.style.position = 'absolute';
        document.body.style.top = '100%';
        document.body.style.left = '0';
    } else {
        document.body.style.transform = '';
        document.body.style.transformOrigin = '';
        document.body.style.width = '';
        document.body.style.overflowX = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
    }
});
