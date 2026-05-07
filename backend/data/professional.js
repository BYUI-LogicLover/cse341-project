const fs = require('fs');
const path = require('path');

const base64Image = fs
  .readFileSync(path.join(__dirname, 'professionalImage.txt'), 'utf8')
  .replace(/\s+/g, '');

module.exports = {
  professionalName: 'Travis Nelson',
  base64Image,
  nameLink: {
    firstName: 'Travis',
    url: 'https://github.com/BYUI-LogicLover'
  },
  primaryDescription: ' - Student / Developer',
  workDescription1: 'I am a student at BYU-Idaho studying Web Development. I enjoy building applications that solve real problems and learning new technologies along the way.',
  workDescription2: 'Currently focused on backend development with Node.js and Express, while expanding my knowledge of databases, APIs, and full-stack architecture.',
  linkTitleText: 'Links',
  linkedInLink: {
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/'
  },
  githubLink: {
    text: 'GitHub',
    link: 'https://github.com/BYUI-LogicLover'
  }
};
