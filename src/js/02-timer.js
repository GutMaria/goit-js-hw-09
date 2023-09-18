// Підключаємо бібліотеку

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// 
const refs = {
    days: document.querySelector('.value[data-days]'),
    hours: document.querySelector('.value[data-hours]'),
    minutes: document.querySelector('.value[data-minutes]'),
    seconds: document.querySelector('.value[data-seconds]')
}

const btnStart = document.querySelector('button[data-start]');
btnStart.addEventListener('click', onStartClick);

let selectedDate = null;
let timerId = null;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        selectedDate = selectedDates[0].getTime();
      if (selectedDate > Date.now()) { btnStart.removeAttribute("disabled", "disabled") }
      else { window.alert('Please choose a date in the future') }
        
  },
};

flatpickr('input#datetime-picker', options);



function onStartClick() {
    timerId = setInterval(timer,1000)
 }

function timer() {
  let counter = selectedDate - Date.now();
  if (counter <= 0) {
    clearInterval(timerId);
    return
  }
    let data = convertMs(counter);
    timerDisplay(data);
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

    // console.log(days, hours, minutes, seconds);
    return { days, hours, minutes, seconds };
}

function timerDisplay({days, hours, minutes, seconds }) {
refs.days.textContent=addLeadingZero(days);
refs.hours.textContent=addLeadingZero(hours);
refs.minutes.textContent=addLeadingZero(minutes);
refs.seconds.textContent=addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}

