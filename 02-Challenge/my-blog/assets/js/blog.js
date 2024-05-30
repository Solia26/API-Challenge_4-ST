const myContainer = document.querySelector("#container")
const savedData = JSON.parse(localStorage.getItem("sampleData"))

console.log(savedData)
const data = []
for (const note of savedData) {
    const markup = `<div><p class="username">${note.username}</p>
    <p class="title">${note.title}</p>
    <p class="content">${note.content}</p>
    </div>` 
    data.push (markup)
}

myContainer.insertAdjacentHTML(`beforeend`,data.join(''))




// document.querySelector("#switch").addEventListener("click", function() {
//     document.querySelector("body").style.backgroundColor ="black"
//     document.querySelector("body").style.color ="white"
// })

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
