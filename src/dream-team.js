const { NotImplementedError } = require('../extensions/index.js');


function createDreamTeam(members) {
  let dreamTeam = []
  let coolName = []
  
  if (!Array.isArray(members)) {
    return false
  } else if (members.length == 0) {
    return null
  }

  for (let j = 0; j < members.length; j++) {
    if (typeof members[j] === 'string') {
      dreamTeam.push(members[j]);
    }
  }

  for (let i = 0; i < dreamTeam.length; i++) {
    coolName.push(dreamTeam[i].trim().slice(0, 1).toUpperCase())
  }

  return coolName.sort().join('')
}
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

module.exports = {
  createDreamTeam
};
