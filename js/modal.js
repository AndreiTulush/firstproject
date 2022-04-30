const btnOpenModal = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const btnCloseModalText = document.querySelector('.btn-secondary');
const btnCloseModalCroos = document.querySelector('.btn-close');


const btnsCloseModal = [btnCloseModalText, btnCloseModalCroos];

btnOpenModal.addEventListener('click', () => {
    modal.style.display = 'block';
});

btnsCloseModal.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});

document.addEventListener('click', e => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
})