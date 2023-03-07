
// add to cart
// let productsCountEL = document.getElementById("products-count")  ;
let productsCountEL = document.querySelector("#products-count")  ;

let addToCartBtns = document.querySelectorAll(".btn-add-to-cart")   ;

console.log(productsCountEL)
console.log(addToCartBtns)

// Варіант 1
// for (let i = 0; i < addToCartBtns.length; i++){
//     addToCartBtns[i].addEventListener("click", function () {
//         console.log("clicked")
//     });
// }

// Варіант 2
addToCartBtns.forEach( (btn)  =>
    btn.addEventListener("click", function() {
        // let prevProductsCount =+productsCountEL.textContent;
        // productsCountEL.textContent = prevProductsCount + 1;
        productsCountEL.textContent =+productsCountEL.textContent + 1;
         
    })
);


// change like state
let likeBtns = document.querySelectorAll(".like-btn")
console.log(likeBtns);

likeBtns.forEach((item) => item.addEventListener("click", function() {
    // --- V1 ---
    // if(item.classList.contains("liked")) {
    //     item.classList.remove("liked");
    // } else {
    //     item.classList.add("liked")
    // }

    // --- V2 ---
    item.classList.toggle("liked");
}))



// modal
let moreDetailsBtns = document.querySelectorAll(".btn-more-details")
let modal = document.querySelector(".modal")
let btnClose = document.querySelector(".btn-wrap")


moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal))

btnClose.addEventListener("click", closeModal)

function openModal(){
    modal.classList.add("show")
    modal.classList.remove("hide")
}

function closeModal() {
    modal.classList.add("hide")
    modal.classList.remove("show")
    
}

modal.addEventListener("click", function(e) {
    // console.log(e);
    // console.log(e.target)
    if(e.target === modal) {
        closeModal();
    }
})

function showModalByScroll() {
    if(window.scrolly >= document.body.scrollHeight / 2){
        openModal();
        window.removeEventListener("scroll", showModalByScroll)
    }
}

// setTimeout(openModal, 5000)
// window.addEventListener("scroll", showModalByScroll)

// moreDetailsBtns.forEach((item) => item.addEventListener("click", function() {
//     console.log("clicked")
// }))



// Slick
$(".slider-block").slick({
    autoplay: true,
    dots: true,
})


//AOS.init();
const decrementBtns = document.querySelectorAll(".decrement-button")[0];
const incrementBtns = document.querySelectorAll(".increment-button")[0];
const productsInput = document.querySelectorAll(".product-quantity input")[0];

function Counter(incrementBtn, decrementBtn, inputField) {
    this.domRefs = {
        incrementBtn,
        decrementBtn,
        inputField,
    };
    this.toggleButtonState = function () {
        let count = this.domRefs.inputField.value;
        this.domRefs.decrementBtn.disabled = count <= 1;
        this.domRefs.incrementBtn.disabled = count >= 10;
    };
    this.toggleButtonState();
    this.increment = function() {
        this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
        this.toggleButtonState();
    };
    this.decrement = function() {
        this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
        this.toggleButtonState();
    };

    this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));
    this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));
}

const counter1 = new Counter(incrementBtns, decrementBtns, productsInput);
console.log(counter1);