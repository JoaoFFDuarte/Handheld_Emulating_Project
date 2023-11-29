/*---------------------------------------------------------------------------
---------------------------Template for all pages----------------------------
---------------------------------------------------------------------------*/
const template = document.createElement("template");

template.innerHTML = `
    <header class="initialHeader">
        <h1>Handheld Emulating Digital Console</h1>
    </header>

    <div class="menu-toggle" onclick="toggleMenu()">&#9776;</div>

    <div class="popup-menu" id="myMenu">
        <h2>Menu</h2>

        <ul>
            <li>
                <a href="index.html" target="_self" id=index>🏠 Home</a>
                <a href="index.html" target="_self" style="float: right; margin-right: var(--emoji-margin)">🏠</a>
            </li>
            <li>
                <a href="changelog.html" target="_self" id=changelog>📝 Changelog</a>
                <a href="changelog.html" target="_self">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ03J8899E-Vh6SsuEscCHxh6ENeqE4qvTwPA4TFzzJUQ&s"></img>
                </a>
            </li>
            <li>
                <a href="planning.html" target="_self" id=planning>📅 Planning</a>
                <a href="planning.html" target="_self">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ03J8899E-Vh6SsuEscCHxh6ENeqE4qvTwPA4TFzzJUQ&s"></img>
                </a>
            </li>
            <li>
                <a href="product.html" target="_self" id=product>🎮 Product</a>
                <a href="product.html" target="_self">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ03J8899E-Vh6SsuEscCHxh6ENeqE4qvTwPA4TFzzJUQ&s"></img>
                </a>
            </li>
            <li>
                <a href="about.html" target="_self" id=about>🔎 About</a>
                <a href="about.html" target="_self">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ03J8899E-Vh6SsuEscCHxh6ENeqE4qvTwPA4TFzzJUQ&s"></img>
                </a>
            </li>
            <li>
                <a href="contacts.html" target="_self" id=contacts>🌐 Contact</a>
                <a href="contacts.html" target="_self">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ03J8899E-Vh6SsuEscCHxh6ENeqE4qvTwPA4TFzzJUQ&s"></img>
                </a>
            </li>
        </ul>
        <br>
        <button id="toggleNightMode">Toggle Night Mode</button>
    </div>`
;

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
----------------------Current page highlight functionality----------------------
---------------------------------------------------------------------------*/
// Get the current page's filename
var currentPage = window.location.pathname.split('/').pop();

// Remove the ".html" extension
currentPage = currentPage.replace('.html', '');

// Find the corresponding menu link and add the 'active' class
var menuLinks = document.getElementsByTagName('a');
for (var i = 0; i < menuLinks.length; i++) {
    var link = menuLinks[i];
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
        document.getElementById('fileContents').innerHTML = xhr.responseText.replace(/\n/g, '<br>');;
    } else {
        console.error('Failed to load the file.');
    }
};

// Send the request
xhr.send();



/*---------------------------------------------------------------------------
------------------------Toggle side-menu functionality-----------------------
---------------------------------------------------------------------------*/
// Toggle menu twice to get it in the right position
toggleMenu();
toggleMenu();

function toggleMenu() {
    // Access the menu element
    var menu = document.getElementById('myMenu');

    // Access the root element to access CSS variables
    var root = document.documentElement;

    // Get the value of the --menu-box-width variable as a float
    var width = parseFloat(getComputedStyle(root).getPropertyValue('--menu-box-width'));

    if (width >= 500){
        width -= 85;
    }
    // Altering where the left is
    menu.style.left = menu.style.left === '0px' ? -width + 'px' : '0px';
}