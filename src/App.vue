<template>
    <div id="display-view">
        <h1>User profile</h1>
        <img :src="image">
        
        <p><b>Name:</b> <span id="name">Anna Smith</span></p>
        <p><b>Email:</b> <span id="email">robustzig@example.com</span></p>
        <p><b>Interests:</b> <span id="Interests">Coding</span></p>
        <p><b>Birthday date:</b> <span id="birthday"></span></p> 

        <button onclick="handleEditProfile()">Edit Profile</button>
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

        <button onclick="handleDisplayProfile()">Display Profile</button>
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