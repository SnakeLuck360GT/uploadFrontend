const BACKEND_URL = "https://uploadbackend-s41j.onrender.com"; // Replace with your actual Render backend URL

document.getElementById("uploadForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById("fileInput");
    const status = document.getElementById("status");

    if (fileInput.files.length === 0) {
        status.innerText = "Please select an image.";
        return;
    }

    const formData = new FormData();
    formData.append("image", fileInput.files[0]);

    status.innerText = "Uploading...";

    try {
        const response = await fetch(`${BACKEND_URL}/upload`, {
            method: "POST",
            body: formData
        });

        const result = await response.text();
        status.innerText = result;
    } catch (error) {
        status.innerText = "Upload failed.";
    }
});
