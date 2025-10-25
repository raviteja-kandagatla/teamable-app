function handleEditProfile() {
    document.getElementById("edit-view").style.display = "block"
    document.getElementById("display-view").style.display = "none"
}

function handleDisplayProfile() {
    var updatedName = document.getElementById("input-name").value
    var name = document.getElementById("name")
    name.textContent = updatedName


    document.getElementById("display-view").style.display = "block"
    document.getElementById("edit-view").style.display = "none"
}
