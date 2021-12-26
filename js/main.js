const imageClassName = "carousel-image"
const indicatorClassName = "indicator-btn"
const images = document.getElementsByClassName(imageClassName)
const indicators = document.getElementsByClassName(indicatorClassName)
const totalImages = images.length
let carouselTimer
let currentImage = 0
let inTransition = false

function initializeCarousel() {
  images[totalImages - 1].classList.add("prev")
  images[0].classList.add("active")
  images[1].classList.add("next")

  carouselTimer = setInterval(nextImage, 3000)
  setEventListeners()
}

function setEventListeners() {
  let nextBtn = document.getElementsByClassName("carousel-button next")
  let prevBtn = document.getElementsByClassName("carousel-button prev")

  nextBtn[0].addEventListener("click", function () {
    if(!inTransition) nextImage()
  })
  prevBtn[0].addEventListener("click", function () {
    if(!inTransition) prevImage()
  })
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

function makeTransition(prev, curr) {
  inTransition = true

  clearInterval(carouselTimer)
  carouselTimer = setInterval(nextImage, 3000)

  indicators[prev].classList.remove("active")
  indicators[curr].classList.add("active")

  let oldPrev = prev - 1
  let oldNext = prev + 1
  if(oldPrev < 0)
    oldPrev = totalImages - 1
  if(oldNext >= totalImages)
    oldNext = 0

  images[oldNext].className = imageClassName
  images[oldPrev].className = imageClassName

  let newNext = curr + 1
  let newPrev = curr - 1
  if(newNext >= totalImages)
    newNext = 0
  if(newPrev < 0)
    newPrev = totalImages - 1

  images[newPrev].classList.add("prev")
  images[curr].classList.add("active")
  images[newNext].classList.add("next")
  setTimeout(function (){
    images[prev].classList.remove("active")
    inTransition = false
  }, 1000)
}

initializeCarousel()
