import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Alan Bravo',
  subtitle: 'JS Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'IMG20210227175035 (1)',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Captura de pantalla (9)',
    title: 'Chore Door',
    info: 'this is a fun and interactive game developed using  CSS, HTML and JavaScript. the objective is to open all of the doors without running into the ChoreBot. If you manage to avoid the ChoreBot until the very last door, you win! ',
    info2: '',
    url: '',
    repo: 'https://github.com/Alan006-s/Robot', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Captura de pantalla (5)',
    title: ' Weather app',
    info: 'Weather App With JavaScript (ES6) , Bootstrap and a API from OpenWeatherMap.org',
    info2: '',
    url: '',
    repo: 'https://github.com/Alan006-s/Weather-app/tree/main/Weather-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Captura de pantalla (7)',
    title: 'Calculator',
    info: 'Calculator Using CSS, HTML, JavaScript.',
    info2: '',
    url: '',
    repo: 'https://github.com/Alan006-s/Calculator/tree/main/Calculator', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/alan-bravo-8711a4151/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Alan006-s',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
