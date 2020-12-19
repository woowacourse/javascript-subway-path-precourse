const changeSelectTarget = (id) => {
  const $inputs = document.querySelectorAll('#select-container > input');
  $inputs.forEach((input) => input.removeAttribute('checked'));

  document.querySelector(`#${id}`).setAttribute('checked', true);
};

const checkTarget = ({ target }) => {
  if (target.nodeName === 'INPUT') {
    changeSelectTarget(target.id);
  }
};

export const select = () => {
  const $selectContainer = document.querySelector('#select-container');

  $selectContainer.addEventListener('click', checkTarget);
};
