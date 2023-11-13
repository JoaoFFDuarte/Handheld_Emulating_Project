const template = document.createElement("template");

template.innerHTML = `
    <header>
        <h1>Handheld Emulating Digital Console</h1>
    </header>

    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="changelog.html" target="_self">Changelog</a></li>
            <li><a href="planning.html" target="_self">Planning</a></li>
            <li><a href="product.html" target="_self">Product</a></li>
            <li><a href="about.html" target="_self">About</a></li>
            <li><a href="contacts.html" target="_self">Contact</a></li>
        </ul>
        <button id="toggleNightMode">Toggle Night Mode</button>
    </nav>
`;

document.body.insertBefore(template.content, document.body.firstChild);


document.addEventListener('DOMContentLoaded', function () {
    const toggleNightModeButton = document.getElementById('toggleNightMode');
    const body = document.body;

    // Function to set dark mode based on user preference
    const setDarkMode = (isDarkMode) => {
        body.classList.toggle('dark-mode', isDarkMode);
    };

    // Check if dark mode preference is stored in local storage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Apply dark mode based on stored preference
    setDarkMode(isDarkMode);

    toggleNightModeButton.addEventListener('click', function () {
        // Toggle dark mode class on body
        body.classList.toggle('dark-mode');

        // Store the dark mode preference in local storage
        const isDarkModeNow = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkModeNow);
    });
});
