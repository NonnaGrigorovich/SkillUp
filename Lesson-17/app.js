
// console.log(document)
// console.log(window)
// console.log(document.documentElement)
// console.log(document.body)
// console.log(document.body.children)
// console.log(document.body.children[1])   // вертає перший елемент
// console.log(document.body.firstElementChild)   // вертає нульовий елемент
// console.log(document.body.lastElementChild)   // вертає останній елемент

// console.log(document.body.firstElementChild.nextElementSibling)   // вертає наступний елемент після першого

// console.log(document.body.lastElementChild.previousElementSibling)  // вертає передостанній елемент

// console.log(document.body.lastElementChild.parentElement)  // вертає батьківський елемент

// console.log(document.body.children[2].children[1])

// for (let i = 0; i < document.body.children.length; i++) {
//     console.log(document.body.children[i])
// }

// for (const item of document.body.children) {
//     console.log(item); 
// }


let title = document.getElementById("title")  // пошук елемента по id
// console.log(title)

// let text = document.getElementsByClassName("text")  // пошук елемента по class
// console.log(text)

// let li = document.getElementsByTagName("li")  // пошук елемента по TagName
// console.log(li)

let text = document.querySelector(".text")  //повертає елемент
// console.log(text)

let li = document.querySelectorAll("li")  //повертає NodeList(структура яка виглядає як массив і працює з деякими методами массиву {псевдомассив})
// console.log(li)
// li.forEach((item) => console.log(item))


//03.02.2023
// console.log(title.hasAttribute("class"))  //false - тому що class відсутній
// console.log(title.hasAttribute("id"))  //true - тому що id присутнє
// console.log(title.getAttribute("id"))  //title - отримуємо значення атрибуту id, тому що id title є
// console.log(title.getAttribute("class"))  //null - тому що class title немає
// console.log(text.getAttribute("class"))  //text - отримуємо значення атрибуту class, тому що class text є


// title.setAttribute("name", "hello-name")  //задаємо для елемента якийсь атрибут (перше - назва атрибуту, друге - значення атрибуту)
// title.setAttribute("class", "class-name")
// title.removeAttribute("name")  //видаляємо атрибут


// let h1 = document.createElement("h1")  //створює новий елемент
// h1.textContent = "Hello h1"  //додає контент до елементу
// // h1.setAttribute("class", "red")
// h1.innerHTML = "<span> Hi Jack </span>"  //додає html теги
// h1.style.color = "purple"
// h1.style.backgroundColor = "aqua"
// h1.style.padding = "15px 40px"
// // document.body.prepend(h1)  //prepend - додає елемент на старт
// document.body.append(h1)  //append - додає  елемент в кінець

// // document.body.firstElementChild.before(h1)  //новий елемент ставить перед вказаним елементом()
// document.body.firstElementChild.after(h1)  //новий елемент ставить після вказаного елементу()

// title.textContent = "Hello Ukraine"  //змінює контент тайтлу


//В JS люба подія починається на on
// title.onclick = function () {
//     alert("Hello app.js")
// }

// title.onclick = function () {
//     alert("Bye-bye app.js")  //друга подія перебиває першу
// }


// title.addEventListener("click", function() {
//     alert("Hello app.js")
// })

// title.addEventListener("click", function(e) {
//     // console.log(e)
//     let target = e.target
//     title.style.color = "white";
//     title.style.backgroundColor = "purple";
//     title.style.padding = "15px"
// })



//Варіант 1
// document.querySelector("button").addEventListener("click", function () { 
//     let imgSrc = document.querySelector("img").getAttribute("src");
//     console.log(imgSrc)
// })

//Варіант 2
let image = document.querySelector("img")

document.querySelector("button").addEventListener("click", function () { 
    let imgSrc = image.getAttribute("src");
    if(imgSrc === "apple.png"){
        image.setAttribute("src", "facebook.png")
    } else {
        image.setAttribute("src", "apple.png")
    }
})