const savedData = JSON.parse(localStorage.getItem("sampleData"))

console.log(savedData)


// const dummyData = document.querySelector("#dummy-data");

// dummyData.textContent = savedData

//    <div>
//        <p class="username">Sample username</p>
//        <p class="title">Sample title</p>
//    </div>

const myDiv = document.createElement("div")

const p1 = document.createElement("p")
p1.classList.add("username")
p1.textContent = savedData.username

const p2 = document.createElement("p")
p2.classList.add("title")
p2.textContent = savedData.title

myDiv.appendChild(p1)
myDiv.appendChild(p2)


const myContainer = document.querySelector("#container")

myContainer.appendChild(myDiv)



document.querySelector("#switch").addEventListener("click", function() {
    document.querySelector("body").style.backgroundColor ="black"
    document.querySelector("body").style.color ="white"
})
