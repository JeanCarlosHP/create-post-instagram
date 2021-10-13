const fileImage = document.querySelector('#file-image')

fileImage.addEventListener('input', e => {
  const frase = document.querySelector('#frase').value
  const selectImage = e.target.files[0]

  const reader = new FileReader()

  const img = document.createElement('div')
  img.classList.add('img')
  img.id = 'file'

  reader.onload = e => {
    img.style.backgroundImage = `url(${e.target.result})`
  }

  reader.readAsDataURL(selectImage)

  const p = document.createElement('p')
  p.innerText = frase

  const mask = document.createElement('div')
  mask.classList.add('mask')

  const div = document.createElement('div')

  div.appendChild(p)
  mask.appendChild(div)

  img.appendChild(mask)
  images.appendChild(img)

  images.insertBefore(img, images.firstChild)
  
  downloadImage(img)
})
