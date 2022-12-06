const container = document.querySelector('.container')
const row = document.querySelector('.row')
const buttonClean = document.querySelector('.clean-up')
const inputRange = document.querySelector('.input-range')

const size = 600
let clear = 0

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

function draw(e) {
  if (clear) div.style.backgroundColor = 'white'
  else this.style.backgroundColor = 'black'
}

function cleanUp() {
  const divs = container.childNodes
  divs.forEach((div) => {
    div.style.backgroundColor = 'white'
  })
}

buttonClean.addEventListener('click', (e) => {
  cleanUp()
})

inputRange.addEventListener('change', () => {
  reSize()
  console.log(inputRange.value)
  makeSquare(inputRange.value)
})

makeSquare(51)
