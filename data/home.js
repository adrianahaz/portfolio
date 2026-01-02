const homeData = {
  about: {
    roles: ['Tech Enthusiast', 'Informatics Engineering Student'],
    name: 'Adrian Ahmad',
    description:
      'Tech enthusiast, creative soul, and constant learner. I love discovering new tech and making something fun out of it.',
    email: 'adrianahmad@example.com',
    avatarImg: '/assets/images/avatar.png',
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
      image: '/assets/images/daily-dua.jpg',
      link: 'https://example.com/project1',
    },
    {
      title: 'Makan Kuy',
      image: '/assets/images/makan-kuy.jpg',
      link: 'https://example.com/project2',
    },
    {
      title: 'Bookshelf API',
      image: '/assets/images/bookshelf-api.jpg',
      link: 'https://example.com/project2',
    },
  ],
  stack: ['HTML', 'CSS', 'JavaScript', 'Svelte', 'Node.js'],
  education: [
    {
      title: 'Informatics Engineering',
      date: 'Sep 2022 - Jun 2025',
    },
    {
      title: 'High School',
      date: 'Sep 2018 - Jun 2022',
    },
  ],
};

export const getAboutData = () => homeData.about;

export const getExperienceData = () => homeData.experience;

export const getProjectsData = () => homeData.projects;

export const getStackData = () => homeData.stack;

export const getEducationData = () => homeData.education;
