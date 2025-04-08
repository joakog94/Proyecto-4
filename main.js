import { Footer } from './src/components/Footer/Footer'
import Header from './src/components/Header/Header'
import { Selection } from './src/components/Selector/Selector'
import { Skills } from './src/components/Skills/Skills'
import { About } from './src/pages/About/About'
import { Contact } from './src/pages/Contact/Contact'
import { Projects } from './src/pages/Projects/Projects'
import './style.css'

// Agregamos el header manualmente sin reemplazar el body
document.body.insertAdjacentHTML('afterbegin', Header())

const main = document.getElementById('main')

About()
Skills()
Selection()
Projects()
Contact()
Footer()

// Intersection Observer para reveal
const revealSections = document.querySelectorAll('.reveal-section')

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      } else {
        entry.target.classList.remove('visible') // para que se repita el efecto
      }
    })
  },
  {
    threshold: 0.1
  }
)

revealSections.forEach((section) => observer.observe(section))

// Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader')
  loader.style.opacity = '0'
  setTimeout(() => {
    loader.style.display = 'none'
  }, 500)
})
