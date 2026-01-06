document.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById("form");
    let input = document.getElementById("input");
    let msg = document.getElementById("msg");
    let posts = document.getElementById("posts");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("button clicked");

         formValidation();
    });
});

let formValidation = () => {
    if(input.value === ""){
        msg.innerHTML = "Text cannot be blank.";
    } else {
        msg.innerHTML = "";
        acceptData();
    }
}

let data = {};
let acceptData = () => {
    data["text"] = input.value;
    console.log(data);

    createText();
};

let createText = () => {
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick="editText(this)" class="fas fa-edit"></i>
            <i onClick="deleteText(this)" class=" fas fa-trash-alt"></i>
        </span>
    </div>
    `;

    input.value = "";
}


let deleteText = (e) => {
   e.parentElement.parentElement.remove();
}