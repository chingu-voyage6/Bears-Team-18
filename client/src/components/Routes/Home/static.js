const images = {
  'process-01': require('../../../images/homepage/process-01.png'),
  'process-02': require('../../../images/homepage/process-02.png'),
  'process-03': require('../../../images/homepage/process-03.png'),
  'process-04': require('../../../images/homepage/process-04.png'),
  'cohort-01': require('../../../images/homepage/cohort-01.png'),
  'cohort-02': require('../../../images/homepage/cohort-02.png'),
  'cohort-03': require('../../../images/homepage/cohort-03.png'),
  'project-01': require('../../../images/homepage/project-01.jpg'),
  'project-02': require('../../../images/homepage/project-02.jpg'),
  'project-03': require('../../../images/homepage/project-03.jpg'),
  'main-bg-l': require('../../../images/homepage/main-bg-l.png'),
  'main-bg-xl': require('../../../images/homepage/main-bg-xl.png'),
};

const process = [
  {
    title: 'Apply',
    image: images['process-01'],
    description: 'Your adventure starts the moment you decide to join Chingu.',
  },
  {
    title: 'Join A Team',
    image: images['process-02'],
    description: 'Get placed in a team of Chingus eager to learn.',
  },
  {
    title: 'Build',
    image: images['process-03'],
    description:
      'Decide on a project and build it. Practice critical team workflow.',
  },
  {
    title: 'Succeed',
    image: images['process-04'],
    description: 'Get a job, keep building–or do both.',
  },
];

const cohorts = [
  {
    title: 'Voyages',
    image: images['cohort-01'],
    description:
      'Voyages are cohorts of small teams of developers creating a project to build, learn and grow together.',
  },
  {
    title: 'Data Science',
    image: images['cohort-02'],
    description:
      'Data Science cohorts are in development. Register to stay posted on all upcoming features and programs.',
  },
  {
    title: 'Roaming Designer',
    image: images['cohort-03'],
    description:
      'Become a Roaming Designer and put your skills to use in both Voyages and Data Science cohorts.',
  },
];

const projects = [
  {
    title: 'MDNBot',
    image: images['project-01'],
    description:
      'A Slack bot that can search and reference the MDN Web Docs for you.',
  },
  {
    title: 'ChinguSort',
    image: images['project-02'],
    description:
      'A recommendation system for creating optimal learning groups using machine learning.',
  },
  {
    title: 'Code Stories',
    image: images['project-03'],
    description: 'Remix of Humans of New York for the freeCodeCamp community.',
  },
];

export default {
  images,
  process,
  cohorts,
  projects,
};
