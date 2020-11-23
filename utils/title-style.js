const remarkCapitalize = require('remark-capitalize');

const excludedWords = [
  'is',
  'in',
  'on',
  'About',
  'IT',
  'CERN',
  'USA',
  'IBM',
  'PowerAI',
  'PowerVC',
  'Follow-on',
  'GPU'
];

module.exports = remarkCapitalize({
  special: excludedWords
});
