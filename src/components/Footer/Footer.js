import './Footer.css'

export const Footer = () => {
  const main = document.querySelector('main')
  const footer = document.createElement('footer')
  const p = document.createElement('p')
  const linkedinLink = document.createElement('a')
  const githubLink = document.createElement('a')

  // Agregar texto en el footer
  p.innerHTML = 'Designed by <span>Joachim Gómez</span>'

  // Crear enlaces
  linkedinLink.href =
    'https://www.linkedin.com/in/joachim-g%C3%B3mez-507770280/' // Cambia el enlace por el correcto
  linkedinLink.textContent = 'LinkedIn'
  linkedinLink.target = '_blank'

  githubLink.href = 'https://github.com/joakog94' // Cambia el enlace por el correcto
  githubLink.textContent = 'GitHub'
  githubLink.target = '_blank'

  // Crear contenedor para los enlaces de redes sociales
  const socialLinks = document.createElement('div')
  socialLinks.classList.add('social-links')

  // Agregar los enlaces al contenedor
  socialLinks.appendChild(linkedinLink)
  socialLinks.appendChild(githubLink)

  // Agregar el párrafo y los enlaces al footer
  footer.append(p)
  footer.append(socialLinks)

  main.append(footer)
}
