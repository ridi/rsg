const { resolve, join } = require('path');
const { tmpdir } = require('os');

const cwd = process.cwd();
const baseDir = resolve(cwd, 'components');
const tempDir = tmpdir();

module.exports = {
  baseDir,
  outputDir: join(baseDir, 'dist'),
  tsconfig: join(baseDir, 'tsconfig.json'),
  cacheRoot: `${tempDir}/.rpt2_cache`,
};
