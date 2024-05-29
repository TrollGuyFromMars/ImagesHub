document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupDescription = document.getElementById("popup-description");
    const closeBtn = document.querySelector(".popup .close");

    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            const title = item.getAttribute("data-title");
            const description = item.getAttribute("data-description");

            popupTitle.textContent = title;
            popupDescription.textContent = description;
            popup.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target == popup) {
            popup.style.display = "none";
        }
    });
});
