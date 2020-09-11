import itemTemplate from"../templates/galery-items.hbs";
const tech = ['HTML', 'CSS', 'JS', 'React'];

const galleryRef = document.querySelector('.js-gallery');

// const markup = tech.map((el) => `<li><a href = ''>${el}</a></li>`).join('');

// const element = "<li><a href = ''>Hello</a></li>";



const markup = itemTemplate(tech);

galleryRef.insertAdjacentHTML('beforeend', markup);


