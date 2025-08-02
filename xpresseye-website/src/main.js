import './style.css'
import { createHeader } from './components/header.js'
import { createHero } from './components/hero.js'
import { createServices } from './components/services.js'
import { createFooter } from './components/footer.js'

const app = document.querySelector('#app')

app.innerHTML = `
  ${createHeader()}
  ${createHero()}
  ${createServices()}
  ${createFooter()}
`

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    target?.scrollIntoView({ behavior: 'smooth' })
  })
})