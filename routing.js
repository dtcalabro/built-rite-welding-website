// Define your routes and their corresponding content
const routes = {
    '/': 'Home content',
    '/about': 'About content',
};

// Function to handle the route change
function handleRouteChange() {
    const path = location.hash || '/';
    const contentContainer = document.getElementById('content');

    if (routes.hasOwnProperty(path)) {
        // Render the content for the corresponding route
        contentContainer.textContent = routes[path];
    } else {
        // If the route doesn't exist, render a default page or show an error message
        contentContainer.textContent = 'Page not found';
    }
}

// Add event listener for route changes
window.addEventListener('hashchange', handleRouteChange);

// Initial route handling
handleRouteChange();