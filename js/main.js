document.querySelector('.frog-image-1').addEventListener('mouseenter', function() {
    this.classList.add('shake');
    setTimeout(() => {
        this.classList.remove('shake');
    }, 500);
});