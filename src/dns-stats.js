const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let countDNS = {};

  for (let domain of domains) {
    let subdomains = domain.split(".").reverse();
    let dnsKey = "";

    for (let subdomain of subdomains ) {
      dnsKey = dnsKey + "." + subdomain;
      countDNS[dnsKey] = (countDNS[dnsKey] || 0) + 1;
    }
  }
}

module.exports = {
  getDNSStats
};
