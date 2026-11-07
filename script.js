function turnOffAllLights() {
    document.getElementById("redLight").style.backgroundColor = "gray";
    document.getElementById("yellowLight").style.backgroundColor = "gray";
    document.getElementById("greenLight").style.backgroundColor = "gray";
}

function stopLight() {
    turnOffAllLights();
    document.getElementById("redLight").style.backgroundColor = "red";
    document.getElementById("message").textContent = "STOP! Red Light";
    document.getElementById("message").style.color = "red";
}

function readyLight() {
    turnOffAllLights();
    document.getElementById("yellowLight").style.backgroundColor = "#f1c40f";
    document.getElementById("message").textContent = "WAIT! Yellow Light";
    document.getElementById("message").style.color = "#f1c40f";
}

function goLight() {
    turnOffAllLights();
    document.getElementById("greenLight").style.backgroundColor = "green";
    document.getElementById("message").textContent = "GO! Green Light";
    document.getElementById("message").style.color = "green";
}

document.getElementById('vehicleForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const driverName = document.getElementById('name').value;
    const vehicleType = document.getElementById('vehicleType').value;
    const destination = document.getElementById('destination').value;
    const purpose = document.getElementById('purpose').value;

    const summaryDiv = document.getElementById('registrationSummary');

    summaryDiv.innerHTML = `
        <h3 style="color: #27ae60; margin-top: 0; margin-bottom: 12px;">Registration Successful!</h3>
        <p style="margin: 6px 0;"><strong>Driver's Name:</strong> ${driverName}</p>
        <p style="margin: 6px 0;"><strong>Vehicle Type:</strong> ${vehicleType}</p>
        <p style="margin: 6px 0;"><strong>Destination:</strong> ${destination}</p>
        <p style="margin: 6px 0;"><strong>Purpose of Travel:</strong> ${purpose}</p>
    `;

    summaryDiv.style.display = 'block';
});