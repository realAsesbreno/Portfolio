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
            const techCards = document.querySelectorAll('.tech-card');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { 
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px" 
            });
            
            techCards.forEach(card => {
                observer.observe(card);
                card.style.transitionDelay = `${Math.random() * 0.5}s`;
            });
        });