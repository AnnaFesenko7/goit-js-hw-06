const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
    if (!mail || !password) {
       const message = "Все поля должны быть заполнены.";
        alert(message);
        return
   }
   const formData = {
        mail,
        password,
    };
    console.log(formData);
   
    //  event.currentTarget.reset();
}