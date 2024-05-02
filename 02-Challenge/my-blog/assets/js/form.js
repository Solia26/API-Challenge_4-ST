const myForm = document.querySelector("#blog-form");
const usernameInput = document.querySelector("#username")
const titleInput = document.querySelector("#title")

function submitHandler(event) {
    event.preventDefault();
    console.log("Hello");

    const data = {
        username: usernameInput.value,
        title: titleInput.value
    }

    localStorage.setItem("sampleData", JSON.stringify(data));

    location.href = "blog.html"
}

myForm.addEventListener("submit", submitHandler)

// const myBtn = document.querySelector("#sample-btn")
// // myBtn.textContent = "Hello"
// // myBtn.style.backgroundColor = "blue"

// function clickHandler(event) {

//     console.log(event)
//     console.log("clicked!")
// }

// myBtn.addEventListener("click", clickHandler)