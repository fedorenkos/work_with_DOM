const collections = document.querySelectorAll('ul'),
    elems = document.querySelectorAll('li'),
    blocks = document.querySelectorAll('.book'),
    adv = document.querySelector('.adv'),
    alink =document.querySelectorAll('a'),
    bg = document.getElementsByTagName('body');
console.log(collections);
console.log(elems);
console.log(blocks);
console.log(adv);
console.log(alink);
console.log(bg);
// Удалить рекламу со страницы
adv.remove();

// Восстановить порядок книг.
blocks[0].before(blocks[1]);
blocks[5].after(blocks[2]);
blocks[2].before(blocks[3]);
blocks[4].after(blocks[3]);

// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)

// book2
elems[10].before(elems[2]);
elems[8].after(elems[7]);
elems[4].before(elems[6]);
elems[4].before(elems[8]);

// book5

elems[48].before(elems[55]);
elems[54].before(elems[51]);
elems[50].after(elems[48]);

// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

const elemClone = elems[25].cloneNode(true);
elemClone.textContent = 'Глава 8: За пределами ES6';
elems[26].before(elemClone);

// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")

alink[4].textContent = 'Книга 3. this и Прототипы Объектов';

// Заменить картинку заднего фона на другую из папки image

// bg[0].body.style.backgroundImage = 'image/you-dont-know-js.jpg';
function changeBg(){
    bg[0].style.backgroundImage = "url('image/you-dont-know-js.jpg')";
}
changeBg();