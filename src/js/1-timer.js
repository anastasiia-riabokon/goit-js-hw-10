import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/flatpickr.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'izitoast/dist/css/iziToast.css';

const inputEl = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const output = document.querySelector('.js-timer');

const dateDays = output.querySelector('[data-days]');
const dateHours = output.querySelector('[data-hours]');
const dateMinutes = output.querySelector('[data-minutes]');
const dateSeconds = output.querySelector('[data-seconds]');
let userSelectedDate;
let id;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
  },
  onChange(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate < options.defaultDate) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
        closeOnEscape: true,
        theme: 'dark',
        backgroundColor: '#EF4040',
        titleColor: '#FFF',
        messageColor: '#FFF',
        iconUrl: '../img/icon-error.svg',
      });
      btnStart.disabled = true;
    } else {
      btnStart.disabled = false;
      const toast = document.querySelectorAll('.iziToast');
      if (toast) {
        toast.forEach(message => iziToast.hide({}, message));
      }
    }
  },
};

const date = flatpickr(inputEl, options);

btnStart.addEventListener('click', startTimer);

function updTimer() {
  const currentDate = Date.now();

  const diff = userSelectedDate - currentDate;
  if (diff <= 0) {
    clearInterval(id);
    inputEl.disabled = false;
    btnStart.disabled = false;
    return;
  }
  const { days, hours, minutes, seconds } = convertMs(diff);
  dateDays.textContent = addLeadingZero(days);
  dateHours.textContent = addLeadingZero(hours);
  dateMinutes.textContent = addLeadingZero(minutes);
  dateSeconds.textContent = addLeadingZero(seconds);
}

function startTimer() {
  updTimer();
  id = setInterval(updTimer, 1000);
  inputEl.disabled = true;
  btnStart.disabled = true;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
