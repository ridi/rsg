/* eslint-disable global-require */

module.exports = (async () => {
  try {
    await require('./converter');
  } catch (err) {
    console.error(err.stack || err);
  }
})();
