const selectElement = (element) => document.querySelector(element);
selectElement('.hamburguer').addEventListener('click', () => {
    selectElement('.hamburguer').classList.toggle('active');
    selectElement('.nav-list').classList.toggle('active');
});
