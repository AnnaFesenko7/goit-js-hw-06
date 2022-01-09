const counter = {
  counterValue: 0,

  increment() {
  this.counterValue += 1;
  },
  
  decrement() {
  this.counterValue  -= 1;
  },
};


const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener('click',  () => {
  counter.decrement()
  valueEl.textContent = counter.counterValue;
});
incrementBtn.addEventListener('click', () => {
  counter.increment()
  valueEl.textContent = counter.counterValue;
});