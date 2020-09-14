import templates from '../templates/menu_list.hbs'
import menuList from '../menu.json';

const markup = templates(menuList);

const menuRef = document.querySelector(".js-menu");
menuRef.insertAdjacentHTML('beforeend', markup);

console.log(menuList);
console.log(markup);