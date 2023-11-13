document.addEventListener('DOMContentLoaded', function () {
    const toggleNightModeButton = document.getElementById('toggleNightMode');
    const body = document.body;

    toggleNightModeButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });
});