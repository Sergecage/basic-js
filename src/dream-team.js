const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
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
};
