///////////////////////////// CAROUSEL 
const slideList = document.querySelector(".carousel-slide-list");
const slide = Array.from(slideList.children);
const nextButton = document.querySelector(".carousel_button-right");
const prevButton = document.querySelector(".carousel_button-left");
const indicatorNav = document.querySelector(".carousel-nav");
const indicators = Array.from(indicatorNav.children);

const slideWidth = slide[0].getBoundingClientRect().width;

/// SLIDES ARRANGE
function setSlidePosition (slide, index) {
    slide.style.left = slideWidth * index + "px";
}

slide.forEach(setSlidePosition);

// FUNCTIONS

function moveToSlide (slideList, currentSlide, targetSlide) {
    slideList.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}

function updateIndicators (currentIndicator, targetIndicator) {
    currentIndicator.classList.remove("current-slide");
    targetIndicator.classList.add("current-slide");
}

function hideShowArrows (slide, prevButton, nextButton, targetIndex) {
    if (targetIndex === 0) {
        prevButton.classList.add("hidden");
        nextButton.classList.remove("hidden");
    } else if (targetIndex === slide.length - 1) {
        prevButton.classList.remove("hidden");
        nextButton.classList.add("hidden");
    } else {
        prevButton.classList.remove("hidden");
        nextButton.classList.remove("hidden");
    }
}

/// LEFT BUTTON
prevButton.addEventListener("click", movePrev);

function movePrev () {
    const currentSlide = slideList.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const currentIndicator = indicatorNav.querySelector(".current-slide");
    const prevIndicator = currentIndicator.previousElementSibling;
    const prevIndex = slide.findIndex(diaspo => diaspo === prevSlide);

    moveToSlide(slideList, currentSlide, prevSlide);
    updateIndicators(currentIndicator, prevIndicator);
    hideShowArrows (slide, prevButton, nextButton, prevIndex);
};

/// RIGHT BUTTON
nextButton.addEventListener("click", moveNext);

function moveNext () {
    const currentSlide = slideList.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const currentIndicator = indicatorNav.querySelector(".current-slide");
    const nextIndicator = currentIndicator.nextElementSibling;
    const nextIndex = slide.findIndex(diaspo => diaspo === nextSlide);

    moveToSlide(slideList, currentSlide, nextSlide);
    updateIndicators(currentIndicator, nextIndicator);
    hideShowArrows (slide, prevButton, nextButton, nextIndex);
};

/// NAV INDICATORS

indicatorNav.addEventListener("click", e => {
    const targetIndicator = e.target.closest("button");
    
    if (!targetIndicator) return;

    const currentSlide = slideList.querySelector(".current-slide");
    const currentIndicator = indicatorNav.querySelector(".current-slide");
    const targetIndex = indicators.findIndex(punto => punto === targetIndicator);
    const targetSlide = slide[targetIndex];

    moveToSlide(slideList, currentSlide, targetSlide);
    updateIndicators(currentIndicator, targetIndicator);
    hideShowArrows (slide, prevButton, nextButton, targetIndex);
});