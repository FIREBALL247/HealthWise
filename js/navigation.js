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