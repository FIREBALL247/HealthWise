

 // Form Submission Handling

 const signupForm = document.getElementById('contact-form');
 const signupResult = document.getElementById('contact-result');







 if (signupForm) {
     signupForm.addEventListener('submit', function(event) {
         event.preventDefault();
         signupResult.classList.remove('hidden');
         signupForm.reset(); // Clear the form
     });
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









// // get all the elements you need
// const contactButton = document.querySelector(".contact-button")
// const usernameElement = document.querySelector(".username")
// const phoneNumberElement = document.querySelector(".phone-number")
// const nameErrorElement = document.querySelector(".nameError")
// const phoneErrorElement = document.querySelector(".phoneError")



// // Add the event listener

// contactButton.addEventListener("click", (e) =>{
//     e.preventDefault()


//     // get the username value
//     const username = usernameElement.value

//     // get the phone number value
//     const phoneNumber = phoneNumberElement.value

//     // get the length of the number
//     const lengthofNumber = phoneNumber.length

    


//     const usernameRegex = /[-]/


//     // create the function to check whether the user inputed the correct values
//     function test(){

//         const userTest = usernameRegex.test(username)
//         // console.log(userTest)

//         // check if lenght of number is greater than 11
//         if (lengthofNumber !== 11) {
//             phoneErrorElement.textContent = "Phone number requires 11 digits"
//         }

//         // check the test case
//         if(!userTest){
//             usernameElement.textContent = "Username requires more than one letter and only '-' as a special character"
//         }


//     }

//     // call the function you wrote

//     test()
    

// })


// // Sign UP FORM

// // const signupButton =document.querySelector("signup-Button");
// // const passwordElement = document.querySelector(".signup-password");
// // const passwordErrorElement = document.querySelector(".passwordError");


// // signupButton.addEventListener ("click", (e) =>{
// //     e.preventDefault

    

// //     const password = passwordElement.value
// //     const passwordLength = password.length
// // })
