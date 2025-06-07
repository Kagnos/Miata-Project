function openFullscreen(img) {
    const overlay = document.getElementById('img-overlay');
    const overlayImg = document.getElementById('overlay-img');
    const overlayCaption = document.getElementById('overlay-caption');

    overlayImg.src = img.src;
    overlayCaption.textContent = img.alt || 'Photo'; // Use alt as caption
    overlay.style.display = 'flex';
}

function closeFullscreen() {
    document.getElementById('img-overlay').style.display = 'none';
}
