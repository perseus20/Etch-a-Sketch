const container = document.querySelector('.container')
const row = document.querySelector('.row')
const buttonClean = document.querySelector('.clean-up')
const buttonErase = document.querySelector('.erase')
const buttonRainBow = document.querySelector('.rain-bow')
const buttonNormal = document.querySelector('.normal')
const inputRange = document.querySelector('.input-range')
const range = document.querySelector('label')

range.textContent = 16

const size = 600
const colorRange = [
  'black',
  'white',
  'orange',
  'red',
  'blue',
  'purple',
  'yellow',
  'limegreen',
  'pink',
]
let color = 0

function getSize(square) {
  return size / square
}

function reSize() {
  const divs = container.childNodes
  let len = divs.length
  for (let i = 0; i < len; i++) {
    divs[0].remove()
  }
}

function makeSquare(square = 16) {
  for (let i = 0; i < square ** 2; i++) {
    const div = document.createElement('div')

    div.classList.add('pixel')
    div.classList.add(`${i}`)
    div.style.width = `${getSize(square)}px`
    div.style.height = `${getSize(square)}px`
    div.addEventListener('mouseenter', draw)
    container.appendChild(div)
  }
  container.style.gridTemplateColumns = `repeat(${square},1fr)`
  container.style.gridTemplateRows = `repeat(${square},1fr)`
}

function draw() {
  if (color === 0) this.style.backgroundColor = `${colorRange[color]}`
  if (color === 1) this.style.backgroundColor = `${colorRange[color]}`
  if (color === -1) this.style.backgroundColor = `${colorRange[randomColor()]}`
}

function cleanUp() {
  const divs = container.childNodes
  divs.forEach((div) => {
    div.style.backgroundColor = 'white'
  })
}

function randomColor() {
  let random = Math.floor(Math.random() * colorRange.length) + 2
  return random
}

function erase() {
  color = 1
}

function rainBow() {
  color = -1
}

function normal() {
  color = 0
}

buttonClean.addEventListener('click', (e) => {
  cleanUp()
})

buttonErase.addEventListener('click', (e) => {
  erase()
})

buttonRainBow.addEventListener('click', (e) => {
  rainBow()
})

buttonNormal.addEventListener('click', (e) => {
  normal()
})

inputRange.addEventListener('change', () => {
  range.textContent = inputRange.value
  reSize()
  makeSquare(inputRange.value)
})

makeSquare()
