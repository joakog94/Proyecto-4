import './Footer.css'

export const Footer = () => {
  const main = document.querySelector('main')
  const Footer = document.createElement('footer')
  const p = document.createElement('p')

  p.innerHTML = 'Designed by<span> Joachim Gómez </span>'

  main.append(Footer)
  Footer.append(p)
}
