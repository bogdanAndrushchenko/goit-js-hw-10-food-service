const theme = {
  light: 'light-theme',
  dark: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  inputSwich: document.querySelector('#theme-switch-control'),
}

refs.body.classList.add(theme.light)
refs.inputSwich.addEventListener('change', changeThemeHandle);

themeControl()

function changeThemeHandle(event) {
  const checked = event.currentTarget.checked;
  if (checked) checkedTrue();
  if (!checked) checkedFalse();
}

function checkedTrue() {
  refs.body.classList.remove(theme.light)
  refs.body.classList.add(theme.dark)
  localStorage.setItem('dark', refs.inputSwich.checked)
}

function checkedFalse() {
  refs.body.classList.remove(theme.dark)
  localStorage.removeItem('dark')
}

function themeControl() {
  const saveTheme = localStorage.getItem('dark');
  if (saveTheme) {
    checkedTrue();
    refs.inputSwich.checked = saveTheme;

  }
}



/**
   * Реализуй функционал изменения темы при нажатии (событие change) на чекбокс
   *  input.js-switch-input в тулбаре.

По умолчанию тема светлая.
При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
Выбранная тема должна сохраняться между перезагрузками страницы. 
Для хранения активной темы используй localStorage.
Если при загрузке страницы тема темная, 
не забудь поставить свойство checked у чекбокса input.js-switch-input в true, 
чтобы ползунок сдвинулся в правильное положение.
Для удобства хранения списка тем используй такое перечисление
   */
