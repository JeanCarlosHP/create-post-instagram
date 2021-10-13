const textarea = document.querySelector('#textarea')

textarea.addEventListener('input', () => {
  const paragraphs = document.querySelectorAll('.images .img .mask p')

  for (let p of paragraphs) {
    p.innerText = textarea.value
  }
})
