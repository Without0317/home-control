async function turnonbutton() {
    const response = await fetch(
        "https://homeswitch.k-680.workers.dev/on"
    );

    const result = await response.text();

    console.log(result);
}

async function turnoffbutton() {
    const response = await fetch(
        "https://homeswitch.k-680.workers.dev/off"
    );

    const result = await response.text();

    console.log(result);
}