
VANTA.WAVES({
    el: "#vanta-background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x12376b,
    shininess: 103.00,
    waveHeight: 12.00,
    waveSpeed: 1.50,
    zoom: 0.65
});


document.addEventListener('DOMContentLoaded', function() {
    const highlight = document.querySelector('.about-me-highlight');
    const highlightText = highlight.querySelector('p');
    
    setTimeout(() => {
        highlight.style.opacity = '1';
        highlight.style.transform = 'translateY(0)';
        highlight.querySelector('p').style.opacity = '1';
    }, 500);
    
    const quote = highlightText.textContent;
    highlightText.textContent = '';
    let i = 0;
    const typeWriter = setInterval(() => {
        if (i < quote.length) {
            highlightText.textContent += quote.charAt(i);
            i++;
        } else {
            clearInterval(typeWriter);
        }
    }, 50);
});