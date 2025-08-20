document.addEventListener("DOMContentLoaded", () => {
    loadPage("home"); // Load default home page

    document.querySelectorAll("[data-page]").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const page = link.getAttribute("data-page");
            loadPage(page);
        });
    });
});

function loadPage(pageName) {
    fetch(`content/${pageName}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(() => {
            document.getElementById("content").innerHTML = "<p>Page not found.</p>";
        });
}
