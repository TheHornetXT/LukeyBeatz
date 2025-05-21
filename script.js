// Beat data array - easy to add more beats
const beats = [
    {
        title: "King Von *Bass Boosted* Type beat",
        image: "https://w0.peakpx.com/wallpaper/142/963/HD-wallpaper-king-von-rip.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=s7HX_bmDr4I",
        price: "$2" // Since no price was given for this beat
    },
    {
        title: "Roddy Rich Type beat",
        image: "https://wallpapercat.com/w/full/a/8/2/1627308-1125x2436-mobile-hd-roddy-ricch-wallpaper.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=RPbcXmrhg64",
        price: "$1"
    },
    {
        title: "SoFaygo Type Beat",
        image: "https://i.pinimg.com/736x/4b/f0/3f/4bf03f1daa752d1a13fa18becfc7ee0a.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=pNKVdomUrwg",
        price: "$5"
    },
    {
        title: "Juice WRLD Type Beat",
        image: "https://wallpapercat.com/w/full/8/7/0/2562110-2160x3840-mobile-4k-juice-wrld-wallpaper.jpg",
        youtubeLink: "https://https://www.youtube.com/watch?v=zIWAKSLUtXE",
        price: "$3"
    },
    {
        title: "YoungBoy Never Broke Again Type Beat",
        image: "https://4kwallpapers.com/images/wallpapers/nba-youngboy-2732x2732-13928.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=HMEKW72mqh8",
        price: "$4"
    },
    { 
        title: "d4vd Emotinal *TRAP* Type Beat"
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHSCmt5yCnQEviD5CaAnn0weYdBtGA5woiVw&s"
        youtubeLink: "https://www.youtube.com/watch?v=kLvQxvxTt_k"
        price: "$4"
    },
];

// Function to load beats
function loadBeats() {
    const beatsContainer = document.getElementById('beats-container');
    
    beats.forEach(beat => {
        // Create beat card
        const beatCard = document.createElement('div');
        beatCard.className = 'beat-card';
        
        // Create HTML structure for beat card
        beatCard.innerHTML = `
            <img src="${beat.image}" alt="${beat.title}" class="beat-image">
            <div class="beat-info">
                <h3 class="beat-title">${beat.title}</h3>
                <p class="beat-price">${beat.price}</p>
                <div class="action-buttons">
                    <button class="preview-btn"><i class="fas fa-play"></i> Preview</button>
                    <button class="buy-btn"><i class="fas fa-shopping-cart"></i> Buy</button>
                </div>
            </div>
        `;
        
        beatsContainer.appendChild(beatCard);
        
        // Get buttons for this card
        const previewBtn = beatCard.querySelector('.preview-btn');
        const buyBtn = beatCard.querySelector('.buy-btn');
        
        // Add click event listeners
        previewBtn.addEventListener('click', () => openPreviewModal(beat));
        buyBtn.addEventListener('click', () => {
            window.location.href = `mailto:lukemcguire21113@gmail.com?subject=Interested in purchasing "${beat.title}"&body=Hello,%0D%0A%0D%0AI'm interested in purchasing the "${beat.title}" priced at ${beat.price}.%0D%0A%0D%0APlease let me know how we can arrange an in-person purchase.%0D%0A%0D%0AThank you!`;
        });
    });
}

// Function to extract YouTube video ID from URL
function getYoutubeVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

// Function to open preview modal
function openPreviewModal(beat) {
    const modal = document.getElementById('previewModal');
    const modalTitle = document.getElementById('modalTitle');
    const youtubeEmbed = document.getElementById('youtubeEmbed');
    const modalPrice = document.getElementById('modalPrice');
    
    // Set modal content
    modalTitle.textContent = beat.title;
    modalPrice.textContent = beat.price;
    
    // Get YouTube video ID
    const videoId = getYoutubeVideoId(beat.youtubeLink);
    
    // Create YouTube embed
    youtubeEmbed.innerHTML = `
        <iframe 
            src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
            title="${beat.title}" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;
    
    // Show modal
    modal.style.display = 'block';
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('previewModal');
    const youtubeEmbed = document.getElementById('youtubeEmbed');
    
    // Clear YouTube embed
    youtubeEmbed.innerHTML = '';
    
    // Hide modal
    modal.style.display = 'none';
    
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Load beats when page loads
    loadBeats();
    
    // Close modal when clicking the X
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside of modal content
    const modal = document.getElementById('previewModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal when pressing ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});
