const search = document.querySelector('#search')
let images = document.querySelector('.images')

search.addEventListener('click', () => {
  const text = document.querySelector('#text').value
  const imageSearch = document.querySelector('.image-search').value

  getImageAPI(imageSearch, text)
})

function createPostImg(bgImage, text) {
  images.innerHTML = ''

  for (let i = 0; i < 6; i++) {
    const img = createDiv('img')
    const imagePost = setImgSrc(img, bgImage, i)

    const p = document.createElement('p')
    p.innerText = text

    const mask = createDiv('mask')

    const div = createDiv()

    div.appendChild(p)
    mask.appendChild(div)

    imagePost.appendChild(mask)
    images.appendChild(imagePost)

    downloadImage(imagePost)
  }
}

function createDiv(className) {
  const div = document.createElement('div')
  div.classList.add(className)

  return div
}

function setImgSrc(img, bgImage, id) {
  const imageURL = bgImage.results[id].urls.regular
  img.style.backgroundImage = `url(${imageURL})`

  return img
}

function getImageAPI(imageSearch, text) {
  const page = Math.round(Math.random() * (1000 - 1) + 1)

  fetch(
    `https://api.unsplash.com/search/photos?query=${imageSearch}&page=${page}&client_id=OF9CpiJcdVIMY_ujNi8hrzc2HAr3CvlhBhsmkr6ZtS8`
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (image) {
      createPostImg(image, text)
    })
}

function downloadImage(image) {
  image.addEventListener('click', () => {
    html2canvas(image, {
      useCORS: true,
      allowTaint: true
    }).then(function (canvas) {
      const link = document.createElement('a')

      link.download = 'image.jpg'
      link.href = canvas.toDataURL()
      link.click()
    })
  })
}
