const modoBtn = document.getElementById('modoBtn');
const storageKey = 'themeMode';

function updateModoIcon() {
    if (!modoBtn) return;
    const icon = modoBtn.querySelector('i');
    if (!icon) return;

    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('bx-moon');
        icon.classList.add('bx-sun');
    } else {
        icon.classList.remove('bx-sun');
        icon.classList.add('bx-moon');
    }
}

function setDarkMode(enabled) {
    if (enabled) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    updateModoIcon();
    localStorage.setItem(storageKey, enabled ? 'dark' : 'light');
}

function toggleDarkMode() {
    setDarkMode(!document.body.classList.contains('dark-mode'));
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem(storageKey);
    setDarkMode(savedTheme === 'dark');

    if (modoBtn) {
        modoBtn.addEventListener('click', toggleDarkMode);
    }
});
