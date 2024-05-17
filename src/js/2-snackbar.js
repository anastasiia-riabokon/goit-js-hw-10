const radioFields = document.querySelectorAll('.radio-field');
const stateFieldset = document.querySelector('fieldset');

radioFields.forEach(radioField => {
  radioField.addEventListener('change', () => {
    stateFieldset.classList.add('radio-selected');
  });
});
