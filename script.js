document.addEventListener('DOMContentLoaded', () => {
  const linksContainer = document.getElementById('links-container');

  fetch('links.json')
    .then(response => response.json())
    .then(links => {
      links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.name;
        a.target = '_blank';
        linksContainer.appendChild(a);
      });
    })
    .catch(error => console.error('Error loading links:', error));
});