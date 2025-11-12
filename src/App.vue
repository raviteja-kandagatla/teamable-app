<template>
    <div id="display-view">
        <h1>User profile</h1>
        <img :src="image">
        
        <p><b>Name:</b> <span id="name">Anna Smith</span></p>
        <p><b>Email:</b> <span id="email">robustzig@example.com</span></p>
        <p><b>Interests:</b> <span id="Interests">Coding</span></p>
        <p><b>Birthday date:</b> <span id="birthday"></span></p> 

        <button @click="handleEditProfile">Edit Profile</button>
    </div>

    <div id="edit-view">
        <h1>User profile</h1>
        <img :src="image">
        
        <span>Name: </span>
        <input type="text" id="input-name" placeholder="Anna Smith"/>
        <hr />

        <span>Email: </span>
        <input type="text" id="input-email" placeholder="robustzig@example.com"/>
        <hr />

        <span>Interests: </span>
        <input type="text" id="input-interest" placeholder="coding"/>
        <hr />
        
        <span>Birthday date: </span>
        <input type="text" id="birthday" />
        <hr /> 

        <button @click="handleDisplayProfile">Display Profile</button>
    </div>
</template>

<script>
import image from "./profile.jpg"
export default {
    name: "App",
    data() {
        return {
            image: image
        }
    },
    methods: {
        handleEditProfile() {
            var name = document.getElementById("name").textContent
            var inputName = document.getElementById("input-name")
            inputName.value = name

            var email = document.getElementById("email").textContent
            var updatedEmail = document.getElementById("input-email")

            var Interests = document.getElementById("Interests").textContent
            var inputInterests = document.getElementById("input-interest")
            inputInterests.value = Interests

            document.getElementById("edit-view").style.display = "block"
            document.getElementById("display-view").style.display = "none"
        },
        handleDisplayProfile() {
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
    }
}
</script>

<style>
img {
    width: 320px;
    height: 270px;
    display: block;
    margin-bottom: 40px;
}

div {
    margin: 40px auto;
    width: 80%; 
}

hr {
    width: 400px;
    margin: 25px 0;
}

button {
    width: 160px;
    font-size: 15px;
}

input {
    width: 200px;
    font-size: 15px;
    padding: 10px;
}

#edit-view {
    display: none; 
}

#display-view {
    display: block;
}

/*.datepicker {
    position: relative;
    margin-top: 0px;
    margin-bottom: 0px;
} */
</style>