const turnonButton = document.getElementById('turnon');
const turnoffButton = document.getElementById('turnoff');

async function turnonbutton() {
    const response = await fetch(
        "https://homeswitch.k-680.workers.dev/on"
    );

    const result = await response.text();

    console.log(result);
}

async function turnoffbutton() {
    const response = await fetch(
        "https://homeswitch.k-680.workers.dev/on"
    );

    const result = await response.text();

    console.log(result);
}