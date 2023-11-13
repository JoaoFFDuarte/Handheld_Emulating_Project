const template = document.getElementById("startup");

template.innerHTML = `
    <header>
        <h1>Handheld Emulating Digital Console</h1>
    </header>

    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="changelog.html" target="_self">Changelog</a></li>
            <li><a href="planing.html" target="_self">Planing</a></li>
            <li><a href="about.html" target="_self">About</a></li>
            <li><a href="contacts.html" target="_self">Contact</a></li>
        </ul>
    </nav>
`;

document.body.appendChild(template.content);