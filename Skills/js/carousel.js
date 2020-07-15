///////////////////////////// CAROUSEL STRUCTURE
const slideListStructure = document.querySelector(".carousel-slide-list-structure");
const slideStructure = Array.from(slideListStructure.children);
const nextButtonStructure = document.querySelector(".carousel-structure_button-right");
const prevButtonStructure = document.querySelector(".carousel-structure_button-left");
const indicatorNavStructure = document.querySelector(".carousel-structure-nav");
const indicatorsStructure = Array.from(indicatorNavStructure.children);

const slideWidthStructure = slideStructure[0].getBoundingClientRect().width;

/// SLIDES ARRANGE
function setSlidePositionStructure (slideStructure, index) {
    slideStructure.style.left = slideWidthStructure * index + "px";
}

slideStructure.forEach(setSlidePositionStructure);

// FUNCTIONS

function moveToSlideStructure (slideListStructure, currentSlideStructure, targetSlideStructure) {
    slideListStructure.style.transform = "translateX(-" + targetSlideStructure.style.left + ")";
    currentSlideStructure.classList.remove("current-structure-slide");
    targetSlideStructure.classList.add("current-structure-slide");
}

function updateIndicatorsStructure (currentIndicatorStructure, targetIndicatorStructure) {
    currentIndicatorStructure.classList.remove("current-structure-slide");
    targetIndicatorStructure.classList.add("current-structure-slide");
}

function hideShowArrowsStructure (slideStructure, prevButtonStructure, nextButtonStructure, targetIndexStructure) {
    if (targetIndexStructure === 0) {
        prevButtonStructure.classList.add("hidden-structure");
        nextButtonStructure.classList.remove("hidden-structure");
    } else if (targetIndexStructure === slideStructure.length - 1) {
        prevButtonStructure.classList.remove("hidden-structure");
        nextButtonStructure.classList.add("hidden-structure");
    } else {
        prevButtonStructure.classList.remove("hidden-structure");
        nextButtonStructure.classList.remove("hidden-structure");
    }
}

/// LEFT BUTTON
prevButtonStructure.addEventListener("click", movePrevStructure);

function movePrevStructure () {
    const currentSlideStructure = slideListStructure.querySelector(".current-structure-slide");
    const prevSlideStructure = currentSlideStructure.previousElementSibling;
    const currentIndicatorStructure = indicatorNavStructure.querySelector(".current-structure-slide");
    const prevIndicatorStructure = currentIndicatorStructure.previousElementSibling;
    const prevIndexStructure = slideStructure.findIndex(diaspo => diaspo === prevSlideStructure);

    moveToSlideStructure(slideListStructure, currentSlideStructure, prevSlideStructure);
    updateIndicatorsStructure(currentIndicatorStructure, prevIndicatorStructure);
    hideShowArrowsStructure (slideStructure, prevButtonStructure, nextButtonStructure, prevIndexStructure);
};

/// RIGHT BUTTON
nextButtonStructure.addEventListener("click", moveNextStructure);

function moveNextStructure () {
    const currentSlideStructure = slideListStructure.querySelector(".current-structure-slide");
    const nextSlideStructure = currentSlideStructure.nextElementSibling;
    const currentIndicatorStructure = indicatorNavStructure.querySelector(".current-structure-slide");
    const nextIndicatorStructure = currentIndicatorStructure.nextElementSibling;
    const nextIndexStructure = slideStructure.findIndex(diaspo => diaspo === nextSlideStructure);

    moveToSlideStructure(slideListStructure, currentSlideStructure, nextSlideStructure);
    updateIndicatorsStructure(currentIndicatorStructure, nextIndicatorStructure);
    hideShowArrowsStructure (slideStructure, prevButtonStructure, nextButtonStructure, nextIndexStructure);
};

/// NAV INDICATORS

indicatorNavStructure.addEventListener("click", e => {
    const targetIndicatorStructure = e.target.closest("button");
    
    if (!targetIndicatorStructure) return;

    const currentSlideStructure = slideListStructure.querySelector(".current-structure-slide");
    const currentIndicatorStructure = indicatorNavStructure.querySelector(".current-structure-slide");
    const targetIndexStructure = indicatorsStructure.findIndex(punto => punto === targetIndicatorStructure);
    const targetSlideStructure = slideStructure[targetIndexStructure];

    moveToSlideStructure(slideListStructure, currentSlideStructure, targetSlideStructure);
    updateIndicatorsStructure(currentIndicatorStructure, targetIndicatorStructure);
    hideShowArrowsStructure (slideStructure, prevButtonStructure, nextButtonStructure, targetIndexStructure);
});




///////////////////////////// CAROUSEL CODE
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


