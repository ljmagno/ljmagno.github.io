const switchTheme = () => {
    if (!document.documentElement.className.includes('dark')) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        return;
    }

    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');

}

const theme = localStorage.getItem('theme');
const isDarkTheme = (theme === 'dark');

if (isDarkTheme) document.documentElement.classList.add('dark');

document.addEventListener('keyup', (event) => {
    if (event.shiftKey && event.altKey && event.code === 'KeyD') switchTheme();
});