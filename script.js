// document.addEventListener("DOMContentLoaded", function() {
//     const colors = ["#ed077b", "#f6821f"];
//     const nameDiv = document.querySelector(".name");
//     const text = nameDiv.textContent;
//     nameDiv.innerHTML = "";
    
//     for (let i = 0; i < text.length; i++) {
//         const span = document.createElement("span");
//         span.textContent = text[i];
//         span.style.color = colors[i % colors.length];
//         nameDiv.appendChild(span);
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    const colors = ["#ed077b", "#f6821f"];
    const nameText = document.getElementById("name-text");
    const nameInput = document.getElementById("name-input");
    const editButton = document.getElementById("edit-button");
    const saveButton = document.getElementById("save-button");

    function colorizedName() {
        const text = nameText.textContent;
        nameText.innerHTML = "";
        
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement("span");
            span.textContent = text[i];
            span.style.color = colors[i % colors.length];
            nameText.appendChild(span);
        }
    }

    editButton.addEventListener("click", function() {
        nameInput.value = nameText.textContent;
        nameText.style.display = "none";
        nameInput.style.display = "inline";
        editButton.style.display = "none";
        saveButton.style.display = "inline";
    });

    saveButton.addEventListener("click", function() {
        nameText.textContent = nameInput.value;
        nameText.style.display = "inline";
        nameInput.style.display = "none";
        editButton.style.display = "inline";
        saveButton.style.display = "none";
        colorizedName();
    });

    colorizedName();
});

document.getElementById('upload-button').addEventListener('click', function() {
    document.getElementById('file-input').click();
});

document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profile-picture').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});
