const select = document.querySelector('#text-position')

select.addEventListener('change', e => {
  const option = e.target.value
  const masks = document.querySelectorAll('.images .img .mask')

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

  for (let mask of masks) {
    const position = options[option].position
    mask.style.placeItems = position
  }
})
