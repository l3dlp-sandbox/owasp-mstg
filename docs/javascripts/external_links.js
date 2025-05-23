document$.subscribe(function () {
  if (
    (window.location.hostname === 'mas.owasp.org' || window.location.hostname === 'localhost') &&
    (window.location.pathname.startsWith('/MASTG') || window.location.pathname.startsWith('/MASVS'))
  ) {
    const links = document.links;

    for (let i = 0; i < links.length; i++) {
      const link = links[i];

      // Exclude links to mas.owasp.org
      if (link.hostname === 'mas.owasp.org') {
        continue; // Skip this link
      }

      // Exclude links that include github.com/OWASP and raw.githubusercontent.com/OWASP and github.com/cpholguera
      if (link.href.includes('github.com/OWASP') || link.href.includes('raw.githubusercontent.com/OWASP') || link.href.includes('github.com/cpholguera')) {
        continue; // Skip this link
      }

      if (link.hostname !== window.location.hostname) {
        link.setAttribute('target', '_blank');

        // Create an icon element (e.g., a small arrow)
        const icon = document.createElement('span');
        icon.textContent = ' ↗';

        // Append the icon to the link
        link.appendChild(icon);
      }
    }
  }
})
