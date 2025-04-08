import { Card } from '../../components/Card/Card'
import data from '../../data/data'
import './Projects.css'

export const Projects = () => {
  const main = document.querySelector('main')
  const Projects = document.createElement('section')
  const title = document.createElement('h2')
  Projects.id = 'projects'
  title.textContent = 'My Projects'

  Projects.append(title)

  // Verificamos que hay proyectos
  console.log(data.projects) // 👈 esto debería mostrarte los proyectos

  data.projects.forEach((project) => {
    const cardElement = Card(
      project.preview,
      project.title,
      project.description,
      project.link
    )
    Projects.append(cardElement)
  })

  main.append(Projects)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        } else {
          entry.target.classList.remove('visible')
        }
      })
    },
    {
      threshold: 0.1
    }
  )

  document.querySelectorAll('.card').forEach((card) => {
    observer.observe(card)
  })
}
