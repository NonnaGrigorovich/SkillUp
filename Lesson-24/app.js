let button = document.querySelector("button");

function animation() {
    let square = document.querySelector(".square");
    let position = 0;

    let id = setInterval(move, 20);

    function move() {
        if (position === 250) {
            clearInterval(id);
        } else {
            position++;
            square.style.left = position + "px";
            square.style.top = position + "px";
        }
    }
}
button.addEventListener("click", animation);



//try-catch-finally
let test = 10;

try {
    console.log(test);
} catch(e) {
    console.log(e);
} finally {
    console.log("Finally")
};

console.log("Hello world");
let a = 10;
console.log(a);

function bla() {
    console.log(100000);

}
bla();


// JSON

let user = {
    name: "Jack",
    age: 20,
    city: "Kyiv",
    skills: {
        html: 10,
    }
}

let copy = JSON.parse(JSON.stringify(user));
copy.skills.html = "Copy";
copy.name = "Copy";

console.log(copy);
console.log(user);