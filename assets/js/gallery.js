const galleryImages = [
    {
        title: "Sunset Houseboat",
        category: "Kerala",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
        description: "A peaceful evening cruising along the calm backwaters of Alleppey, Kerala."
    },
    {
        title: "Baga Beach Sunset",
        category: "Goa",
        image: "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&w=800&q=80",
        description: "The serene sunset reflection on the wet sands of Goa's popular beaches."
    },
    {
        title: "Burj Khalifa Majesty",
        category: "Dubai",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
        description: "The tallest skyscraper in the world, towering over Dubai's premium downtown skyline."
    },
    {
        title: "Dal Lake Shikara",
        category: "Kashmir",
        image: "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&w=800&q=80",
        description: "Wooden shikaras docked on the calm, reflective waters of Dal Lake in Srinagar."
    },
    {
        title: "Phi Phi Island Escapes",
        category: "Thailand",
        image: "https://images.unsplash.com/photo-1528181304800-2f0904a9829d?auto=format&fit=crop&w=800&q=80",
        description: "Emerald crystal waters surrounded by towering limestone cliffs in southern Thailand."
    },
    {
        title: "Pristine Andaman Coast",
        category: "Andaman",
        image: "https://images.unsplash.com/photo-1589136777351-fdc9c94aa5b9?auto=format&fit=crop&w=800&q=80",
        description: "The white sands and crystal-clear turquoise horizons of Radhanagar Beach, Havelock."
    },
    {
        title: "Taj Mahal Splendor",
        category: "Agra",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
        description: "The white marble icon of eternal love standing tall in Agra, Uttar Pradesh."
    },
    {
        title: "Eravikulam Hills",
        category: "Munnar",
        image: "https://images.unsplash.com/photo-1581791538302-03537b9c97bf?auto=format&fit=crop&w=800&q=80",
        description: "Verdant green hills wrapped in thin, rolling mist in Munnar, Kerala."
    },
    {
        title: "Grand Palace Temples",
        category: "Bangkok",
        image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
        description: "Intricately detailed golden spires at the historic Grand Palace, Bangkok."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    // Render gallery items
    grid.innerHTML = galleryImages.map((img, index) => `
        <div class="gallery-item reveal" data-index="${index}">
            <img src="${img.image}" alt="${img.title}" loading="lazy">
            <div class="gallery-overlay">
                <h4>${img.title}</h4>
                <p>${img.category}</p>
            </div>
        </div>
    `).join('');

    // Select Lightbox Elements or Create
    let lightbox = document.getElementById('lightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
            <button class="lightbox-nav lightbox-prev" aria-label="Previous image">&#10094;</button>
            <button class="lightbox-nav lightbox-next" aria-label="Next image">&#10095;</button>
            <div class="lightbox-content">
                <img src="" alt="">
                <div class="lightbox-caption"></div>
            </div>
        `;
        document.body.appendChild(lightbox);
    }

    const lightboxImg = lightbox.querySelector('img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    let currentIndex = 0;

    const showImage = (index) => {
        currentIndex = index;
        const imgData = galleryImages[currentIndex];
        lightboxImg.src = imgData.image;
        lightboxImg.alt = imgData.title;
        lightboxCaption.innerHTML = `<strong>${imgData.title}</strong> - ${imgData.description}`;
    };

    const openLightbox = (index) => {
        showImage(index);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    const nextImage = () => {
        let index = currentIndex + 1;
        if (index >= galleryImages.length) index = 0;
        showImage(index);
    };

    const prevImage = () => {
        let index = currentIndex - 1;
        if (index < 0) index = galleryImages.length - 1;
        showImage(index);
    };

    // Attach Grid click events
    grid.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const index = parseInt(item.getAttribute('data-index'));
            openLightbox(index);
        });
    });

    // Close on overlay click or button click
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Navigation triggers
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        nextImage();
    });
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        prevImage();
    });

    // Keyboard handlers
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        }
    });
});
