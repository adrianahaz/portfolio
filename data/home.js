const homeData = {
  about: {
    roles: ['Tech Enthusiast', 'Informatics Engineering Student'],
    name: 'Adrian Ahmad',
    description:
      'I am a passionate developer with a strong interest in technology and innovation.',
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
};

export const getAboutData = () => homeData.about;

export const getExperienceData = () => homeData.experience;
