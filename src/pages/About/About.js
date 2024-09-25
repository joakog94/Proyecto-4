import data from '../../data/data'
import './About.css'

export const About = () => {
  const main = document.createElement('main')
  const About = document.createElement('section')
  const avatar = document.createElement('img')
  const description = document.createElement('p')

  About.id = 'aboutme'
  avatar.src = data.avatar
  description.innerHTML = data.aboutMe
  description.id = 'description'

  document.body.append(main)
  main.append(About)
  About.append(avatar)
  About.append(description)
}
