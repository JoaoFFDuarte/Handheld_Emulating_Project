const template = document.createElement("template");

template.innerHTML = `
    <header>
        <h1>Handheld Emulating Digital Console</h1>
        <button id="toggleNightMode">Toggle Night Mode</button>
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
    </nav>
`;

document.body.insertBefore(template.content, document.body.firstChild);


document.addEventListener('DOMContentLoaded', function () {
    const toggleNightModeButton = document.getElementById('toggleNightMode');
    const body = document.body;

    toggleNightModeButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });
});