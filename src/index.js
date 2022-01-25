import main from './main'
import './style.css'
import logo from './webpack.png'

const header = document.querySelector(".header");
const log = document.querySelector(".logo");
header.textContent = 'Hello Webpack!'
log.style.backgroundImage = `url(${logo})`
