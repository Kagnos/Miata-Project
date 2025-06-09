function openFullscreen(img) {
    const overlay = document.getElementById('img-overlay');
    const overlayImg = document.getElementById('overlay-img');
    const overlayCaption = document.getElementById('overlay-caption');

    overlayImg.src = img.src;

    const captionText = img.alt || 'Photo';
    const productLink = img.dataset.link;

    if (productLink) {
        overlayCaption.innerHTML = `<a href="${productLink}" target="_blank" rel="noopener noreferrer" style="color: #B4B4BE; text-decoration: underline;">${captionText}</a>`;
    } else {
        overlayCaption.textContent = captionText;
    }

    overlay.style.display = 'flex';
}

function closeFullscreen() {
    document.getElementById('img-overlay').style.display = 'none';
}
