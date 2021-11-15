window.onload = () => {
    const openMobileMenuBtn = document.querySelector("#openMobileMenu");
    const mobileMenu = document.querySelector("#mobileMenu");

    const iconOpen = openMobileMenuBtn.querySelector(".icon-open");
    const iconClose = openMobileMenuBtn.querySelector(".icon-close");
    
    openMobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        
        iconOpen.classList.toggle("hidden");
        iconClose.classList.toggle("hidden");
    })
}