// Add interactivity to the website
document.addEventListener('DOMContentLoaded', () => {
    // Example: Highlight the header on page load
    const header = document.querySelector('header');
    if (header) {
        header.style.transition = 'background-color 0.5s ease';
        header.style.backgroundColor = '#005bb5'; // Darker shade for highlight
        setTimeout(() => {
            header.style.backgroundColor = '#007BFF'; // Revert to original color
        }, 1000);
    }

    // Example: Add hover effect to list items
    const listItems = document.querySelectorAll('ul li');
    listItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = '#007BFF';
            item.style.color = 'white';
        });
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = '#f4f4f4';
            item.style.color = '#333';
        });
    });
});