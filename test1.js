const form = document.querySelector('.form[action="/cart/add"]');
const btn = document.createElement('button');
const formInputs = [...form.querySelectorAll('input')].filter(element => element.name.includes('properties'))
//  Buttons personalization
btn.textContent = 'clear form'
btn.type = 'button'
btn.setAttribute('disabled', 'true')
///
form.style = 'display:flex; flex-direction:column;'
form.insertBefore(btn, form.querySelector('.product-form__buttons'))
// Events
btn.addEventListener('click', _ => {
  formInputs.forEach(element => { element.value = '' });
  btn.setAttribute('disabled', 'true')
})

formInputs.forEach(element => {
  element.addEventListener('keyup', _ => {
    if (formInputs.some(input => input.value.split('').length)) {
      btn.removeAttribute('disabled')
    }
  })
});
