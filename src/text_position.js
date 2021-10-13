const select = document.querySelector('#text-position')
const search = document.querySelector('#search')

select.addEventListener('change', setPosition)
search.addEventListener('click', setPosition)

function setPosition() {
  const masks = document.querySelectorAll('.images .img .mask')
  const selectValue = document.querySelector('#text-position')
  const option = selectValue.value
  console.log(option)

  for (let mask of masks) {
    const position = getPositionSelect(option)
    mask.style.placeItems = position
  }
}

function getPositionSelect(option) {
  const options = {
    superiorEsquerdo: {
      position: 'start start'
    },

    superiorCentro: {
      position: 'start center'
    },

    superiorDireito: {
      position: 'start end'
    },

    centroEsquerdo: {
      position: 'center start'
    },

    centro: {
      position: 'center'
    },

    centroDireito: {
      position: 'center end'
    },

    inferiorEsquerdo: {
      position: 'end start'
    },

    inferiorCentro: {
      position: 'end center'
    },

    inferiorDireito: {
      position: 'end'
    }
  }

  return options[option].position
}
