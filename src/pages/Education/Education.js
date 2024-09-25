import data from '../../data/data'
import './Education.css'

export const Education = () => {
  const main = document.querySelector('main')
  const Education = document.createElement('section')
  const divCarreer = document.createElement('div')
  const h4 = document.createElement('h4')
  const h5 = document.createElement('h5')
  const año = document.createElement('p')
  const divCourses = document.createElement('div')
  for (const course of data.education.relevantCourses) {
    const courseItem = document.createElement('h4')
    const p = document.createElement('p')
    courseItem.textContent = course.toUpperCase()
    p.textContent = '2024'
    divCourses.appendChild(courseItem)
    divCourses.appendChild(p)
  }

  Education.id = 'education'
  divCarreer.id = 'carreer'
  h4.textContent = data.education.degree.toUpperCase()
  h5.textContent = data.education.university
  año.textContent = data.education.graduationYear
  divCourses.id = 'courses'

  main.append(Education)
  Education.appendChild(divCarreer)

  divCarreer.append(h4)
  divCarreer.append(h5)
  divCarreer.append(año)
  Education.appendChild(divCourses)
}
