const filterContainer = document.querySelector(".gallery-filter"),
    galleryItems = document.querySelectorAll(".lightbox");

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")) {
        //deactivate active state
        filterContainer.querySelector(".active").classList.remove("active");
        //activate new 
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        galleryItems.forEach((item) => {
            if (item.classList.contains(filterValue) || filterValue === 'all') {
                item.classList.add("show");
                item.classList.remove("hide")
            } else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        })
    }
})
//lightbox Single Portfolio Dependence
var tobii = new Tobii();