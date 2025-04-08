const data = {
  name: 'Joachim Gómez',
  address: 'Calle Serranos 40, Valencia, Spain',
  email: 'Gomezjoachim94@gmail.com',
  avatar: '/assets/avatar.jpeg',
  aboutMe: `<p><span>Hello 👋🏻</span> <strong><br><br>I'm Joako</strong>, a passionate web developer with experience in HTML, CSS, JavaScript, and Node.js. I love crafting efficient and scalable solutions, specializing in responsive design and web applications. I am constantly learning and improving my skills to deliver high-quality digital projects.</p>
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
      title: 'E-commerce Website',
      description:
        'Designed and developed a feature-rich e-commerce platform full responsive, using HTML and CSS3',
      link: 'https://proyecto1-joachim-gomez.netlify.app/',
      preview: '/assets/Proyecto-1.png'
    },
    {
      title: 'E-commerce Website functional',
      description:
        'Designed and developed a feature-rich e-commerce platform full responsive with filters, using HTML, CSS3 and JavaScript',
      link: 'https://proyecto2-joachim-gomez.netlify.app/',
      preview: '/assets/Proyecto-2.png'
    },
    {
      title: 'Pinterest',
      description:
        'Built a indentic copy of Pinterest using the API Unsplash, with a complete usefull search bar, using HTML, CSS3, JavaScript and Vite',
      link: 'https://proyecto-3-joachim-gomez.netlify.app',
      preview: '/assets/Proyecto-3.png'
    },
    {
      title: 'Games Hub',
      description:
        'A basic games website featuring Rock, Paper and Scissors, Laser Pick, and Tic-Tac-Toe. Built with HTML, CSS, JavaScript, and Vite.',
      link: 'https://proyecto-5-joachim-gomez.netlify.app',
      preview: '/assets/Proyecto-5.png'
    },
    {
      title: 'API REST',
      description:
        'Backend API built with Node.js, Express, and MongoDB, designed to manage sections and clothing brands. The sections contain multiple brands, which are organized by categories and price.',
      link: 'https://github.com/joakog94/Proyecto-6',
      preview: '/assets/Proyecto-6.png'
    }
  ]
}

export default data
