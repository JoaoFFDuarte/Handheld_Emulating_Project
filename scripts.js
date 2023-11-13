/*---------------------------------------------------------------------------
---------------------------Template for all pages----------------------------
---------------------------------------------------------------------------*/
const template = document.createElement("template");

template.innerHTML = `
    <header>
        <h1>Handheld Emulating Digital Console</h1>
    </header>

    <nav>
        <ul>
            <li><a href="index.html" target="_self" id=index>Home</a></li>
            <li><a href="changelog.html" target="_self" id=changelog>Changelog</a></li>
            <li><a href="planning.html" target="_self" id=planning>Planning</a></li>
            <li><a href="product.html" target="_self" id=product>Product</a></li>
            <li><a href="about.html" target="_self" id=about>About</a></li>
            <li><a href="contacts.html" target="_self" id=contacts>Contact</a></li>
    
            <button id="toggleNightMode">Toggle Night Mode</button>
        </ul>
    </nav>
`;

document.body.insertBefore(template.content, document.body.firstChild);



/*---------------------------------------------------------------------------
--------------------------Night Mode Functionality---------------------------
---------------------------------------------------------------------------*/
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

/*---------------------------------------------------------------------------
----------------------Current page button functionality----------------------
---------------------------------------------------------------------------*/
// Get the current page's filename
var currentPage = window.location.pathname.split('/').pop();

// Remove the ".html" extension
currentPage = currentPage.replace('.html', '');

// Find the corresponding navigation link and add the 'active' class
var navLinks = document.getElementsByTagName('a');
for (var i = 0; i < navLinks.length; i++) {
    var link = navLinks[i];
    var linkPage = link.href.split('/').pop().replace('.html', '');

    if (currentPage === linkPage) {
        link.classList.add('active');
    }
}

/*---------------------------------------------------------------------------
-------------------------Changelog file functionality------------------------
---------------------------------------------------------------------------*/
// Specify the file path or URL
var filePath = "https://joaoffduarte.github.io/Handheld_Emulating_Project/changelog.txt";

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure it to GET the file
xhr.open('GET', filePath, true);

// Set the response type to 'text'
xhr.responseType = 'text';

// Define a callback function to handle the response
xhr.onload = function () {
    if (xhr.status === 200) {
        // Display the file contents in the 'fileContents' element
        document.getElementById('fileContents').textContent = xhr.responseText;
    } else {
        console.error('Failed to load the file.');
    }
};

// Send the request
xhr.send();