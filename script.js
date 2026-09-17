
async function turnonbutton() {
    const response = await fetch(
        "https://homeswitch.k-680.workers.dev/on"
    );

    const result = await response.text();

    console.log(result);
    updateStatus();
}

async function turnoffbutton() {
    const response = await fetch(
        "https://homeswitch.k-680.workers.dev/off"
    );

    const result = await response.text();

    console.log(result);
    updateStatus();
}

async function updateStatus() {
  const statusDiv = document.getElementById("state");
  statusDiv.textContent = "Status: loading...";

  try {
    const response = await fetch("https://homeswitch.k-680.workers.dev/status");
    const result = await response.text();
    text = result == 1 ? "ON" : "OFF";
    
    statusDiv.textContent = "API Status: " + text;
  } catch (err) {
    statusDiv.textContent = "API Status: error";
    console.error("Failed to fetch status:", err);
  }
  //setInterval(updateStatus, 5000); // Update status every 5 seconds
}

updateStatus();
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}