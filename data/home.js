const homeData = {
  about: {
    roles: ['Tech Enthusiast', 'Informatics Engineering Student'],
    name: 'Adrian Ahmad',
    description:
      'Tech enthusiast, creative soul, and constant learner. I love discovering new tech and making something fun out of it.',
    email: 'adrianahmad@example.com',
    avatarImg: './assets/images/avatar.png',
  },
  experience: [
    {
      title: 'IT Support',
      date: 'May 2024 - Jun 2025',
    },
    {
      title: 'IT Support Intern',
      date: 'Sep 2022 - Aug 2023',
    },
    {
      title: 'IT Intern',
      date: 'Feb 2022 - Apr 2022',
    },
  ],
  projects: [
    {
      title: 'Daily Dua',
      image: './assets/images/daily-dua.jpg',
      link: 'https://daily-dua-omega.vercel.app/',
      repo: 'https://github.com/adrianahaz/daily-dua',
    },
    {
      title: 'Makan Kuy',
      image: './assets/images/makan-kuy.jpg',
      link: 'https://makankuy-restaurant-app.netlify.app/',
      repo: 'https://github.com/adrianahaz/restaurant-app-dicoding',
    },
    {
      title: 'Bookshelf API',
      image: './assets/images/bookshelf-api.jpg',
      link: 'https://github.com/adrianahaz/nodejs-bookshelf-api',
      repo: 'https://github.com/adrianahaz/nodejs-bookshelf-api',
    },
  ],
  stack: ['HTML', 'CSS', 'JavaScript', 'Svelte', 'Node.js'],
  education: [
    {
      title: 'Informatics Engineering',
      institution: 'Universitas Pamulang',
      date: 'Aug 2023 - Now',
    },
    {
      title: 'Computer Network Engineering',
      institution: 'SMKS Prima Unggul',
      date: 'Jun 2020 - Jul 2023',
    },
  ],
};

export const getAboutData = () => homeData.about;

export const getExperienceData = () => homeData.experience;

export const getProjectsData = () => homeData.projects;

export const getStackData = () => homeData.stack;

export const getEducationData = () => homeData.education;
