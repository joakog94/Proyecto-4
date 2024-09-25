import './Skills.css'

const images = [
  '/assets/skills/CSS3-icon.png',
  '/assets/skills/HTML5-icon.png',
  '/assets/skills/javascript-icon.png',
  '/assets/skills/VS-icon.png',
  '/assets/skills/GitHub-icon.png',
  '/assets/skills/node-icon.png',
  '/assets/skills/React-icon.png'
]

export const Skills = () => {
  const main = document.querySelector('main')
  const divH3 = document.createElement('div')
  const h3 = document.createElement('h3')
  const divSkills = document.createElement('div')

  divH3.classList = 'titulo'
  h3.textContent = 'My Skills'
  h3.classList = 'underline-effect'
  divSkills.id = 'skills'

  main.append(divH3)
  main.append(divSkills)
  divH3.append(h3)

  for (const image of images) {
    const skill = document.createElement('img')
    skill.src = image
    divSkills.append(skill)
  }
}
