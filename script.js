document.addEventListener('DOMContentLoaded', () => {
    // Photo List
    const photos = [
        { url: "1.jpeg", caption: "Our First Date & Kiss❤️" },
        { url: "2.jpeg", caption: "I ll be on my knees for you forever ❤️" },
        { url: "3.jpeg", caption: "First time I saw You drunk ❤️" },
        { url: "4.jpeg", caption: " Our first Couple like photo  ❤️" },
        { url: "5.jpeg", caption: " Your PPS teacher 😂" },
        { url: "6.jpeg", caption: "First time you held my hand  ❤️" },
        { url: "7.jpeg", caption: "First Time I saw you ❤️" },
        { url: "8.jpeg", caption: " Our First Meet ❤️" },
        { url: "9.jpeg", caption: "Our First Couple trip ❤️" },
        { url: "10.jpeg", caption: "First Trip to Saharanpur  ❤️" },
        { url: "11.jpeg", caption: "Our Farewell❤️" },
        { url: "12.jpeg", caption: "Waterpark Trip❤️" },
        { url: "13.jpeg", caption: "Scribble Day (U were angry) 😂" },
        { url: "14.jpeg", caption: "Flat Days❤️" },
        { url: "15.jpeg", caption: "Holi with You ❤️" },
        { url: "16.jpeg", caption: "Purana Quiila Trip ❤️" },
        { url: "17.jpeg", caption: "Handsome lgra tha isme😂" },
        { url: "18.jpeg", caption: "Zoo Trip ❤️" },
        { url: "19.jpeg", caption: "First Time I saw you in Saree❤️" },
        { url: "20.jpeg", caption: "Titanic Pose ❤️" },
        { url: "21.jpeg", caption: "Our First Hug ❤️" },
        { url: "22.jpeg", caption: "First time You Hugged me ❤️" },
        { url: "23.jpeg", caption: "Mussorie Trip❤️" },
        { url: "24.jpeg", caption: "Cute lgri thi ❤️" },
        { url: "25.jpeg", caption: "SAXX SUXX 😂" },
        { url: "26.jpeg", caption: "Just me Pissing You forver and ever😂 ❤️" }
    ];

    const extraPhotos = [
        "WhatsApp Image 2026-02-03 at 2.30.36 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.30.38 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.30.41 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.30.47 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.30.49 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.30.51 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.30.53 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.30.56 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.00 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.01 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.01 AM (2).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.01 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.02 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.03 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.03 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.04 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.04 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.05 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.05 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.06 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.06 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.07 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.07 AM (2).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.07 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.08 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.09 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.10 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.10 AM (2).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.10 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.11 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.12 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.12 AM (2).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.12 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.13 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.13 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.14 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.14 AM (2).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.14 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.15 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.15 AM (2).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.15 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.16 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.16 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.17 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.17 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.18 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.18 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.19 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.19 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.21 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.21 AM (2).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.21 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.22 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.22 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.23 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.23 AM (2).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.23 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.24 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.25 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.25 AM (2).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.25 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.26 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.26 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.27 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.27 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.28 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.28 AM (2).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.28 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.29 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.29 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.30 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.30 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.31 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.31 AM (2).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.31 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.32 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.32 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.33 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.33 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.34 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.34 AM (2).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.34 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.35 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.35 AM.jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.36 AM (1).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.36 AM (2).jpeg",
        "WhatsApp Image 2026-02-03 at 2.31.36 AM.jpeg"
    ];

    // Playlist Logic
    const playlist = [
        "Ed Sheeran - Perfect.mp3",
        "Stephen Sanchez - Until I Found You (Official Video).mp3"
    ];
    let currentSongIndex = 0;

    // Music Toggle
    const music = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-toggle');
    let isPlaying = false;

    if (music && playlist.length > 0) {
        // Set initial song
        music.src = playlist[currentSongIndex];

        // Autoplay attempt
        const startMusic = () => {
            if (!isPlaying) {
                music.play().then(() => {
                    isPlaying = true;
                    musicBtn.innerHTML = '⏸️ Pause Music';
                    // Remove the interaction listener once started
                    document.removeEventListener('click', startMusic);
                    document.removeEventListener('touchstart', startMusic);
                }).catch(e => {
                    console.log("Autoplay blocked, waiting for interaction:", e);
                });
            }
        };

        // Try to play immediately
        startMusic();

        // Fallback: Start on first user interaction (click or touch)
        document.addEventListener('click', startMusic);
        document.addEventListener('touchstart', startMusic);

        musicBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the global click listener from firing
            if (isPlaying) {
                music.pause();
                musicBtn.innerHTML = '🎵 Play Music';
                isPlaying = false;
            } else {
                music.play().then(() => {
                    musicBtn.innerHTML = '⏸️ Pause Music';
                    isPlaying = true;
                }).catch(e => console.log("Playback failed:", e));
            }
        });

        // Loop to next song
        music.addEventListener('ended', () => {
            currentSongIndex = (currentSongIndex + 1) % playlist.length;
            music.src = playlist[currentSongIndex];
            music.play();
        });
    }



    // View Elements
    const homeView = document.getElementById('home-view');
    const galleryView = document.getElementById('gallery-view');
    const quizView = document.getElementById('quiz-view');
    const logoHome = document.getElementById('logo-home');
    const logoBack = document.getElementById('logo-back');
    const slideshowControls = document.getElementById('slideshow-controls');
    const viewSlideshowBtn = document.getElementById('view-slideshow-btn');

    const switchToGallery = () => {
        homeView.style.display = 'none';
        galleryView.style.display = 'block';
        if (quizView) quizView.style.display = 'none';
        logoHome.style.display = 'none';
        logoBack.style.display = 'inline-block';
        slideshowControls.style.display = 'flex';
        document.body.classList.add('gallery-page-active');
        window.scrollTo(0, 0);
    };







    const renderSuccess = () => {
        quizCard.innerHTML = `
            <div class="success-message">
                <h2>You Know Us Perfectly! ❤️</h2>
                <div class="reward-letter">
My Dearest,

Will You be my Valentine Forever?
I Love You Forever!
                </div>
                <button class="btn-primary" onclick="location.reload()" style="margin-top: 2rem;">Back to Beginning</button>
            </div>
        `;
        // Trigger extra hearts for success
        for(let i=0; i<30; i++) setTimeout(createHeart, i*100);
    };

    const switchToHome = () => {
        homeView.style.display = 'block';
        galleryView.style.display = 'none';
        if (quizView) quizView.style.display = 'none';
        logoHome.style.display = 'inline-block';
        logoBack.style.display = 'none';
        slideshowControls.style.display = 'none';
        document.body.classList.remove('gallery-page-active');
    };

    if (viewSlideshowBtn) viewSlideshowBtn.addEventListener('click', switchToGallery);
    if (logoBack) logoBack.addEventListener('click', switchToHome);
    if (logoHome) logoHome.addEventListener('click', switchToHome);

    // Digital Envelope Logic
    const envelope = document.getElementById('envelope');
    if (envelope) {
        envelope.addEventListener('click', () => {
            envelope.classList.toggle('open');
            // Trigger extra hearts when opened
            if (envelope.classList.contains('open')) {
                for (let i = 0; i < 15; i++) setTimeout(createHeart, i * 150);
            }
        });
    }

    // Heart Particle System
    const heartContainer = document.getElementById('heart-container');
    const createHeart = () => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.opacity = Math.random();
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        
        if (heartContainer) heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    };

    setInterval(createHeart, 300);

    const createStar = () => {
        const star = document.createElement('div');
        star.classList.add('star');
        star.innerHTML = '✨';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDuration = Math.random() * 2 + 1 + 's';
        star.style.fontSize = Math.random() * 15 + 5 + 'px';
        
        document.body.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 3000);
    };

    setInterval(createStar, 150);

    // Our Love Journey Timeline Animation
    const timeline = document.getElementById('timeline');
    const timelineGrowth = document.getElementById('timeline-growth');
    
    if (timeline && timelineGrowth) {
        window.addEventListener('scroll', () => {
            const rect = timeline.getBoundingClientRect();
            const viewHeight = window.innerHeight;
            
            // Calculate how much of the timeline is "visible" or scrolled through
            // We want the line to start growing when the top of the timeline section enters the viewport
            // and be fully grown when the bottom reaches the bottom of the viewport.
            
            const sectionTop = rect.top;
            const sectionHeight = rect.height;
            const scrollProgress = (viewHeight - sectionTop) / (sectionHeight + viewHeight * 0.2); // Added buffer
            
            let growthPercentage = Math.max(0, Math.min(100, scrollProgress * 100));
            timelineGrowth.style.height = `${growthPercentage}%`;
        });
    }

    // Wish Upon a Star Logic
    const starryContainer = document.getElementById('starry-container');
    const mainMoon = document.getElementById('main-moon');
    const moonTextContent = document.getElementById('moon-text-content');

    const wishes = [
        "Our first home, filled with love and laughter. 🏡",
        "Traveling to Paris and kissing under the Eiffel Tower. 🗼",
        "Growing old together, holding hands on a porch swing. 👵👴",
        "Waking up next to you every single morning. ☀️",
        "A lifetime of adventures and shared dreams. ✈️",
        "Supporting each other through every high and low. 🤝",
        "Building a beautiful family of our own. ❤️",
        "Never losing the magic of our first kiss. 💋"
    ];

    if (starryContainer && mainMoon) {
        // Generate 80 interactive stars for a wider sky
        for (let i = 0; i < 80; i++) {
            const star = document.createElement('div');
            star.className = 'clickable-star';
            star.innerHTML = '⭐';
            
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            star.style.left = `${x}%`;
            star.style.top = `${y}%`;
            
            const size = 0.5 + Math.random() * 1.5;
            star.style.fontSize = `${size}rem`;
            star.style.animationDelay = `${Math.random() * 3}s`;

            star.addEventListener('click', () => {
                createShootingStar(star.style.left, star.style.top);
                
                // Flare effect on star
                star.style.textShadow = '0 0 50px #fff, 0 0 100px var(--gold)';
                setTimeout(() => {
                    star.style.textShadow = '0 0 10px #fff, 0 0 20px rgba(255, 133, 161, 0.4)';
                }, 1000);

                // Update Moon Text
                const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
                
                // Apply a "reveal" effect to the moon
                mainMoon.style.transform = 'scale(1.1)';
                setTimeout(() => mainMoon.style.transform = 'scale(1)', 400);

                moonTextContent.innerHTML = `<p class="revealed-promise">${randomWish}</p>`;
            });

            starryContainer.appendChild(star);
        }
    }

    const createShootingStar = (startX, startY) => {
        const shooter = document.createElement('div');
        shooter.className = 'shooting-star';
        shooter.style.left = startX;
        shooter.style.top = startY;
        starryContainer.appendChild(shooter);
        setTimeout(() => shooter.remove(), 2000);
    };

    // Scroll Reveal Animation
    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    };

    window.addEventListener('scroll', reveal);
    reveal(); // Run once on load

    // Dynamic Content Loading
    const galleryGrid = document.querySelector('.gallery-container');
    const slideshowWrapper = document.querySelector('.slideshow-wrapper');

    // Populate Main Gallery (Index)
    if (galleryGrid) {
        galleryGrid.innerHTML = ''; // Clear placeholders
        // Show ALL numbered photos in gallery
        photos.forEach((photo, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            
            // Random rotation for the scattered look
            const rotation = Math.random() * 14 - 7; // Between -7 and 7 degrees
            item.style.transform = `rotate(${rotation}deg)`;
            
            item.innerHTML = `
                <img src="photos/${photo.url}" alt="Memory ${index + 1}" onerror="this.parentElement.style.display='none'">
                <div class="gallery-caption">${photo.caption}</div>
            `;
            galleryGrid.appendChild(item);
        });
    }

    // Populate Slideshow (Gallery page)
    if (slideshowWrapper) {
        slideshowWrapper.innerHTML = ''; // Clear placeholders
        // Show WhatsApp images in slideshow
        extraPhotos.forEach((photoUrl, index) => {
            const slide = document.createElement('div');
            slide.className = `slide ${index === 0 ? 'active' : ''}`;
            slide.innerHTML = `
                <img src="photos/${photoUrl}" alt="Memory ${index + 1}" onerror="this.parentElement.style.display='none'; this.parentElement.classList.remove('slide')">
                <div class="slide-caption">Memories ❤️</div>
            `;
            slideshowWrapper.appendChild(slide);
        });

        // Slideshow Navigation
        const slides = document.querySelectorAll('.slide');
        const nextBtn = document.getElementById('next-btn');
        const prevBtn = document.getElementById('prev-btn');
        let currentSlide = 0;

        const showSlide = (n) => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        };

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                showSlide(currentSlide + 1);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                showSlide(currentSlide - 1);
            });
        }

        // Auto-play
        setInterval(() => {
            if (galleryView && galleryView.style.display === 'block') {
                showSlide(currentSlide + 1);
            }
        }, 300); // 0.3 seconds per slide for faster viewing
    }
});
