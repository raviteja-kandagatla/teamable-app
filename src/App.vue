<template>
    <div id="display-view">
        <h1>User profile</h1>
        <img src="profile.jpg">
        
        <p><b>Name:</b> <span id="name">Anna Smith</span></p>
        <p><b>Email:</b> <span id="email">robustzig@example.com</span></p>
        <p><b>Interests:</b> <span id="Interests">Coding</span></p>
        <p><b>Birthday date:</b> <span id="birthday"></span></p> 

        <button onclick="handleEditProfile()">Edit Profile</button>
    </div>

    <div id="edit-view">
        <h1>User profile</h1>
        <img src="profile.jpg">
        
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
    export default {
        name: "App",
    }
</script>
