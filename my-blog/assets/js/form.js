const myForm = document.querySelector("#blog-form");


myForm.addEventListener("submit", submitHandler)

function submitHandler(event) {
    event.preventDefault();
    console.log(event.target.elements);
    const {username, title, usercomment} = event.target.elements
    console.log(username.value)
const data = JSON.parse(localStorage.getItem("sampleData")) || [];
console.log(data)
    const formData = {
        username: username.value,
        comment: usercomment.value,
        title: title.value
    }
data.push(formData)
localStorage.setItem("sampleData", JSON.stringify(data)) 
    location.href = "blog.html"
}



 // function to set a given theme/color-scheme
 function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
      document.getElementById('slider').checked = true;
    }
})();
