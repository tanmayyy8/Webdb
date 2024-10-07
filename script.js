// Poem Search Functionality
function searchPoems() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const poems = document.querySelectorAll('.poem-card');

    poems.forEach(poem => {
        const title = poem.getAttribute('data-title').toLowerCase();
        if (title.includes(query)) {
            poem.style.display = "block";
        } else {
            poem.style.display = "none";
        }
    });
}

// Category Filter Functionality
function filterByCategory() {
    const category = document.getElementById('categoryFilter').value;
    const poems = document.querySelectorAll('.poem-card');

    poems.forEach(poem => {
        const poemCategory = poem.getAttribute('data-category');
        if (category === 'all' || poemCategory === category) {
            poem.style.display = "block";
        } else {
            poem.style.display = "none";
        }
    });
}
