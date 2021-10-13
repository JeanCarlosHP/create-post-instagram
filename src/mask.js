const colorMask = document.querySelector('#mask-color')
const opacityMask = document.querySelector('#mask-opacity')

colorMask.addEventListener('input', adjustMask)

opacityMask.addEventListener('input', adjustMask)

function adjustMask() {
  const masks = document.querySelectorAll('.mask')

  const hexColor = colorMask.value

  const opacity = opacityMask.value / 100
  const hexOpacity = opacity.toString(16).replace('0.', '').slice(0, 2)

  for (let mask of masks) {
    mask.style.backgroundColor = `${hexColor}${hexOpacity}`
  }
}
