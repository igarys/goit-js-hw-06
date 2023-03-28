
const form = document.querySelector('.login-form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const {
        elements: { email, password }
    } = e.currentTarget;
   
    const loginData = {
      email: email.value,
      password: password.value,
    };

    if (email.value === "" || password.value === "") {
      return alert(`Please fill all blank spaces`);
    }
  console.log(loginData);
  
    form.reset();
  });
  
  // console.log(`Email : ${email.value}, Password: ${password.value}`)


