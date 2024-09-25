import { Education } from '../../pages/Education/Education'
import { Experience } from '../../pages/Experiencie/Experience'
import './Selector.css'

export const Selection = () => {
  const main = document.querySelector('main')
  const divSelection = document.createElement('div')
  const a1 = document.createElement('a')
  const a2 = document.createElement('a')

  divSelection.id = 'selection'
  a1.textContent = 'EDUCATION'
  a1.classList = 'education'
  a1.classList.add('selected')
  a2.textContent = 'EXPERIENCE'
  a2.classList = 'experience'

  main.append(divSelection)
  divSelection.append(a1)
  divSelection.append(a2)

  Education()
  Experience()

  const experience = document.querySelector('#experience')
  const education = document.querySelector('#education')

  education.classList.add('show')
  experience.classList.add('not-show')

  a2.addEventListener('click', () => {
    a1.classList.remove('selected')
    a2.classList.add('selected')
    education.classList.add('not-show')
    education.classList.remove('show')
    experience.classList.add('show')
    experience.classList.remove('not-show')
  })

  a1.addEventListener('click', () => {
    a2.classList.remove('selected')
    a1.classList.add('selected')
    experience.classList.add('not-show')
    experience.classList.remove('show')
    education.classList.add('show')
    education.classList.remove('not-show')
  })
}
