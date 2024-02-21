function showServiceImage() {
    var service = document.getElementById("serviceDropdown").value;
    var displayArea = document.getElementById("serviceImageDisplay");

    // Clear previous content
    displayArea.innerHTML = '';

    // Check the selected service and display the corresponding image
    if(service === "hair") {
        displayArea.innerHTML = '<img src="ali-pazani-3w14X-Yxffk-unsplash.jpg" alt="Hair Services">';
    } else if(service === "nails") {
        displayArea.innerHTML = '<img src="elena-russu-mZ1a9sFyFpA-unsplash.jpg" alt="Nail Services">';
    } else if(service === "lashes") {
        displayArea.innerHTML = '<img src="istockphoto-505975631-1024x1024.jpg" alt="Lash Services">';
    }
}

function toggleServiceOptions() {
    var service = document.getElementById("serviceDropdown").value;
    var hairOptions = document.getElementById("hairOptions");
    var nailsOptions = document.getElementById("nailsOptions");
    
    // Hide all options initially
    hairOptions.style.display = "none";
    nailsOptions.style.display = "none";
    
    // Show options based on the selected service
    if(service === "hair") {
        hairOptions.style.display = "block";
    } else if(service === "nails") {
        nailsOptions.style.display = "block";
    }
}
