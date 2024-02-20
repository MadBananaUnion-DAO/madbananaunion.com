// Function to fetch and display images
function fetchImages() {
    // URLs of your images
    const imageUrls = [
        "https://via.placeholder.com/400x300",
        "https://via.placeholder.com/400x300",
        "https://via.placeholder.com/400x300",
        "https://via.placeholder.com/400x300",
        "https://via.placeholder.com/400x300",
        "https://via.placeholder.com/400x300",
        "https://via.placeholder.com/400x300",
        "https://via.placeholder.com/400x300",
        "https://via.placeholder.com/400x300",
        "https://via.placeholder.com/400x300"
    ];

    // Select the gallery container
    const gallery = document.querySelector('.gallery');

    // Loop through image URLs and create image elements
    imageUrls.forEach(url => {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image');

        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Placeholder Image';

        imageContainer.appendChild(img);
        gallery.appendChild(imageContainer);
    });
}

// Call fetchImages when the DOM content is loaded
document.addEventListener('DOMContentLoaded', fetchImages);

