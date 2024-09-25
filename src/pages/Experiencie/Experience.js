import data from '../../data/data'
import './Experience.css'

export const Experience = () => {
  const main = document.querySelector('main')
  const Experience = document.createElement('section')
  for (const experiencie of data.workExperience) {
    const div = document.createElement('div')
    const h4 = document.createElement('h4')
    const h5 = document.createElement('h5')
    const h6 = document.createElement('h6')
    const description = document.createElement('p')

    h4.textContent = experiencie.position
    h5.textContent = experiencie.company
    h6.textContent = experiencie.startDate + ' - ' + experiencie.endDate
    description.textContent = experiencie.description

    Experience.append(div)
    div.append(h4)
    div.append(h5)
    div.append(h6)
    div.append(description)
  }

  Experience.id = 'experience'

  main.append(Experience)
}
