const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return members
    .filter(el => typeof(el) === 'string')
    .map(el => el.trim())
    .map(el => el.slice(0, 1))
    .map(el => el.toUpperCase())
    .sort()
    .join('');
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};

const members = ['Olivia', 1111, 'Lily', 'Oscar', true, null];
console.log(members.every(el => typeof(el) === 'string'));