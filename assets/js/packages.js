const packagesData = [
    {
        id: "goa",
        title: "Goa Beach Escapade",
        type: "domestic",
        duration: "4 Days / 3 Nights",
        priceRange: "₹14,999 - ₹24,999",
        image: "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&w=600&q=80",
        rating: 4.8,
        reviewsCount: 124,
        description: "Experience the vibrant beaches, historical Portuguese churches, and exciting water sports of beautiful Goa.",
        overview: "Goa is India's pocket-sized paradise, offering an amazing mix of scenic beaches, historic architecture, rich culture, and thrilling activities. This package is curated to offer you a perfect blend of relaxation on north Goa beaches and heritage exploration in South Goa.",
        itinerary: [
            { day: "Day 1", title: "Arrival & North Goa Beach Leisure", desc: "Arrive in Goa, check-in to your resort. Spend the evening exploring Calangute or Baga beach, followed by a beachside dinner." },
            { day: "Day 2", title: "North Goa Sightseeing & Water Sports", desc: "Visit the historic Aguada Fort, Chapora Fort (Dil Chahta Hai fame), and enjoy exciting water sports like parasailing and jet-skiing at Anjuna beach." },
            { day: "Day 3", title: "South Goa Cultural Heritage Tour", desc: "Discover Basilica of Bom Jesus, Se Cathedral, Mangueshi Temple, and enjoy an evening luxury cruise on the Mandovi River." },
            { day: "Day 4", title: "Departure", desc: "Savor a delicious Goan breakfast, collect souvenirs, and transfer to Goa Airport or Railway Station for your flight home." }
        ],
        inclusions: ["3 Nights stay in premium 4-star resort", "Daily breakfast & dinner buffet", "All sightseeing transfers in AC Sedan", "Mandovi River sunset cruise entry", "24/7 Local assistance support"],
        exclusions: ["Flight or train tickets", "Lunch meals & alcoholic beverages", "Water sports fees & activity charges", "Personal tips & laundry fees"]
    },
    {
        id: "kashmir",
        title: "Kashmir Paradise Tour",
        type: "domestic",
        duration: "6 Days / 5 Nights",
        priceRange: "₹24,999 - ₹39,999",
        image: "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&w=600&q=80",
        rating: 4.9,
        reviewsCount: 98,
        description: "Explore the breathtaking valleys, serene shikara rides, and snow-capped peaks of Srinagar, Gulmarg, and Pahalgam.",
        overview: "Kashmir is rightfully called 'Heaven on Earth'. With majestic snow-capped mountains, crystal-clear streams, and flower-filled valleys, this tour takes you across Srinagar, the meadow of gold Sonamarg, the skiing heaven Gulmarg, and beautiful Pahalgam.",
        itinerary: [
            { day: "Day 1", title: "Arrival in Srinagar & Dal Lake Shikara Ride", desc: "Arrive at Srinagar airport. Meet our agent and transfer to a luxury Houseboat. In the evening, enjoy a 2-hour Shikara ride on Dal Lake." },
            { day: "Day 2", title: "Srinagar Mughal Gardens Tour", desc: "Visit Shalimar Bagh, Nishat Bagh, and Chashme Shahi gardens. Later, visit the Shankaracharya Temple for panoramic views of Srinagar city." },
            { day: "Day 3", title: "Srinagar to Gulmarg Alpine Day Tour", desc: "Travel to Gulmarg. Take the famous Gondola Cable Car Ride to phase 1 & 2 for spectacular views of snow-capped Himalayan ranges." },
            { day: "Day 4", title: "Srinagar to Pahalgam (Valley of Shepherds)", desc: "Drive to Pahalgam, passing saffron fields and ruins of Avantipura. Check-in at your hotel and relax by the Lidder River." },
            { day: "Day 5", title: "Pahalgam Valley Exploration", desc: "Take a local pony ride or taxi to Betaab Valley, Aru Valley, and Chandanwari. Relax in the stunning pine forests." },
            { day: "Day 6", title: "Departure from Srinagar", desc: "Transfer back to Srinagar Airport for your onward destination, taking beautiful memories of Kashmir back home." }
        ],
        inclusions: ["1 Night in luxury Dal Lake Houseboat", "4 Nights in premium hotels", "Daily breakfast & dinner", "Srinagar Airport pick & drop in SUV", "2-Hour Shikara ride on Dal Lake"],
        exclusions: ["Flight tickets to/from Srinagar", "Gondola cable car ride tickets", "Pahalgam local union taxi charges", "Travel insurance & camera fees"]
    },
    {
        id: "kerala",
        title: "Kerala Backwaters Serenade",
        type: "domestic",
        duration: "5 Days / 4 Nights",
        priceRange: "₹19,999 - ₹32,999",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80",
        rating: 4.7,
        reviewsCount: 142,
        description: "Indulge in Munnar's sprawling tea gardens, Wildlife sanctuary at Thekkady, and a private houseboat in Alleppey.",
        overview: "Kerala, God's Own Country, offers a pristine and relaxing environment. This trip includes the misty hills of Munnar, spicy forests of Thekkady, and the iconic backwater cruise in Alleppey on a private traditional Kettuvallam houseboat.",
        itinerary: [
            { day: "Day 1", title: "Kochi Arrival & Drive to Munnar Hills", desc: "Arrive in Kochi, drive through scenic waterfalls and spice plantations to Munnar. Check-in to your resort and unwind in the cool mountain breeze." },
            { day: "Day 2", title: "Munnar Tea Gardens & Eravikulam National Park", desc: "Visit Rajamalai (home to Nilgiri Tahr), Tea Museum, Mattupetty Dam, and Echo Point. Walk through beautiful emerald tea estates." },
            { day: "Day 3", title: "Munnar to Thekkady Wildlife Sanctuary", desc: "Drive to Thekkady. Take a guided spice plantation tour and enjoy a scenic boat safari on Periyar Lake to spot wild elephants." },
            { day: "Day 4", title: "Thekkady to Alleppey Houseboat Cruise", desc: "Transfer to Alleppey. Board your private traditional houseboat. Cruise along canals, coconut groves, and backwaters with freshly cooked Kerala meals." },
            { day: "Day 5", title: "Houseboat check-out & Departure from Kochi", desc: "Check out of the houseboat, drive to Kochi for brief sightseeing (Chinese Fishing Nets, Fort Kochi) and transfer to Kochi Airport." }
        ],
        inclusions: ["3 Nights in premium resorts + 1 Night in Private Deluxe Houseboat", "All meals on Houseboat (Breakfast, Lunch, Tea, Dinner)", "Breakfasts & Dinners at Munnar & Thekkady resorts", "Private AC vehicle for entire trip transfers", "Spice Plantation tour tickets"],
        exclusions: ["Train/Airfare", "Periyar lake boat safari entry tickets", "Kathakali & Kalaripayattu show entries", "Personal expenses"]
    },
    {
        id: "dubai",
        title: "Dubai Highlights & Desert Safari",
        type: "international",
        duration: "5 Days / 4 Nights",
        priceRange: "₹54,999 - ₹89,999",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
        rating: 4.9,
        reviewsCount: 210,
        description: "Gaze at the futuristic Burj Khalifa, cross the golden desert sands, and experience luxury cruises & shopping malls.",
        overview: "Dubai is a city of superlatives where modern architectural wonders blend with traditional Arabian heritage. Enjoy a complete package featuring the record-breaking Burj Khalifa, thrilling Desert Safari with BBQ dinner, and a luxury yacht cruise.",
        itinerary: [
            { day: "Day 1", title: "Arrival in Dubai & Luxury Marina Dhow Cruise", desc: "Arrive at Dubai Airport. Transfer to your luxury hotel. In the evening, enjoy a 2-hour Marina Dhow cruise with 5-star buffet dinner." },
            { day: "Day 2", title: "Dubai City Tour & Burj Khalifa 124th Floor", desc: "Explore Dubai Museum, Jumeirah Mosque, Burj Al Arab (photo stop). Later, ascend to the 124th floor of Burj Khalifa for breathtaking panoramas." },
            { day: "Day 3", title: "Desert Safari with Dune Bashing & BBQ", desc: "Start the afternoon with an exciting 4x4 dune bashing adventure. Experience camel rides, henna painting, and Tanoura dance followed by a delicious BBQ dinner under the stars." },
            { day: "Day 4", title: "Future Museum & Dubai Mall Shopping Leisure", desc: "Visit the spectacular Museum of the Future. Spend the afternoon shopping at Dubai Mall, watching the grand Dubai Fountain Show." },
            { day: "Day 5", title: "Departure", desc: "Indulge in a hearty breakfast, check out, visit local spice and gold souks, and transfer to Dubai International Airport for departure." }
        ],
        inclusions: ["4 Nights in a 4-star city center hotel", "Daily buffet breakfast", "Desert Safari in 4x4 Land Cruiser with dinner", "Marina Dhow Cruise with international buffet dinner", "Burj Khalifa 124th floor slot and Future Museum tickets"],
        exclusions: ["International Flights & UAE Visa", "Tourism Dirham Fee (payable at hotel)", "Lunch meals during city tours", "Optional adventure activities like quad biking"]
    },
    {
        id: "thailand",
        title: "Thailand Island Escapes",
        type: "international",
        duration: "6 Days / 5 Nights",
        priceRange: "₹39,999 - ₹59,999",
        image: "https://images.unsplash.com/photo-1528181304800-2f0904a9829d?auto=format&fit=crop&w=600&q=80",
        rating: 4.6,
        reviewsCount: 167,
        description: "Soak in the sights of Bangkok's historic temples and unwind on the gorgeous turquoise beaches of Phuket and Phi Phi.",
        overview: "Thailand offers rich culture, vibrant street life, and unmatched island getaways. This package splits your stay between the pristine waters of Phuket (with a speedboat trip to Phi Phi Islands) and the bustling metropolis of Bangkok.",
        itinerary: [
            { day: "Day 1", title: "Phuket Arrival & Beachfront Leisure", desc: "Arrive in Phuket. Check in to your beach resort. Unwind on Patong Beach or enjoy the lively nightlife of Bangla Road." },
            { day: "Day 2", title: "Speedboat Tour to Phi Phi & Khai Islands", desc: "Embark on a full-day speedboat cruise. Snorkel with colorful fish, explore Maya Bay (The Beach movie setting), and eat lunch on Phi Phi Don." },
            { day: "Day 3", title: "Phuket City Sightseeing", desc: "Visit the Big Buddha statue, Wat Chalong temple, and take photos at Promthep Cape viewpoint during sunset." },
            { day: "Day 4", title: "Phuket to Bangkok Flight & Golden Temples", desc: "Fly to Bangkok. Check-in to your hotel. Visit the Wat Traimit (Golden Buddha) and Wat Pho (Reclining Buddha) temples." },
            { day: "Day 5", title: "Bangkok Safari World & Marine Park Tour", desc: "Spend a fun-filled day at Safari World, enjoying wildlife safaris, dolphin shows, and amazing animal performances." },
            { day: "Day 6", title: "Bangkok Shopping & Departure", desc: "Leisurely shopping at CentralWorld or MBK center, followed by a transfer to Suvarnabhumi Airport for your departure flight." }
        ],
        inclusions: ["3 Nights in Phuket & 2 Nights in Bangkok (4-star)", "Daily breakfast at hotels", "Full-day Phi Phi Island speedboat tour with buffet lunch", "Bangkok temples & city tour", "All airport transfers in private vehicle"],
        exclusions: ["International & domestic flight tickets", "Thailand National Park entrance fee (payable locally)", "Visa on arrival fees", "Personal shopping & lunch/dinners not mentioned"]
    },
    {
        id: "andaman",
        title: "Andaman Tropical Paradise",
        type: "domestic",
        duration: "5 Days / 4 Nights",
        priceRange: "₹29,999 - ₹45,999",
        image: "https://images.unsplash.com/photo-1589136777351-fdc9c94aa5b9?auto=format&fit=crop&w=600&q=80",
        rating: 4.8,
        reviewsCount: 115,
        description: "Bask on Radhanagar Beach (Asia's finest), snorkel in crystal waters, and learn history at the Cellular Jail.",
        overview: "The Andaman and Nicobar Islands are a cluster of emerald gems in the Bay of Bengal. From the dark history of Cellular Jail in Port Blair to the pristine white sands of Radhanagar Beach in Havelock Island, this package guarantees an exotic island holiday.",
        itinerary: [
            { day: "Day 1", title: "Port Blair Arrival & Cellular Jail Light & Sound Show", desc: "Arrive at Port Blair. Check in to your hotel. Visit the historic Cellular Jail in the afternoon, followed by the light and sound show." },
            { day: "Day 2", title: "Cruise to Havelock Island & Radhanagar Beach", desc: "Take a premium private catamaran ferry (Nautika/Makruzz) to Havelock Island. Spend your afternoon at Radhanagar Beach, voted Asia's best beach." },
            { day: "Day 3", title: "Elephant Beach Snorkeling & Water Activities", desc: "Take a speedboat ride to Elephant Beach. Indulge in complimentary snorkeling, glass-bottom boat rides, and view active coral reefs." },
            { day: "Day 4", title: "Havelock to Neil Island Scenic Cruise", desc: "Board the morning ferry to Neil Island. Visit Bharatpur Beach (for water sports), Laxmanpur Beach (natural bridge), and relax." },
            { day: "Day 5", title: "Neil to Port Blair & Departure", desc: "Return to Port Blair via cruise. Pick up local handicrafts and transfer to Veer Savarkar Airport for your flight back." }
        ],
        inclusions: ["2 Nights in Port Blair + 1 Night Havelock + 1 Night Neil Island", "Daily breakfast at resorts", "All inter-island cruise tickets in Premium Cruise", "Private AC tourist vehicle for sightseeing", "Complimentary Snorkeling at Elephant Beach"],
        exclusions: ["Airfare to/from Port Blair", "Optional water sports (Scuba diving, Sea walking)", "Lunch & dinner meals", "Camera permits & personal shopping"]
    }
];

