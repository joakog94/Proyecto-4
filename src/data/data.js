const data = {
  name: 'Joachim Gómez',
  address: 'Calle Serranos 40, Valencia, Spain',
  email: 'Gomezjoachim94@gmail.com',
  avatar: '/assets/avatar.jpeg',
  aboutMe: `<p><span>Hello 👋🏻</span> <strong><br><br>I'm Joako</strong>, a junior web developer with a degree in Biotechnology and recent training in web development through a bootcamp at the school. My experience in biotechnology has strengthened my analytical and problem-solving skills, which I now apply to web development. I am currently completing a bootcamp in web development, where I have gained knowledge in HTML5, CSS3, and JavaScript, and learned to use modern tools like Vite to optimize my projects.</p>
    <p><br>I am excited to combine my multidisciplinary experience with my new technical skills to contribute to innovative projects. If you're looking for an enthusiastic and dedicated web developer, I’d love to connect with you!</p>`,

  education: {
    degree: 'Bachelor of Biotechnology',
    university: 'Universidad ORT Uruguay',
    graduationYear: 2018,
    relevantCourses: [
      'Frontend Developer',
      'Backend Developer',
      'FullStack Developer'
    ]
  },
  workExperience: [
    {
      position: 'Web Developer Junior - Freelance',
      company: 'Self-employed',
      startDate: 'Semptember 2023',
      endDate: 'Present',
      description:
        'As a freelance web developer, I have worked on creating websites and custom web applications for small businesses and entrepreneurs. My responsibilities include developing responsive interfaces, integrating with external APIs, and optimizing website performance.'
    },
    {
      position: 'Web Developer',
      company: 'StartUp Tech',
      startDate: 'January 2023',
      endDate: 'August 2023',
      description:
        "During my internship at a tech startup, I worked under the supervision of senior developers, collaborating on the creation of landing pages, improving user experience, and updating web content. I participated in the implementation of new features and troubleshooting in the team's projects."
    }
  ],
  skills: [
    '/assets/HTML5-icon.png',
    '/assets/CSS3-icon.png',
    '/assets/javascript-icon.png',
    '/assets/React-icon.png',
    '/assets/node-icon.png',
    '/assets/VS-icon.png',
    '/assets/GitHub-icon.png'
  ],
  projects: [
    {
      title: 'Proyecto 1 - E-commerce Website',
      description:
        'Designed and developed a feature-rich e-commerce platform full responsive, using HTML and CSS3',
      link: 'https://proyecto1-joachim-gomez.netlify.app/',
      preview: '/assets/Proyecto-1.png'
    },
    {
      title: 'Proyecto 2 - E-commerce Website functional',
      description:
        'Designed and developed a feature-rich e-commerce platform full responsive with filters, using HTML, CSS3 and JavaScript',
      link: 'https://proyecto2-joachim-gomez.netlify.app/',
      preview: '/assets/Proyecto-2.png'
    },
    {
      title: 'Proyecto 3 - Pinterest',
      description:
        'Built a indentic copy of Pinterest using the API Unsplash, with a complete usefull search bar, using HTML, CSS3, JavaScript and Vite',
      link: 'https://proyecto-3-joachim-gomez.netlify.app',
      preview: '/assets/Proyecto-3.png'
    }
  ]
}

export default data
