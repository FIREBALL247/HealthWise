
// Get the form element
const form = document.getElementById('contact-form');

// Add an event listener for form submission
form.addEventListener('submit', validateForm);

// Validation function
function validateForm(event) {
  // Prevent default form submission
  event.preventDefault();

  // Get form elements
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;

  // Name validation
  if (!/^[a-zA-Z ]+$/.test(name)) {
    alert('Name can only contain letters and spaces.');
    return;
  }

  // Phone validation
  if (phone.length < 8 || phone.length > 11) {
    alert('Phone number must be between 8 and 11 digits.');
    return;
  }
  if (!/^[0-9]+$/.test(phone)) {
    alert('Phone number can only contain digits.');
    return;
  }

  // Email validation
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    alert('Invalid email address.');
    return;
  }

  // If all validations pass, show form result
  showFormResult();
}

// Function to show form result
function showFormResult() {
  const formResult = document.getElementById('form-result');
  formResult.classList.remove('hidden');
  // formResult.innerHTML = 'Your Appointment has been booked! We will get back to you shortly.';
  form.reset();
}


const navButton = document.querySelector(".nav-button")
const navigation = document.querySelector(".navigation")


navButton.addEventListener("click", (e) =>{
    const active = (navigation.getAttribute("active"))


    if(active == "true"){
        navigation.setAttribute("active", false)
        navButton.setAttribute("close", false)

    }
    if(active == "false"){
        navigation.setAttribute("active", true)
        navButton.setAttribute("close", true )

    }

})