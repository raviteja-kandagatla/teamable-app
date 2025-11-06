function handleEditProfile() {
  //  new Datepicker('#birthday'); //
    var name = document.getElementById("name").textContent
    var inputName = document.getElementById("input-name")
    inputName.value = name

    var email = document.getElementById("email").textContent
    var updatedEmail = document.getElementById("input-email")
    
  //  if (validator.isEmail(updatedEmail.value)) {
       // email.textContent = updatedEmail
   // } else {
    //    alert("wrong email format")
   // } 
    //

    var Interests = document.getElementById("Interests").textContent
    var inputInterests = document.getElementById("input-interest")
    inputInterests.value = Interests

    document.getElementById("edit-view").style.display = "block"
    document.getElementById("display-view").style.display = "none"
}

function handleDisplayProfile() {
    var updatedName = document.getElementById("input-name").value
    var name = document.getElementById("name")
    name.textContent = updatedName
    
    var updatedEmail = document.getElementById("input-email").value
    var email = document.getElementById("email")
    email.textContent = updatedEmail

    var updatedInterests = document.getElementById("input-interest").value
    var Interests = document.getElementById("Interests")
    Interests.textContent = updatedInterests

    document.getElementById("display-view").style.display = "block"
    document.getElementById("edit-view").style.display = "none"
}