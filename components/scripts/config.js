const { tmpdir } = require('os');
const path = require('path');

const cwd = process.cwd();
const baseDir = path.resolve(cwd, 'components');
const tempDir = tmpdir();
const modules = [
  'Icon',
  'book',
  'order',
  'popup',
  'Empty',
  'fetch_retry_block',
  'Button',
  'Group',
  'Pagination',
  'CheckBox',
  'TextInput',
  'Textarea',
  'SelectBox',
  'Caution',
];

module.exports = {
  baseDir,
  outputDir: path.join(baseDir, 'dist'),
  tsconfig: path.join(baseDir, 'tsconfig.json'),
  cacheRoot: `${tempDir}/.rpt2_cache`,
  modules,
};
