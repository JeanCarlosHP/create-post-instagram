const textColor = document.querySelector('#text-color')
const textFontSize = document.querySelector('#text-font-size')
const textLineHeight = document.querySelector('#text-line-height')

textColor.addEventListener('input', setColor)
textFontSize.addEventListener('input', setFontSize)
textLineHeight.addEventListener('input', setLineHeight)

function setColor() {
  const texts = document.querySelectorAll('.images .img .mask p')
  const color = textColor.value

  for (text of texts) {
    text.style.color = color
  }
}

function setFontSize() {
  const texts = document.querySelectorAll('.images .img .mask p')
  const fontSizeValue = textFontSize.value

  for (text of texts) {
    text.style.fontSize = `${fontSizeValue}px`
  }
}

function setLineHeight() {
  const texts = document.querySelectorAll('.images .img .mask p')
  const lineHeightValue = textLineHeight.value / 10

  for (text of texts) {
    text.style.lineHeight = lineHeightValue
  }
}
