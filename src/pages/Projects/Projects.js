import { Card } from '../../components/Card/Card'
import data from '../../data/data'
import './Projects.css'

export const Projects = () => {
  const main = document.querySelector('main')
  const Projects = document.createElement('section')
  const title = document.createElement('h2')
  Projects.id = 'projects'
  title.textContent = 'My Projects'

  main.append(Projects)
  Projects.append(title)

  data.projects.map((project) => {
    const cardElement = Card(
      project.preview,
      project.title,
      project.description,
      project.link
    )
    Projects.append(cardElement)
  })
}
