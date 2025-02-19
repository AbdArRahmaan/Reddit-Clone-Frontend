document.addEventListener("DOMContentLoaded", function() {
    const dropdownHeaders = document.querySelectorAll('.dropdown-header');

    dropdownHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const parentDropdown = header.parentElement;
            const dropdownContent = parentDropdown.querySelector('.dropdown-content');

            // Expand clicked dropdown
            parentDropdown.classList.toggle('expanded');
            if (parentDropdown.classList.contains('expanded')) {
                dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
            } else {
                dropdownContent.style.maxHeight = null;
            }
        });
    });
});
