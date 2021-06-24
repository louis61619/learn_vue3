import image from '../images/7bd344074a3c5fa3bc34ba73067a617e.jpeg'

const divEl = document.createElement('div')
divEl.className = "title"
divEl.innerHTML = "Hello Webpack"

const bgEl = document.createElement('div')
bgEl.className = "image-bg"

const imgEl = document.createElement('img')
// imgEl.src = "../images/00a4d6ba-f1f4-44d1-8ee1-e8c3009616b7.png" // 透過字符串沒辦法打包
imgEl.src = image

const iEl = document.createElement('i')
iEl.className = "icofont-angry-monster"

document.body.appendChild(iEl)

document.body.appendChild(imgEl)

document.body.appendChild(bgEl)

document.body.appendChild(divEl)