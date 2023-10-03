
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const form = document.querySelector('.form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
    let formElements = evt.currentTarget.elements;
    let delay = Number(formElements.delay.value);
    let step = Number(formElements.step.value);
    let amount = Number(formElements.amount.value);

    // console.log(delay, step, amount);

    for (let i = 1; i <= amount; i += 1){
        createPromise(i, delay).then(onResolve).catch(onReject);
        delay += step;
    }
}




function createPromise(position, delay) {

    return new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3;
        
        setTimeout(() => {
            if (shouldResolve) {
                resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
            } else {
                reject(`❌ Rejected promise ${position} in ${delay}ms`)
            }
        }, delay)
    });
    
};
    

function onResolve(result) {
  Notify.success(result);
};

function onReject(error) {
  Notify.failure(error);
};
