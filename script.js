const turnonButton = document.getElementById('turnon');
const turnoffButton = document.getElementById('turnoff');

turnonButton.addEventListener('click', () => {
    fetch('https://homeswitch.k-680.workers.dev/on')
});

turnoffButton.addEventListener('click', () => {
    fetch('https://homeswitch.k-680.workers.dev/off')
});