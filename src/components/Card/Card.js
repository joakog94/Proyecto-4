import './Card.css'

export const Card = (preview, title, description, link) => {
  const card = document.createElement('article')
  const img = document.createElement('img')
  const h4 = document.createElement('h4')
  const p = document.createElement('p')
  const a = document.createElement('a')

  card.classList = 'card'
  img.src = preview
  h4.textContent = title
  p.textContent = description
  a.textContent = 'View Project'
  a.href = link
  a.target = '_blank'

  card.append(img)
  card.append(h4)
  card.append(p)
  card.append(a)

  return card
}
