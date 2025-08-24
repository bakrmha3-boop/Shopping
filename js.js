 function scrollToVideo() {
            const videoSection = document.getElementById('youtube-video');
            videoSection.scrollIntoView({ behavior: 'smooth' });
        }

        // Simple animation for elements
        document.addEventListener('DOMContentLoaded', function() {
            const gameCards = document.querySelectorAll('.game-card');
            const titles = document.querySelectorAll('h1, h2');
            
            // Add animation to titles
            titles.forEach(title => {
                title.classList.add('glow');
            });
            
            gameCards.forEach((card, index) => {
                // Staggered animation for cards
                card.style.animationDelay = `${index * 0.1}s`;
                card.classList.add('pulse');
            });
            
            // Remove animation after initial load
            setTimeout(() => {
                gameCards.forEach(card => {
                    card.classList.remove('pulse');
                });
            }, 2000);
        });