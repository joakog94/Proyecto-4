import './Contact.css'
import emailjs from 'emailjs-com'

export const Contact = () => {
  const main = document.querySelector('main')
  const Contact = document.createElement('section')
  const h3 = document.createElement('h3')
  Contact.id = 'contact'

  Contact.innerHTML = `
    <div>
    <h3>Let's build something <span>cool</span> together</h3>
    <h5>If you’re looking to build a beautiful website, develop a web application, or need skilled support for your software development team, let’s talk!</h5>
    </div>
    <form id="contactForm">
  
      <input type="text" id="name" placeholder="Your name" required>
      <input type="email" id="email" placeholder="Your email" required>
      <textarea id="message" placeholder="Your message" required></textarea>
      <button type="submit">Submit</button>
    </form>
  `
  main.appendChild(Contact)

  const form = document.getElementById('contactForm')
  form.addEventListener('submit', (event) => {
    event.preventDefault()

    emailjs
      .sendForm(
        'service_b8btg1v',
        'template_mmbcolv',
        form,
        'NDyy0w2WgQxOJO8eP'
      )
      .then(
        () => {
          alert('Email sent successfully!')
        },
        (error) => {
          alert('Error sending email: ' + error.text)
        }
      )
  })
}
