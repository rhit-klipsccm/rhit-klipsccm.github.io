function toggleSection(header, id) {
    let section = document.getElementById(id);
    section.classList.toggle("hidden");

    if (section.classList.contains("hidden")) {
        header.textContent = "▶ " + header.textContent.substring(2);
    } 
    else {
        header.textContent = "▼ " + header.textContent.substring(2);
    }
}