/* eslint-disable global-require */

module.exports = (async () => {
  try {
    await require('./icons');
  } catch (err) {
    console.error(err.stack || err);
  }
})();
