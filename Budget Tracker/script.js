function loadPage(page) {
    const content = document.getElementById('main-content');
    content.scrollTo(0, 0);
    // Use fetch to get the page content dynamically
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(html => {
            content.innerHTML = html;  // Insert the content into the #content area
        })
        .catch(err => {
            content.innerHTML = "<p>Failed to load page</p>";
            console.error(err);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    loadPage('dashboard');
});
