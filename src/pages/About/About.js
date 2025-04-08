import data from '../../data/data'
import './About.css'

export const About = () => {
  const main = document.querySelector('main')
  const About = document.createElement('section')
  const avatar = document.createElement('img')
  const description = document.createElement('p')

  About.id = 'aboutme'
  About.classList = 'reveal-section'
  avatar.src = data.avatar
  description.innerHTML = data.aboutMe
  description.id = 'description'

  main.append(About)
  About.append(avatar)
  About.append(description)
}