// Helper to open Details Modal
function openDetailsModal(packageId) {
    const pkg = packagesData.find(p => p.id === packageId);
    if (!pkg) return;

    // Create Modal Elements dynamically if they don't exist
    let modal = document.getElementById('details-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'details-modal';
        modal.className = 'details-modal';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="details-modal-box">
            <button class="details-modal-close" aria-label="Close modal">&times;</button>
            <div class="details-modal-banner" style="background-image: url('${pkg.image}')">
                <h3>${pkg.title}</h3>
            </div>
            <div class="details-modal-body">
                <div class="details-modal-meta">
                    <span>⏳ Duration: <strong>${pkg.duration}</strong></span>
                    <span>💰 Est. Price: <strong>${pkg.priceRange}</strong></span>
                </div>
                
                <div class="details-modal-section">
                    <h4>Overview</h4>
                    <p style="color: var(--text-muted); font-size: 0.95rem;">${pkg.overview}</p>
                </div>
                
                <div class="details-modal-section">
                    <h4>Day-by-Day Itinerary</h4>
                    <div class="details-itinerary">
                        ${pkg.itinerary.map(item => `
                            <div class="details-itinerary-item">
                                <h5>${item.day}: ${item.title}</h5>
                                <p style="color: var(--text-muted); font-size: 0.88rem;">${item.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="details-modal-section" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #10B981;">Inclusions</h4>
                        <ul class="details-inclusions-grid">
                            ${pkg.inclusions.map(inc => `<li>${inc}</li>`).join('')}
                        </ul>
                    </div>
                    <div>
                        <h4 style="color: #EF4444;">Exclusions</h4>
                        <ul class="details-exclusions-grid">
                            ${pkg.exclusions.map(exc => `<li>${exc}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="details-modal-footer">
                    <div>
                        <span style="font-size: 0.85rem; color: var(--text-muted);">Starting Package price at</span>
                        <div style="font-size: 1.6rem; font-weight: 700; color: var(--primary-dark);">${pkg.priceRange.split(' - ')[0]} <span style="font-size: 0.9rem; font-weight: 400; color: var(--text-muted);">/ person</span></div>
                    </div>
                    <a href="contact.html?package=${encodeURIComponent(pkg.title)}" class="btn btn-primary">Book This Package</a>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scroll

    // Attach Close Handlers
    const closeBtn = modal.querySelector('.details-modal-close');
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Unlock scroll
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on ESC
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

// Function to render package cards in container
function renderPackages(filteredPackages) {
    const container = document.getElementById('packages-container');
    if (!container) return;

    if (filteredPackages.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px 0;">
                <p style="font-size: 1.2rem; color: var(--text-muted);">No packages match your search filters.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filteredPackages.map(pkg => `
        <div class="package-card reveal">
            <div class="package-img-box">
                <span class="package-badge">${pkg.type}</span>
                <img src="${pkg.image}" alt="${pkg.title}" loading="lazy">
                <span class="package-duration">${pkg.duration}</span>
            </div>
            <div class="package-info">
                <div class="package-meta">
                    <div class="package-rating">
                        ${'★'.repeat(Math.floor(pkg.rating))}${pkg.rating % 1 !== 0 ? '½' : ''} 
                        <span style="color: var(--text-muted); font-size: 0.8rem;">(${pkg.reviewsCount} reviews)</span>
                    </div>
                    <div class="package-price">
                        ${pkg.priceRange.split(' - ')[0]}<span style="font-size: 0.75rem;">/pp</span>
                    </div>
                </div>
                <h3 class="package-title">${pkg.title}</h3>
                <p class="package-desc">${pkg.description}</p>
                <div class="package-footer">
                    <button class="btn btn-secondary view-details-btn" data-id="${pkg.id}">View Details</button>
                    <a href="contact.html?package=${encodeURIComponent(pkg.title)}" class="btn btn-primary">Book Now</a>
                </div>
            </div>
        </div>
    `).join('');

    // Trigger scroll-reveal class attachment since elements were newly created
    const revealElements = container.querySelectorAll('.reveal');
    revealElements.forEach(el => el.classList.add('active')); // Make them active instantly since user is searching

    // Attach event listeners to details buttons
    container.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const packageId = e.target.getAttribute('data-id');
            openDetailsModal(packageId);
        });
    });
}

// Packages filtering setup
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('packages-container');
    if (!container) return; // Exit if not on packages page / home list

    // Initial render
    let currentFilter = 'all';
    let searchQuery = '';

    const filterBtnGroup = document.querySelector('.filter-btn-group');
    const searchInput = document.getElementById('package-search');

    const filterAndRender = () => {
        const filtered = packagesData.filter(pkg => {
            const matchesType = currentFilter === 'all' || pkg.type === currentFilter;
            const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  pkg.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  pkg.overview.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesType && matchesSearch;
        });
        renderPackages(filtered);
    };

    // Filter Buttons logic
    if (filterBtnGroup) {
        filterBtnGroup.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterBtnGroup.querySelector('.filter-btn.active').classList.remove('active');
                e.target.classList.add('active');
                currentFilter = e.target.getAttribute('data-filter');
                filterAndRender();
            });
        });
    }

    // Search Input logic
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            filterAndRender();
        });
    }

    // Load initial list
    filterAndRender();
});
