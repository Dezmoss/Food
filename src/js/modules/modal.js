function openModal(modalSelector, modalTimerID) {
    const modalWindow = document.querySelector(modalSelector);

    modalWindow.classList.add('show');
    modalWindow.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    if (modalTimerID) {
        clearInterval(modalTimerID);
    }
}

function closeModal(modalSelector) {
    const modalWindow = document.querySelector(modalSelector);

    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerID) {
    // Modal

    const modalTrigger = document.querySelectorAll(triggerSelector),
        modalWindow = document.querySelector(modalSelector);

    modalTrigger.forEach(item => {
        item.addEventListener('click', () => openModal(modalSelector, modalTimerID));
    });

    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    function showModalAtEnd() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerID);
            window.removeEventListener('scroll', showModalAtEnd);
        }
    }

    window.addEventListener('scroll', showModalAtEnd);
}

export default modal;
export {closeModal, openModal};