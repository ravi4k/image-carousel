const imageClassName = "carousel-image"
const indicatorClassName = "indicator-btn"
const images = document.getElementsByClassName(imageClassName)
const indicators = document.getElementsByClassName(indicatorClassName)
const totalImages = images.length
let currentImage = 0

function initializeCarousel() {
  images[currentImage].classList.add("active")
  indicators[currentImage].classList.add("active")
  setEventListeners()
  setInterval(nextImage, 3000)
}

function setEventListeners() {
  let nextBtn = document.getElementsByClassName("carousel-button next")
  let prevBtn = document.getElementsByClassName("carousel-button prev")

  nextBtn[0].addEventListener("click", nextImage)
  prevBtn[0].addEventListener("click", prevImage)

  for (let i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener("click", function () {
      moveToImage(i)
    })
  }
}

function nextImage() {
  let prev = currentImage
  if(currentImage === totalImages - 1) {
    currentImage = 0
  } else {
    ++currentImage
  }
  makeTransition(prev, currentImage)
}

function prevImage() {
  let prev = currentImage
  if(currentImage === 0) {
    currentImage = totalImages - 1
  } else {
    --currentImage
  }
  makeTransition(prev, currentImage)
}

function moveToImage(idx) {
  let prev = currentImage
  currentImage = idx
  makeTransition(prev, currentImage)
}

function makeTransition(prev, curr) {
  indicators[prev].classList.remove("active")
  indicators[curr].classList.add("active")

  images[prev].classList.remove("active")
  images[curr].classList.add("active")
}

initializeCarousel()
