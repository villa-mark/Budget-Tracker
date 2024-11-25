function loadPage(page) {
    const content = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('.nav-link'); // Select all navigation links

    // Update active class for navigation links
    navLinks.forEach(nav => {
        if (nav.id === page) {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');
        }
    });

    // Scroll content to top
    content.scrollTo(0,0);

    // Fetch and load the page content dynamically
    fetch(`page/${page}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load page: ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            content.innerHTML = html;
        })
        .catch(err => {
            content.innerHTML = `<p>Failed to load the page. Please try again later.</p>`;
            console.error(err);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Attach event listeners to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const page = link.id; // Get the `id` of the clicked link
            loadPage(page);
        });
    });

    // Load the default page
    loadPage('dashboard');
});
