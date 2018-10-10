const { tmpdir } = require('os');
const path = require('path');

const cwd = process.cwd();
const baseDir = path.resolve(cwd, 'components');
const tempDir = tmpdir();
const modules = [
  'Icon',
  'book',
  'Order',
  'popup',
  'Empty',
  'fetch_retry_block',
  'Button',
  'Group',
  'Pagination',
  'CheckBox',
  'Radio',
  'Tabs',
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
