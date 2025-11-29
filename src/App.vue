<template>
    <div v-show="!isEditMode" id="display-view">
        <h1>User profile</h1>
        <img :src="image">
        
        <p><b>Name:</b> <span id="name">{{ name }}</span></p> <hr />
        <p><b>Email:</b> <span id="email">{{ email }}</span></p> <hr />
        <p><b>Interests:</b> <span id="Interests">{{ interests }}</span></p> <hr />
        <p><b>Birthday date:</b> <span id="birthday"></span></p> 

        <button @click="handleEditProfile">Edit Profile</button>
    </div>

    <div id="edit-view">
        <h1>User profile</h1>
        <img :src="image">
        
        <span>Name: </span>
        <input type="text" id="input-name" v-model="name"/>
        <hr />

        <span>Email: </span>
        <input type="text" id="input-email" :placeholder="email"/>
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
            image: image,
            name: "Anna Smith",
            email: "robustzig@example.com",
            interests: "coding",
            isEditMode: false
        }
    },
    async created() {
        const userData = await this.fetchUserProfile()
        this.name = userData.name 
        this.email = userData.email
        this.interests = userData.interests
    },
    methods: {
        handleEditProfile() {
            this.isEditMode = true
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
            this.isEditMode = false
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
        },
        async fetchUserProfile() {
    try {
        const res = await fetch('/get-profile')
        if (!res.ok) throw new Error('Network response not ok')
        const data = await res.json()
        this.userProfile = data
    } catch (err) {
        console.error("Failed to fetch profile:", err)
    }
},

// POST profile update
        async updateUserProfile(payload) {
    try {
        const res = await fetch('/update-profile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        const data = await res.json()
        console.log("Server response:", data)
    } catch (err) {
        console.error("Failed to update profile:", err)
    }
},
        async fetchUserProfile() {
            const res = await fetch('http://localhost:3000/get-profile');
            return await res.json();
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