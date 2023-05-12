let slideIndex = 0;
slide = document.getElementsByClassName("content");
sliding();

function sliding() {
  for (let i = 0; i < slide.length; i++) {
    if (i === slideIndex) {
      slide[i].style.display = "block";
      slide[i].style.transform = "translateX(0)";
    } else {
      slide[i].style.transform = "translateX(-100%)";
      slide[i].style.display = "none";
    }
  }

  slideIndex++;
  if (slideIndex >= slide.length) {
    slideIndex = 0;
  }

  setTimeout(sliding, 2000);
}




const sliders=document.querySelectorAll(".slide-in")
const appearOptions={
    threshold:0,
    rootMargin:"0px 0px -90px 0px"

}

const appearOnScroll=new IntersectionObserver(
    function (
        entries,
        appearOnScroll){

            entries.forEach(entry=>{
                if (!entry.isIntersecting){
                    return;
                }

                else{
                    entry.target.classList.add("appear")
                    appearOnScroll.unobserve(entry.target)
                }
            })





    },appearOptions)



sliders.forEach(element => {
    appearOnScroll.observe(element)
    
});





document.getElementById("hamburger").addEventListener("click",()=>{
  document.getElementById("mobile-menu").style.transform="translateX(0)"
})



document.getElementById("cross-container").addEventListener("click", () => {
  document.getElementById("mobile-menu").style.transform = "translateX(100%)";
});



const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionContent = header.nextElementSibling;
    const icon = header.querySelector(".icon");
    accordionItem.classList.toggle("active");
    if (accordionItem.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      icon.innerHTML = "-";
    } else {
      accordionContent.style.maxHeight = 0;
      icon.innerHTML = "+";
    }
  });
});


