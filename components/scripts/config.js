const fs = require('fs');
const { tmpdir } = require('os');
const path = require('path');

const cwd = process.cwd();
const baseDir = path.resolve(cwd, 'components');
const tempDir = tmpdir();
const modules = fs.readdirSync(path.join(baseDir, 'src/'));

module.exports = {
  baseDir,
  outputDir: path.join(baseDir, 'dist'),
  tsconfig: path.join(baseDir, 'tsconfig.json'),
  cacheRoot: `${tempDir}/.rpt2_cache`,
  modules,
};
