/* eslint-disable global-require */

module.exports = async ({
  onBuildStart = () => {},
  onBuildFinish = () => {},
  onBuildError = err => { throw err; },
} = {}) => {
  try {
    onBuildStart();
    await require('./postcss');
    onBuildFinish();
  } catch (err) {
    onBuildError(err);
  }
};
