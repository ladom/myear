var closeButton = document.querySelector('.text__button');

function closeWindow() {
    console.log('clicked');
    document.querySelector('.text').classList.add('hide');
}

closeButton.addEventListener('click', closeWindow);