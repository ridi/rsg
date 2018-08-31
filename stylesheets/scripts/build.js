/* eslint-disable global-require */

module.exports = (async () => {
  try {
    await require('./postcss');
  } catch (err) {
    console.error(err.stack || err);
  }
})();
