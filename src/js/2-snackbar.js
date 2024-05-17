import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'izitoast/dist/css/iziToast.css';
import iconError from '../img/icon-error.svg';
import iconSuccess from '../img/icon-success.svg';
import iconClose from '../img/icon-close.svg';

const ref = {
  radioFields: document.querySelectorAll('.radio-field'),
  stateFieldset: document.querySelector('fieldset'),
  form: document.querySelector('.form'),
};

const { radioFields, stateFieldset, form } = ref;

radioFields.forEach(radioField => {
  radioField.addEventListener('change', () => {
    stateFieldset.classList.add('radio-selected');
  });
});

function outputMessage(type, delay) {
  //   iziToast.settings({
  //     timeout: 5000,
  //     closeOnEscape: true,
  //     transitionIn: 'fadeInLeft',
  //     transitionOut: 'fadeOutUp',
  //     titleSize: '16',
  //     titleLineHeight: '24',
  //     messageSize: '16',
  //     messageLineHeight: '24',
  //     titleColor: '#FFF',
  //     messageColor: '#FFF',
  //     position: 'topRight',
  //     class: 'custom-font',
  //   });

  switch (type) {
    case 'error-message':
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${delay}ms`,
        backgroundColor: '#EF4040',
        iconUrl: iconError,
        timeout: 1000000000,
        closeOnEscape: true,
        transitionIn: 'fadeInLeft',
        transitionOut: 'fadeOutUp',
        titleSize: '16',
        titleLineHeight: '24',
        messageSize: '16',
        messageLineHeight: '24',
        titleColor: '#FFF',
        messageColor: '#FFF',
        position: 'topRight',
        class: 'custom-font',
      });
      break;
    case 'success-message':
      iziToast.success({
        title: 'OK',
        message: `Fulfilled promise in ${delay}ms`,

        backgroundColor: '#59A10D',
        progressBarColor: '#B5EA7C',
        iconUrl: iconSuccess,
        timeout: 5000,
        closeOnEscape: true,
        transitionIn: 'fadeInLeft',
        transitionOut: 'fadeOutUp',
        titleSize: '16',
        titleLineHeight: '24',
        messageSize: '16',
        messageLineHeight: '24',
        titleColor: '#FFF',
        messageColor: '#FFF',
        position: 'topRight',
        class: 'custom-font',
      });
      break;
    default:
      iziToast.error({
        title: 'Error',
        message: 'Illegal operation',
        backgroundColor: '#EF4040',
        iconUrl: iconError,
        timeout: 5000,
        closeOnEscape: true,
        transitionIn: 'fadeInLeft',
        transitionOut: 'fadeOutUp',
        titleSize: '16',
        titleLineHeight: '24',
        messageSize: '16',
        messageLineHeight: '24',
        titleColor: '#FFF',
        messageColor: '#FFF',
        position: 'topRight',
        class: 'custom-font',
      });
  }
}

form.addEventListener('submit', event => {
  generatorPromise(event)
    .then(result => outputMessage(result.type, result.delay))
    .catch(error => outputMessage(error.type, error.delay));
  event.target.reset();
});

function generatorPromise(event) {
  event.preventDefault();
  const valueDelay = +event.target.elements.delay.value;
  const valueRadio = event.target.elements.state.value;

  return new Promise((resolve, reject) => {
    if (isNaN(valueDelay)) {
      return outputMessage('error');
    }

    setTimeout(() => {
      if (valueRadio === 'fulfilled') {
        resolve({ type: 'success-message', delay: valueDelay });
      } else if (valueRadio === 'rejected') {
        reject({ type: 'error-message', delay: valueDelay });
      }
    }, valueDelay);
  });
}
