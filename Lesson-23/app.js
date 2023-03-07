let tabsWrap = document.querySelector(".tab-title-wrap");
let tabItems = document.querySelectorAll(".tab-title-item");
let tabsContent = document.querySelectorAll(".tab-content");

function hideTabsContent() {
    tabsContent.forEach((item) => item.classList.add("hide"));
    tabItems.forEach((item) => item.classList.remove("tab-active"))
}

function showTabContent(i = 0) {
    tabsContent[i].classList.add("show");
    tabsContent[i].classList.remove("hide");
    tabItems[i].classList.add("tab-active")
}

hideTabsContent();
showTabContent();

tabsWrap.addEventListener("click", function(e) {
    let target = e.target;

    if(target.classList.contains("tab-title-item")) {
        tabItems.forEach((item, i) => {
            if (item === target) {
                hideTabsContent();
                showTabContent(i);
            }
        });
    }
});