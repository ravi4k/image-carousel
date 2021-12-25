const imageClassName = "carousel-image"
const images = document.getElementsByClassName(imageClassName);
const totalImages = images.length
let currentImage = 0

function initializeCarousel() {
  setActive(currentImage)
  setEventListeners()
}

function setEventListeners() {
  let nextBtn = document.getElementsByClassName("carousel-button next")
  let prevBtn = document.getElementsByClassName("carousel-button prev")

  nextBtn[0].addEventListener("click", nextImage)
  prevBtn[0].addEventListener("click", prevImage)
}

function setInactive(imageIdx) {
  images[imageIdx].classList.remove("active")
}

function setActive(imageIdx) {
  images[imageIdx].classList.add("active")
}

function nextImage() {
  setInactive(currentImage)
  if(currentImage === totalImages - 1) {
    currentImage = 0
  } else {
    ++currentImage
  }
  setActive(currentImage)
}

function prevImage() {
  setInactive(currentImage)
  if(currentImage === 0) {
    currentImage = totalImages - 1
  } else {
    --currentImage
  }
  setActive(currentImage)
}

initializeCarousel()
